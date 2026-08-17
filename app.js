/* =========================================
   YUSUF ANIME - MAIN JAVASCRIPT
========================================= */

"use strict";


/* =========================================
   ANIME DATA
========================================= */

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
      "Follow Monkey D. Luffy and his crew on their incredible journey across the Grand Line in search of the legendary One Piece.",
    image:
      "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=800",
    banner:
      "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=1600"
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
      "Naruto returns stronger than ever and faces powerful enemies while fighting to protect his friends and village.",
    image:
      "https://images.unsplash.com/photo-1607604276583-eef5c6d1c8f0?w=800",
    banner:
      "https://images.unsplash.com/photo-1607604276583-eef5c6d1c8f0?w=1600"
  },

  {
    id: 3,
    title: "Demon Slayer",
    type: "TV",
    year: 2019,
    rating: 8.6,
    episodes: 63,
    status: "Ongoing",
    genres: ["Action", "Fantasy", "Adventure"],
    description:
      "Tanjiro begins a dangerous journey to save his sister and defeat the demons responsible for destroying his family.",
    image:
      "https://images.unsplash.com/photo-1614583224978-f3f0c2c1a2a8?w=800",
    banner:
      "https://images.unsplash.com/photo-1614583224978-f3f0c2c1a2a8?w=1600"
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
    description:
      "Yuji Itadori enters the world of cursed spirits and sorcery after becoming the host of a powerful curse.",
    image:
      "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=800",
    banner:
      "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=1600"
  },

  {
    id: 5,
    title: "Attack on Titan",
    type: "TV",
    year: 2013,
    rating: 9.1,
    episodes: 89,
    status: "Completed",
    genres: ["Action", "Drama", "Fantasy"],
    description:
      "Humanity fights for survival behind enormous walls while terrifying Titans threaten everything they know.",
    image:
      "https://images.unsplash.com/photo-1541562232579-512a21360020?w=800",
    banner:
      "https://images.unsplash.com/photo-1541562232579-512a21360020?w=1600"
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
      "A shy student who loves traditional doll making discovers cosplay and forms a surprising friendship with a popular classmate.",
    image:
      "https://images.unsplash.com/photo-1560972550-aba3456b5564?w=800",
    banner:
      "https://images.unsplash.com/photo-1560972550-aba3456b5564?w=1600"
  },

  {
    id: 7,
    title: "Horimiya",
    type: "TV",
    year: 2021,
    rating: 8.4,
    episodes: 13,
    status: "Completed",
    genres: ["Romance", "Comedy", "School"],
    description:
      "Two classmates discover unexpected sides of each other and slowly develop a beautiful relationship.",
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800",
    banner:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1600"
  },

  {
    id: 8,
    title: "Your Lie in April",
    type: "TV",
    year: 2014,
    rating: 8.6,
    episodes: 22,
    status: "Completed",
    genres: ["Romance", "Drama", "School"],
    description:
      "A talented pianist who lost his ability to hear music meets a violinist who changes his world forever.",
    image:
      "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=800",
    banner:
      "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=1600"
  },

  {
    id: 9,
    title: "Spy x Family",
    type: "TV",
    year: 2022,
    rating: 8.5,
    episodes: 37,
    status: "Ongoing",
    genres: ["Comedy", "Action", "Adventure"],
    description:
      "A spy, an assassin and a telepath create a fake family while hiding their extraordinary secrets from one another.",
    image:
      "https://images.unsplash.com/photo-1517849845537-4d257902454a?w=800",
    banner:
      "https://images.unsplash.com/photo-1517849845537-4d257902454a?w=1600"
  },

  {
    id: 10,
    title: "That Time I Got Reincarnated as a Slime",
    type: "TV",
    year: 2018,
    rating: 8.1,
    episodes: 72,
    status: "Ongoing",
    genres: ["Fantasy", "Adventure", "Comedy"],
    description:
      "A man is reincarnated in another world as a powerful slime and begins building his own monster nation.",
    image:
      "https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?w=800",
    banner:
      "https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?w=1600"
  },

  {
    id: 11,
    title: "The Quintessential Quintuplets",
    type: "TV",
    year: 2019,
    rating: 8.5,
    episodes: 24,
    status: "Completed",
    genres: ["Romance", "Comedy", "School"],
    description:
      "A high school student becomes a tutor for five sisters who all struggle academically and have very different personalities.",
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800",
    banner:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1600"
  },

  {
    id: 12,
    title: "Tonikawa",
    type: "TV",
    year: 2020,
    rating: 7.8,
    episodes: 24,
    status: "Ongoing",
    genres: ["Romance", "Comedy"],
    description:
      "A young couple unexpectedly gets married and begins discovering what married life is really like.",
    image:
      "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800",
    banner:
      "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=1600"
  }

];


/* =========================================
   STATE
========================================= */

let favorites = JSON.parse(
  localStorage.getItem("yusufAnimeFavorites") || "[]"
);

let currentAnime = null;

let currentSearchFilter = "all";

let currentTheme =
  localStorage.getItem("yusufAnimeTheme") || "dark";


/* =========================================
   DOM
========================================= */

const $ = (selector) =>
  document.querySelector(selector);

const $$ = (selector) =>
  document.querySelectorAll(selector);


/* =========================================
   INITIALIZE
========================================= */

document.addEventListener("DOMContentLoaded", () => {

  initializeTheme();

  renderAnimeSections();

  updateFavorites();

  setupNavigation();

  setupSearch();

  setupLanguage();

  setupMobileMenu();

  setupAnimeDetails();

  setupGenreButtons();

  setupBackToTop();

  setupLoader();

  updateStats();

});


/* =========================================
   LOADER
========================================= */

function setupLoader() {

  const loader = $("#appLoader");

  if (!loader) return;

  setTimeout(() => {

    loader.classList.add("hidden");

  }, 800);

}


/* =========================================
   THEME
========================================= */

function initializeTheme() {

  document.body.dataset.theme = currentTheme;

  const themeButton = $("#themeToggle");

  if (!themeButton) return;

  themeButton.textContent =
    currentTheme === "dark" ? "☀️" : "🌙";

  themeButton.addEventListener("click", () => {

    currentTheme =
      currentTheme === "dark" ? "light" : "dark";

    document.body.dataset.theme = currentTheme;

    localStorage.setItem(
      "yusufAnimeTheme",
      currentTheme
    );

    themeButton.textContent =
      currentTheme === "dark" ? "☀️" : "🌙";

  });

}


/* =========================================
   RENDER ANIME SECTIONS
========================================= */

function renderAnimeSections() {

  const trending = [...animeData]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 6);

  const latest = [...animeData]
    .sort((a, b) => b.year - a.year)
    .slice(0, 6);

  const topRated = [...animeData]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 6);

  renderGrid("#trendingGrid", trending);

  renderGrid("#latestGrid", latest);

  renderGrid("#topRatedGrid", topRated);

}


/* =========================================
   RENDER GRID
========================================= */

function renderGrid(selector, animeList) {

  const grid = $(selector);

  if (!grid) return;

  grid.innerHTML = "";

  animeList.forEach((anime) => {

    grid.appendChild(
      createAnimeCard(anime)
    );

  });

}


/* =========================================
   ANIME CARD
========================================= */

function createAnimeCard(anime) {

  const card = document.createElement("article");

  card.className = "anime-card";

  const isFavorite =
    favorites.includes(anime.id);

  card.innerHTML = `

    <div class="anime-card-image">

      <img
        src="${anime.image}"
        alt="${anime.title}"
        loading="lazy"
      >

      <span class="anime-card-rating">
        ⭐ ${anime.rating}
      </span>

      <button
        class="favorite-button ${isFavorite ? "active" : ""}"
        data-favorite="${anime.id}"
        type="button"
        aria-label="Add to favorites"
      >
        ${isFavorite ? "❤️" : "♡"}
      </button>

    </div>

    <div class="anime-card-body">

      <span class="anime-card-type">
        ${anime.type}
      </span>

      <h3 class="anime-card-title">
        ${anime.title}
      </h3>

      <div class="anime-card-meta">
        ${anime.year} • ${anime.episodes} Episodes
      </div>

      <button
        class="button button-primary anime-watch-button"
        data-anime="${anime.id}"
        type="button"
      >
        ▶ Watch
      </button>

    </div>

  `;


  const watchButton =
    card.querySelector(".anime-watch-button");

  watchButton.addEventListener("click", () => {

    openAnimeDetails(anime.id);

  });


  const favoriteButton =
    card.querySelector(".favorite-button");

  favoriteButton.addEventListener("click", (event) => {

    event.stopPropagation();

    toggleFavorite(anime.id);

  });


  card.addEventListener("click", (event) => {

    if (
      event.target.closest("button")
    ) return;

    openAnimeDetails(anime.id);

  });


  return card;

}


/* =========================================
   FAVORITES
========================================= */

function toggleFavorite(id) {

  if (favorites.includes(id)) {

    favorites =
      favorites.filter(
        favoriteId => favoriteId !== id
      );

    showToast("Removed from favorites");

  } else {

    favorites.push(id);

    showToast("Added to favorites ❤️");

  }

  localStorage.setItem(
    "yusufAnimeFavorites",
    JSON.stringify(favorites)
  );

  updateFavorites();

  renderAnimeSections();

}


/* =========================================
   UPDATE FAVORITES
========================================= */

function updateFavorites() {

  const grid =
    $("#favoritesGrid");

  const empty =
    $("#emptyFavorites");

  const count =
    $("#headerFavoritesCount");


  if (count) {

    count.textContent =
      favorites.length;

    count.classList.toggle(
      "hidden",
      favorites.length === 0
    );

  }


  if (!grid) return;


  const favoriteAnime =
    animeData.filter(
      anime => favorites.includes(anime.id)
    );


  grid.innerHTML = "";


  favoriteAnime.forEach(anime => {

    grid.appendChild(
      createAnimeCard(anime)
    );

  });


  if (empty) {

    empty.classList.toggle(
      "hidden",
      favoriteAnime.length > 0
    );

  }

}


/* =========================================
   SEARCH
========================================= */

function setupSearch() {

  const openButtons = [
    $("#openSearchButton"),
    $("#heroSearchButton"),
    $("#ctaSearchButton")
  ].filter(Boolean);


  openButtons.forEach(button => {

    button.addEventListener(
      "click",
      openSearch
    );

  });


  const closeButton =
    $("#closeSearchButton");

  if (closeButton) {

    closeButton.addEventListener(
      "click",
      closeSearch
    );

  }


  const backdrop =
    $(".modal-backdrop");

  if (backdrop) {

    backdrop.addEventListener(
      "click",
      closeSearch
    );

  }


  const input =
    $("#searchInput");

  const submit =
    $("#searchSubmit");


  if (submit) {

    submit.addEventListener(
      "click",
      performSearch
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
      performSearch
    );

  }


  $$(".search-filter").forEach(
    button => {

      button.addEventListener(
        "click",
        () => {

          $$(".search-filter").forEach(
            item =>
              item.classList.remove("active")
          );

          button.classList.add("active");

          currentSearchFilter =
            button.dataset.filter;

          performSearch();

        }
      );

    }
  );

}


/* =========================================
   OPEN SEARCH
========================================= */

function openSearch() {

  const modal =
    $("#searchModal");

  if (!modal) return;

  modal.classList.add("active");

  modal.setAttribute(
    "aria-hidden",
    "false"
  );

  setTimeout(() => {

    $("#searchInput")?.focus();

  }, 100);

}


/* =========================================
   CLOSE SEARCH
========================================= */

function closeSearch() {

  const modal =
    $("#searchModal");

  if (!modal) return;

  modal.classList.remove("active");

  modal.setAttribute(
    "aria-hidden",
    "true"
  );

}


/* =========================================
   SEARCH
========================================= */

function performSearch() {

  const input =
    $("#searchInput");

  const results =
    $("#searchResults");

  if (!input || !results) return;


  const query =
    input.value.trim().toLowerCase();


  let filtered =
    [...animeData];


  if (currentSearchFilter !== "all") {

    filtered =
      filtered.filter(anime =>
        anime.genres.some(
          genre =>
            genre.toLowerCase() ===
            currentSearchFilter
        )
      );

  }


  if (query) {

    filtered =
      filtered.filter(anime =>
        anime.title
          .toLowerCase()
          .includes(query)
      );

  }


  results.innerHTML = "";


  if (filtered.length === 0) {

    results.innerHTML = `

      <div class="empty-state">

        <span>🔍</span>

        <h3>
          No anime found
        </h3>

        <p>
          Try another search.
        </p>

      </div>

    `;

    return;

  }


  filtered.forEach(anime => {

    results.appendChild(
      createSearchResult(anime)
    );

  });

}


/* =========================================
   SEARCH RESULT
========================================= */

function createSearchResult(anime) {

  const item =
    document.createElement("div");

  item.className =
    "search-result-item";


  item.innerHTML = `

    <img
      src="${anime.image}"
      alt="${anime.title}"
    >

    <div>

      <h3>
        ${anime.title}
      </h3>

      <p>
        ⭐ ${anime.rating}
        • ${anime.year}
        • ${anime.episodes} Episodes
      </p>

    </div>

    <button
      type="button"
      class="button button-primary"
    >
      View
    </button>

  `;


  item
    .querySelector("button")
    .addEventListener("click", () => {

      closeSearch();

      openAnimeDetails(anime.id);

    });


  return item;

}


/* =========================================
   LANGUAGE
========================================= */

function setupLanguage() {

  const button =
    $("#languageButton");

  const dropdown =
    $("#languageDropdown");

  if (!button || !dropdown) return;


  button.addEventListener(
    "click",
    event => {

      event.stopPropagation();

      dropdown.classList.toggle("active");

      button.setAttribute(
        "aria-expanded",
        dropdown.classList.contains("active")
      );

    }
  );


  dropdown
    .querySelectorAll("button")
    .forEach(languageButton => {

      languageButton.addEventListener(
        "click",
        () => {

          const language =
            languageButton.dataset.language;

          const text =
            languageButton.textContent.trim();

          const selected =
            $("#selectedLanguage");

          if (selected) {

            selected.textContent =
              text.replace(
                /^[^\p{L}\p{N}]*/u,
                ""
              );

          }

          dropdown.classList.remove(
            "active"
          );

          showToast(
            `Language changed`
          );

          document.documentElement.lang =
            language;

        }
      );

    });


  document.addEventListener(
    "click",
    () => {

      dropdown.classList.remove(
        "active"
      );

    }
  );

}


/* =========================================
   MOBILE MENU
========================================= */

function setupMobileMenu() {

  const menu =
    $("#mobileMenu");

  const overlay =
    $("#mobileMenuOverlay");

  const open =
    $("#openMobileMenu");

  const close =
    $("#closeMobileMenu");


  if (!menu) return;


  function openMenu() {

    menu.classList.add("active");

    overlay?.classList.add("active");

    menu.setAttribute(
      "aria-hidden",
      "false"
    );

  }


  function closeMenu() {

    menu.classList.remove("active");

    overlay?.classList.remove("active");

    menu.setAttribute(
      "aria-hidden",
      "true"
    );

  }


  open?.addEventListener(
    "click",
    openMenu
  );

  close?.addEventListener(
    "click",
    closeMenu
  );

  overlay?.addEventListener(
    "click",
    closeMenu
  );


  $$(".mobile-navigation a")
    .forEach(link => {

      link.addEventListener(
        "click",
        closeMenu
      );

    });

}


/* =========================================
   ANIME DETAILS
========================================= */

function setupAnimeDetails() {

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

        if (!currentAnime) return;

        toggleFavorite(
          currentAnime.id
        );

        updateDetailsFavoriteButton();

      }
    );


  $("#detailsWatchButton")
    ?.addEventListener(
      "click",
      () => {

        if (!currentAnime) return;

        showToast(
          `Starting ${currentAnime.title} ▶️`
        );

      }
    );


  $("#detailsSeasonSelect")
    ?.addEventListener(
      "change",
      renderEpisodes
    );

}


/* =========================================
   OPEN DETAILS
========================================= */

function openAnimeDetails(id) {

  const anime =
    animeData.find(
      item => item.id === Number(id)
    );

  if (!anime) return;

  currentAnime = anime;


  const modal =
    $("#animeDetailsModal");

  if (!modal) return;


  const banner =
    $("#detailsBanner");

  const poster =
    $("#detailsPoster");

  if (banner) {

    banner.style.backgroundImage =
      `url("${anime.banner}")`;

  }


  if (poster) {

    poster.style.backgroundImage =
      `url("${anime.image}")`;

  }


  $("#detailsType").textContent =
    anime.type;

  $("#detailsTitle").textContent =
    anime.title;


  $("#detailsMeta").innerHTML = `

    <span>⭐ ${anime.rating}</span>

    <span>📅 ${anime.year}</span>

    <span>🎬 ${anime.episodes} Episodes</span>

    <span>● ${anime.status}</span>

  `;


  $("#detailsGenres").innerHTML =
    anime.genres
      .map(
        genre =>
          `<span>${genre}</span>`
      )
      .join("");


  $("#detailsDescription").textContent =
    anime.description;


  updateDetailsFavoriteButton();

  renderEpisodes();


  modal.classList.add("active");

  modal.setAttribute(
    "aria-hidden",
    "false"
  );


  document.body.classList.add(
    "modal-open"
  );

}


/* =========================================
   CLOSE DETAILS
========================================= */

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

}


/* =========================================
   DETAILS FAVORITE BUTTON
========================================= */

function updateDetailsFavoriteButton() {

  const button =
    $("#detailsFavoriteButton");

  if (!button || !currentAnime)
    return;


  const favorite =
    favorites.includes(
      currentAnime.id
    );


  button.innerHTML =
    favorite
      ? "❤️ Remove from Favorites"
      : "♡ Add to Favorites";

}


/* =========================================
   EPISODES
========================================= */

function renderEpisodes() {

  const grid =
    $("#detailsEpisodeGrid");

  if (!grid || !currentAnime)
    return;


  grid.innerHTML = "";


  const total =
    Math.min(
      currentAnime.episodes,
      24
    );


  for (
    let episode = 1;
    episode <= total;
    episode++
  ) {

    const button =
      document.createElement("button");

    button.className =
      "episode-button";

    button.type =
      "button";


    button.innerHTML = `

      <span>
        EP ${episode}
      </span>

      <strong>
        Episode ${episode}
      </strong>

    `;


    button.addEventListener(
      "click",
      () => {

        showToast(
          `${currentAnime.title} — Episode ${episode} ▶️`
        );

      }
    );


    grid.appendChild(button);

  }

}


/* =========================================
   GENRES
========================================= */

function setupGenreButtons() {

  $$("[data-genre]")
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          const genre =
            button.dataset.genre;

          if (!genre) return;

          openSearch();

          const input =
            $("#searchInput");

          if (input) {

            input.value = "";

          }


          currentSearchFilter =
            genre.toLowerCase();


          $$(".search-filter")
            .forEach(
              filter =>
                filter.classList.remove(
                  "active"
                )
            );


          const matchingFilter =
            document.querySelector(
              `[data-filter="${genre.toLowerCase()}"]`
            );


          if (matchingFilter) {

            matchingFilter.classList.add(
              "active"
            );

          } else {

            currentSearchFilter =
              "all";

          }


          performSearch();

        }
      );

    });

}


/* =========================================
   NAVIGATION
========================================= */

function setupNavigation() {

  $$(".nav-link")
    .forEach(link => {

      link.addEventListener(
        "click",
        () => {

          $$(".nav-link")
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


  $$(".section-link-button")
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          const view =
            button.dataset.view;

          if (!view) return;

          const section =
            document.querySelector(
              `#${view}`
            );

          section?.scrollIntoView({
            behavior: "smooth"
          });

        }
      );

    });

}


/* =========================================
   BACK TO TOP
========================================= */

function setupBackToTop() {

  const button =
    $("#backToTop");

  if (!button) return;


  window.addEventListener(
    "scroll",
    () => {

      button.classList.toggle(
        "active",
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
   STATS
========================================= */

function updateStats() {

  const animeCount =
    $("#heroAnimeCount");

  const episodeCount =
    $("#heroEpisodeCount");

  const userCount =
    $("#heroUserCount");


  if (animeCount) {

    animeCount.textContent =
      animeData.length + "+";

  }


  if (episodeCount) {

    const totalEpisodes =
      animeData.reduce(
        (total, anime) =>
          total + anime.episodes,
        0
      );

    episodeCount.textContent =
      totalEpisodes + "+";

  }


  if (userCount) {

    userCount.textContent =
      "1K+";

  }

}


/* =========================================
   TOAST
========================================= */

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
   ESC KEY
========================================= */

document.addEventListener(
  "keydown",
  event => {

    if (event.key !== "Escape")
      return;

    closeSearch();

    closeAnimeDetails();

    $("#mobileMenu")
      ?.classList.remove(
        "active"
      );

    $("#mobileMenuOverlay")
      ?.classList.remove(
        "active"
      );

  }
);
