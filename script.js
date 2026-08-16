/* =========================================================
   YUSUF ANIME — MAIN JAVASCRIPT
   ========================================================= */

"use strict";


/* =========================================================
   ANIME DATA
   ========================================================= */

const animeData = [
  {
    id: 1,
    title: "One Piece",
    type: "TV",
    year: 1999,
    rating: 9.0,
    episodes: 1100,
    status: "Ongoing",
    genres: ["Action", "Adventure", "Fantasy", "Shonen"],
    description:
      "Follow Monkey D. Luffy and his crew as they travel across the Grand Line searching for the legendary One Piece.",
    image:
      "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=600&q=80",
    trending: true,
    latest: true,
    topRated: true
  },

  {
    id: 2,
    title: "Naruto Shippuden",
    type: "TV",
    year: 2007,
    rating: 8.7,
    episodes: 500,
    status: "Completed",
    genres: ["Action", "Adventure", "Shonen"],
    description:
      "Naruto returns stronger than ever and continues his journey to become Hokage while facing powerful enemies.",
    image:
      "https://images.unsplash.com/photo-1607604276583-eef5c7ca7ba1?auto=format&fit=crop&w=600&q=80",
    trending: true,
    latest: false,
    topRated: true
  },

  {
    id: 3,
    title: "Attack on Titan",
    type: "TV",
    year: 2013,
    rating: 9.1,
    episodes: 89,
    status: "Completed",
    genres: ["Action", "Drama", "Fantasy"],
    description:
      "Humanity fights for survival behind enormous walls while mysterious Titans threaten everything they know.",
    image:
      "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?auto=format&fit=crop&w=600&q=80",
    trending: true,
    latest: false,
    topRated: true
  },

  {
    id: 4,
    title: "Demon Slayer",
    type: "TV",
    year: 2019,
    rating: 8.6,
    episodes: 63,
    status: "Ongoing",
    genres: ["Action", "Fantasy", "Shonen"],
    description:
      "Tanjiro joins the Demon Slayer Corps after his family is attacked and his sister is transformed into a demon.",
    image:
      "https://images.unsplash.com/photo-1635805737707-575885ab0820?auto=format&fit=crop&w=600&q=80",
    trending: true,
    latest: true,
    topRated: true
  },

  {
    id: 5,
    title: "Jujutsu Kaisen",
    type: "TV",
    year: 2020,
    rating: 8.6,
    episodes: 47,
    status: "Ongoing",
    genres: ["Action", "Fantasy", "Shonen"],
    description:
      "Yuji Itadori enters the dangerous world of cursed spirits after becoming the host of Sukuna.",
    image:
      "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=600&q=80",
    trending: true,
    latest: true,
    topRated: true
  },

  {
    id: 6,
    title: "My Dress-Up Darling",
    type: "TV",
    year: 2022,
    rating: 8.2,
    episodes: 12,
    status: "Ongoing",
    genres: ["Romance", "Comedy", "School"],
    description:
      "Wakana Gojo and Marin Kitagawa discover a shared passion for cosplay and gradually grow closer.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80",
    trending: true,
    latest: true,
    topRated: false
  },

  {
    id: 7,
    title: "Horimiya",
    type: "TV",
    year: 2021,
    rating: 8.2,
    episodes: 13,
    status: "Completed",
    genres: ["Romance", "Comedy", "School"],
    description:
      "Two classmates discover each other's hidden sides and form a relationship that changes both of their lives.",
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80",
    trending: false,
    latest: false,
    topRated: true
  },

  {
    id: 8,
    title: "The Quintessential Quintuplets",
    type: "TV",
    year: 2019,
    rating: 8.4,
    episodes: 24,
    status: "Completed",
    genres: ["Romance", "Comedy", "School"],
    description:
      "A hardworking student becomes the tutor of five sisters, each with a very different personality.",
    image:
      "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=600&q=80",
    trending: true,
    latest: false,
    topRated: true
  },

  {
    id: 9,
    title: "Your Name",
    type: "Movie",
    year: 2016,
    rating: 8.8,
    episodes: 1,
    status: "Completed",
    genres: ["Romance", "Drama", "Fantasy"],
    description:
      "Two teenagers mysteriously begin switching bodies and discover a connection that crosses time and distance.",
    image:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=600&q=80",
    trending: false,
    latest: false,
    topRated: true
  },

  {
    id: 10,
    title: "Spy x Family",
    type: "TV",
    year: 2022,
    rating: 8.5,
    episodes: 37,
    status: "Ongoing",
    genres: ["Comedy", "Action", "School"],
    description:
      "A spy, an assassin and a telepath create a fake family while hiding their true identities from one another.",
    image:
      "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?auto=format&fit=crop&w=600&q=80",
    trending: true,
    latest: true,
    topRated: true
  }
];


/* =========================================================
   STATE
   ========================================================= */

let favorites =
  JSON.parse(localStorage.getItem("yusufAnimeFavorites")) || [];

let selectedAnime = null;

let currentSearchFilter = "all";

let currentLanguage =
  localStorage.getItem("yusufAnimeLanguage") || "en";

let darkMode =
  localStorage.getItem("yusufAnimeTheme") !== "light";


/* =========================================================
   DOM HELPERS
   ========================================================= */

const $ = (selector) =>
  document.querySelector(selector);

const $$ = (selector) =>
  document.querySelectorAll(selector);


/* =========================================================
   INITIALIZATION
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  initializeLoader();

  initializeNavigation();

  initializeMobileMenu();

  initializeSearch();

  initializeTheme();

  initializeLanguage();

  initializeFavorites();

  initializeGenreButtons();

  initializeDetailsModal();

  initializeBackToTop();

  renderAnimeSections();

  updateStatistics();

});


/* =========================================================
   LOADING SCREEN
   ========================================================= */

function initializeLoader() {

  const loader = $("#appLoader");

  if (!loader) return;

  window.addEventListener("load", () => {

    setTimeout(() => {
      loader.classList.add("loaded");
    }, 600);

  });

}


/* =========================================================
   NAVIGATION
   ========================================================= */

function initializeNavigation() {

  const navLinks = $$(".nav-link");

  navLinks.forEach((link) => {

    link.addEventListener("click", () => {

      navLinks.forEach((item) => {
        item.classList.remove("active");
      });

      link.classList.add("active");

    });

  });

}


/* =========================================================
   MOBILE MENU
   ========================================================= */

function initializeMobileMenu() {

  const openButton = $("#openMobileMenu");

  const closeButton = $("#closeMobileMenu");

  const menu = $("#mobileMenu");

  const overlay = $("#mobileMenuOverlay");

  if (!openButton || !menu) return;


  function openMenu() {

    menu.classList.add("open");

    overlay?.classList.add("open");

    menu.setAttribute("aria-hidden", "false");

    document.body.classList.add("modal-open");

  }


  function closeMenu() {

    menu.classList.remove("open");

    overlay?.classList.remove("open");

    menu.setAttribute("aria-hidden", "true");

    document.body.classList.remove("modal-open");

  }


  openButton.addEventListener("click", openMenu);

  closeButton?.addEventListener("click", closeMenu);

  overlay?.addEventListener("click", closeMenu);


  $$(".mobile-navigation a").forEach((link) => {

    link.addEventListener("click", closeMenu);

  });

}


/* =========================================================
   SEARCH
   ========================================================= */

function initializeSearch() {

  const modal = $("#searchModal");

  const openButton = $("#openSearchButton");

  const heroButton = $("#heroSearchButton");

  const ctaButton = $("#ctaSearchButton");

  const closeButton = $("#closeSearchButton");

  const backdrop = modal?.querySelector(".modal-backdrop");

  const input = $("#searchInput");

  const submit = $("#searchSubmit");


  function openSearch() {

    if (!modal) return;

    modal.classList.add("open");

    modal.setAttribute("aria-hidden", "false");

    document.body.classList.add("modal-open");

    setTimeout(() => {
      input?.focus();
    }, 150);

  }


  function closeSearch() {

    if (!modal) return;

    modal.classList.remove("open");

    modal.setAttribute("aria-hidden", "true");

    document.body.classList.remove("modal-open");

  }


  openButton?.addEventListener("click", openSearch);

  heroButton?.addEventListener("click", openSearch);

  ctaButton?.addEventListener("click", openSearch);

  closeButton?.addEventListener("click", closeSearch);

  backdrop?.addEventListener("click", closeSearch);


  submit?.addEventListener("click", () => {

    performSearch(input?.value || "");

  });


  input?.addEventListener("input", () => {

    performSearch(input.value);

  });


  input?.addEventListener("keydown", (event) => {

    if (event.key === "Enter") {
      performSearch(input.value);
    }

    if (event.key === "Escape") {
      closeSearch();
    }

  });


  $$(".search-filter").forEach((button) => {

    button.addEventListener("click", () => {

      $$(".search-filter").forEach((item) => {
        item.classList.remove("active");
      });

      button.classList.add("active");

      currentSearchFilter =
        button.dataset.filter || "all";

      performSearch(input?.value || "");

    });

  });

}


/* =========================================================
   SEARCH FUNCTION
   ========================================================= */

function performSearch(query) {

  const results = $("#searchResults");

  if (!results) return;

  const normalizedQuery =
    query.trim().toLowerCase();


  let resultsData = animeData.filter((anime) => {

    const matchesText =
      !normalizedQuery ||
      anime.title.toLowerCase().includes(normalizedQuery) ||
      anime.genres.some((genre) =>
        genre.toLowerCase().includes(normalizedQuery)
      );


    const matchesFilter =
      currentSearchFilter === "all" ||
      anime.genres.some(
        (genre) =>
          genre.toLowerCase() ===
          currentSearchFilter.toLowerCase()
      );


    return matchesText && matchesFilter;

  });


  if (!resultsData.length) {

    results.innerHTML = `
      <div class="empty-state">
        <span>🔍</span>
        <h3>No anime found</h3>
        <p>Try another search.</p>
      </div>
    `;

    return;

  }


  results.innerHTML =
    resultsData
      .map((anime) => createAnimeCard(anime, true))
      .join("");

  attachAnimeCardEvents(results);

}


/* =========================================================
   THEME
   ========================================================= */

function initializeTheme() {

  const button = $("#themeToggle");

  if (!darkMode) {
    document.documentElement.classList.add("light-theme");
  }

  updateThemeIcon();


  button?.addEventListener("click", () => {

    darkMode = !darkMode;

    document.documentElement.classList.toggle(
      "light-theme",
      !darkMode
    );

    localStorage.setItem(
      "yusufAnimeTheme",
      darkMode ? "dark" : "light"
    );

    updateThemeIcon();

  });

}


function updateThemeIcon() {

  const button = $("#themeToggle");

  if (!button) return;

  button.textContent =
    darkMode ? "☀️" : "🌙";

}


/* =========================================================
   LANGUAGE
   ========================================================= */

function initializeLanguage() {

  const selector =
    $(".language-selector");

  const button =
    $("#languageButton");

  const dropdown =
    $("#languageDropdown");

  const selected =
    $("#selectedLanguage");


  const languages = {
    en: "English",
    ku: "کوردی",
    ar: "العربية",
    tr: "Türkçe",
    ja: "日本語",
    es: "Español",
    fr: "Français",
    de: "Deutsch"
  };


  if (selected) {
    selected.textContent =
      languages[currentLanguage] || "English";
  }


  button?.addEventListener("click", (event) => {

    event.stopPropagation();

    selector?.classList.toggle("open");

  });


  dropdown?.querySelectorAll("button")
    .forEach((languageButton) => {

      languageButton.addEventListener("click", () => {

        const language =
          languageButton.dataset.language;

        if (!language) return;

        currentLanguage = language;

        localStorage.setItem(
          "yusufAnimeLanguage",
          language
        );

        if (selected) {
          selected.textContent =
            languages[language] || "English";
        }

        selector?.classList.remove("open");

        showToast(
          `Language changed to ${languages[language]}`
        );

      });

    });


  document.addEventListener("click", () => {

    selector?.classList.remove("open");

  });

}


/* =========================================================
   FAVORITES
   ========================================================= */

function initializeFavorites() {

  updateFavoritesUI();

}


function toggleFavorite(animeId) {

  const index =
    favorites.indexOf(animeId);


  if (index === -1) {

    favorites.push(animeId);

    showToast("❤️ Added to Favorites");

  } else {

    favorites.splice(index, 1);

    showToast("Removed from Favorites");

  }


  localStorage.setItem(
    "yusufAnimeFavorites",
    JSON.stringify(favorites)
  );


  updateFavoritesUI();

  renderFavorites();

}


function updateFavoritesUI() {

  const count =
    $("#headerFavoritesCount");

  if (!count) return;


  count.textContent =
    favorites.length;


  count.classList.toggle(
    "hidden",
    favorites.length === 0
  );

}


function renderFavorites() {

  const grid =
    $("#favoritesGrid");

  const empty =
    $("#emptyFavorites");

  if (!grid || !empty) return;


  const favoriteAnime =
    animeData.filter((anime) =>
      favorites.includes(anime.id)
    );


  grid.innerHTML =
    favoriteAnime
      .map((anime) => createAnimeCard(anime))
      .join("");


  empty.classList.toggle(
    "hidden",
    favoriteAnime.length > 0
  );


  attachAnimeCardEvents(grid);

}


/* =========================================================
   GENRES
   ========================================================= */

function initializeGenreButtons() {

  $$("[data-genre]").forEach((button) => {

    button.addEventListener("click", () => {

      const genre =
        button.dataset.genre;

      if (!genre) return;

      openSearchWithGenre(genre);

    });

  });

}


function openSearchWithGenre(genre) {

  const modal =
    $("#searchModal");

  const input =
    $("#searchInput");

  const allFilters =
    $$(".search-filter");


  modal?.classList.add("open");

  modal?.setAttribute(
    "aria-hidden",
    "false"
  );

  document.body.classList.add("modal-open");


  if (input) {
    input.value = genre;
  }


  currentSearchFilter = "all";


  allFilters.forEach((button) => {

    button.classList.toggle(
      "active",
      button.dataset.filter === "all"
    );

  });


  performSearch(genre);

}


/* =========================================================
   RENDER SECTIONS
   ========================================================= */

function renderAnimeSections() {

  renderSection(
    "#trendingGrid",
    animeData.filter(
      (anime) => anime.trending
    )
  );


  renderSection(
    "#latestGrid",
    animeData.filter(
      (anime) => anime.latest
    )
  );


  renderSection(
    "#topRatedGrid",
    animeData
      .filter((anime) => anime.topRated)
      .sort((a, b) => b.rating - a.rating)
  );


  renderFavorites();

}


function renderSection(selector, data) {

  const grid =
    $(selector);

  if (!grid) return;


  grid.innerHTML =
    data
      .map((anime) => createAnimeCard(anime))
      .join("");


  attachAnimeCardEvents(grid);

}


/* =========================================================
   ANIME CARD
   ========================================================= */

function createAnimeCard(
  anime,
  compact = false
) {

  const isFavorite =
    favorites.includes(anime.id);


  return `
    <article
      class="anime-card"
      data-anime-id="${anime.id}"
    >

      <div class="anime-card-poster">

        <img
          src="${anime.image}"
          alt="${escapeHTML(anime.title)}"
          loading="lazy"
        >

        <div class="anime-card-overlay"></div>

        <button
          class="anime-card-favorite ${isFavorite ? "active" : ""}"
          type="button"
          data-favorite-id="${anime.id}"
          aria-label="Add to favorites"
        >
          ${isFavorite ? "❤️" : "♡"}
        </button>

      </div>


      <div class="anime-card-info">

        <h3 class="anime-card-title">
          ${escapeHTML(anime.title)}
        </h3>

        <div class="anime-card-meta">

          <span>
            ${anime.year}
          </span>

          <span>
            •
          </span>

          <span class="anime-card-rating">
            ⭐ ${anime.rating}
          </span>

        </div>

      </div>

    </article>
  `;

}


/* =========================================================
   CARD EVENTS
   ========================================================= */

function attachAnimeCardEvents(container) {

  if (!container) return;


  container
    .querySelectorAll(".anime-card")
    .forEach((card) => {

      card.addEventListener("click", (event) => {

        if (
          event.target.closest(
            ".anime-card-favorite"
          )
        ) {
          return;
        }


        const id =
          Number(card.dataset.animeId);

        openAnimeDetails(id);

      });

    });


  container
    .querySelectorAll(
      ".anime-card-favorite"
    )
    .forEach((button) => {

      button.addEventListener(
        "click",
        (event) => {

          event.stopPropagation();

          const id =
            Number(
              button.dataset.favoriteId
            );

          toggleFavorite(id);

        }
      );

    });

}


/* =========================================================
   ANIME DETAILS
   ========================================================= */

function initializeDetailsModal() {

  const modal =
    $("#animeDetailsModal");

  const close =
    $("#closeAnimeDetails");

  const backdrop =
    modal?.querySelector(
      ".details-backdrop"
    );


  close?.addEventListener(
    "click",
    closeAnimeDetails
  );


  backdrop?.addEventListener(
    "click",
    closeAnimeDetails
  );


  document.addEventListener(
    "keydown",
    (event) => {

      if (event.key !== "Escape") {
        return;
      }

      closeAnimeDetails();

      $("#searchModal")
        ?.classList.remove("open");

    }
  );


  $("#detailsFavoriteButton")
    ?.addEventListener(
      "click",
      () => {

        if (!selectedAnime) return;

        toggleFavorite(
          selectedAnime.id
        );

        updateDetailsFavoriteButton();

      }
    );


  $("#detailsWatchButton")
    ?.addEventListener(
      "click",
      () => {

        if (!selectedAnime) return;

        showToast(
          `▶️ Starting ${selectedAnime.title}`
        );

      }
    );


  $("#detailsSeasonSelect")
    ?.addEventListener(
      "change",
      () => {

        if (!selectedAnime) return;

        renderEpisodes(
          selectedAnime
        );

      }
    );

}


function openAnimeDetails(id) {

  const anime =
    animeData.find(
      (item) => item.id === id
    );

  if (!anime) return;


  selectedAnime = anime;


  const modal =
    $("#animeDetailsModal");


  $("#detailsTitle").textContent =
    anime.title;


  $("#detailsType").textContent =
    anime.type;


  $("#detailsDescription").textContent =
    anime.description;


  $("#detailsMeta").innerHTML = `
    ${anime.year}
    •
    ${anime.episodes} Episodes
    •
    ⭐ ${anime.rating}
    •
    ${anime.status}
  `;


  $("#detailsGenres").innerHTML =
    anime.genres
      .map(
        (genre) =>
          `<span>${escapeHTML(
            genre
          )}</span>`
      )
      .join("");


  const poster =
    $("#detailsPoster");

  const banner =
    $("#detailsBanner");


  if (poster) {
    poster.style.backgroundImage =
      `url("${anime.image}")`;
  }


  if (banner) {
    banner.style.backgroundImage =
      `url("${anime.image}")`;
  }


  updateDetailsFavoriteButton();

  renderEpisodes(anime);


  modal?.classList.add("open");

  modal?.setAttribute(
    "aria-hidden",
    "false"
  );

  document.body.classList.add(
    "modal-open"
  );

}


function closeAnimeDetails() {

  const modal =
    $("#animeDetailsModal");

  if (!modal) return;


  modal.classList.remove("open");

  modal.setAttribute(
    "aria-hidden",
    "true"
  );

  document.body.classList.remove(
    "modal-open"
  );

  selectedAnime = null;

}


function updateDetailsFavoriteButton() {

  const button =
    $("#detailsFavoriteButton");

  if (!button || !selectedAnime) return;


  const isFavorite =
    favorites.includes(
      selectedAnime.id
    );


  button.textContent =
    isFavorite
      ? "❤️ Remove from Favorites"
      : "♡ Add to Favorites";

}


/* =========================================================
   EPISODES
   ========================================================= */

function renderEpisodes(anime) {

  const grid =
    $("#detailsEpisodeGrid");

  if (!grid) return;


  const maxEpisodes =
    Math.min(
      Number(anime.episodes) || 12,
      100
    );


  let html = "";


  for (
    let episode = 1;
    episode <= maxEpisodes;
    episode++
  ) {

    html += `
      <button
        class="episode-button"
        type="button"
        data-episode="${episode}"
      >
        Episode ${episode}
      </button>
    `;

  }


  grid.innerHTML = html;


  grid
    .querySelectorAll(
      ".episode-button"
    )
    .forEach((button) => {

      button.addEventListener(
        "click",
        () => {

          const episode =
            button.dataset.episode;

          showToast(
            `▶️ Playing ${anime.title} — Episode ${episode}`
          );

        }
      );

    });

}


/* =========================================================
   STATISTICS
   ========================================================= */

function updateStatistics() {

  animateNumber(
    "#heroAnimeCount",
    animeData.length
  );


  const totalEpisodes =
    animeData.reduce(
      (total, anime) =>
        total + Number(anime.episodes || 0),
      0
    );


  animateNumber(
    "#heroEpisodeCount",
    totalEpisodes
  );


  animateNumber(
    "#heroUserCount",
    1250
  );

}


function animateNumber(
  selector,
  target
) {

  const element =
    $(selector);

  if (!element) return;


  const duration = 1000;

  const start = performance.now();


  function update(time) {

    const progress =
      Math.min(
        (time - start) / duration,
        1
      );


    const value =
      Math.floor(
        progress * target
      );


    element.textContent =
      value.toLocaleString();


    if (progress < 1) {
      requestAnimationFrame(update);
    }

  }


  requestAnimationFrame(update);

}


/* =========================================================
   BACK TO TOP
   ========================================================= */

function initializeBackToTop() {

  const button =
    $("#backToTop");

  if (!button) return;


  window.addEventListener(
    "scroll",
    () => {

      button.classList.toggle(
        "visible",
        window.scrollY > 500
      );

    }
  );


  button.addEventListener(
    "click",
    () => {

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

    }
  );

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


  toast.className =
    "toast";


  toast.textContent =
    message;


  container.appendChild(toast);


  setTimeout(() => {

    toast.style.opacity = "0";

    toast.style.transform =
      "translateX(20px)";

    setTimeout(() => {
      toast.remove();
    }, 250);

  }, 2500);

}


/* =========================================================
   ESCAPE HTML
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
   LIGHT THEME
   ========================================================= */

const lightThemeStyles = document.createElement("style");

lightThemeStyles.textContent = `

  .light-theme {
    --bg: #f5f5fa;
    --bg-soft: #eeeeF5;
    --surface: #ffffff;
    --surface-2: #f0f0f7;

    --border: rgba(0, 0, 0, 0.08);

    --text: #15151d;
    --text-soft: #555563;
    --text-muted: #777784;

    --shadow: 0 20px 60px rgba(0, 0, 0, 0.12);
  }

  .light-theme .site-header {
    background: rgba(255, 255, 255, 0.86);
  }

  .light-theme .hero-overlay {
    background:
      linear-gradient(
        90deg,
        rgba(245, 245, 250, 0.98),
        rgba(245, 245, 250, 0.72),
        rgba(245, 245, 250, 0.15)
      );
  }

  .light-theme .mobile-menu {
    background: var(--surface);
  }

  .light-theme .quick-categories {
    background: rgba(255, 255, 255, 0.88);
  }

  .light-theme .site-footer {
    background: #eeeeF5;
  }

`;

document.head.appendChild(
  lightThemeStyles
);
