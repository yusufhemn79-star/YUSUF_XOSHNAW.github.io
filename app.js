/* =========================================================
   YUSUF ANIME
   MAIN JAVASCRIPT
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
    episodes: 1170,
    status: "Ongoing",
    genres: ["Action", "Adventure", "Fantasy", "Shonen"],
    description:
      "Monkey D. Luffy and his crew sail across the Grand Line in search of the legendary One Piece.",
    image:
      "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=600&q=80",
    banner:
      "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1600&q=80",
    trending: true,
    latest: true,
    topRated: true
  },

  {
    id: 2,
    title: "Demon Slayer",
    type: "TV",
    year: 2019,
    rating: 8.7,
    episodes: 63,
    status: "Ongoing",
    genres: ["Action", "Fantasy", "Shonen"],
    description:
      "Tanjiro Kamado joins the Demon Slayer Corps after his family is attacked and his sister becomes a demon.",
    image:
      "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=600&q=80",
    banner:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1600&q=80",
    trending: true,
    latest: true,
    topRated: true
  },

  {
    id: 3,
    title: "Naruto",
    type: "TV",
    year: 2002,
    rating: 8.4,
    episodes: 220,
    status: "Completed",
    genres: ["Action", "Adventure", "Shonen"],
    description:
      "Naruto Uzumaki dreams of becoming Hokage while growing stronger and protecting his friends.",
    image:
      "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?auto=format&fit=crop&w=600&q=80",
    banner:
      "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=1600&q=80",
    trending: true,
    topRated: true
  },

  {
    id: 4,
    title: "Attack on Titan",
    type: "TV",
    year: 2013,
    rating: 9.1,
    episodes: 89,
    status: "Completed",
    genres: ["Action", "Drama", "Fantasy"],
    description:
      "Humanity fights for survival behind enormous walls against terrifying Titans.",
    image:
      "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=600&q=80",
    banner:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80",
    trending: true,
    topRated: true
  },

  {
    id: 5,
    title: "My Dress-Up Darling",
    type: "TV",
    year: 2022,
    rating: 8.2,
    episodes: 12,
    status: "Ongoing",
    genres: ["Romance", "Comedy", "School"],
    description:
      "Wakana Gojo and Marin Kitagawa discover a special friendship through their shared love of cosplay.",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80",
    banner:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1600&q=80",
    trending: true,
    latest: true
  },

  {
    id: 6,
    title: "Horimiya",
    type: "TV",
    year: 2021,
    rating: 8.6,
    episodes: 13,
    status: "Completed",
    genres: ["Romance", "Comedy", "School", "Drama"],
    description:
      "Two students discover each other's hidden sides and slowly build a beautiful relationship.",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80",
    banner:
      "https://images.unsplash.com/photo-1511988617509-a57c8a288659?auto=format&fit=crop&w=1600&q=80",
    trending: true,
    topRated: true
  },

  {
    id: 7,
    title: "Jujutsu Kaisen",
    type: "TV",
    year: 2020,
    rating: 8.7,
    episodes: 47,
    status: "Ongoing",
    genres: ["Action", "Fantasy", "Shonen"],
    description:
      "Yuji Itadori enters the world of cursed spirits after swallowing a powerful cursed object.",
    image:
      "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=600&q=80",
    banner:
      "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1600&q=80",
    trending: true,
    latest: true,
    topRated: true
  },

  {
    id: 8,
    title: "Spy x Family",
    type: "TV",
    year: 2022,
    rating: 8.5,
    episodes: 37,
    status: "Ongoing",
    genres: ["Comedy", "Action", "School"],
    description:
      "A spy, an assassin and a telepath form an unusual family while hiding their secrets from each other.",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80",
    banner:
      "https://images.unsplash.com/photo-1504150558240-0b4fd8946624?auto=format&fit=crop&w=1600&q=80",
    trending: true,
    latest: true
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
      "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=600&q=80",
    banner:
      "https://images.unsplash.com/photo-1534791547706-7b5758f464a0?auto=format&fit=crop&w=1600&q=80",
    topRated: true
  },

  {
    id: 10,
    title: "Death Note",
    type: "TV",
    year: 2006,
    rating: 8.6,
    episodes: 37,
    status: "Completed",
    genres: ["Drama", "Fantasy"],
    description:
      "A mysterious notebook gives Light Yagami the power to kill anyone whose name he writes in it.",
    image:
      "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?auto=format&fit=crop&w=600&q=80",
    banner:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1600&q=80",
    topRated: true
  },

  {
    id: 11,
    title: "Blue Lock",
    type: "TV",
    year: 2022,
    rating: 8.3,
    episodes: 38,
    status: "Ongoing",
    genres: ["Action", "Shonen", "Drama"],
    description:
      "Japan creates an extreme training program designed to produce the world's greatest striker.",
    image:
      "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=600&q=80",
    banner:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1600&q=80",
    latest: true,
    trending: true
  },

  {
    id: 12,
    title: "The Quintessential Quintuplets",
    type: "TV",
    year: 2019,
    rating: 8.4,
    episodes: 24,
    status: "Completed",
    genres: ["Romance", "Comedy", "School"],
    description:
      "A high school student becomes a tutor for five sisters, each with a very different personality.",
    image:
      "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80",
    banner:
      "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&w=1600&q=80",
    topRated: true
  }
];


/* =========================================================
   STATE
========================================================= */

const state = {
  favorites: loadStorage("yusufAnimeFavorites", []),
  history: loadStorage("yusufAnimeHistory", []),
  continueWatching: loadStorage("yusufAnimeContinue", []),
  theme: localStorage.getItem("yusufAnimeTheme") || "dark",
  language: localStorage.getItem("yusufAnimeLanguage") || "en",
  currentAnime: null,
  currentSeason: 1,
  searchFilter: "all"
};


/* =========================================================
   STORAGE
========================================================= */

function loadStorage(key, fallback) {
  try {
    const value = localStorage.getItem(key);

    if (!value) {
      return fallback;
    }

    return JSON.parse(value);
  } catch (error) {
    return fallback;
  }
}


function saveStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}


/* =========================================================
   DOM HELPERS
========================================================= */

function $(selector) {
  return document.querySelector(selector);
}


function $$(selector) {
  return document.querySelectorAll(selector);
}


function show(element) {
  if (element) {
    element.classList.remove("hidden");
  }
}


function hide(element) {
  if (element) {
    element.classList.add("hidden");
  }
}


/* =========================================================
   INITIALIZATION
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  initializeTheme();

  initializeLoader();

  renderAllAnime();

  initializeNavigation();

  initializeSearch();

  initializeMobileMenu();

  initializeLanguage();

  initializeFavorites();

  initializeAnimeDetails();

  initializeGenres();

  initializeBackToTop();

  updateHeroStats();

  updateFavoritesCount();

  renderContinueWatching();

  setTimeout(() => {
    document.body.classList.add("app-ready");
  }, 100);

});


/* =========================================================
   LOADER
========================================================= */

function initializeLoader() {

  const loader = $("#appLoader");

  if (!loader) return;

  window.addEventListener("load", () => {

    setTimeout(() => {

      loader.classList.add("loaded");

      setTimeout(() => {
        loader.remove();
      }, 600);

    }, 500);

  });

}


/* =========================================================
   THEME
========================================================= */

function initializeTheme() {

  document.documentElement.setAttribute(
    "data-theme",
    state.theme
  );

  const button = $("#themeToggle");

  if (!button) return;

  updateThemeButton();

  button.addEventListener("click", toggleTheme);

}


function toggleTheme() {

  state.theme =
    state.theme === "dark"
      ? "light"
      : "dark";

  localStorage.setItem(
    "yusufAnimeTheme",
    state.theme
  );

  document.documentElement.setAttribute(
    "data-theme",
    state.theme
  );

  updateThemeButton();

  showToast(
    state.theme === "dark"
      ? "🌙 Dark mode enabled"
      : "☀️ Light mode enabled"
  );

}


function updateThemeButton() {

  const button = $("#themeToggle");

  if (!button) return;

  button.textContent =
    state.theme === "dark"
      ? "☀️"
      : "🌙";

}


/* =========================================================
   RENDER ALL ANIME
========================================================= */

function renderAllAnime() {

  renderAnimeGrid(
    "#trendingGrid",
    animeData.filter(anime => anime.trending)
  );

  renderAnimeGrid(
    "#latestGrid",
    animeData.filter(anime => anime.latest)
  );

  renderAnimeGrid(
    "#topRatedGrid",
    animeData
      .filter(anime => anime.topRated)
      .sort((a, b) => b.rating - a.rating)
  );

  renderFavorites();

}


/* =========================================================
   ANIME CARD
========================================================= */

function renderAnimeGrid(selector, animeList) {

  const grid = $(selector);

  if (!grid) return;

  grid.innerHTML = "";

  if (!animeList.length) {

    grid.innerHTML = `
      <div class="empty-state">
        <span>🎬</span>
        <h3>No anime found</h3>
        <p>Try another category.</p>
      </div>
    `;

    return;
  }

  animeList.forEach(anime => {

    grid.appendChild(
      createAnimeCard(anime)
    );

  });

}


function createAnimeCard(anime) {

  const card = document.createElement("article");

  card.className = "anime-card";

  const isFavorite =
    state.favorites.includes(anime.id);

  card.innerHTML = `

    <div class="anime-card-image">

      <img
        src="${anime.image}"
        alt="${escapeHTML(anime.title)}"
        loading="lazy"
      >

      <div class="anime-card-overlay"></div>

      <button
        class="anime-favorite ${isFavorite ? "active" : ""}"
        type="button"
        aria-label="Add to favorites"
        data-favorite="${anime.id}"
      >
        ${isFavorite ? "❤️" : "♡"}
      </button>

      <span class="anime-rating">
        ⭐ ${anime.rating}
      </span>

      <span class="anime-type">
        ${anime.type}
      </span>

      <button
        class="anime-play"
        type="button"
        data-anime="${anime.id}"
        aria-label="View ${escapeHTML(anime.title)}"
      >
        ▶
      </button>

    </div>

    <div class="anime-card-content">

      <h3>
        ${escapeHTML(anime.title)}
      </h3>

      <div class="anime-card-meta">
        <span>${anime.year}</span>
        <span>•</span>
        <span>${anime.episodes} EP</span>
      </div>

      <div class="anime-card-genres">

        ${anime.genres
          .slice(0, 2)
          .map(genre => `<span>${genre}</span>`)
          .join("")}

      </div>

    </div>
  `;


  card
    .querySelector("[data-anime]")
    ?.addEventListener("click", () => {

      openAnimeDetails(anime.id);

    });


  card
    .querySelector("[data-favorite]")
    ?.addEventListener("click", event => {

      event.stopPropagation();

      toggleFavorite(anime.id);

    });


  return card;

}


/* =========================================================
   FAVORITES
========================================================= */

function initializeFavorites() {

  $("#headerFavoritesButton")
    ?.addEventListener("click", () => {

      setTimeout(() => {
        renderFavorites();
      }, 100);

    });

}


function toggleFavorite(animeId) {

  const index =
    state.favorites.indexOf(animeId);

  if (index === -1) {

    state.favorites.push(animeId);

    showToast("❤️ Added to favorites");

  } else {

    state.favorites.splice(index, 1);

    showToast("💔 Removed from favorites");

  }

  saveStorage(
    "yusufAnimeFavorites",
    state.favorites
  );

  renderAllAnime();

  updateFavoritesCount();

  updateDetailsFavoriteButton();

}


function renderFavorites() {

  const grid = $("#favoritesGrid");

  const empty = $("#emptyFavorites");

  if (!grid) return;

  const favorites =
    animeData.filter(anime =>
      state.favorites.includes(anime.id)
    );

  grid.innerHTML = "";

  if (!favorites.length) {

    show(empty);

    return;

  }

  hide(empty);

  favorites.forEach(anime => {

    grid.appendChild(
      createAnimeCard(anime)
    );

  });

}


function updateFavoritesCount() {

  const counter =
    $("#headerFavoritesCount");

  if (!counter) return;

  counter.textContent =
    state.favorites.length;

  if (state.favorites.length > 0) {
    show(counter);
  } else {
    hide(counter);
  }

}


/* =========================================================
   SEARCH
========================================================= */

function initializeSearch() {

  const openButtons = [
    "#openSearchButton",
    "#heroSearchButton",
    "#ctaSearchButton"
  ];

  openButtons.forEach(selector => {

    $(selector)?.addEventListener(
      "click",
      openSearch
    );

  });


  $("#closeSearchButton")
    ?.addEventListener(
      "click",
      closeSearch
    );


  $(".modal-backdrop")
    ?.addEventListener(
      "click",
      closeSearch
    );


  $("#searchSubmit")
    ?.addEventListener(
      "click",
      performSearch
    );


  $("#searchInput")
    ?.addEventListener(
      "input",
      performSearch
    );


  $("#searchInput")
    ?.addEventListener(
      "keydown",
      event => {

        if (event.key === "Enter") {
          performSearch();
        }

      }
    );


  $$(".search-filter")
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          $$(".search-filter")
            .forEach(item =>
              item.classList.remove("active")
            );

          button.classList.add("active");

          state.searchFilter =
            button.dataset.filter;

          performSearch();

        }
      );

    });

}


function openSearch() {

  const modal = $("#searchModal");

  if (!modal) return;

  modal.classList.add("open");

  modal.setAttribute(
    "aria-hidden",
    "false"
  );

  document.body.classList.add("modal-open");

  setTimeout(() => {
    $("#searchInput")?.focus();
  }, 150);

  performSearch();

}


function closeSearch() {

  const modal = $("#searchModal");

  if (!modal) return;

  modal.classList.remove("open");

  modal.setAttribute(
    "aria-hidden",
    "true"
  );

  document.body.classList.remove("modal-open");

}


function performSearch() {

  const input = $("#searchInput");

  const results = $("#searchResults");

  if (!input || !results) return;

  const query =
    input.value
      .trim()
      .toLowerCase();

  let filtered =
    animeData.filter(anime => {

      const matchesText =
        !query ||
        anime.title
          .toLowerCase()
          .includes(query) ||
        anime.genres.some(genre =>
          genre.toLowerCase().includes(query)
        );

      const matchesFilter =
        state.searchFilter === "all" ||
        anime.genres.some(genre =>
          genre.toLowerCase() ===
          state.searchFilter.toLowerCase()
        );

      return matchesText && matchesFilter;

    });


  if (!filtered.length) {

    results.innerHTML = `
      <div class="empty-state">
        <span>🔍</span>
        <h3>No anime found</h3>
        <p>Try another search.</p>
      </div>
    `;

    return;

  }


  results.innerHTML = "";

  filtered.forEach(anime => {

    const item =
      document.createElement("button");

    item.type = "button";

    item.className = "search-result-item";

    item.innerHTML = `

      <img
        src="${anime.image}"
        alt="${escapeHTML(anime.title)}"
      >

      <div>

        <strong>
          ${escapeHTML(anime.title)}
        </strong>

        <span>
          ⭐ ${anime.rating}
          • ${anime.year}
          • ${anime.type}
        </span>

      </div>

    `;

    item.addEventListener(
      "click",
      () => {

        closeSearch();

        openAnimeDetails(anime.id);

      }
    );

    results.appendChild(item);

  });

}


/* =========================================================
   ANIME DETAILS
========================================================= */

function initializeAnimeDetails() {

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
    ?.addEventListener(
      "click",
      () => {

        if (state.currentAnime) {

          toggleFavorite(
            state.currentAnime.id
          );

        }

      }
    );


  $("#detailsWatchButton")
    ?.addEventListener(
      "click",
      () => {

        if (!state.currentAnime) return;

        watchAnime(
          state.currentAnime.id,
          1
        );

      }
    );


  $("#detailsSeasonSelect")
    ?.addEventListener(
      "change",
      event => {

        state.currentSeason =
          Number(event.target.value);

        renderEpisodes(
          state.currentAnime
        );

      }
    );

}


function openAnimeDetails(animeId) {

  const anime =
    animeData.find(
      item => item.id === Number(animeId)
    );

  if (!anime) return;

  state.currentAnime = anime;

  state.currentSeason = 1;

  const modal =
    $("#animeDetailsModal");

  if (!modal) return;


  $("#detailsBanner").style.backgroundImage =
    `url("${anime.banner}")`;

  $("#detailsPoster").style.backgroundImage =
    `url("${anime.image}")`;


  $("#detailsType").textContent =
    anime.type;


  $("#detailsTitle").textContent =
    anime.title;


  $("#detailsMeta").innerHTML = `

    <span>⭐ ${anime.rating}</span>
    <span>📅 ${anime.year}</span>
    <span>🎬 ${anime.episodes} Episodes</span>
    <span>📺 ${anime.status}</span>

  `;


  $("#detailsGenres").innerHTML =
    anime.genres
      .map(genre =>
        `<span>${genre}</span>`
      )
      .join("");


  $("#detailsDescription").textContent =
    anime.description;


  updateDetailsFavoriteButton();

  renderEpisodes(anime);


  modal.classList.add("open");

  modal.setAttribute(
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

  state.currentAnime = null;

}


function updateDetailsFavoriteButton() {

  const button =
    $("#detailsFavoriteButton");

  if (!button || !state.currentAnime) {
    return;
  }

  const favorite =
    state.favorites.includes(
      state.currentAnime.id
    );


  button.innerHTML =
    favorite
      ? "❤️ Remove from Favorites"
      : "♡ Add to Favorites";

}


/* =========================================================
   EPISODES
========================================================= */

function renderEpisodes(anime) {

  const grid =
    $("#detailsEpisodeGrid");

  const select =
    $("#detailsSeasonSelect");

  if (!grid || !anime) return;


  const episodeCount =
    Math.min(anime.episodes, 24);


  if (select) {

    select.innerHTML = "";

    const seasons =
      anime.episodes > 24
        ? Math.ceil(anime.episodes / 24)
        : 1;

    for (
      let season = 1;
      season <= seasons;
      season++
    ) {

      const option =
        document.createElement("option");

      option.value = season;

      option.textContent =
        `Season ${season}`;

      select.appendChild(option);

    }

    select.value =
      String(state.currentSeason);

  }


  grid.innerHTML = "";


  const startEpisode =
    (state.currentSeason - 1) * 24 + 1;

  const endEpisode =
    Math.min(
      startEpisode + episodeCount - 1,
      anime.episodes
    );


  for (
    let episode = startEpisode;
    episode <= endEpisode;
    episode++
  ) {

    const button =
      document.createElement("button");

    button.type = "button";

    button.className =
      "episode-card";

    button.innerHTML = `

      <span class="episode-number">
        ${episode}
      </span>

      <span class="episode-title">
        Episode ${episode}
      </span>

      <span class="episode-play">
        ▶
      </span>

    `;


    button.addEventListener(
      "click",
      () => {

        watchAnime(
          anime.id,
          episode
        );

      }
    );


    grid.appendChild(button);

  }

}


/* =========================================================
   WATCHING
========================================================= */

function watchAnime(animeId, episode) {

  const anime =
    animeData.find(
      item => item.id === animeId
    );

  if (!anime) return;


  const existing =
    state.continueWatching.find(
      item => item.animeId === animeId
    );


  if (existing) {

    existing.episode =
      episode;

  } else {

    state.continueWatching.push({

      animeId,
      episode

    });

  }


  saveStorage(
    "yusufAnimeContinue",
    state.continueWatching
  );


  if (!state.history.includes(animeId)) {

    state.history.push(animeId);

    saveStorage(
      "yusufAnimeHistory",
      state.history
    );

  }


  closeAnimeDetails();

  renderContinueWatching();

  showToast(
    `▶️ Playing ${anime.title} — Episode ${episode}`
  );

}


function renderContinueWatching() {

  const section =
    $("#continueWatching");

  const grid =
    $("#continueWatchingGrid");

  if (!section || !grid) return;


  const list =
    state.continueWatching
      .map(item => {

        const anime =
          animeData.find(
            a => a.id === item.animeId
          );

        if (!anime) return null;

        return {
          ...anime,
          continueEpisode: item.episode
        };

      })
      .filter(Boolean);


  if (!list.length) {

    hide(section);

    return;

  }


  show(section);

  grid.innerHTML = "";


  list.forEach(anime => {

    const card =
      createAnimeCard(anime);

    grid.appendChild(card);

  });

}


/* =========================================================
   GENRES
========================================================= */

function initializeGenres() {

  $$("[data-genre]")
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          const genre =
            button.dataset.genre;

          openGenreSearch(genre);

        }
      );

    });

}


function openGenreSearch(genre) {

  openSearch();

  const input =
    $("#searchInput");

  if (input) {

    input.value = genre;

  }

  state.searchFilter = "all";

  $$(".search-filter")
    .forEach(button => {

      button.classList.toggle(
        "active",
        button.dataset.filter === "all"
      );

    });

  performSearch();

}


/* =========================================================
   NAVIGATION
========================================================= */

function initializeNavigation() {

  $$(".nav-link").forEach(link => {

    link.addEventListener(
      "click",
      () => {

        $$(".nav-link")
          .forEach(item =>
            item.classList.remove("active")
          );

        link.classList.add("active");

      }
    );

  });


  $$(".section-link-button")
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          const view =
            button.dataset.view;

          if (
            view === "trending"
          ) {

            scrollToSection("trending");

          } else if (
            view === "latest"
          ) {

            scrollToSection("latest");

          } else if (
            view === "top-rated"
          ) {

            scrollToSection("top-rated");

          }

        }
      );

    });

}


function scrollToSection(id) {

  const section =
    document.getElementById(id);

  if (!section) return;

  section.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });

}


/* =========================================================
   MOBILE MENU
========================================================= */

function initializeMobileMenu() {

  $("#openMobileMenu")
    ?.addEventListener(
      "click",
      openMobileMenu
    );


  $("#closeMobileMenu")
    ?.addEventListener(
      "click",
      closeMobileMenu
    );


  $("#mobileMenuOverlay")
    ?.addEventListener(
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


function openMobileMenu() {

  const menu =
    $("#mobileMenu");

  const overlay =
    $("#mobileMenuOverlay");

  if (!menu) return;

  menu.classList.add("open");

  overlay?.classList.add("open");

  menu.setAttribute(
    "aria-hidden",
    "false"
  );

  document.body.classList.add(
    "mobile-menu-open"
  );

}


function closeMobileMenu() {

  const menu =
    $("#mobileMenu");

  const overlay =
    $("#mobileMenuOverlay");

  if (!menu) return;

  menu.classList.remove("open");

  overlay?.classList.remove("open");

  menu.setAttribute(
    "aria-hidden",
    "true"
  );

  document.body.classList.remove(
    "mobile-menu-open"
  );

}


/* =========================================================
   LANGUAGE
========================================================= */

function initializeLanguage() {

  const button =
    $("#languageButton");

  const dropdown =
    $("#languageDropdown");


  button?.addEventListener(
    "click",
    event => {

      event.stopPropagation();

      dropdown?.classList.toggle("open");

      const expanded =
        dropdown?.classList.contains("open");

      button.setAttribute(
        "aria-expanded",
        expanded ? "true" : "false"
      );

    }
  );


  $$("[data-language]")
    .forEach(languageButton => {

      languageButton.addEventListener(
        "click",
        () => {

          const language =
            languageButton.dataset.language;

          changeLanguage(language);

          dropdown?.classList.remove("open");

        }
      );

    });


  document.addEventListener(
    "click",
    () => {

      dropdown?.classList.remove("open");

    }
  );

  updateLanguageName();

}


function changeLanguage(language) {

  state.language =
    language;

  localStorage.setItem(
    "yusufAnimeLanguage",
    language
  );

  updateLanguageName();

  showToast(
    `🌐 Language changed to ${getLanguageName(language)}`
  );

}


function updateLanguageName() {

  const element =
    $("#selectedLanguage");

  if (!element) return;

  element.textContent =
    getLanguageName(
      state.language
    );

}


function getLanguageName(language) {

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

  return (
    languages[language] ||
    "English"
  );

}


/* =========================================================
   HERO STATS
========================================================= */

function updateHeroStats() {

  animateNumber(
    $("#heroAnimeCount"),
    animeData.length
  );


  const totalEpisodes =
    animeData.reduce(
      (total, anime) =>
        total + anime.episodes,
      0
    );


  animateNumber(
    $("#heroEpisodeCount"),
    totalEpisodes
  );


  animateNumber(
    $("#heroUserCount"),
    1284
  );

}


function animateNumber(element, target) {

  if (!element) return;

  const duration = 900;

  const startTime =
    performance.now();


  function update(currentTime) {

    const progress =
      Math.min(
        (currentTime - startTime) /
        duration,
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


  requestAnimationFrame(() => {

    toast.classList.add("show");

  });


  setTimeout(() => {

    toast.classList.remove("show");

    setTimeout(() => {
      toast.remove();
    }, 300);

  }, 2500);

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

      if (window.scrollY > 500) {

        button.classList.add("show");

      } else {

        button.classList.remove("show");

      }

    },
    {
      passive: true
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
   KEYBOARD CONTROLS
========================================================= */

document.addEventListener(
  "keydown",
  event => {

    if (event.key === "Escape") {

      closeSearch();

      closeAnimeDetails();

      closeMobileMenu();

    }


    if (
      event.key === "/" &&
      document.activeElement?.tagName !== "INPUT"
    ) {

      event.preventDefault();

      openSearch();

    }

  }
);


/* =========================================================
   ACTIVE NAVIGATION ON SCROLL
========================================================= */

window.addEventListener(
  "scroll",
  () => {

    const sections = [
      "home",
      "trending",
      "latest",
      "top-rated",
      "genres",
      "favorites"
    ];


    let current =
      "home";


    sections.forEach(id => {

      const section =
        document.getElementById(id);

      if (!section) return;


      const rect =
        section.getBoundingClientRect();


      if (
        rect.top <= 150 &&
        rect.bottom >= 150
      ) {

        current = id;

      }

    });


    $$(".nav-link")
      .forEach(link => {

        link.classList.toggle(
          "active",
          link.dataset.section === current
        );

      });

  },
  {
    passive: true
  }
);


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
   GLOBAL ERROR HANDLING
========================================================= */

window.addEventListener(
  "error",
  error => {

    console.error(
      "YUSUF ANIME Error:",
      error.message
    );

  }
);


/* =========================================================
   END
========================================================= */
