const animeData = [
  {
    id: 1,
    title: "Attack on Titan",
    genres: ["Action", "Drama", "Adventure"],
    year: 2013,
    rating: "9.1",
    episodes: 25,
    type: "TV",
    poster: "poster-1",
    description:
      "چیرۆکی جیهانێک کە مرۆڤەکان لە پشت دیوارە گەورەکان دەژین و لە دژی تایتانەکان دەجەنگن."
  },

  {
    id: 2,
    title: "Demon Slayer",
    genres: ["Action", "Fantasy", "Adventure"],
    year: 2019,
    rating: "8.7",
    episodes: 26,
    type: "TV",
    poster: "poster-2",
    description:
      "تەنژیرو دەچێتە ڕێگایەکی مەترسیدار بۆ ڕزگارکردنی خوشکەکەی و ڕووبەڕووبوونەوەی شەیتانەکان."
  },

  {
    id: 3,
    title: "Jujutsu Kaisen",
    genres: ["Action", "Fantasy"],
    year: 2020,
    rating: "8.6",
    episodes: 24,
    type: "TV",
    poster: "poster-3",
    description:
      "یوجی ئیتادۆری لە جیهانی جوجوتسو دەچێتە ناو جەنگێکی تاریک لەگەڵ نەفرەتەکان."
  },

  {
    id: 4,
    title: "One Piece",
    genres: ["Action", "Adventure", "Comedy"],
    year: 1999,
    rating: "9.0",
    episodes: 1000,
    type: "TV",
    poster: "poster-4",
    description:
      "Monkey D. Luffy و هاوڕێکانی لە گەڕان بەدوای One Piece ـدا دەگەڕێن بۆ بوون بە Pirate King."
  },

  {
    id: 5,
    title: "Naruto",
    genres: ["Action", "Adventure", "Comedy"],
    year: 2002,
    rating: "8.4",
    episodes: 220,
    type: "TV",
    poster: "poster-5",
    description:
      "ناروتۆ کۆششی زۆر دەکات بۆ ئەوەی ببێتە Hokage و ناسراوترین ninja ـی کۆنۆها."
  },

  {
    id: 6,
    title: "My Dress-Up Darling",
    genres: ["Romance", "Comedy", "School"],
    year: 2022,
    rating: "8.2",
    episodes: 12,
    type: "TV",
    poster: "poster-6",
    description:
      "گوژۆ و مارین لە ڕێگەی cosplay ـەوە دەبنە هاوڕێ و چیرۆکێکی خۆش و ڕۆمانسی دەست پێدەکات."
  },

  {
    id: 7,
    title: "Spy x Family",
    genres: ["Comedy", "Action"],
    year: 2022,
    rating: "8.4",
    episodes: 25,
    type: "TV",
    poster: "poster-7",
    description:
      "خێزانێکی نامۆ کە هەر یەکێکیان نهێنییەکی تایبەتی هەیە."
  },

  {
    id: 8,
    title: "Your Name",
    genres: ["Romance", "Drama", "Fantasy"],
    year: 2016,
    rating: "8.8",
    episodes: 1,
    type: "Movie",
    poster: "poster-8",
    description:
      "دوو گەنج بە شێوەیەکی سەیر شوێنی ژیانی یەکتری دەگرن و چیرۆکێکی خۆش و کاریگەر دەست پێدەکات."
  },

  {
    id: 9,
    title: "Hunter x Hunter",
    genres: ["Action", "Adventure", "Fantasy"],
    year: 2011,
    rating: "9.0",
    episodes: 148,
    type: "TV",
    poster: "poster-9",
    description:
      "گون دەچێتە گەشتێکی گەورە بۆ بوون بە Hunter و دۆزینەوەی باوکی خۆی."
  },

  {
    id: 10,
    title: "Haikyuu!!",
    genres: ["Comedy", "Drama", "School"],
    year: 2014,
    rating: "8.7",
    episodes: 25,
    type: "TV",
    poster: "poster-10",
    description:
      "هیناتا خەونی ئەوەیە ببێتە یەکێک لە باشترین volleyball player ـەکان."
  }
];


/* ================= STORAGE ================= */

let favorites =
  JSON.parse(localStorage.getItem("yusufAnimeFavorites")) || [];

let history =
  JSON.parse(localStorage.getItem("yusufAnimeHistory")) || [];

let currentAnime = null;
let currentEpisode = 1;


/* ================= ELEMENTS ================= */

const loader = document.getElementById("loader");

const trendingGrid =
  document.getElementById("trendingGrid");

const latestGrid =
  document.getElementById("latestGrid");

const topGrid =
  document.getElementById("topGrid");

const continueGrid =
  document.getElementById("continueGrid");

const favoritesGrid =
  document.getElementById("favoritesGrid");

const emptyFavorites =
  document.getElementById("emptyFavorites");

const continueSection =
  document.getElementById("continueSection");

const detailsPage =
  document.getElementById("detailsPage");

const watchPage =
  document.getElementById("watchPage");

const episodeGrid =
  document.getElementById("episodeGrid");

const searchModal =
  document.getElementById("searchModal");

const searchInput =
  document.getElementById("searchInput");

const searchResults =
  document.getElementById("searchResults");


/* ================= LOADER ================= */

window.addEventListener("load", () => {

  setTimeout(() => {
    loader.classList.add("hide");
  }, 700);

});


/* ================= CARD ================= */

function createAnimeCard(anime) {

  const card = document.createElement("article");

  card.className = "anime-card";

  card.innerHTML = `

    <div class="poster ${anime.poster}"
         data-letter="${anime.title.charAt(0)}">

      <span class="card-top">
        ${anime.type}
      </span>

      <span class="card-bottom">
        ⭐ ${anime.rating}
      </span>

      <button class="card-play">
        ▶
      </button>

    </div>

    <div class="card-info">

      <h3>${anime.title}</h3>

      <p>
        ${anime.year} •
        ${anime.genres.slice(0,2).join(" • ")}
      </p>

    </div>
  `;


  card.addEventListener("click", () => {

    openDetails(anime.id);

  });


  return card;
}


/* ================= RENDER ================= */

function renderGrid(container, list) {

  container.innerHTML = "";

  list.forEach(anime => {

    container.appendChild(
      createAnimeCard(anime)
    );

  });

}


/* ================= HOME DATA ================= */

function renderHome() {

  renderGrid(
    trendingGrid,
    animeData.slice(0, 5)
  );

  renderGrid(
    latestGrid,
    [...animeData].reverse().slice(0, 5)
  );

  renderGrid(
    topGrid,
    [...animeData]
      .sort((a,b) =>
        parseFloat(b.rating) -
        parseFloat(a.rating)
      )
      .slice(0,5)
  );

  renderFavorites();

  renderHistory();

}


/* ================= FAVORITES ================= */

function saveFavorites() {

  localStorage.setItem(
    "yusufAnimeFavorites",
    JSON.stringify(favorites)
  );

}


function toggleFavorite(id) {

  if (favorites.includes(id)) {

    favorites =
      favorites.filter(x => x !== id);

  } else {

    favorites.push(id);

  }

  saveFavorites();

  renderFavorites();

  updateFavoriteButton();

}


function renderFavorites() {

  const list =
    animeData.filter(anime =>
      favorites.includes(anime.id)
    );

  favoritesGrid.innerHTML = "";

  if (!list.length) {

    emptyFavorites.style.display =
      "block";

    return;

  }

  emptyFavorites.style.display =
    "none";

  renderGrid(
    favoritesGrid,
    list
  );

}


/* ================= HISTORY ================= */

function saveHistory(animeId, episode) {

  history =
    history.filter(
      item => item.animeId !== animeId
    );

  history.unshift({
    animeId,
    episode
  });

  history =
    history.slice(0, 10);

  localStorage.setItem(
    "yusufAnimeHistory",
    JSON.stringify(history)
  );

}


function renderHistory() {

  if (!history.length) {

    continueSection.classList.add(
      "hidden"
    );

    return;

  }

  continueSection.classList.remove(
    "hidden"
  );

  continueGrid.innerHTML = "";

  history.forEach(item => {

    const anime =
      animeData.find(
        x => x.id === item.animeId
      );

    if (!anime) return;

    const card =
      createAnimeCard(anime);

    const info =
      card.querySelector(".card-info");

    info.innerHTML += `
      <p>
        ⏯️ ئەڵقەی ${item.episode}
      </p>
    `;

    continueGrid.appendChild(card);

  });

}


/* ================= DETAILS ================= */

function openDetails(id) {

  const anime =
    animeData.find(x => x.id === id);

  if (!anime) return;

  currentAnime = anime;

  document.body.style.overflow =
    "hidden";

  detailsPage.classList.add("show");

  document.getElementById(
    "detailsPoster"
  ).className =
    `details-poster ${anime.poster}`;

  document.getElementById(
    "detailsPoster"
  ).setAttribute(
    "data-letter",
    anime.title.charAt(0)
  );

  document.getElementById(
    "detailsTitle"
  ).textContent =
    anime.title;

  document.getElementById(
    "detailsType"
  ).textContent =
    anime.type;

  document.getElementById(
    "detailsDescription"
  ).textContent =
    anime.description;

  document.getElementById(
    "detailsMeta"
  ).innerHTML = `

    <span>⭐ ${anime.rating}</span>

    <span>📅 ${anime.year}</span>

    <span>📺 ${anime.episodes} Episodes</span>

    <span>🎭 ${anime.genres.join(" • ")}</span>

  `;

  renderEpisodes();

  updateFavoriteButton();

}


function closeDetails() {

  detailsPage.classList.remove("show");

  document.body.style.overflow =
    "auto";

}


document.getElementById(
  "closeDetails"
).addEventListener(
  "click",
  closeDetails
);


/* ================= EPISODES ================= */

function renderEpisodes() {

  episodeGrid.innerHTML = "";

  if (!currentAnime) return;

  const total =
    Math.min(currentAnime.episodes, 100);

  for (let i = 1; i <= total; i++) {

    const button =
      document.createElement("button");

    button.className =
      "episode-button";

    button.textContent =
      `Episode ${i}`;

    const watched =
      history.find(
        x =>
          x.animeId === currentAnime.id &&
          x.episode === i
      );

    if (watched) {

      button.classList.add("watched");

    }

    button.addEventListener(
      "click",
      () => {

        openWatch(
          currentAnime,
          i
        );

      }
    );

    episodeGrid.appendChild(
      button
    );

  }

}


/* ================= WATCH ================= */

function openWatch(anime, episode) {

  currentAnime = anime;

  currentEpisode = episode;

  closeDetails();

  watchPage.classList.add("show");

  document.body.style.overflow =
    "hidden";

  document.getElementById(
    "watchAnime"
  ).textContent =
    anime.title;

  document.getElementById(
    "watchEpisode"
  ).textContent =
    `Episode ${episode}`;

  document.getElementById(
    "watchTitle"
  ).textContent =
    `${anime.title} — Episode ${episode}`;

  saveHistory(
    anime.id,
    episode
  );

  renderHistory();

}


document.getElementById(
  "closeWatch"
).addEventListener(
  "click",
  () => {

    watchPage.classList.remove(
      "show"
    );

    document.body.style.overflow =
      "auto";

  }
);


/* ================= NEXT / PREVIOUS ================= */

document.getElementById(
  "nextEpisode"
).addEventListener(
  "click",
  () => {

    if (!currentAnime) return;

    if (
      currentEpisode <
      currentAnime.episodes
    ) {

      openWatch(
        currentAnime,
        currentEpisode + 1
      );

    }

  }
);


document.getElementById(
  "previousEpisode"
).addEventListener(
  "click",
  () => {

    if (!currentAnime) return;

    if (currentEpisode > 1) {

      openWatch(
        currentAnime,
        currentEpisode - 1
      );

    }

  }
);


/* ================= PLAY FIRST ================= */

document.getElementById(
  "detailsPlay"
).addEventListener(
  "click",
  () => {

    if (!currentAnime) return;

    openWatch(
      currentAnime,
      1
    );

  }
);


/* ================= FAVORITE BUTTON ================= */

function updateFavoriteButton() {

  const button =
    document.getElementById(
      "detailsFavorite"
    );

  if (!currentAnime) return;

  if (
    favorites.includes(
      currentAnime.id
    )
  ) {

    button.textContent =
      "❤️ لە دڵخوازەکاندا";

  } else {

    button.textContent =
      "♡ زیادکردن بۆ دڵخوازەکان";

  }

}


document.getElementById(
  "detailsFavorite"
).addEventListener(
  "click",
  () => {

    if (!currentAnime) return;

    toggleFavorite(
      currentAnime.id
    );

  }
);


/* ================= SEARCH ================= */

function openSearch() {

  searchModal.classList.add("show");

  setTimeout(() => {

    searchInput.focus();

  }, 100);

}


function closeSearch() {

  searchModal.classList.remove(
    "show"
  );

  searchInput.value = "";

  searchResults.innerHTML = "";

}


document.getElementById(
  "searchButton"
).addEventListener(
  "click",
  openSearch
);


document.getElementById(
  "closeSearch"
).addEventListener(
  "click",
  closeSearch
);


function searchAnime() {

  const query =
    searchInput.value
      .trim()
      .toLowerCase();

  if (!query) {

    searchResults.innerHTML =
      "<p>ناوی Anime بنووسە.</p>";

    return;

  }

  const results =
    animeData.filter(anime => {

      return (

        anime.title
          .toLowerCase()
          .includes(query)

        ||

        anime.genres.some(
          genre =>
            genre
              .toLowerCase()
              .includes(query)
        )

      );

    });

  searchResults.innerHTML = "";

  if (!results.length) {

    searchResults.innerHTML = `
      <div class="search-result">
        😔 هیچ Anime ـێک نەدۆزرایەوە.
      </div>
    `;

    return;

  }

  results.forEach(anime => {

    const result =
      document.createElement("div");

    result.className =
      "search-result";

    result.innerHTML = `
      <strong>
        ${anime.title}
      </strong>

      <small>
        ⭐ ${anime.rating}
        • ${anime.year}
      </small>
    `;

    result.addEventListener(
      "click",
      () => {

        closeSearch();

        openDetails(
          anime.id
        );

      }
    );

    searchResults.appendChild(
      result
    );

  });

}


document.getElementById(
  "doSearch"
).addEventListener(
  "click",
  searchAnime
);


searchInput.addEventListener(
  "keydown",
  event => {

    if (
      event.key === "Enter"
    ) {

      searchAnime();

    }

  }
);


/* ================= GENRES ================= */

document.querySelectorAll(
  "[data-genre]"
).forEach(button => {

  button.addEventListener(
    "click",
    () => {

      const genre =
        button.dataset.genre;

      const results =
        animeData.filter(
          anime =>
            anime.genres.includes(
              genre
            )
        );

      trendingGrid.innerHTML = "";

      renderGrid(
        trendingGrid,
        results
      );

      document.getElementById(
        "trending"
      ).scrollIntoView({
        behavior: "smooth"
      });

    }
  );

});


/* ================= THEME ================= */

const themeButton =
  document.getElementById(
    "themeButton"
  );

let savedTheme =
  localStorage.getItem(
    "yusufAnimeTheme"
  );

if (savedTheme === "light") {

  document.body.classList.add(
    "light"
  );

  themeButton.textContent =
    "☀️";

}


themeButton.addEventListener(
  "click",
  () => {

    document.body.classList.toggle(
      "light"
    );

    const light =
      document.body.classList.contains(
        "light"
      );

    localStorage.setItem(
      "yusufAnimeTheme",
      light ? "light" : "dark"
    );

    themeButton.textContent =
      light ? "☀️" : "🌙";

  }
);


/* ================= HEADER FAVORITES ================= */

document.getElementById(
  "favoriteHeader"
).addEventListener(
  "click",
  () => {

    document.getElementById(
      "favorites"
    ).scrollIntoView({
      behavior: "smooth"
    });

  }
);


/* ================= MOBILE MENU ================= */

const mobileMenu =
  document.getElementById(
    "mobileMenu"
  );

document.getElementById(
  "menuButton"
).addEventListener(
  "click",
  () => {

    mobileMenu.classList.toggle(
      "open"
    );

  }
);


document.getElementById(
  "closeMenu"
).addEventListener(
  "click",
  () => {

    mobileMenu.classList.remove(
      "open"
    );

  }
);


document.querySelectorAll(
  "#mobileMenu a"
).forEach(link => {

  link.addEventListener(
    "click",
    () => {

      mobileMenu.classList.remove(
        "open"
      );

    }
  );

});


/* ================= TOP BUTTON ================= */

const topButton =
  document.getElementById(
    "topButton"
  );

window.addEventListener(
  "scroll",
  () => {

    if (window.scrollY > 500) {

      topButton.classList.add(
        "show"
      );

    } else {

      topButton.classList.remove(
        "show"
      );

    }

  }
);


topButton.addEventListener(
  "click",
  () => {

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  }
);


/* ================= NAV ACTIVE ================= */

const sections =
  document.querySelectorAll(
    "main section[id]"
  );

const navLinks =
  document.querySelectorAll(
    ".desktop-nav a"
  );

window.addEventListener(
  "scroll",
  () => {

    let current = "";

    sections.forEach(section => {

      const top =
        section.offsetTop - 150;

      if (
        window.scrollY >= top
      ) {

        current =
          section.getAttribute(
            "id"
          );

      }

    });

    navLinks.forEach(link => {

      link.classList.remove(
        "active"
      );

      if (
        link.getAttribute(
          "href"
        ) === `#${current}`
      ) {

        link.classList.add(
          "active"
        );

      }

    });

  }
);


/* ================= ESC KEY ================= */

document.addEventListener(
  "keydown",
  event => {

    if (
      event.key === "Escape"
    ) {

      closeSearch();

      closeDetails();

      watchPage.classList.remove(
        "show"
      );

      mobileMenu.classList.remove(
        "open"
      );

      document.body.style.overflow =
        "auto";

    }

  }
);


/* ================= START ================= */

renderHome();
