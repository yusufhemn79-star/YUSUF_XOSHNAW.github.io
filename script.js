/* =========================================
   YUSUF ANIME
   Main Application JavaScript
========================================= */

"use strict";


/* =========================================
   APP STATE
========================================= */

const AppState = {
  anime: [],
  favorites: [],
  currentAnime: null,
  currentSeason: 1,
  currentFilter: "all",
  language: "en",
  theme: "dark"
};


/* =========================================
   SAMPLE ANIME DATA
========================================= */

const animeData = [
  {
    id: 1,
    title: "One Piece",
    type: "TV",
    year: 1999,
    rating: 9.0,
    status: "Ongoing",
    episodes: 1170,
    genres: ["Action", "Adventure", "Fantasy", "Shonen"],
    image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80",
    description:
      "Follow Monkey D. Luffy and his crew as they travel across the Grand Line searching for the legendary One Piece."
  },

  {
    id: 2,
    title: "Demon Slayer",
    type: "TV",
    year: 2019,
    rating: 8.6,
    status: "Ongoing",
    episodes: 63,
    genres: ["Action", "Fantasy", "Shonen"],
    image: "https://images.unsplash.com/photo-1618336753974-aae8e04506aa?auto=format&fit=crop&w=800&q=80",
    description:
      "Tanjiro begins a dangerous journey to save his sister and defeat the demons responsible for destroying his family."
  },

  {
    id: 3,
    title: "Naruto Shippuden",
    type: "TV",
    year: 2007,
    rating: 8.7,
    status: "Completed",
    episodes: 500,
    genres: ["Action", "Adventure", "Shonen"],
    image: "https://images.unsplash.com/photo-1607604276583-eef5b076f64f?auto=format&fit=crop&w=800&q=80",
    description:
      "Naruto returns stronger than ever and continues his journey to become Hokage while protecting his friends."
  },

  {
    id: 4,
    title: "My Dress-Up Darling",
    type: "TV",
    year: 2022,
    rating: 8.2,
    status: "Ongoing",
    episodes: 24,
    genres: ["Romance", "Comedy", "School"],
    image: "https://images.unsplash.com/photo-1578632292335-df3abbb0d586?auto=format&fit=crop&w=800&q=80",
    description:
      "A shy student who loves traditional doll making discovers cosplay and forms an unexpected friendship."
  },

  {
    id: 5,
    title: "Horimiya",
    type: "TV",
    year: 2021,
    rating: 8.2,
    status: "Completed",
    episodes: 13,
    genres: ["Romance", "Comedy", "School", "Drama"],
    image: "https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&w=800&q=80",
    description:
      "Two students discover the hidden sides of each other's personalities and slowly develop a special relationship."
  },

  {
    id: 6,
    title: "Jujutsu Kaisen",
    type: "TV",
    year: 2020,
    rating: 8.7,
    status: "Ongoing",
    episodes: 48,
    genres: ["Action", "Fantasy", "Shonen"],
    image: "https://images.unsplash.com/photo-1635805737707-575885ab0820?auto=format&fit=crop&w=800&q=80",
    description:
      "Yuji Itadori enters the dangerous world of cursed spirits after becoming the host of a powerful curse."
  },

  {
    id: 7,
    title: "Attack on Titan",
    type: "TV",
    year: 2013,
    rating: 9.1,
    status: "Completed",
    episodes: 89,
    genres: ["Action", "Drama", "Fantasy"],
    image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80",
    description:
      "Humanity fights for survival behind massive walls while terrifying Titans threaten everything they know."
  },

  {
    id: 8,
    title: "The Quintessential Quintuplets",
    type: "TV",
    year: 2019,
    rating: 8.0,
    status: "Completed",
    episodes: 24,
    genres: ["Romance", "Comedy", "School"],
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
    description:
      "A high school student becomes the tutor of five sisters who are struggling with their studies."
  }
];


/* =========================================
   INITIALIZATION
========================================= */

document.addEventListener("DOMContentLoaded", () => {

  AppState.anime = animeData;

  loadSavedData();

  setupLoadingScreen();
  setupNavigation();
  setupSearch();
  setupTheme();
  setupLanguage();
  setupMobileMenu();
  setupFavorites();
  setupAnimeDetails();
  setupGenreButtons();
  setupBackToTop();

  renderAllAnime();
  updateStats();
  updateFavoritesUI();

});


/* =========================================
   LOADING SCREEN
========================================= */

function setupLoadingScreen() {

  const loader = document.getElementById("appLoader");

  if (!loader) return;

  setTimeout(() => {

    loader.classList.add("hidden");

    setTimeout(() => {
      loader.remove();
    }, 500);

  }, 900);
}


/* =========================================
   LOCAL STORAGE
========================================= */

function loadSavedData() {

  try {

    const savedFavorites =
      localStorage.getItem("yusufAnimeFavorites");

    const savedTheme =
      localStorage.getItem("yusufAnimeTheme");

    const savedLanguage =
      localStorage.getItem("yusufAnimeLanguage");


    if (savedFavorites) {
      AppState.favorites = JSON.parse(savedFavorites);
    }

    if (savedTheme) {
      AppState.theme = savedTheme;
    }

    if (savedLanguage) {
      AppState.language = savedLanguage;
    }

  } catch (error) {

    console.error(
      "Could not load saved data:",
      error
    );

  }
}


function saveFavorites() {

  localStorage.setItem(
    "yusufAnimeFavorites",
    JSON.stringify(AppState.favorites)
  );

}


/* =========================================
   RENDER ALL ANIME
========================================= */

function renderAllAnime() {

  renderTrending();
  renderLatest();
  renderTopRated();
  renderFavorites();

}


/* =========================================
   ANIME CARD
========================================= */

function createAnimeCard(anime) {

  const isFavorite =
    AppState.favorites.includes(anime.id);

  const card = document.createElement("article");

  card.className = "anime-card";

  card.innerHTML = `

    <div class="anime-card-image">

      <img
        src="${anime.image}"
        alt="${escapeHTML(anime.title)}"
        loading="lazy"
      >

      <div class="anime-card-overlay">

        <button
          class="card-watch-button"
          data-id="${anime.id}"
          type="button"
        >
          ▶
        </button>

      </div>

      <span class="anime-rating">
        ⭐ ${anime.rating}
      </span>

      <button
        class="anime-favorite-button ${
          isFavorite ? "active" : ""
        }"
        data-favorite="${anime.id}"
        type="button"
        aria-label="Favorite"
      >
        ${isFavorite ? "❤️" : "♡"}
      </button>

    </div>

    <div class="anime-card-content">

      <h3>
        ${escapeHTML(anime.title)}
      </h3>

      <div class="anime-card-meta">

        <span>${anime.type}</span>
        <span>${anime.year}</span>
        <span>${anime.episodes} EP</span>

      </div>

      <div class="anime-card-genres">

        ${anime.genres
          .slice(0, 2)
          .map(
            genre =>
              `<span>${escapeHTML(genre)}</span>`
          )
          .join("")}

      </div>

    </div>
  `;


  card.addEventListener("click", event => {

    if (
      event.target.closest(
        ".anime-favorite-button"
      )
    ) {
      return;
    }

    const watchButton =
      event.target.closest(
        ".card-watch-button"
      );

    if (watchButton) {
      openAnimeDetails(anime.id);
      return;
    }

    openAnimeDetails(anime.id);

  });


  const favoriteButton =
    card.querySelector(
      ".anime-favorite-button"
    );


  favoriteButton.addEventListener(
    "click",
    event => {

      event.stopPropagation();

      toggleFavorite(anime.id);

    }
  );


  return card;
}


/* =========================================
   TRENDING
========================================= */

function renderTrending() {

  const grid =
    document.getElementById("trendingGrid");

  if (!grid) return;

  grid.innerHTML = "";

  const trending =
    [...AppState.anime]
      .sort(
        (a, b) =>
          b.rating - a.rating
      )
      .slice(0, 6);

  trending.forEach(anime => {

    grid.appendChild(
      createAnimeCard(anime)
    );

  });


  const empty =
    document.getElementById(
      "trendingEmpty"
    );

  if (empty) {

    empty.classList.toggle(
      "hidden",
      trending.length !== 0
    );

  }

}


/* =========================================
   LATEST
========================================= */

function renderLatest() {

  const grid =
    document.getElementById("latestGrid");

  if (!grid) return;

  grid.innerHTML = "";

  const latest =
    [...AppState.anime]
      .sort(
        (a, b) =>
          b.year - a.year
      )
      .slice(0, 6);

  latest.forEach(anime => {

    grid.appendChild(
      createAnimeCard(anime)
    );

  });

}


/* =========================================
   TOP RATED
========================================= */

function renderTopRated() {

  const grid =
    document.getElementById(
      "topRatedGrid"
    );

  if (!grid) return;

  grid.innerHTML = "";

  const topRated =
    [...AppState.anime]
      .sort(
        (a, b) =>
          b.rating - a.rating
      )
      .slice(0, 6);

  topRated.forEach(anime => {

    grid.appendChild(
      createAnimeCard(anime)
    );

  });

}


/* =========================================
   FAVORITES
========================================= */

function renderFavorites() {

  const grid =
    document.getElementById(
      "favoritesGrid"
    );

  const empty =
    document.getElementById(
      "emptyFavorites"
    );

  if (!grid) return;

  grid.innerHTML = "";

  const favorites =
    AppState.anime.filter(
      anime =>
        AppState.favorites.includes(
          anime.id
        )
    );


  favorites.forEach(anime => {

    grid.appendChild(
      createAnimeCard(anime)
    );

  });


  if (empty) {

    empty.classList.toggle(
      "hidden",
      favorites.length > 0
    );

  }

}


/* =========================================
   FAVORITE SYSTEM
========================================= */

function toggleFavorite(id) {

  const index =
    AppState.favorites.indexOf(id);

  if (index === -1) {

    AppState.favorites.push(id);

    showToast(
      "❤️ Added to Favorites"
    );

  } else {

    AppState.favorites.splice(
      index,
      1
    );

    showToast(
      "💔 Removed from Favorites"
    );

  }


  saveFavorites();

  renderAllAnime();

  updateFavoritesUI();

  if (
    AppState.currentAnime &&
    AppState.currentAnime.id === id
  ) {

    updateDetailsFavoriteButton();

  }

}


function updateFavoritesUI() {

  const count =
    document.getElementById(
      "headerFavoritesCount"
    );

  if (!count) return;

  const total =
    AppState.favorites.length;

  count.textContent = total;

  count.classList.toggle(
    "hidden",
    total === 0
  );

}


/* =========================================
   SEARCH
========================================= */

function setupSearch() {

  const openButton =
    document.getElementById(
      "openSearchButton"
    );

  const heroButton =
    document.getElementById(
      "heroSearchButton"
    );

  const ctaButton =
    document.getElementById(
      "ctaSearchButton"
    );

  const closeButton =
    document.getElementById(
      "closeSearchButton"
    );

  const modal =
    document.getElementById(
      "searchModal"
    );

  const input =
    document.getElementById(
      "searchInput"
    );

  const submit =
    document.getElementById(
      "searchSubmit"
    );


  const openSearch = () => {

    if (!modal) return;

    modal.classList.add("active");

    modal.setAttribute(
      "aria-hidden",
      "false"
    );

    setTimeout(() => {

      input?.focus();

    }, 100);

  };


  const closeSearch = () => {

    if (!modal) return;

    modal.classList.remove("active");

    modal.setAttribute(
      "aria-hidden",
      "true"
    );

  };


  openButton?.addEventListener(
    "click",
    openSearch
  );

  heroButton?.addEventListener(
    "click",
    openSearch
  );

  ctaButton?.addEventListener(
    "click",
    openSearch
  );

  closeButton?.addEventListener(
    "click",
    closeSearch
  );


  modal
    ?.querySelector(".modal-backdrop")
    ?.addEventListener(
      "click",
      closeSearch
    );


  submit?.addEventListener(
    "click",
    performSearch
  );


  input?.addEventListener(
    "keydown",
    event => {

      if (event.key === "Enter") {

        performSearch();

      }

    }
  );


  document
    .querySelectorAll(
      ".search-filter"
    )
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          document
            .querySelectorAll(
              ".search-filter"
            )
            .forEach(
              item =>
                item.classList.remove(
                  "active"
                )
            );

          button.classList.add(
            "active"
          );

          AppState.currentFilter =
            button.dataset.filter;

          performSearch();

        }
      );

    });

}


function performSearch() {

  const input =
    document.getElementById(
      "searchInput"
    );

  const results =
    document.getElementById(
      "searchResults"
    );

  if (!input || !results) return;

  const query =
    input.value
      .trim()
      .toLowerCase();


  let filtered =
    AppState.anime;


  if (AppState.currentFilter !== "all") {

    filtered =
      filtered.filter(
        anime =>
          anime.genres
            .some(
              genre =>
                genre.toLowerCase() ===
                AppState.currentFilter
            )
      );

  }


  if (query) {

    filtered =
      filtered.filter(
        anime =>
          anime.title
            .toLowerCase()
            .includes(query) ||

          anime.genres.some(
            genre =>
              genre
                .toLowerCase()
                .includes(query)
          )
      );

  }


  results.innerHTML = "";


  if (!filtered.length) {

    results.innerHTML = `

      <div class="empty-state">

        <span>🔍</span>

        <h3>No Anime Found</h3>

        <p>
          Try another search.
        </p>

      </div>

    `;

    return;

  }


  filtered.forEach(anime => {

    results.appendChild(
      createAnimeCard(anime)
    );

  });

}


/* =========================================
   ANIME DETAILS
========================================= */

function setupAnimeDetails() {

  const modal =
    document.getElementById(
      "animeDetailsModal"
    );

  const closeButton =
    document.getElementById(
      "closeAnimeDetails"
    );


  closeButton?.addEventListener(
    "click",
    closeAnimeDetails
  );


  modal
    ?.querySelector(
      ".details-backdrop"
    )
    ?.addEventListener(
      "click",
      closeAnimeDetails
    );


  document.addEventListener(
    "keydown",
    event => {

      if (event.key === "Escape") {

        closeAnimeDetails();

      }

    }
  );


  document
    .getElementById(
      "detailsFavoriteButton"
    )
    ?.addEventListener(
      "click",
      () => {

        if (
          AppState.currentAnime
        ) {

          toggleFavorite(
            AppState.currentAnime.id
          );

        }

      }
    );


  document
    .getElementById(
      "detailsWatchButton"
    )
    ?.addEventListener(
      "click",
      () => {

        showToast(
          "▶️ Watch system will be connected next."
        );

      }
    );

}


function openAnimeDetails(id) {

  const anime =
    AppState.anime.find(
      item =>
        item.id === id
    );

  if (!anime) return;

  AppState.currentAnime =
    anime;

  const modal =
    document.getElementById(
      "animeDetailsModal"
    );

  if (!modal) return;


  const title =
    document.getElementById(
      "detailsTitle"
    );

  const type =
    document.getElementById(
      "detailsType"
    );

  const meta =
    document.getElementById(
      "detailsMeta"
    );

  const genres =
    document.getElementById(
      "detailsGenres"
    );

  const description =
    document.getElementById(
      "detailsDescription"
    );

  const poster =
    document.getElementById(
      "detailsPoster"
    );

  const banner =
    document.getElementById(
      "detailsBanner"
    );


  title.textContent =
    anime.title;

  type.textContent =
    anime.type;

  meta.innerHTML = `
    ⭐ ${anime.rating}
    &nbsp; • &nbsp;
    ${anime.year}
    &nbsp; • &nbsp;
    ${anime.episodes} Episodes
    &nbsp; • &nbsp;
    ${anime.status}
  `;


  genres.innerHTML =
    anime.genres
      .map(
        genre =>
          `<span>${escapeHTML(
            genre
          )}</span>`
      )
      .join("");


  description.textContent =
    anime.description;


  poster.style.backgroundImage =
    `url("${anime.image}")`;

  banner.style.backgroundImage =
    `url("${anime.image}")`;


  renderEpisodes(anime);

  updateDetailsFavoriteButton();


  modal.classList.add(
    "active"
  );

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
    document.getElementById(
      "animeDetailsModal"
    );

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

}


function updateDetailsFavoriteButton() {

  const button =
    document.getElementById(
      "detailsFavoriteButton"
    );

  if (
    !button ||
    !AppState.currentAnime
  ) return;


  const favorite =
    AppState.favorites.includes(
      AppState.currentAnime.id
    );


  button.innerHTML =
    favorite
      ? "❤️ Remove from Favorites"
      : "♡ Add to Favorites";

}


/* =========================================
   EPISODES
========================================= */

function renderEpisodes(anime) {

  const grid =
    document.getElementById(
      "detailsEpisodeGrid"
    );

  if (!grid) return;

  grid.innerHTML = "";


  const total =
    Math.min(
      anime.episodes,
      24
    );


  for (
    let i = 1;
    i <= total;
    i++
  ) {

    const episode =
      document.createElement(
        "button"
      );

    episode.className =
      "episode-card";

    episode.type =
      "button";

    episode.innerHTML = `

      <span>
        EP ${i}
      </span>

      <small>
        Episode ${i}
      </small>

    `;


    episode.addEventListener(
      "click",
      () => {

        showToast(
          `▶️ ${anime.title} — Episode ${i}`
        );

      }
    );


    grid.appendChild(
      episode
    );

  }

}


/* =========================================
   NAVIGATION
========================================= */

function setupNavigation() {

  document
    .querySelectorAll(
      ".nav-link"
    )
    .forEach(link => {

      link.addEventListener(
        "click",
        () => {

          document
            .querySelectorAll(
              ".nav-link"
            )
            .forEach(
              item =>
                item.classList.remove(
                  "active"
                )
            );

          link.classList.add(
            "active"
          );

        }
      );

    });


  document
    .querySelectorAll(
      ".section-link-button"
    )
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          const view =
            button.dataset.view;

          const target =
            document.getElementById(
              view
            );

          target?.scrollIntoView({
            behavior: "smooth"
          });

        }
      );

    });

}


/* =========================================
   MOBILE MENU
========================================= */

function setupMobileMenu() {

  const menu =
    document.getElementById(
      "mobileMenu"
    );

  const overlay =
    document.getElementById(
      "mobileMenuOverlay"
    );

  const openButton =
    document.getElementById(
      "openMobileMenu"
    );

  const closeButton =
    document.getElementById(
      "closeMobileMenu"
    );


  const openMenu = () => {

    menu?.classList.add(
      "active"
    );

    overlay?.classList.add(
      "active"
    );

    menu?.setAttribute(
      "aria-hidden",
      "false"
    );

  };


  const closeMenu = () => {

    menu?.classList.remove(
      "active"
    );

    overlay?.classList.remove(
      "active"
    );

    menu?.setAttribute(
      "aria-hidden",
      "true"
    );

  };


  openButton?.addEventListener(
    "click",
    openMenu
  );

  closeButton?.addEventListener(
    "click",
    closeMenu
  );

  overlay?.addEventListener(
    "click",
    closeMenu
  );


  document
    .querySelectorAll(
      ".mobile-navigation a"
    )
    .forEach(link => {

      link.addEventListener(
        "click",
        closeMenu
      );

    });

}


/* =========================================
   THEME
========================================= */

function setupTheme() {

  const button =
    document.getElementById(
      "themeToggle"
    );

  if (
    AppState.theme === "light"
  ) {

    document.body.classList.add(
      "light-theme"
    );

    if (button) {
      button.textContent =
        "☀️";
    }

  }


  button?.addEventListener(
    "click",
    () => {

      const light =
        document.body.classList.toggle(
          "light-theme"
        );

      AppState.theme =
        light
          ? "light"
          : "dark";


      localStorage.setItem(
        "yusufAnimeTheme",
        AppState.theme
      );


      button.textContent =
        light
          ? "☀️"
          : "🌙";

    }
  );

}


/* =========================================
   LANGUAGE
========================================= */

function setupLanguage() {

  const button =
    document.getElementById(
      "languageButton"
    );

  const dropdown =
    document.getElementById(
      "languageDropdown"
    );

  const selected =
    document.getElementById(
      "selectedLanguage"
    );


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


  if (languages[AppState.language]) {

    selected.textContent =
      languages[
        AppState.language
      ];

  }


  button?.addEventListener(
    "click",
    () => {

      dropdown?.classList.toggle(
        "active"
      );

    }
  );


  dropdown
    ?.querySelectorAll(
      "button[data-language]"
    )
    .forEach(item => {

      item.addEventListener(
        "click",
        () => {

          const language =
            item.dataset.language;

          AppState.language =
            language;

          localStorage.setItem(
            "yusufAnimeLanguage",
            language
          );


          selected.textContent =
            languages[language];


          dropdown.classList.remove(
            "active"
          );


          showToast(
            `🌐 Language: ${languages[language]}`
          );

        }
      );

    });


  document.addEventListener(
    "click",
    event => {

      if (
        !event.target.closest(
          ".language-selector"
        )
      ) {

        dropdown?.classList.remove(
          "active"
        );

      }

    }
  );

}


/* =========================================
   GENRES
========================================= */

function setupGenreButtons() {

  document
    .querySelectorAll(
      "[data-genre]"
    )
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          const genre =
            button.dataset.genre;

          openGenreSearch(
            genre
          );

        }
      );

    });

}


function openGenreSearch(genre) {

  const modal =
    document.getElementById(
      "searchModal"
    );

  const input =
    document.getElementById(
      "searchInput"
    );


  if (!modal) return;


  modal.classList.add(
    "active"
  );

  modal.setAttribute(
    "aria-hidden",
    "false"
  );


  if (input) {

    input.value =
      genre;

  }


  AppState.currentFilter =
    "all";


  document
    .querySelectorAll(
      ".search-filter"
    )
    .forEach(
      button =>
        button.classList.toggle(
          "active",
          button.dataset.filter ===
            "all"
        )
    );


  performSearch();

}


/* =========================================
   BACK TO TOP
========================================= */

function setupBackToTop() {

  const button =
    document.getElementById(
      "backToTop"
    );

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


/* =========================================
   STATISTICS
========================================= */

function updateStats() {

  const animeCount =
    document.getElementById(
      "heroAnimeCount"
    );

  const episodeCount =
    document.getElementById(
      "heroEpisodeCount"
    );

  const userCount =
    document.getElementById(
      "heroUserCount"
    );


  const totalEpisodes =
    AppState.anime.reduce(
      (total, anime) =>
        total + anime.episodes,
      0
    );


  if (animeCount) {

    animateNumber(
      animeCount,
      AppState.anime.length
    );

  }


  if (episodeCount) {

    animateNumber(
      episodeCount,
      totalEpisodes
    );

  }


  if (userCount) {

    animateNumber(
      userCount,
      1250
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


/* =========================================
   TOAST
========================================= */

function showToast(message) {

  const container =
    document.getElementById(
      "toastContainer"
    );

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


/* =========================================
   HTML ESCAPE
========================================= */

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
