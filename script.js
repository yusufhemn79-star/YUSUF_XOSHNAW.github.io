/* =========================================================
   YUSUF ANIME
   Main Application
   Jikan API
========================================================= */

"use strict";

const API_BASE = "https://api.jikan.moe/v4";

let animeData = [];
let favorites = JSON.parse(localStorage.getItem("yusufAnimeFavorites") || "[]");
let currentAnime = null;


/* =========================================================
   DOM
========================================================= */

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);


/* =========================================================
   API
========================================================= */

async function apiFetch(endpoint) {
  try {
    const response = await fetch(`${API_BASE}${endpoint}`);

    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`);
    }

    const result = await response.json();

    return result.data || [];

  } catch (error) {
    console.error("API Error:", error);
    showToast("Could not load anime. Please try again.");
    return [];
  }
}


/* =========================================================
   LOAD ANIME
========================================================= */

async function loadAnime() {

  showLoader();

  const [trending, latest, topRated] = await Promise.all([
    apiFetch("/top/anime?limit=12"),
    apiFetch("/seasons/now?limit=12"),
    apiFetch("/top/anime?limit=12&filter=airing")
  ]);

  animeData = [
    ...trending,
    ...latest,
    ...topRated
  ].filter(
    (anime, index, self) =>
      index === self.findIndex(item => item.mal_id === anime.mal_id)
  );

  renderAnimeGrid("#trendingGrid", trending);
  renderAnimeGrid("#latestGrid", latest);
  renderAnimeGrid("#topRatedGrid", topRated);

  updateStats();

  hideLoader();
}


/* =========================================================
   ANIME CARD
========================================================= */

function createAnimeCard(anime) {

  const image =
    anime.images?.jpg?.large_image_url ||
    anime.images?.jpg?.image_url ||
    "";

  const title =
    anime.title ||
    anime.title_english ||
    "Unknown Anime";

  const score =
    anime.score ||
    "N/A";

  const episodes =
    anime.episodes ||
    "?";

  const isFavorite =
    favorites.includes(anime.mal_id);

  return `
    <article class="anime-card" data-anime-id="${anime.mal_id}">

      <div class="anime-card-image">

        <img
          src="${image}"
          alt="${escapeHTML(title)}"
          loading="lazy"
        >

        <div class="anime-card-overlay">

          <button
            class="anime-play-button"
            type="button"
            onclick="openAnimeDetails(${anime.mal_id})"
          >
            ▶
          </button>

        </div>

        <button
          class="anime-favorite-button ${isFavorite ? "active" : ""}"
          type="button"
          onclick="toggleFavorite(${anime.mal_id}, event)"
          aria-label="Favorite"
        >
          ${isFavorite ? "❤️" : "♡"}
        </button>

      </div>


      <div class="anime-card-content">

        <h3>
          ${escapeHTML(title)}
        </h3>

        <div class="anime-card-meta">

          <span>
            ⭐ ${score}
          </span>

          <span>
            🎬 ${episodes} Episodes
          </span>

        </div>

      </div>

    </article>
  `;
}


/* =========================================================
   RENDER GRID
========================================================= */

function renderAnimeGrid(selector, animeList) {

  const container = $(selector);

  if (!container) return;

  if (!animeList || animeList.length === 0) {

    container.innerHTML = `
      <div class="empty-state">
        <span>🎬</span>
        <h3>No Anime Found</h3>
        <p>Try again later.</p>
      </div>
    `;

    return;
  }

  container.innerHTML =
    animeList
      .map(anime => createAnimeCard(anime))
      .join("");
}


/* =========================================================
   DETAILS
========================================================= */

async function openAnimeDetails(id) {

  const modal = $("#animeDetailsModal");

  if (!modal) return;

  modal.classList.add("active");
  modal.setAttribute("aria-hidden", "false");

  document.body.classList.add("modal-open");

  const anime = await apiFetch(`/anime/${id}/full`);

  if (!anime || !anime.mal_id) {
    showToast("Anime information could not be loaded.");
    return;
  }

  currentAnime = anime;

  const banner = $("#detailsBanner");
  const poster = $("#detailsPoster");
  const title = $("#detailsTitle");
  const type = $("#detailsType");
  const meta = $("#detailsMeta");
  const genres = $("#detailsGenres");
  const description = $("#detailsDescription");

  if (banner) {

    banner.style.backgroundImage =
      `url("${anime.images?.jpg?.large_image_url || ""}")`;

  }

  if (poster) {

    poster.innerHTML = `
      <img
        src="${anime.images?.jpg?.large_image_url || ""}"
        alt="${escapeHTML(anime.title)}"
      >
    `;

  }

  if (title) {
    title.textContent = anime.title || "Unknown Anime";
  }

  if (type) {
    type.textContent = anime.type || "TV";
  }

  if (meta) {

    meta.innerHTML = `
      <span>⭐ ${anime.score || "N/A"}</span>
      <span>🎬 ${anime.episodes || "?"} Episodes</span>
      <span>📅 ${anime.year || "Unknown"}</span>
      <span>📺 ${anime.status || "Unknown"}</span>
    `;

  }

  if (genres) {

    genres.innerHTML =
      (anime.genres || [])
        .map(genre => `<span>${escapeHTML(genre.name)}</span>`)
        .join("");

  }

  if (description) {

    description.textContent =
      anime.synopsis ||
      "No description available.";

  }

  updateFavoriteButton();

  await loadEpisodes(anime.mal_id);

}


/* =========================================================
   CLOSE DETAILS
========================================================= */

function closeAnimeDetails() {

  const modal = $("#animeDetailsModal");

  if (!modal) return;

  modal.classList.remove("active");
  modal.setAttribute("aria-hidden", "true");

  document.body.classList.remove("modal-open");

  currentAnime = null;
}


/* =========================================================
   EPISODES
========================================================= */

async function loadEpisodes(id) {

  const grid = $("#detailsEpisodeGrid");

  if (!grid) return;

  grid.innerHTML = `
    <div class="loading-episodes">
      Loading episodes...
    </div>
  `;

  const episodes = await apiFetch(
    `/anime/${id}/episodes?limit=100`
  );

  if (!episodes.length) {

    grid.innerHTML = `
      <div class="empty-state">
        <span>🎬</span>
        <h3>No episodes available</h3>
      </div>
    `;

    return;
  }

  grid.innerHTML = episodes
    .map(episode => {

      return `
        <button
          class="episode-card"
          type="button"
          onclick="playEpisode(${id}, ${episode.mal_id}, '${escapeHTML(episode.title || `Episode ${episode.mal_id}`)}')"
        >

          <strong>
            EP ${episode.mal_id}
          </strong>

          <span>
            ${escapeHTML(
              episode.title || `Episode ${episode.mal_id}`
            )}
          </span>

        </button>
      `;

    })
    .join("");
}


/* =========================================================
   PLAY EPISODE
========================================================= */

function playEpisode(animeId, episodeId, episodeTitle) {

  showToast(
    `Episode ${episodeId}: ${episodeTitle}`
  );

  /*
    This is where we will connect the real
    video player later.

    For now the anime information works,
    but video streaming is NOT connected yet.
  */
}


/* =========================================================
   FAVORITES
========================================================= */

function toggleFavorite(id, event) {

  if (event) {
    event.stopPropagation();
  }

  if (favorites.includes(id)) {

    favorites =
      favorites.filter(item => item !== id);

    showToast("Removed from favorites.");

  } else {

    favorites.push(id);

    showToast("Added to favorites ❤️");

  }

  localStorage.setItem(
    "yusufAnimeFavorites",
    JSON.stringify(favorites)
  );

  updateFavoriteCount();

  renderFavorites();

  if (currentAnime?.mal_id === id) {
    updateFavoriteButton();
  }

  refreshCards();
}


/* =========================================================
   FAVORITE BUTTON
========================================================= */

function updateFavoriteButton() {

  const button = $("#detailsFavoriteButton");

  if (!button || !currentAnime) return;

  const isFavorite =
    favorites.includes(currentAnime.mal_id);

  button.innerHTML =
    isFavorite
      ? "❤️ Remove from Favorites"
      : "♡ Add to Favorites";
}


/* =========================================================
   FAVORITE COUNT
========================================================= */

function updateFavoriteCount() {

  const count = $("#headerFavoritesCount");

  if (!count) return;

  count.textContent = favorites.length;

  count.classList.toggle(
    "hidden",
    favorites.length === 0
  );
}


/* =========================================================
   FAVORITES PAGE
========================================================= */

async function renderFavorites() {

  const grid = $("#favoritesGrid");
  const empty = $("#emptyFavorites");

  if (!grid) return;

  const favoriteAnime = animeData.filter(
    anime => favorites.includes(anime.mal_id)
  );

  if (!favoriteAnime.length) {

    grid.innerHTML = "";

    if (empty) {
      empty.classList.remove("hidden");
    }

    return;
  }

  if (empty) {
    empty.classList.add("hidden");
  }

  grid.innerHTML =
    favoriteAnime
      .map(anime => createAnimeCard(anime))
      .join("");
}


/* =========================================================
   REFRESH CARDS
========================================================= */

function refreshCards() {

  if ($("#trendingGrid")) {

    const cards =
      $("#trendingGrid").querySelectorAll(".anime-card");

    cards.forEach(card => {

      const id =
        Number(card.dataset.animeId);

      const button =
        card.querySelector(".anime-favorite-button");

      if (!button) return;

      if (favorites.includes(id)) {

        button.classList.add("active");
        button.textContent = "❤️";

      } else {

        button.classList.remove("active");
        button.textContent = "♡";

      }

    });

  }

}


/* =========================================================
   SEARCH
========================================================= */

async function searchAnime(query) {

  const results = $("#searchResults");

  if (!results) return;

  query = query.trim();

  if (!query) {

    results.innerHTML = `
      <div class="empty-state">
        <span>🔍</span>
        <h3>Search for anime</h3>
        <p>Type an anime name above.</p>
      </div>
    `;

    return;
  }

  results.innerHTML = `
    <div class="search-loading">
      Searching...
    </div>
  `;

  const data = await apiFetch(
    `/anime?q=${encodeURIComponent(query)}&limit=12&sfw=true`
  );

  if (!data.length) {

    results.innerHTML = `
      <div class="empty-state">
        <span>😢</span>
        <h3>No Anime Found</h3>
        <p>Try another search.</p>
      </div>
    `;

    return;
  }

  results.innerHTML =
    data.map(anime => createAnimeCard(anime)).join("");
}


/* =========================================================
   SEARCH MODAL
========================================================= */

function openSearch() {

  const modal = $("#searchModal");

  if (!modal) return;

  modal.classList.add("active");
  modal.setAttribute("aria-hidden", "false");

  document.body.classList.add("modal-open");

  setTimeout(() => {

    $("#searchInput")?.focus();

  }, 100);

}


function closeSearch() {

  const modal = $("#searchModal");

  if (!modal) return;

  modal.classList.remove("active");
  modal.setAttribute("aria-hidden", "true");

  document.body.classList.remove("modal-open");

}


/* =========================================================
   GENRE SEARCH
========================================================= */

async function searchByGenre(genre) {

  openSearch();

  const input = $("#searchInput");

  if (input) {
    input.value = genre;
  }

  await searchAnime(genre);
}


/* =========================================================
   LANGUAGE
========================================================= */

function setupLanguage() {

  const button = $("#languageButton");
  const dropdown = $("#languageDropdown");

  if (!button || !dropdown) return;

  button.addEventListener("click", () => {

    dropdown.classList.toggle("active");

    button.setAttribute(
      "aria-expanded",
      dropdown.classList.contains("active")
    );

  });

  dropdown.querySelectorAll("button").forEach(item => {

    item.addEventListener("click", () => {

      const language =
        item.dataset.language;

      const text =
        item.textContent.trim();

      $("#selectedLanguage").textContent =
        text.replace(/^[^\w\u0600-\u06FF]+/, "");

      localStorage.setItem(
        "yusufLanguage",
        language
      );

      dropdown.classList.remove("active");

      showToast(
        `Language changed to ${language.toUpperCase()}`
      );

    });

  });

}


/* =========================================================
   MOBILE MENU
========================================================= */

function setupMobileMenu() {

  const menu = $("#mobileMenu");
  const overlay = $("#mobileMenuOverlay");

  $("#openMobileMenu")?.addEventListener(
    "click",
    () => {

      menu?.classList.add("active");
      overlay?.classList.add("active");

      document.body.classList.add("menu-open");

    }
  );

  $("#closeMobileMenu")?.addEventListener(
    "click",
    closeMobileMenu
  );

  overlay?.addEventListener(
    "click",
    closeMobileMenu
  );

  $$(".mobile-navigation a")
    .forEach(link => {

      link.addEventListener(
        "click",
        closeMobileMenu
      );

    });

}


function closeMobileMenu() {

  $("#mobileMenu")?.classList.remove("active");
  $("#mobileMenuOverlay")?.classList.remove("active");

  document.body.classList.remove("menu-open");

}


/* =========================================================
   THEME
========================================================= */

function setupTheme() {

  const button = $("#themeToggle");

  if (!button) return;

  const savedTheme =
    localStorage.getItem("yusufTheme");

  if (savedTheme === "light") {
    document.body.classList.add("light-theme");
    button.textContent = "☀️";
  }

  button.addEventListener("click", () => {

    const isLight =
      document.body.classList.toggle("light-theme");

    localStorage.setItem(
      "yusufTheme",
      isLight ? "light" : "dark"
    );

    button.textContent =
      isLight ? "☀️" : "🌙";

  });

}


/* =========================================================
   BACK TO TOP
========================================================= */

function setupBackToTop() {

  const button = $("#backToTop");

  if (!button) return;

  window.addEventListener("scroll", () => {

    button.classList.toggle(
      "active",
      window.scrollY > 500
    );

  });

  button.addEventListener("click", () => {

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  });

}


/* =========================================================
   NAVIGATION
========================================================= */

function setupNavigation() {

  $$(".nav-link").forEach(link => {

    link.addEventListener("click", () => {

      $$(".nav-link")
        .forEach(item =>
          item.classList.remove("active")
        );

      link.classList.add("active");

    });

  });

}


/* =========================================================
   STATS
========================================================= */

function updateStats() {

  const animeCount =
    $("#heroAnimeCount");

  const episodeCount =
    $("#heroEpisodeCount");

  const userCount =
    $("#heroUserCount");

  if (animeCount) {

    animateNumber(
      animeCount,
      animeData.length
    );

  }

  if (episodeCount) {

    const totalEpisodes =
      animeData.reduce(
        (total, anime) =>
          total + (anime.episodes || 0),
        0
      );

    animateNumber(
      episodeCount,
      totalEpisodes
    );

  }

  if (userCount) {

    animateNumber(
      userCount,
      1000
    );

  }

}


function animateNumber(element, target) {

  let current = 0;

  const duration = 1000;

  const startTime =
    performance.now();

  function update(time) {

    const progress =
      Math.min(
        (time - startTime) / duration,
        1
      );

    current =
      Math.floor(target * progress);

    element.textContent =
      current.toLocaleString();

    if (progress < 1) {
      requestAnimationFrame(update);
    }

  }

  requestAnimationFrame(update);
}


/* =========================================================
   LOADER
========================================================= */

function showLoader() {

  $("#appLoader")?.classList.remove("hidden");

}


function hideLoader() {

  setTimeout(() => {

    $("#appLoader")?.classList.add("hidden");

  }, 500);

}


/* =========================================================
   TOAST
========================================================= */

function showToast(message) {

  const container =
    $("#toastContainer");

  if (!container) return;

  const toast =
    document.createElement("div");

  toast.className = "toast";

  toast.textContent = message;

  container.appendChild(toast);

  setTimeout(() => {

    toast.classList.add("hide");

    setTimeout(
      () => toast.remove(),
      300
    );

  }, 2500);

}


/* =========================================================
   HTML SECURITY
========================================================= */

function escapeHTML(value) {

  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}


/* =========================================================
   EVENTS
========================================================= */

function setupEvents() {

  $("#openSearchButton")
    ?.addEventListener("click", openSearch);

  $("#heroSearchButton")
    ?.addEventListener("click", openSearch);

  $("#ctaSearchButton")
    ?.addEventListener("click", openSearch);

  $("#closeSearchButton")
    ?.addEventListener("click", closeSearch);

  $(".modal-backdrop")
    ?.addEventListener("click", closeSearch);

  $("#searchSubmit")
    ?.addEventListener("click", () => {

      searchAnime(
        $("#searchInput")?.value || ""
      );

    });

  $("#searchInput")
    ?.addEventListener("keydown", event => {

      if (event.key === "Enter") {

        searchAnime(
          event.target.value
        );

      }

    });

  $("#closeAnimeDetails")
    ?.addEventListener(
      "click",
      closeAnimeDetails
    );

  $(".details-backdrop")
    ?.addEventListener(
      "click",
      closeAnimeDetails
    );

  $("#detailsFavoriteButton")
    ?.addEventListener("click", () => {

      if (currentAnime) {
        toggleFavorite(
          currentAnime.mal_id
        );
      }

    });

  $$("[data-genre]")
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          searchByGenre(
            button.dataset.genre
          );

        }
      );

    });

  document.addEventListener(
    "keydown",
    event => {

      if (event.key === "Escape") {

        closeSearch();
        closeAnimeDetails();
        closeMobileMenu();

      }

    }
  );

}


/* =========================================================
   INITIALIZE
========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  async () => {

    setupEvents();

    setupLanguage();

    setupMobileMenu();

    setupTheme();

    setupBackToTop();

    setupNavigation();

    updateFavoriteCount();

    await loadAnime();

    await renderFavorites();

  }
);
