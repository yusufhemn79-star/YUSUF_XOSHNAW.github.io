/* =========================================================
   YUSUF ANIME
   Main Application JavaScript
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
    episodes: 1150,
    status: "Ongoing",
    genres: ["Action", "Adventure", "Fantasy", "Shonen"],
    image: "https://cdn.myanimelist.net/images/anime/1244/138851l.jpg",
    description:
      "Monkey D. Luffy and his crew sail across the Grand Line searching for the legendary treasure known as One Piece.",
    trending: true
  },

  {
    id: 2,
    title: "Attack on Titan",
    type: "TV",
    year: 2013,
    rating: 9.1,
    episodes: 89,
    status: "Completed",
    genres: ["Action", "Drama", "Fantasy"],
    image: "https://cdn.myanimelist.net/images/anime/10/47347l.jpg",
    description:
      "Humanity fights for survival against terrifying Titans beyond the walls.",
    trending: true
  },

  {
    id: 3,
    title: "Demon Slayer",
    type: "TV",
    year: 2019,
    rating: 8.6,
    episodes: 63,
    status: "Ongoing",
    genres: ["Action", "Fantasy", "Shonen"],
    image: "https://cdn.myanimelist.net/images/anime/1286/99889l.jpg",
    description:
      "Tanjiro begins a dangerous journey to save his sister and defeat demons.",
    trending: true
  },

  {
    id: 4,
    title: "Jujutsu Kaisen",
    type: "TV",
    year: 2020,
    rating: 8.6,
    episodes: 47,
    status: "Ongoing",
    genres: ["Action", "Fantasy", "Shonen"],
    image: "https://cdn.myanimelist.net/images/anime/1171/109222l.jpg",
    description:
      "Yuji Itadori joins a secret organization of sorcerers fighting cursed spirits.",
    trending: true
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
    image: "https://cdn.myanimelist.net/images/anime/1179/119897l.jpg",
    description:
      "A shy doll maker becomes friends with a popular girl who loves cosplay.",
    trending: true
  },

  {
    id: 6,
    title: "Horimiya",
    type: "TV",
    year: 2021,
    rating: 8.2,
    episodes: 13,
    status: "Completed",
    genres: ["Romance", "Comedy", "School", "Drama"],
    image: "https://cdn.myanimelist.net/images/anime/1695/111486l.jpg",
    description:
      "Two high school students discover unexpected sides of each other and slowly fall in love.",
    trending: false
  },

  {
    id: 7,
    title: "The Quintessential Quintuplets",
    type: "TV",
    year: 2019,
    rating: 8.5,
    episodes: 12,
    status: "Completed",
    genres: ["Romance", "Comedy", "School"],
    image: "https://cdn.myanimelist.net/images/anime/1390/107404l.jpg",
    description:
      "A talented student becomes the tutor of five identical sisters.",
    trending: true
  },

  {
    id: 8,
    title: "Spy x Family",
    type: "TV",
    year: 2022,
    rating: 8.5,
    episodes: 37,
    status: "Ongoing",
    genres: ["Comedy", "Action", "Adventure"],
    image: "https://cdn.myanimelist.net/images/anime/1441/122795l.jpg",
    description:
      "A spy, an assassin and a telepath create a fake family for a secret mission.",
    trending: true
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
    image: "https://cdn.myanimelist.net/images/anime/5/87048l.jpg",
    description:
      "Two teenagers mysteriously begin switching bodies and become connected across time.",
    trending: false
  },

  {
    id: 10,
    title: "Naruto",
    type: "TV",
    year: 2002,
    rating: 8.4,
    episodes: 220,
    status: "Completed",
    genres: ["Action", "Adventure", "Shonen"],
    image: "https://cdn.myanimelist.net/images/anime/13/17405l.jpg",
    description:
      "Naruto Uzumaki dreams of becoming the strongest ninja and earning everyone's respect.",
    trending: false
  },

  {
    id: 11,
    title: "Blue Lock",
    type: "TV",
    year: 2022,
    rating: 8.3,
    episodes: 38,
    status: "Ongoing",
    genres: ["Action", "Drama", "School"],
    image: "https://cdn.myanimelist.net/images/anime/1258/126929l.jpg",
    description:
      "Young football players compete in an intense project designed to create Japan's ultimate striker.",
    trending: true
  },

  {
    id: 12,
    title: "Tonikawa: Over the Moon for You",
    type: "TV",
    year: 2020,
    rating: 7.8,
    episodes: 12,
    status: "Ongoing",
    genres: ["Romance", "Comedy"],
    image: "https://cdn.myanimelist.net/images/anime/1613/107654l.jpg",
    description:
      "A young couple begins married life together after a mysterious first meeting.",
    trending: false
  }
];


/* =========================================================
   APP STATE
   ========================================================= */

const state = {
  favorites: loadFavorites(),
  theme: localStorage.getItem("yusufTheme") || "dark",
  language: localStorage.getItem("yusufLanguage") || "en",
  currentAnime: null,
  searchFilter: "all"
};


/* =========================================================
   DOM HELPERS
   ========================================================= */

function $(selector) {
  return document.querySelector(selector);
}

function $all(selector) {
  return document.querySelectorAll(selector);
}


/* =========================================================
   INITIALIZATION
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  initializeTheme();
  initializeLoader();
  initializeNavigation();
  initializeMobileMenu();
  initializeSearch();
  initializeLanguage();
  initializeFavorites();
  initializeAnimeDetails();
  initializeBackToTop();

  renderHome();
  updateStats();

});


/* =========================================================
   LOADING SCREEN
   ========================================================= */

function initializeLoader() {

  const loader = $("#appLoader");

  if (!loader) return;

  window.addEventListener("load", () => {

    setTimeout(() => {

      loader.classList.add("hidden");

      setTimeout(() => {
        loader.remove();
      }, 600);

    }, 700);

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

  if (button) {

    updateThemeIcon();

    button.addEventListener("click", toggleTheme);

  }

}


function toggleTheme() {

  state.theme =
    state.theme === "dark"
      ? "light"
      : "dark";

  document.documentElement.setAttribute(
    "data-theme",
    state.theme
  );

  localStorage.setItem(
    "yusufTheme",
    state.theme
  );

  updateThemeIcon();

  showToast(
    state.theme === "dark"
      ? "🌙 Dark mode enabled"
      : "☀️ Light mode enabled"
  );

}


function updateThemeIcon() {

  const button = $("#themeToggle");

  if (!button) return;

  button.textContent =
    state.theme === "dark"
      ? "☀️"
      : "🌙";

}


/* =========================================================
   NAVIGATION
   ========================================================= */

function initializeNavigation() {

  $all(".nav-link").forEach(link => {

    link.addEventListener("click", () => {

      $all(".nav-link").forEach(item => {
        item.classList.remove("active");
      });

      link.classList.add("active");

    });

  });


  $all("[data-view]").forEach(button => {

    button.addEventListener("click", () => {

      const view = button.dataset.view;

      scrollToSection(view);

    });

  });


  $all('a[href^="#"]').forEach(link => {

    link.addEventListener("click", event => {

      const target = link.getAttribute("href");

      if (
        target &&
        target !== "#" &&
        $(target)
      ) {

        event.preventDefault();

        scrollToSection(
          target.substring(1)
        );

      }

    });

  });

}


function scrollToSection(id) {

  const section = document.getElementById(id);

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

  const openButton = $("#openMobileMenu");
  const closeButton = $("#closeMobileMenu");
  const menu = $("#mobileMenu");
  const overlay = $("#mobileMenuOverlay");

  if (!openButton || !menu) return;


  openButton.addEventListener("click", () => {

    menu.classList.add("open");

    if (overlay) {
      overlay.classList.add("active");
    }

    menu.setAttribute(
      "aria-hidden",
      "false"
    );

    document.body.classList.add(
      "menu-open"
    );

  });


  function closeMenu() {

    menu.classList.remove("open");

    if (overlay) {
      overlay.classList.remove("active");
    }

    menu.setAttribute(
      "aria-hidden",
      "true"
    );

    document.body.classList.remove(
      "menu-open"
    );

  }


  if (closeButton) {
    closeButton.addEventListener(
      "click",
      closeMenu
    );
  }


  if (overlay) {
    overlay.addEventListener(
      "click",
      closeMenu
    );
  }


  $all(".mobile-navigation a").forEach(link => {

    link.addEventListener(
      "click",
      closeMenu
    );

  });

}


/* =========================================================
   SEARCH
   ========================================================= */

function initializeSearch() {

  const openButtons = [
    $("#openSearchButton"),
    $("#heroSearchButton"),
    $("#ctaSearchButton")
  ];

  const modal = $("#searchModal");
  const closeButton = $("#closeSearchButton");
  const backdrop = modal
    ? modal.querySelector(".modal-backdrop")
    : null;

  const input = $("#searchInput");
  const submit = $("#searchSubmit");


  openButtons.forEach(button => {

    if (!button) return;

    button.addEventListener(
      "click",
      openSearch
    );

  });


  if (closeButton) {

    closeButton.addEventListener(
      "click",
      closeSearch
    );

  }


  if (backdrop) {

    backdrop.addEventListener(
      "click",
      closeSearch
    );

  }


  if (submit) {

    submit.addEventListener(
      "click",
      () => {

        performSearch();

      }

    );

  }


  if (input) {

    input.addEventListener(
      "keydown",
      event => {

        if (event.key === "Enter") {
          performSearch();
        }

      }
    );


    input.addEventListener(
      "input",
      () => {

        if (input.value.trim()) {
          performSearch();
        }

      }
    );

  }


  $all(".search-filter").forEach(button => {

    button.addEventListener(
      "click",
      () => {

        $all(".search-filter").forEach(
          item => item.classList.remove("active")
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

  modal.classList.add("active");

  modal.setAttribute(
    "aria-hidden",
    "false"
  );

  document.body.classList.add(
    "modal-open"
  );

  const input = $("#searchInput");

  if (input) {

    setTimeout(() => {
      input.focus();
    }, 100);

  }

}


function closeSearch() {

  const modal = $("#searchModal");

  if (!modal) return;

  modal.classList.remove("active");

  modal.setAttribute(
    "aria-hidden",
    "true"
  );

  document.body.classList.remove(
    "modal-open"
  );

}


function performSearch() {

  const input = $("#searchInput");
  const results = $("#searchResults");

  if (!input || !results) return;

  const query =
    input.value
      .trim()
      .toLowerCase();

  let filtered = animeData;


  if (state.searchFilter !== "all") {

    filtered = filtered.filter(anime =>
      anime.genres.some(
        genre =>
          genre.toLowerCase() ===
          state.searchFilter
      )
    );

  }


  if (query) {

    filtered = filtered.filter(anime =>

      anime.title
        .toLowerCase()
        .includes(query)

      ||

      anime.genres.some(genre =>
        genre.toLowerCase().includes(query)
      )

    );

  }


  renderSearchResults(
    filtered
  );

}


function renderSearchResults(animeList) {

  const results = $("#searchResults");

  if (!results) return;


  if (!animeList.length) {

    results.innerHTML = `
      <div class="empty-state">
        <span>🔍</span>
        <h3>No anime found</h3>
        <p>Try another title or genre.</p>
      </div>
    `;

    return;

  }


  results.innerHTML =
    animeList
      .map(anime => createAnimeCard(anime))
      .join("");


  attachAnimeCardEvents(results);

}


/* =========================================================
   LANGUAGE
   ========================================================= */

function initializeLanguage() {

  const button = $("#languageButton");
  const dropdown = $("#languageDropdown");

  if (!button || !dropdown) return;


  button.addEventListener(
    "click",
    event => {

      event.stopPropagation();

      dropdown.classList.toggle(
        "open"
      );

      button.setAttribute(
        "aria-expanded",
        dropdown.classList.contains("open")
      );

    }
  );


  $all(
    "#languageDropdown button"
  ).forEach(languageButton => {

    languageButton.addEventListener(
      "click",
      () => {

        const language =
          languageButton.dataset.language;

        changeLanguage(language);

        dropdown.classList.remove(
          "open"
        );

      }
    );

  });


  document.addEventListener(
    "click",
    () => {

      dropdown.classList.remove(
        "open"
      );

    }
  );


  updateLanguageText();

}


function changeLanguage(language) {

  state.language = language;

  localStorage.setItem(
    "yusufLanguage",
    language
  );

  updateLanguageText();

  showToast(
    `🌐 Language changed`
  );

}


function updateLanguageText() {

  const selected = $("#selectedLanguage");

  if (!selected) return;

  const names = {

    en: "English",
    ku: "کوردی",
    ar: "العربية",
    tr: "Türkçe",
    ja: "日本語",
    es: "Español",
    fr: "Français",
    de: "Deutsch"

  };

  selected.textContent =
    names[state.language] || "English";

}


/* =========================================================
   HOME RENDER
   ========================================================= */

function renderHome() {

  renderAnimeSection(
    "#trendingGrid",
    animeData.filter(
      anime => anime.trending
    )
  );


  renderAnimeSection(
    "#latestGrid",
    [...animeData]
      .sort(
        (a, b) =>
          b.year - a.year
      )
      .slice(0, 8)
  );


  renderAnimeSection(
    "#topRatedGrid",
    [...animeData]
      .sort(
        (a, b) =>
          b.rating - a.rating
      )
      .slice(0, 8)
  );


  renderFavorites();

  initializeGenreButtons();

}


/* =========================================================
   ANIME SECTION
   ========================================================= */

function renderAnimeSection(
  selector,
  animeList
) {

  const container = $(selector);

  if (!container) return;

  if (!animeList.length) {

    container.innerHTML = `
      <div class="empty-state">
        <span>🎬</span>
        <h3>No anime available</h3>
        <p>Check again later.</p>
      </div>
    `;

    return;

  }


  container.innerHTML =
    animeList
      .map(anime => createAnimeCard(anime))
      .join("");


  attachAnimeCardEvents(
    container
  );

}


/* =========================================================
   ANIME CARD
   ========================================================= */

function createAnimeCard(anime) {

  const isFavorite =
    state.favorites.includes(
      anime.id
    );


  return `

    <article
      class="anime-card"
      data-anime-id="${anime.id}"
    >

      <div class="anime-card-image">

        <img
          src="${anime.image}"
          alt="${escapeHTML(anime.title)}"
          loading="lazy"
          onerror="this.style.display='none'"
        >

        <div class="anime-card-overlay"></div>


        <button
          class="anime-favorite-button ${
            isFavorite ? "active" : ""
          }"
          data-favorite-id="${anime.id}"
          type="button"
          aria-label="Add to favorites"
        >
          ${isFavorite ? "❤️" : "♡"}
        </button>


        <span class="anime-type">
          ${escapeHTML(anime.type)}
        </span>


        <div class="anime-card-play">
          ▶
        </div>

      </div>


      <div class="anime-card-content">

        <h3>
          ${escapeHTML(anime.title)}
        </h3>


        <div class="anime-card-meta">

          <span>
            ⭐ ${anime.rating}
          </span>

          <span>
            ${anime.year}
          </span>

          <span>
            ${anime.episodes} EP
          </span>

        </div>


        <div class="anime-card-genres">

          ${anime.genres
            .slice(0, 2)
            .map(
              genre =>
                `<span>${escapeHTML(
                  genre
                )}</span>`
            )
            .join("")}

        </div>

      </div>

    </article>

  `;

}


function attachAnimeCardEvents(
  container
) {

  container
    .querySelectorAll(
      ".anime-card"
    )
    .forEach(card => {

      card.addEventListener(
        "click",
        event => {

          if (
            event.target.closest(
              ".anime-favorite-button"
            )
          ) {
            return;
          }

          const id =
            Number(
              card.dataset.animeId
            );

          openAnimeDetails(id);

        }
      );

    });


  container
    .querySelectorAll(
      ".anime-favorite-button"
    )
    .forEach(button => {

      button.addEventListener(
        "click",
        event => {

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
   GENRES
   ========================================================= */

function initializeGenreButtons() {

  $all(
    "[data-genre]"
  ).forEach(button => {

    if (
      button.dataset.genreInitialized
    ) {
      return;
    }

    button.dataset.genreInitialized =
      "true";


    button.addEventListener(
      "click",
      () => {

        const genre =
          button.dataset.genre;

        openSearch();

        const input =
          $("#searchInput");

        if (input) {

          input.value = genre;

          state.searchFilter =
            "all";

          $all(
            ".search-filter"
          ).forEach(item => {

            item.classList.toggle(
              "active",
              item.dataset.filter ===
                "all"
            );

          });

          performSearch();

        }

      }
    );

  });

}


/* =========================================================
   FAVORITES
   ========================================================= */

function loadFavorites() {

  try {

    const saved =
      localStorage.getItem(
        "yusufFavorites"
      );

    return saved
      ? JSON.parse(saved)
      : [];

  } catch {

    return [];

  }

}


function saveFavorites() {

  localStorage.setItem(
    "yusufFavorites",
    JSON.stringify(
      state.favorites
    )
  );

}


function initializeFavorites() {

  updateFavoritesCount();

}


function toggleFavorite(id) {

  const index =
    state.favorites.indexOf(id);


  if (index === -1) {

    state.favorites.push(id);

    showToast(
      "❤️ Added to Favorites"
    );

  } else {

    state.favorites.splice(
      index,
      1
    );

    showToast(
      "💔 Removed from Favorites"
    );

  }


  saveFavorites();

  renderHome();

  if (state.currentAnime) {

    updateDetailsFavoriteButton();

  }

}


function renderFavorites() {

  const grid =
    $("#favoritesGrid");

  const empty =
    $("#emptyFavorites");

  if (!grid) return;


  const favorites =
    animeData.filter(anime =>
      state.favorites.includes(
        anime.id
      )
    );


  if (!favorites.length) {

    grid.innerHTML = "";

    if (empty) {
      empty.classList.remove(
        "hidden"
      );
    }

  } else {

    if (empty) {
      empty.classList.add(
        "hidden"
      );
    }

    grid.innerHTML =
      favorites
        .map(anime =>
          createAnimeCard(anime)
        )
        .join("");

    attachAnimeCardEvents(grid);

  }


  updateFavoritesCount();

}


function updateFavoritesCount() {

  const count =
    $("#headerFavoritesCount");

  if (!count) return;

  count.textContent =
    state.favorites.length;


  count.classList.toggle(
    "hidden",
    state.favorites.length === 0
  );

}


/* =========================================================
   ANIME DETAILS
   ========================================================= */

function initializeAnimeDetails() {

  const modal =
    $("#animeDetailsModal");

  const closeButton =
    $("#closeAnimeDetails");

  const backdrop =
    modal
      ? modal.querySelector(
          ".details-backdrop"
        )
      : null;


  if (closeButton) {

    closeButton.addEventListener(
      "click",
      closeAnimeDetails
    );

  }


  if (backdrop) {

    backdrop.addEventListener(
      "click",
      closeAnimeDetails
    );

  }


  const favoriteButton =
    $("#detailsFavoriteButton");

  if (favoriteButton) {

    favoriteButton.addEventListener(
      "click",
      () => {

        if (
          state.currentAnime
        ) {

          toggleFavorite(
            state.currentAnime.id
          );

        }

      }
    );

  }


  const watchButton =
    $("#detailsWatchButton");

  if (watchButton) {

    watchButton.addEventListener(
      "click",
      () => {

        if (
          state.currentAnime
        ) {

          showToast(
            `▶️ Starting ${state.currentAnime.title}`
          );

        }

      }
    );

  }


  const seasonSelect =
    $("#detailsSeasonSelect");

  if (seasonSelect) {

    seasonSelect.addEventListener(
      "change",
      () => {

        if (
          state.currentAnime
        ) {

          renderEpisodes(
            state.currentAnime
          );

        }

      }
    );

  }

}


function openAnimeDetails(id) {

  const anime =
    animeData.find(
      item => item.id === id
    );

  if (!anime) return;

  state.currentAnime = anime;


  const modal =
    $("#animeDetailsModal");

  if (!modal) return;


  const title =
    $("#detailsTitle");

  const type =
    $("#detailsType");

  const meta =
    $("#detailsMeta");

  const genres =
    $("#detailsGenres");

  const description =
    $("#detailsDescription");

  const poster =
    $("#detailsPoster");

  const banner =
    $("#detailsBanner");


  if (title) {
    title.textContent =
      anime.title;
  }


  if (type) {
    type.textContent =
      anime.type;
  }


  if (meta) {

    meta.innerHTML = `

      <span>⭐ ${anime.rating}</span>

      <span>📅 ${anime.year}</span>

      <span>🎬 ${anime.episodes} Episodes</span>

      <span>📌 ${escapeHTML(
        anime.status
      )}</span>

    `;

  }


  if (genres) {

    genres.innerHTML =
      anime.genres
        .map(
          genre =>
            `<span>${escapeHTML(
              genre
            )}</span>`
        )
        .join("");

  }


  if (description) {

    description.textContent =
      anime.description;

  }


  if (poster) {

    poster.innerHTML = `

      <img
        src="${anime.image}"
        alt="${escapeHTML(
          anime.title
        )}"
      >

    `;

  }


  if (banner) {

    banner.style.backgroundImage =
      `url("${anime.image}")`;

  }


  updateDetailsFavoriteButton();

  renderEpisodes(anime);


  modal.classList.add("active");

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

  modal.classList.remove(
    "active"
  );

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

  if (
    !button ||
    !state.currentAnime
  ) {
    return;
  }


  const favorite =
    state.favorites.includes(
      state.currentAnime.id
    );


  button.textContent =
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

  if (!grid) return;


  const total =
    Math.min(
      anime.episodes,
      24
    );


  let html = "";


  for (
    let episode = 1;
    episode <= total;
    episode++
  ) {

    html += `

      <button
        class="episode-card"
        type="button"
        data-episode="${episode}"
      >

        <span>
          EP ${episode}
        </span>

        <strong>
          Episode ${episode}
        </strong>

        <small>
          ▶ Watch
        </small>

      </button>

    `;

  }


  grid.innerHTML = html;


  grid
    .querySelectorAll(
      ".episode-card"
    )
    .forEach(button => {

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
        (sum, anime) =>
          sum + anime.episodes,
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
      1284
    );

  }

}


function animateNumber(
  element,
  target
) {

  let current = 0;

  const duration = 1000;

  const start =
    performance.now();


  function update(time) {

    const progress =
      Math.min(
        (time - start) /
          duration,
        1
      );

    current =
      Math.floor(
        progress * target
      );

    element.textContent =
      current.toLocaleString();


    if (progress < 1) {

      requestAnimationFrame(
        update
      );

    }

  }


  requestAnimationFrame(
    update
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
    document.createElement(
      "div"
    );

  toast.className =
    "toast";


  toast.textContent =
    message;


  container.appendChild(
    toast
  );


  setTimeout(() => {

    toast.classList.add(
      "hide"
    );

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
   ESCAPE HTML
   ========================================================= */

function escapeHTML(value) {

  return String(value)
    .replace(
      /&/g,
      "&amp;"
    )
    .replace(
      /</g,
      "&lt;"
    )
    .replace(
      />/g,
      "&gt;"
    )
    .replace(
      /"/g,
      "&quot;"
    )
    .replace(
      /'/g,
      "&#039;"
    );

}


/* =========================================================
   KEYBOARD SHORTCUTS
   ========================================================= */

document.addEventListener(
  "keydown",
  event => {

    if (
      event.key === "Escape"
    ) {

      closeSearch();
      closeAnimeDetails();

    }


    if (
      event.ctrlKey &&
      event.key.toLowerCase() === "k"
    ) {

      event.preventDefault();

      openSearch();

    }

  }
);


/* =========================================================
   CONSOLE
   ========================================================= */

console.log(
  "🎬 YUSUF ANIME loaded successfully."
);
