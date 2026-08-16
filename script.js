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
/* ================= SEARCH FIX ================= */

document.addEventListener("DOMContentLoaded", function () {

  const searchButton = document.getElementById("searchButton");
  const searchModal = document.getElementById("searchModal");
  const closeSearch = document.getElementById("closeSearch");
  const doSearch = document.getElementById("doSearch");
  const searchInput = document.getElementById("searchInput");
  const searchResults = document.getElementById("searchResults");

  if (!searchButton) return;

  searchButton.onclick = function () {
    searchModal.classList.add("show");

    setTimeout(function () {
      searchInput.focus();
    }, 100);
  };

  closeSearch.onclick = function () {
    searchModal.classList.remove("show");
    searchInput.value = "";
    searchResults.innerHTML = "";
  };

  function runSearch() {

    const text =
      searchInput.value
        .trim()
        .toLowerCase();

    if (!text) {
      searchResults.innerHTML =
        `<div class="search-result">
          ✍️ تکایە ناوی Anime بنووسە.
        </div>`;
      return;
    }

    const results = animeData.filter(function (anime) {

      const title =
        anime.title.toLowerCase();

      const genres =
        anime.genres.join(" ").toLowerCase();

      return (
        title.includes(text) ||
        genres.includes(text)
      );

    });

    searchResults.innerHTML = "";

    if (results.length === 0) {

      searchResults.innerHTML =
        `<div class="search-result">
          😔 هیچ Anime ـێک نەدۆزرایەوە.
        </div>`;

      return;
    }

    results.forEach(function (anime) {

      const item =
        document.createElement("div");

      item.className =
        "search-result";

      item.innerHTML = `
        <strong>${anime.title}</strong>
        <br>
        <small>
          ⭐ ${anime.rating}
          • ${anime.year}
          • ${anime.type}
        </small>
      `;

      item.onclick = function () {

        searchModal.classList.remove("show");

        if (typeof openDetails === "function") {
          openDetails(anime.id);
        }

      };

      searchResults.appendChild(item);

    });

  }

  doSearch.onclick = runSearch;

  searchInput.addEventListener(
    "keydown",
    function (event) {

      if (event.key === "Enter") {
        runSearch();
      }

    }
  );

});
/* ================= LANGUAGE SYSTEM ================= */

const translations = {

  en: {
    home: "Home",
    trending: "Trending",
    latest: "Latest",
    genres: "Genres",
    favorites: "Favorites",
    trendingTitle: "Popular Anime",
    latestTitle: "Latest Anime",
    topTitle: "Best Anime",
    genresTitle: "Browse Genres",
    favoritesTitle: "My Favorites",
    search: "Search Anime",
    searchPlaceholder: "Search anime...",
    searchButton: "Search",
    watchNow: "Watch Now",
    addFavorite: "Add to Favorites",
    episodes: "Episodes",
    back: "Back",
    previous: "Previous",
    next: "Next",
    continueWatching: "Continue Watching",
    noFavorites: "No Favorites Yet",
    noFavoritesText:
      "Add anime to your favorites and they will appear here.",
    explore: "Explore Anime",
    findAnime: "Find Anime",
    welcome: "WELCOME TO YUSUF ANIME",
    discover: "Discover",
    animeWorld: "Anime World.",
    heroText:
      "Discover your favorite anime, explore new stories and enjoy an amazing anime experience.",
    browse: "Browse Genres",
    loading: "Loading..."
  },


  ku: {
    home: "سەرەتا",
    trending: "بەناوبانگەکان",
    latest: "نوێترینەکان",
    genres: "جۆرەکان",
    favorites: "دڵخوازەکان",
    trendingTitle: "ئەنیمییە بەناوبانگەکان",
    latestTitle: "نوێترین ئەنیمییەکان",
    topTitle: "باشترین ئەنیمییەکان",
    genresTitle: "گەڕان بە جۆر",
    favoritesTitle: "دڵخوازەکانم",
    search: "گەڕان",
    searchPlaceholder: "ناوی ئەنیمی بنووسە...",
    searchButton: "گەڕان",
    watchNow: "ئێستا بیبینە",
    addFavorite: "زیادکردن بۆ دڵخوازەکان",
    episodes: "ئەڵقەکان",
    back: "گەڕانەوە",
    previous: "ئەڵقەی پێشوو",
    next: "ئەڵقەی دواتر",
    continueWatching: "بەردەوام بە لە بینین",
    noFavorites: "هێشتا هیچ دڵخوازێکت نییە",
    noFavoritesText:
      "ئەنیمی زیاد بکە بۆ دڵخوازەکانت تا لێرە نیشان بدرێت.",
    explore: "گەڕان بە ئەنیمی",
    findAnime: "دۆزینەوەی ئەنیمی",
    welcome: "بەخێربێیت بۆ YUSUF ANIME",
    discover: "بدۆزەرەوە",
    animeWorld: "جیهانی ئەنیمی.",
    heroText:
      "ئەنیمییە دڵخوازەکانت بدۆزەرەوە، چیرۆکی نوێ بناسە و ئەزموونێکی جوانی ئەنیمی هەبێت.",
    browse: "گەڕان بە جۆر",
    loading: "چاوەڕێ بکە..."
  },


  ar: {
    home: "الرئيسية",
    trending: "الأكثر شهرة",
    latest: "الأحدث",
    genres: "التصنيفات",
    favorites: "المفضلة",
    trendingTitle: "الأنمي الشهير",
    latestTitle: "أحدث الأنمي",
    topTitle: "أفضل الأنمي",
    genresTitle: "تصفح التصنيفات",
    favoritesTitle: "المفضلة لدي",
    search: "بحث",
    searchPlaceholder: "ابحث عن أنمي...",
    searchButton: "بحث",
    watchNow: "شاهد الآن",
    addFavorite: "إضافة إلى المفضلة",
    episodes: "الحلقات",
    back: "رجوع",
    previous: "الحلقة السابقة",
    next: "الحلقة التالية",
    continueWatching: "متابعة المشاهدة",
    explore: "استكشف الأنمي",
    findAnime: "ابحث عن أنمي",
    welcome: "مرحباً بك في YUSUF ANIME",
    discover: "اكتشف",
    animeWorld: "عالم الأنمي.",
    heroText:
      "اكتشف الأنمي المفضل لديك واستمتع بعالم مليء بالقصص الرائعة.",
    browse: "تصفح التصنيفات",
    loading: "جاري التحميل..."
  },


  tr: {
    home: "Ana Sayfa",
    trending: "Popüler",
    latest: "En Yeni",
    genres: "Türler",
    favorites: "Favoriler",
    trendingTitle: "Popüler Animeler",
    latestTitle: "En Yeni Animeler",
    topTitle: "En İyi Animeler",
    genresTitle: "Türlere Göz At",
    favoritesTitle: "Favorilerim",
    search: "Ara",
    searchPlaceholder: "Anime ara...",
    searchButton: "Ara",
    watchNow: "Şimdi İzle",
    addFavorite: "Favorilere Ekle",
    episodes: "Bölümler",
    back: "Geri",
    previous: "Önceki Bölüm",
    next: "Sonraki Bölüm",
    continueWatching: "İzlemeye Devam Et",
    noFavorites: "Henüz Favori Yok",
    explore: "Anime Keşfet",
    findAnime: "Anime Bul",
    welcome: "YUSUF ANIME'YE HOŞ GELDİN",
    discover: "Keşfet",
    animeWorld: "Anime Dünyası.",
    heroText:
      "Favori animelerini keşfet ve yeni hikayelerin tadını çıkar.",
    browse: "Türlere Göz At",
    loading: "Yükleniyor..."
  },


  ja: {
    home: "ホーム",
    trending: "人気",
    latest: "最新",
    genres: "ジャンル",
    favorites: "お気に入り",
    trendingTitle: "人気アニメ",
    latestTitle: "最新アニメ",
    topTitle: "おすすめアニメ",
    genresTitle: "ジャンルを探す",
    favoritesTitle: "お気に入り",
    search: "検索",
    searchPlaceholder: "アニメを検索...",
    searchButton: "検索",
    watchNow: "今すぐ見る",
    addFavorite: "お気に入りに追加",
    episodes: "エピソード",
    back: "戻る",
    previous: "前のエピソード",
    next: "次のエピソード",
    continueWatching: "続きを見る",
    explore: "アニメを探す",
    findAnime: "アニメを検索",
    welcome: "YUSUF ANIMEへようこそ",
    discover: "見つける",
    animeWorld: "アニメの世界。",
    heroText:
      "お気に入りのアニメを見つけ、新しい物語を楽しもう。",
    browse: "ジャンルを見る",
    loading: "読み込み中..."
  },


  es: {
    home: "Inicio",
    trending: "Tendencias",
    latest: "Últimos",
    genres: "Géneros",
    favorites: "Favoritos",
    trendingTitle: "Anime Popular",
    latestTitle: "Últimos Animes",
    topTitle: "Mejores Animes",
    genresTitle: "Explorar Géneros",
    favoritesTitle: "Mis Favoritos",
    search: "Buscar",
    searchPlaceholder: "Buscar anime...",
    searchButton: "Buscar",
    watchNow: "Ver Ahora",
    addFavorite: "Añadir a Favoritos",
    episodes: "Episodios",
    back: "Volver",
    previous: "Anterior",
    next: "Siguiente",
    continueWatching: "Continuar viendo",
    noFavorites: "Aún no hay favoritos",
    explore: "Explorar Anime",
    findAnime: "Buscar Anime",
    welcome: "BIENVENIDO A YUSUF ANIME",
    discover: "Descubre",
    animeWorld: "El mundo del anime.",
    heroText:
      "Descubre tus animes favoritos y disfruta de nuevas historias.",
    browse: "Explorar Géneros",
    loading: "Cargando..."
  },


  fr: {
    home: "Accueil",
    trending: "Tendances",
    latest: "Nouveautés",
    genres: "Genres",
    favorites: "Favoris",
    trendingTitle: "Anime Populaire",
    latestTitle: "Derniers Animes",
    topTitle: "Meilleurs Animes",
    genresTitle: "Explorer les Genres",
    favoritesTitle: "Mes Favoris",
    search: "Rechercher",
    searchPlaceholder: "Rechercher un anime...",
    searchButton: "Rechercher",
    watchNow: "Regarder",
    addFavorite: "Ajouter aux favoris",
    episodes: "Épisodes",
    back: "Retour",
    previous: "Précédent",
    next: "Suivant",
    continueWatching: "Continuer à regarder",
    noFavorites: "Aucun favori",
    explore: "Explorer les Animes",
    findAnime: "Trouver un Anime",
    welcome: "BIENVENUE SUR YUSUF ANIME",
    discover: "Découvrez",
    animeWorld: "Le monde de l'anime.",
    heroText:
      "Découvrez vos animes préférés et de nouvelles histoires.",
    browse: "Explorer les Genres",
    loading: "Chargement..."
  },


  de: {
    home: "Startseite",
    trending: "Beliebt",
    latest: "Neueste",
    genres: "Genres",
    favorites: "Favoriten",
    trendingTitle: "Beliebte Animes",
    latestTitle: "Neueste Animes",
    topTitle: "Beste Animes",
    genresTitle: "Genres durchsuchen",
    favoritesTitle: "Meine Favoriten",
    search: "Suche",
    searchPlaceholder: "Anime suchen...",
    searchButton: "Suchen",
    watchNow: "Jetzt ansehen",
    addFavorite: "Zu Favoriten hinzufügen",
    episodes: "Episoden",
    back: "Zurück",
    previous: "Vorherige",
    next: "Nächste",
    continueWatching: "Weiter ansehen",
    noFavorites: "Noch keine Favoriten",
    explore: "Anime entdecken",
    findAnime: "Anime finden",
    welcome: "WILLKOMMEN BEI YUSUF ANIME",
    discover: "Entdecke",
    animeWorld: "Die Anime-Welt.",
    heroText:
      "Entdecke deine Lieblingsanimes und neue spannende Geschichten.",
    browse: "Genres durchsuchen",
    loading: "Wird geladen..."
  }

};


/* ================= CURRENT LANGUAGE ================= */

let currentLanguage =
  localStorage.getItem("yusufAnimeLanguage") || "en";


/* ================= LANGUAGE ELEMENTS ================= */

const languageButton =
  document.getElementById("languageButton");

const languageMenu =
  document.getElementById("languageMenu");

const currentLanguageText =
  document.getElementById("currentLanguage");


/* ================= OPEN / CLOSE ================= */

if (languageButton) {

  languageButton.addEventListener("click", function(event) {

    event.stopPropagation();

    languageMenu.classList.toggle("show");

  });

}


document.addEventListener("click", function(event) {

  if (
    languageMenu &&
    !languageMenu.contains(event.target) &&
    event.target !== languageButton
  ) {

    languageMenu.classList.remove("show");

  }

});


/* ================= CHANGE LANGUAGE ================= */

document.querySelectorAll(
  "[data-language]"
).forEach(function(button) {

  button.addEventListener(
    "click",
    function() {

      const language =
        button.dataset.language;

      changeLanguage(language);

    }
  );

});


/* ================= CHANGE LANGUAGE ================= */

function changeLanguage(language) {

  if (!translations[language]) {
    return;
  }

  currentLanguage = language;

  localStorage.setItem(
    "yusufAnimeLanguage",
    language
  );


  updateLanguage();


  if (languageMenu) {
    languageMenu.classList.remove("show");
  }

}


/* ================= UPDATE WEBSITE ================= */

function updateLanguage() {

  const t =
    translations[currentLanguage];


  /* LANGUAGE NAME */

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


  if (currentLanguageText) {

    currentLanguageText.textContent =
      names[currentLanguage];

  }


  /* NAV */

  const nav =
    document.querySelectorAll(
      ".desktop-nav a"
    );


  if (nav.length >= 5) {

    nav[0].textContent = t.home;
    nav[1].textContent = t.trending;
    nav[2].textContent = t.latest;
    nav[3].textContent = t.genres;
    nav[4].textContent = t.favorites;

  }


  /* HERO */

  const heroLabel =
    document.querySelector(".hero-label");

  if (heroLabel) {
    heroLabel.textContent =
      "✨ " + t.welcome;
  }


  const heroH1 =
    document.querySelector(".hero h1");

  if (heroH1) {

    heroH1.innerHTML =
      `${t.discover}<br><span>${t.animeWorld}</span>`;

  }


  const heroText =
    document.querySelector(".hero-content p");

  if (heroText) {
    heroText.textContent =
      t.heroText;
  }


  const exploreButton =
    document.querySelector(
      ".hero .btn-primary"
    );

  if (exploreButton) {
    exploreButton.textContent =
      "🔥 " + t.explore;
  }


  const heroSearch =
    document.getElementById("heroSearch");

  if (heroSearch) {
    heroSearch.textContent =
      "🔍 " + t.search;
  }


  /* SECTION TITLES */

  const sectionTitles =
    document.querySelectorAll(
      ".section-title h2"
    );


  if (sectionTitles.length >= 4) {

    sectionTitles[0].textContent =
      t.trendingTitle;

    sectionTitles[1].textContent =
      t.continueWatching;

    sectionTitles[2].textContent =
      t.latestTitle;

    sectionTitles[3].textContent =
      t.topTitle;

  }


  /* GENRES */

  const genreTitle =
    document.querySelector(
      "#genres .section-title h2"
    );

  if (genreTitle) {
    genreTitle.textContent =
      t.genresTitle;
  }


  /* FAVORITES */

  const favoriteTitle =
    document.querySelector(
      "#favorites .section-title h2"
    );

  if (favoriteTitle) {
    favoriteTitle.textContent =
      t.favoritesTitle;
  }


  /* SEARCH */

  const searchTitle =
    document.querySelector(
      "#searchModal h2"
    );

  if (searchTitle) {
    searchTitle.textContent =
      "🔍 " + t.search;
  }


  if (searchInput) {

    searchInput.placeholder =
      t.searchPlaceholder;

  }


  if (doSearch) {

    doSearch.textContent =
      "🔍 " + t.searchButton;

  }


  /* DETAILS */

  const detailsPlay =
    document.getElementById(
      "detailsPlay"
    );

  if (detailsPlay) {

    detailsPlay.textContent =
      "▶️ " + t.watchNow;

  }


  /* FAVORITE */

  updateFavoriteButton();


  /* EMPTY FAVORITES */

  const emptyTitle =
    document.querySelector(
      "#emptyFavorites h3"
    );

  if (emptyTitle) {

    emptyTitle.textContent =
      t.noFavorites;

  }


  const emptyText =
    document.querySelector(
      "#emptyFavorites p"
    );

  if (emptyText) {

    emptyText.textContent =
      t.noFavoritesText;

  }


  /* MOBILE NAV */

  const mobileLinks =
    document.querySelectorAll(
      "#mobileMenu > a"
    );

  if (mobileLinks.length >= 5) {

    mobileLinks[0].textContent =
      "🏠 " + t.home;

    mobileLinks[1].textContent =
      "🔥 " + t.trending;

    mobileLinks[2].textContent =
      "🆕 " + t.latest;

    mobileLinks[3].textContent =
      "🎭 " + t.genres;

    mobileLinks[4].textContent =
      "❤️ " + t.favorites;

  }


  /* RTL */

  if (
    currentLanguage === "ku" ||
    currentLanguage === "ar"
  ) {

    document.documentElement.dir =
      "rtl";

    document.documentElement.lang =
      currentLanguage;

  } else {

    document.documentElement.dir =
      "ltr";

    document.documentElement.lang =
      currentLanguage;

  }


  /* ACTIVE LANGUAGE */

  document.querySelectorAll(
    "[data-language]"
  ).forEach(function(button) {

    button.classList.toggle(
      "active",
      button.dataset.language ===
        currentLanguage
    );

  });

}


/* ================= HERO SEARCH ================= */

if (heroSearch) {

  heroSearch.addEventListener(
    "click",
    function() {

      if (typeof openSearch === "function") {

        openSearch();

      } else if (searchModal) {

        searchModal.classList.add("show");

        if (searchInput) {
          searchInput.focus();
        }

      }

    }
  );

}


/* ================= CTA SEARCH ================= */

const ctaSearch =
  document.getElementById("ctaSearch");

if (ctaSearch) {

  ctaSearch.addEventListener(
    "click",
    function() {

      if (typeof openSearch === "function") {

        openSearch();

      } else if (searchModal) {

        searchModal.classList.add("show");

        if (searchInput) {
          searchInput.focus();
        }

      }

    }
  );

}


/* ================= START LANGUAGE ================= */

updateLanguage();
/* =====================================================
   REAL ANIME SEARCH - JIKAN API
===================================================== */

const JIKAN_API = "https://api.jikan.moe/v4";

async function searchAnimeAPI(query) {

  if (!query || query.trim() === "") {
    return;
  }

  const resultsContainer =
    document.getElementById("searchResults");

  if (!resultsContainer) {
    return;
  }

  resultsContainer.innerHTML = `
    <div class="search-loading">
      🔎 Searching for "${query}"...
    </div>
  `;

  try {

    const response = await fetch(
      `${JIKAN_API}/anime?q=${encodeURIComponent(query)}&sfw=true&limit=12`
    );

    if (!response.ok) {
      throw new Error("Search failed");
    }

    const data = await response.json();

    if (!data.data || data.data.length === 0) {

      resultsContainer.innerHTML = `
        <div class="search-empty">
          😢 No anime found.
        </div>
      `;

      return;
    }

    resultsContainer.innerHTML = "";

    data.data.forEach(anime => {

      const card = document.createElement("div");

      card.className = "search-result-card";

      card.innerHTML = `

        <img
          src="${anime.images?.jpg?.image_url || ""}"
          alt="${anime.title}"
          loading="lazy"
        >

        <div class="search-result-info">

          <h3>
            ${anime.title}
          </h3>

          <p>
            ⭐ ${anime.score || "N/A"}
          </p>

          <p>
            📺 ${anime.episodes || "?"} Episodes
          </p>

          <p>
            🎬 ${anime.type || "Unknown"}
          </p>

          <button
            class="search-watch-button"
            type="button"
          >
            View Details
          </button>

        </div>

      `;


      const detailsButton =
        card.querySelector(".search-watch-button");


      detailsButton.addEventListener(
        "click",
        function() {

          showAnimeFromAPI(anime.mal_id);

        }
      );


      resultsContainer.appendChild(card);

    });

  } catch (error) {

    console.error(error);

    resultsContainer.innerHTML = `
      <div class="search-empty">
        ⚠️ Something went wrong.
        Please try again.
      </div>
    `;

  }

}


/* =====================================================
   SEARCH BUTTON
===================================================== */

const realSearchButton =
  document.getElementById("doSearch");


const realSearchInput =
  document.getElementById("searchInput");


if (realSearchButton) {

  realSearchButton.addEventListener(
    "click",
    function() {

      searchAnimeAPI(
        realSearchInput.value
      );

    }
  );

}


if (realSearchInput) {

  realSearchInput.addEventListener(
    "keydown",
    function(event) {

      if (event.key === "Enter") {

        searchAnimeAPI(
          realSearchInput.value
        );

      }

    }
  );

}


/* =====================================================
   GET FULL ANIME DETAILS
===================================================== */

async function showAnimeFromAPI(id) {

  try {

    const response = await fetch(
      `${JIKAN_API}/anime/${id}/full`
    );

    if (!response.ok) {
      throw new Error("Anime details failed");
    }

    const result =
      await response.json();

    const anime =
      result.data;


    /* TITLE */

    const title =
      document.getElementById("detailsTitle");

    if (title) {
      title.textContent =
        anime.title || "Anime";
    }


    /* TYPE */

    const type =
      document.getElementById("detailsType");

    if (type) {
      type.textContent =
        anime.type || "TV";
    }


    /* POSTER */

    const poster =
      document.getElementById("detailsPoster");

    if (poster) {

      poster.style.backgroundImage =
        `url("${anime.images?.jpg?.large_image_url || anime.images?.jpg?.image_url}")`;

    }


    /* DESCRIPTION */

    const description =
      document.getElementById(
        "detailsDescription"
      );

    if (description) {

      description.textContent =
        anime.synopsis ||
        "No description available.";

    }


    /* META */

    const meta =
      document.getElementById(
        "detailsMeta"
      );

    if (meta) {

      meta.innerHTML = `

        <span>
          ⭐ ${anime.score || "N/A"}
        </span>

        <span>
          📺 ${anime.episodes || "?"} Episodes
        </span>

        <span>
          🎬 ${anime.status || "Unknown"}
        </span>

        <span>
          📅 ${anime.year || "Unknown"}
        </span>

      `;

    }


    /* SHOW DETAILS PAGE */

    const detailsPage =
      document.getElementById(
        "detailsPage"
      );

    if (detailsPage) {

      detailsPage.classList.add(
        "show"
      );

      document.body.style.overflow =
        "hidden";

    }


    /* CLOSE SEARCH */

    const searchModal =
      document.getElementById(
        "searchModal"
      );

    if (searchModal) {

      searchModal.classList.remove(
        "show"
      );

    }

  } catch (error) {

    console.error(error);

    alert(
      "Could not load anime details."
    );

  }

}
/* =====================================================
   YUSUF ANIME - REAL ANIME SECTIONS
===================================================== */

async function loadAnimeSection(endpoint, elementId) {

  const container = document.getElementById(elementId);

  if (!container) return;

  container.innerHTML = `
    <div class="anime-loading">
      🔄 Loading anime...
    </div>
  `;

  try {

    const response = await fetch(
      `${JIKAN_API}${endpoint}`
    );

    if (!response.ok) {
      throw new Error("API error");
    }

    const result = await response.json();

    const animeList = result.data || [];

    container.innerHTML = "";

    animeList.slice(0, 12).forEach(anime => {

      const card = document.createElement("article");

      card.className = "anime-card";

      const image =
        anime.images?.jpg?.large_image_url ||
        anime.images?.jpg?.image_url ||
        "";

      card.innerHTML = `

        <div class="anime-poster">

          <img
            src="${image}"
            alt="${anime.title || "Anime"}"
            loading="lazy"
          >

          <div class="anime-rating">
            ⭐ ${anime.score || "N/A"}
          </div>

        </div>

        <div class="anime-card-info">

          <h3>
            ${anime.title || "Unknown Anime"}
          </h3>

          <p>
            ${anime.type || "TV"}
            •
            ${anime.episodes || "?"} Episodes
          </p>

        </div>

      `;


      card.addEventListener(
        "click",
        function() {

          showAnimeFromAPI(
            anime.mal_id
          );

        }
      );


      container.appendChild(card);

    });

  } catch (error) {

    console.error(error);

    container.innerHTML = `
      <div class="anime-error">
        ⚠️ Could not load anime.
      </div>
    `;

  }

}


/* =====================================================
   TRENDING
===================================================== */

loadAnimeSection(
  "/top/anime?filter=bypopularity&sfw=true",
  "trendingGrid"
);


/* =====================================================
   LATEST
===================================================== */

loadAnimeSection(
  "/anime?status=airing&order_by=popularity&sort=desc&sfw=true",
  "latestGrid"
);


/* =====================================================
   TOP RATED
===================================================== */

loadAnimeSection(
  "/top/anime?filter=favorite&sfw=true",
  "topGrid"
);
