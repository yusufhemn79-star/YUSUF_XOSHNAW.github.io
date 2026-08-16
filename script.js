/* =========================================================
   YUSUF ANIME
   COMPLETE JAVASCRIPT
   ========================================================= */

"use strict";

/* =========================================================
   CONFIG
========================================================= */

const ADMIN_USERNAME = "admin";
const ADMIN_PASSWORD = "yusuf2026";

const STORAGE = {
  anime: "yusuf_anime_data",
  favorites: "yusuf_anime_favorites",
  history: "yusuf_anime_history",
  theme: "yusuf_anime_theme",
  language: "yusuf_anime_language",
  admin: "yusuf_anime_admin"
};


/* =========================================================
   DEFAULT ANIME DATA
========================================================= */

const defaultAnime = [

  {
    id: 1,
    title: "One Piece",
    type: "TV",
    year: 1999,
    rating: 9.5,
    episodes: 1170,
    status: "Ongoing",
    genres: ["Action", "Adventure", "Fantasy", "Shonen"],
    description:
      "Monkey D. Luffy and his crew travel across the Grand Line in search of the legendary One Piece.",
    poster: "",
    seasons: {
      1: 1000
    }
  },

  {
    id: 2,
    title: "Naruto Shippuden",
    type: "TV",
    year: 2007,
    rating: 9.0,
    episodes: 500,
    status: "Completed",
    genres: ["Action", "Adventure", "Shonen"],
    description:
      "Naruto returns older and stronger as he continues his journey to become Hokage.",
    poster: "",
    seasons: {
      1: 500
    }
  },

  {
    id: 3,
    title: "Demon Slayer",
    type: "TV",
    year: 2019,
    rating: 9.2,
    episodes: 63,
    status: "Ongoing",
    genres: ["Action", "Fantasy", "Drama", "Shonen"],
    description:
      "Tanjiro Kamado becomes a demon slayer after his family is attacked and his sister is transformed.",
    poster: "",
    seasons: {
      1: 26,
      2: 18,
      3: 11,
      4: 8
    }
  },

  {
    id: 4,
    title: "Attack on Titan",
    type: "TV",
    year: 2013,
    rating: 9.4,
    episodes: 89,
    status: "Completed",
    genres: ["Action", "Drama", "Fantasy"],
    description:
      "Humanity fights for survival against mysterious giants known as Titans.",
    poster: "",
    seasons: {
      1: 25,
      2: 12,
      3: 22,
      4: 30
    }
  },

  {
    id: 5,
    title: "My Dress-Up Darling",
    type: "TV",
    year: 2022,
    rating: 8.5,
    episodes: 12,
    status: "Ongoing",
    genres: ["Romance", "Comedy", "School"],
    description:
      "Wakana Gojo discovers cosplay through Marin Kitagawa and their friendship begins to grow.",
    poster: "",
    seasons: {
      1: 12
    }
  },

  {
    id: 6,
    title: "Horimiya",
    type: "TV",
    year: 2021,
    rating: 8.7,
    episodes: 13,
    status: "Completed",
    genres: ["Romance", "Comedy", "School", "Drama"],
    description:
      "Two classmates discover each other's hidden sides and slowly fall in love.",
    poster: "",
    seasons: {
      1: 13
    }
  },

  {
    id: 7,
    title: "The Angel Next Door Spoils Me Rotten",
    type: "TV",
    year: 2023,
    rating: 8.4,
    episodes: 12,
    status: "Ongoing",
    genres: ["Romance", "Comedy", "School"],
    description:
      "A kind neighbor begins taking care of a lonely student and their relationship slowly develops.",
    poster: "",
    seasons: {
      1: 12
    }
  },

  {
    id: 8,
    title: "Jujutsu Kaisen",
    type: "TV",
    year: 2020,
    rating: 9.0,
    episodes: 47,
    status: "Ongoing",
    genres: ["Action", "Fantasy", "Shonen"],
    description:
      "Yuji Itadori enters the dangerous world of curses after swallowing a powerful cursed object.",
    poster: "",
    seasons: {
      1: 24,
      2: 23
    }
  },

  {
    id: 9,
    title: "The Quintessential Quintuplets",
    type: "TV",
    year: 2019,
    rating: 8.5,
    episodes: 24,
    status: "Completed",
    genres: ["Romance", "Comedy", "School"],
    description:
      "A talented student becomes a tutor for five identical sisters.",
    poster: "",
    seasons: {
      1: 12,
      2: 12
    }
  },

  {
    id: 10,
    title: "Tonikawa: Over the Moon for You",
    type: "TV",
    year: 2020,
    rating: 8.2,
    episodes: 24,
    status: "Ongoing",
    genres: ["Romance", "Comedy"],
    description:
      "A young man suddenly gets married to the mysterious girl he has always dreamed about.",
    poster: "",
    seasons: {
      1: 12,
      2: 12
    }
  }

];


/* =========================================================
   STATE
========================================================= */

let animeList = loadAnime();
let favorites = loadJSON(STORAGE.favorites, []);
let watchHistory = loadJSON(STORAGE.history, []);

let currentAnime = null;
let currentEpisode = 1;
let currentSeason = 1;

let currentLanguage =
  localStorage.getItem(STORAGE.language) || "en";

let adminLoggedIn =
  localStorage.getItem(STORAGE.admin) === "true";


/* =========================================================
   HELPERS
========================================================= */

function $(selector) {
  return document.querySelector(selector);
}

function $$(selector) {
  return document.querySelectorAll(selector);
}


function loadJSON(key, fallback) {

  try {

    const value = localStorage.getItem(key);

    return value
      ? JSON.parse(value)
      : fallback;

  } catch {

    return fallback;

  }

}


function saveJSON(key, value) {

  localStorage.setItem(
    key,
    JSON.stringify(value)
  );

}


function loadAnime() {

  const saved = loadJSON(
    STORAGE.anime,
    null
  );

  if (
    Array.isArray(saved) &&
    saved.length
  ) {

    return saved;

  }

  saveJSON(
    STORAGE.anime,
    defaultAnime
  );

  return [...defaultAnime];

}


function saveAnime() {

  saveJSON(
    STORAGE.anime,
    animeList
  );

}


function escapeHTML(value) {

  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

}


function getAnime(id) {

  return animeList.find(
    anime => Number(anime.id) === Number(id)
  );

}


function isFavorite(id) {

  return favorites.includes(Number(id));

}


function addFavorite(id) {

  id = Number(id);

  if (!favorites.includes(id)) {

    favorites.push(id);

    saveJSON(
      STORAGE.favorites,
      favorites
    );

  }

}


function removeFavorite(id) {

  id = Number(id);

  favorites =
    favorites.filter(
      item => Number(item) !== id
    );

  saveJSON(
    STORAGE.favorites,
    favorites
  );

}


function toggleFavorite(id) {

  if (isFavorite(id)) {

    removeFavorite(id);

  } else {

    addFavorite(id);

  }

  renderAll();

  if (currentAnime) {

    updateDetailsFavorite();

  }

}


/* =========================================================
   LOADER
========================================================= */

window.addEventListener(
  "load",
  () => {

    setTimeout(() => {

      const loader = $("#loader");

      if (loader) {

        loader.classList.add("hide");

      }

    }, 700);

  }
);


/* =========================================================
   THEME
========================================================= */

function loadTheme() {

  const theme =
    localStorage.getItem(
      STORAGE.theme
    ) || "dark";

  if (theme === "light") {

    document.body.classList.add("light");

  }

  updateThemeButton();

}


function toggleTheme() {

  document.body.classList.toggle(
    "light"
  );

  const light =
    document.body.classList.contains(
      "light"
    );

  localStorage.setItem(
    STORAGE.theme,
    light ? "light" : "dark"
  );

  updateThemeButton();

}


function updateThemeButton() {

  const button =
    $("#themeButton");

  if (!button) return;

  button.textContent =
    document.body.classList.contains(
      "light"
    )
      ? "☀️"
      : "🌙";

}


/* =========================================================
   ANIME CARD
========================================================= */

function animeCard(anime) {

  const favorite =
    isFavorite(anime.id);

  const letter =
    anime.title
      .charAt(0)
      .toUpperCase();

  const posterClass =
    `poster-${((anime.id - 1) % 10) + 1}`;

  const posterStyle =
    anime.poster
      ? `background-image:url("${escapeHTML(anime.poster)}");background-size:cover;background-position:center;`
      : "";

  return `

    <article
      class="anime-card"
      data-id="${anime.id}"
    >

      <div
        class="poster ${posterClass}"
        data-letter="${escapeHTML(letter)}"
        style="${posterStyle}"
      >

        <span class="card-top">
          ⭐ ${anime.rating}
        </span>

        <span class="card-bottom">
          ${escapeHTML(anime.type)}
        </span>

        <button
          class="card-play"
          type="button"
          data-action="play"
          data-id="${anime.id}"
          aria-label="Watch"
        >
          ▶
        </button>

        <button
          class="card-favorite"
          type="button"
          data-action="favorite"
          data-id="${anime.id}"
          style="
            position:absolute;
            top:12px;
            left:12px;
            z-index:5;
            width:36px;
            height:36px;
            border:0;
            border-radius:50%;
            background:rgba(0,0,0,.65);
            color:${favorite ? "#e50914" : "white"};
          "
        >
          ${favorite ? "❤️" : "♡"}
        </button>

      </div>

      <div class="card-info">

        <h3>
          ${escapeHTML(anime.title)}
        </h3>

        <p>
          ${anime.year}
          •
          ${anime.episodes} Episodes
        </p>

      </div>

    </article>

  `;

}


/* =========================================================
   RENDER GRID
========================================================= */

function renderGrid(
  elementId,
  list
) {

  const element =
    document.getElementById(
      elementId
    );

  if (!element) return;

  element.innerHTML =
    list.length
      ? list.map(animeCard).join("")
      : "";

}


/* =========================================================
   TRENDING
========================================================= */

function renderTrending() {

  const list =
    [...animeList]
      .sort(
        (a,b) =>
          Number(b.rating) -
          Number(a.rating)
      )
      .slice(0,5);

  renderGrid(
    "trendingGrid",
    list
  );

}


/* =========================================================
   LATEST
========================================================= */

function renderLatest() {

  const list =
    [...animeList]
      .sort(
        (a,b) =>
          Number(b.year) -
          Number(a.year)
      )
      .slice(0,5);

  renderGrid(
    "latestGrid",
    list
  );

}


/* =========================================================
   TOP RATED
========================================================= */

function renderTop() {

  const list =
    [...animeList]
      .sort(
        (a,b) =>
          Number(b.rating) -
          Number(a.rating)
      )
      .slice(0,10);

  renderGrid(
    "topGrid",
    list
  );

}


/* =========================================================
   FAVORITES
========================================================= */

function renderFavorites() {

  const list =
    favorites
      .map(id => getAnime(id))
      .filter(Boolean);

  renderGrid(
    "favoritesGrid",
    list
  );

  const empty =
    $("#emptyFavorites");

  if (!empty) return;

  empty.style.display =
    list.length
      ? "none"
      : "block";

}


/* =========================================================
   CONTINUE WATCHING
========================================================= */

function renderContinue() {

  const section =
    $("#continueSection");

  const grid =
    $("#continueGrid");

  if (!section || !grid) return;

  const list =
    watchHistory
      .map(item => {

        return {
          anime: getAnime(item.animeId),
          episode: item.episode
        };

      })
      .filter(item => item.anime)
      .map(item => item.anime);

  if (!list.length) {

    section.classList.add(
      "hidden"
    );

    return;

  }

  section.classList.remove(
    "hidden"
  );

  grid.innerHTML =
    list.map(animeCard).join("");

}


/* =========================================================
   RENDER ALL
========================================================= */

function renderAll() {

  renderTrending();

  renderLatest();

  renderTop();

  renderFavorites();

  renderContinue();

}


/* =========================================================
   DETAILS PAGE
========================================================= */

function openDetails(id) {

  const anime =
    getAnime(id);

  if (!anime) return;

  currentAnime = anime;

  const page =
    $("#detailsPage");

  if (!page) return;

  const poster =
    $("#detailsPoster");

  if (poster) {

    poster.className =
      `details-poster poster-${((anime.id - 1) % 10) + 1}`;

    poster.setAttribute(
      "data-letter",
      anime.title.charAt(0)
    );

    if (anime.poster) {

      poster.style.backgroundImage =
        `url("${anime.poster}")`;

      poster.style.backgroundSize =
        "cover";

      poster.style.backgroundPosition =
        "center";

    } else {

      poster.style.backgroundImage =
        "";

    }

  }


  $("#detailsType").textContent =
    anime.type;

  $("#detailsTitle").textContent =
    anime.title;

  $("#detailsMeta").innerHTML = `

    <span>⭐ ${anime.rating}</span>

    <span>📅 ${anime.year}</span>

    <span>🎬 ${anime.episodes} Episodes</span>

    <span>📌 ${anime.status}</span>

    <span>🎭 ${anime.genres.join(", ")}</span>

  `;


  $("#detailsDescription").textContent =
    anime.description;


  renderEpisodes();

  updateDetailsFavorite();

  page.classList.add("show");

  document.body.style.overflow =
    "hidden";

}


function closeDetails() {

  const page =
    $("#detailsPage");

  if (!page) return;

  page.classList.remove(
    "show"
  );

  document.body.style.overflow =
    "";

  currentAnime = null;

}


function updateDetailsFavorite() {

  if (!currentAnime) return;

  const button =
    $("#detailsFavorite");

  if (!button) return;

  if (
    isFavorite(
      currentAnime.id
    )
  ) {

    button.textContent =
      "❤️ Remove from Favorites";

  } else {

    button.textContent =
      "♡ Add to Favorites";

  }

}


/* =========================================================
   EPISODES
========================================================= */

function getSeasonEpisodes(
  anime,
  season
) {

  const count =
    anime.seasons?.[season] ||
    0;

  return Number(count);

}


function renderEpisodes() {

  if (!currentAnime) return;

  const select =
    $("#seasonSelect");

  const grid =
    $("#episodeGrid");

  if (!select || !grid) return;

  const availableSeasons =
    Object.keys(
      currentAnime.seasons || {}
    );

  if (!availableSeasons.length) {

    grid.innerHTML =
      "<p>No episodes available.</p>";

    return;

  }


  select.innerHTML =
    availableSeasons
      .map(
        season =>
          `<option value="${season}">
             Season ${season}
           </option>`
      )
      .join("");


  if (
    !availableSeasons.includes(
      String(currentSeason)
    )
  ) {

    currentSeason =
      Number(
        availableSeasons[0]
      );

  }


  select.value =
    currentSeason;


  const count =
    getSeasonEpisodes(
      currentAnime,
      currentSeason
    );


  let html = "";

  for (
    let i = 1;
    i <= count;
    i++
  ) {

    const watched =
      isWatched(
        currentAnime.id,
        currentSeason,
        i
      );

    html += `

      <button
        type="button"
        class="episode-button ${watched ? "watched" : ""}"
        data-episode="${i}"
        data-season="${currentSeason}"
      >
        Episode ${i}
      </button>

    `;

  }

  grid.innerHTML =
    html ||
    "<p>No episodes available.</p>";

}


/* =========================================================
   WATCH HISTORY
========================================================= */

function isWatched(
  animeId,
  season,
  episode
) {

  return watchHistory.some(
    item =>
      Number(item.animeId) === Number(animeId) &&
      Number(item.season) === Number(season) &&
      Number(item.episode) === Number(episode)
  );

}


function saveWatchProgress() {

  if (!currentAnime) return;

  const existing =
    watchHistory.find(
      item =>
        Number(item.animeId) ===
        Number(currentAnime.id)
    );

  if (existing) {

    existing.season =
      currentSeason;

    existing.episode =
      currentEpisode;

  } else {

    watchHistory.push({

      animeId:
        currentAnime.id,

      season:
        currentSeason,

      episode:
        currentEpisode

    });

  }


  saveJSON(
    STORAGE.history,
    watchHistory
  );

  renderContinue();

}


/* =========================================================
   WATCH PAGE
========================================================= */

function openWatch(
  anime,
  episode = 1,
  season = 1
) {

  if (!anime) return;

  currentAnime =
    anime;

  currentEpisode =
    Number(episode);

  currentSeason =
    Number(season);


  $("#watchTitle").textContent =
    anime.title;

  $("#watchAnime").textContent =
    anime.title;

  $("#watchEpisode").textContent =
    `Season ${currentSeason} • Episode ${currentEpisode}`;


  const page =
    $("#watchPage");

  if (!page) return;

  page.classList.add(
    "show"
  );

  document.body.style.overflow =
    "hidden";


  saveWatchProgress();

}


function closeWatch() {

  const page =
    $("#watchPage");

  if (!page) return;

  page.classList.remove(
    "show"
  );

  document.body.style.overflow =
    "";

}


function playCurrent() {

  if (!currentAnime) return;

  openWatch(
    currentAnime,
    currentEpisode,
    currentSeason
  );

}


/* =========================================================
   NEXT / PREVIOUS
========================================================= */

function nextEpisode() {

  if (!currentAnime) return;

  const max =
    getSeasonEpisodes(
      currentAnime,
      currentSeason
    );

  if (
    currentEpisode < max
  ) {

    currentEpisode++;

  } else {

    const seasons =
      Object.keys(
        currentAnime.seasons || {}
      )
      .map(Number)
      .sort(
        (a,b) => a-b
      );

    const index =
      seasons.indexOf(
        currentSeason
      );

    if (
      index !== -1 &&
      index < seasons.length - 1
    ) {

      currentSeason =
        seasons[index + 1];

      currentEpisode =
        1;

    } else {

      return;

    }

  }


  openWatch(
    currentAnime,
    currentEpisode,
    currentSeason
  );

}


function previousEpisode() {

  if (!currentAnime) return;

  if (currentEpisode > 1) {

    currentEpisode--;

  } else {

    const seasons =
      Object.keys(
        currentAnime.seasons || {}
      )
      .map(Number)
      .sort(
        (a,b) => a-b
      );

    const index =
      seasons.indexOf(
        currentSeason
      );

    if (
      index > 0
    ) {

      currentSeason =
        seasons[index - 1];

      currentEpisode =
        getSeasonEpisodes(
          currentAnime,
          currentSeason
        );

    } else {

      return;

    }

  }


  openWatch(
    currentAnime,
    currentEpisode,
    currentSeason
  );

}


/* =========================================================
   SEARCH
========================================================= */

function openSearch() {

  const modal =
    $("#searchModal");

  if (!modal) return;

  modal.classList.add(
    "show"
  );

  setTimeout(
    () => {

      $("#searchInput")?.focus();

    },
    100
  );

}


function closeSearch() {

  const modal =
    $("#searchModal");

  if (!modal) return;

  modal.classList.remove(
    "show"
  );

}


function performSearch() {

  const input =
    $("#searchInput");

  const results =
    $("#searchResults");

  if (!input || !results) return;

  const query =
    input.value
      .trim()
      .toLowerCase();


  if (!query) {

    results.innerHTML =
      "<p style='color:#999'>Type an anime name.</p>";

    return;

  }


  const matches =
    animeList.filter(
      anime => {

        const text =
          [
            anime.title,
            anime.description,
            ...(anime.genres || [])
          ]
          .join(" ")
          .toLowerCase();

        return text.includes(
          query
        );

      }
    );


  if (!matches.length) {

    results.innerHTML =
      "<p style='color:#999'>No anime found.</p>";

    return;

  }


  results.innerHTML =
    matches
      .map(
        anime => `

          <div
            class="search-result"
            data-id="${anime.id}"
          >

            <strong>
              ${escapeHTML(anime.title)}
            </strong>

            <span
              style="
                display:block;
                margin-top:5px;
                color:#999;
                font-size:12px;
              "
            >
              ⭐ ${anime.rating}
              •
              ${anime.year}
              •
              ${escapeHTML(anime.genres.join(", "))}
            </span>

          </div>

        `
      )
      .join("");

}


/* =========================================================
   GENRE FILTER
========================================================= */

function filterGenre(genre) {

  const matches =
    animeList.filter(
      anime =>
        anime.genres &&
        anime.genres.some(
          item =>
            item.toLowerCase() ===
            genre.toLowerCase()
        )
    );


  const section =
    $("#trending");

  if (section) {

    section.scrollIntoView({
      behavior: "smooth"
    });

  }


  renderGrid(
    "trendingGrid",
    matches
  );

}


/* =========================================================
   MOBILE MENU
========================================================= */

function toggleMobileMenu() {

  $("#mobileMenu")
    ?.classList.toggle(
      "open"
    );

}


function closeMobileMenu() {

  $("#mobileMenu")
    ?.classList.remove(
      "open"
    );

}


/* =========================================================
   LANGUAGE
========================================================= */

const languageNames = {

  en: "English",
  ku: "کوردی",
  ar: "العربية",
  tr: "Türkçe",
  ja: "日本語",
  es: "Español",
  fr: "Français",
  de: "Deutsch"

};


const translations = {

  en: {

    home: "Home",
    trending: "Trending",
    latest: "Latest",
    genres: "Genres",
    favorites: "Favorites",
    popular: "Popular Anime",
    best: "Best Anime",
    browse: "Browse Genres",
    myFavorites: "My Favorites",
    noFavorites: "No Favorites Yet"

  },

  ku: {

    home: "سەرەکی",
    trending: "بەناوبانگ",
    latest: "نوێترین",
    genres: "جۆرەکان",
    favorites: "دڵخوازەکان",
    popular: "ئەنیمییە بەناوبانگەکان",
    best: "باشترین ئەنیمی",
    browse: "گەڕان بە جۆر",
    myFavorites: "دڵخوازەکانم",
    noFavorites: "هێشتا هیچ دڵخوازێکت نییە"

  },

  ar: {

    home: "الرئيسية",
    trending: "الشائع",
    latest: "الأحدث",
    genres: "التصنيفات",
    favorites: "المفضلة",
    popular: "الأنمي الشائع",
    best: "أفضل الأنمي",
    browse: "تصفح التصنيفات",
    myFavorites: "مفضلاتي",
    noFavorites: "لا توجد مفضلات بعد"

  },

  tr: {

    home: "Ana Sayfa",
    trending: "Trend",
    latest: "Yeni",
    genres: "Türler",
    favorites: "Favoriler",
    popular: "Popüler Anime",
    best: "En İyi Anime",
    browse: "Türlere Göz At",
    myFavorites: "Favorilerim",
    noFavorites: "Henüz Favori Yok"

  },

  ja: {

    home: "ホーム",
    trending: "人気",
    latest: "最新",
    genres: "ジャンル",
    favorites: "お気に入り",
    popular: "人気アニメ",
    best: "おすすめアニメ",
    browse: "ジャンルを見る",
    myFavorites: "お気に入り",
    noFavorites: "お気に入りはありません"

  },

  es: {

    home: "Inicio",
    trending: "Tendencias",
    latest: "Últimos",
    genres: "Géneros",
    favorites: "Favoritos",
    popular: "Anime Popular",
    best: "Mejor Anime",
    browse: "Explorar Géneros",
    myFavorites: "Mis Favoritos",
    noFavorites: "No Hay Favoritos"

  },

  fr: {

    home: "Accueil",
    trending: "Tendances",
    latest: "Nouveautés",
    genres: "Genres",
    favorites: "Favoris",
    popular: "Anime Populaire",
    best: "Meilleur Anime",
    browse: "Parcourir les Genres",
    myFavorites: "Mes Favoris",
    noFavorites: "Aucun Favori"

  },

  de: {

    home: "Startseite",
    trending: "Beliebt",
    latest: "Neu",
    genres: "Genres",
    favorites: "Favoriten",
    popular: "Beliebte Anime",
    best: "Beste Anime",
    browse: "Genres Durchsuchen",
    myFavorites: "Meine Favoriten",
    noFavorites: "Noch Keine Favoriten"

  }

};


function setLanguage(language) {

  if (!translations[language]) {
    language = "en";
  }

  currentLanguage =
    language;

  localStorage.setItem(
    STORAGE.language,
    language
  );


  document.documentElement.lang =
    language;


  document.documentElement.dir =
    language === "ku" ||
    language === "ar"
      ? "rtl"
      : "ltr";


  const current =
    $("#currentLanguage");

  if (current) {

    current.textContent =
      languageNames[language];

  }


  $$(".language-menu button")
    .forEach(button => {

      button.classList.toggle(
        "active",
        button.dataset.language ===
          language
      );

    });


  const t =
    translations[language];


  const nav =
    $$(".desktop-nav a");

  if (nav.length >= 5) {

    nav[0].textContent = t.home;
    nav[1].textContent = t.trending;
    nav[2].textContent = t.latest;
    nav[3].textContent = t.genres;
    nav[4].textContent = t.favorites;

  }

}


/* =========================================================
   ADMIN PANEL
========================================================= */

function createAdminPanel() {

  if ($("#adminPanel")) return;

  const panel =
    document.createElement("div");

  panel.id =
    "adminPanel";

  panel.innerHTML = `

    <div
      id="adminLogin"
      class="admin-screen"
    >

      <div class="admin-login-box">

        <button
          id="closeAdminLogin"
          class="admin-close"
          type="button"
        >
          ✕
        </button>

        <div class="admin-brand">
          YUSUF<span>ADMIN</span>
        </div>

        <h2>Admin Login</h2>

        <p>
          Sign in to manage YUSUF ANIME.
        </p>

        <input
          id="adminUsername"
          type="text"
          placeholder="Username"
          autocomplete="username"
        >

        <input
          id="adminPassword"
          type="password"
          placeholder="Password"
          autocomplete="current-password"
        >

        <button
          id="adminLoginButton"
          class="admin-primary"
          type="button"
        >
          🔐 Login
        </button>

        <div
          id="adminLoginMessage"
          class="admin-message"
        ></div>

      </div>

    </div>


    <div
      id="adminDashboard"
      class="admin-dashboard"
    >

      <aside class="admin-sidebar">

        <div class="admin-sidebar-logo">
          YUSUF<span>ADMIN</span>
        </div>

        <button
          class="admin-nav active"
          data-admin-page="dashboard"
        >
          📊 Dashboard
        </button>

        <button
          class="admin-nav"
          data-admin-page="anime"
        >
          🎬 Anime
        </button>

        <button
          class="admin-nav"
          data-admin-page="episodes"
        >
          📺 Episodes
        </button>

        <button
          class="admin-nav"
          data-admin-page="settings"
        >
          ⚙️ Settings
        </button>

        <button
          id="adminLogout"
          class="admin-logout"
          type="button"
        >
          🚪 Logout
        </button>

      </aside>


      <main class="admin-main">

        <header class="admin-header">

          <div>
            <small>YUSUF ANIME</small>
            <h1 id="adminPageTitle">
              Dashboard
            </h1>
          </div>

          <button
            id="closeAdminDashboard"
            type="button"
          >
            ✕
          </button>

        </header>


        <section
          id="adminDashboardPage"
          class="admin-page"
        >

          <div class="admin-stats">

            <div class="admin-stat">
              <span>🎬</span>
              <strong id="statAnime">0</strong>
              <small>Anime</small>
            </div>

            <div class="admin-stat">
              <span>📺</span>
              <strong id="statEpisodes">0</strong>
              <small>Episodes</small>
            </div>

            <div class="admin-stat">
              <span>❤️</span>
              <strong id="statFavorites">0</strong>
              <small>Favorites</small>
            </div>

            <div class="admin-stat">
              <span>▶️</span>
              <strong id="statHistory">0</strong>
              <small>Watch History</small>
            </div>

          </div>


          <div class="admin-card">

            <h2>Quick Actions</h2>

            <div class="admin-actions">

              <button
                class="admin-primary"
                data-admin-page="anime"
                id="quickAddAnime"
              >
                ➕ Add Anime
              </button>

              <button
                class="admin-secondary"
                data-admin-page="episodes"
              >
                📺 Manage Episodes
              </button>

            </div>

          </div>

        </section>


        <section
          id="adminAnimePage"
          class="admin-page"
          style="display:none"
        >

          <div class="admin-card">

            <div class="admin-card-heading">

              <div>
                <h2>Anime Management</h2>
                <p>Add, edit or delete anime.</p>
              </div>

              <button
                id="newAnimeButton"
                class="admin-primary"
                type="button"
              >
                ➕ New Anime
              </button>

            </div>


            <div
              id="adminAnimeForm"
              class="admin-form"
              style="display:none"
            >

              <input
                type="hidden"
                id="editAnimeId"
              >

              <input
                id="animeTitleInput"
                placeholder="Anime title"
              >

              <textarea
                id="animeDescriptionInput"
                placeholder="Description"
              ></textarea>

              <div class="admin-form-grid">

                <input
                  id="animeYearInput"
                  type="number"
                  placeholder="Year"
                >

                <input
                  id="animeRatingInput"
                  type="number"
                  step="0.1"
                  min="0"
                  max="10"
                  placeholder="Rating"
                >

                <input
                  id="animeEpisodesInput"
                  type="number"
                  placeholder="Episodes"
                >

                <input
                  id="animePosterInput"
                  placeholder="Poster image URL"
                >

              </div>


              <select id="animeTypeInput">

                <option value="TV">TV</option>
                <option value="Movie">Movie</option>
                <option value="OVA">OVA</option>
                <option value="ONA">ONA</option>

              </select>


              <input
                id="animeGenresInput"
                placeholder="Genres: Action, Romance, Comedy"
              >


              <select id="animeStatusInput">

                <option value="Ongoing">
                  Ongoing
                </option>

                <option value="Completed">
                  Completed
                </option>

              </select>


              <div class="admin-form-buttons">

                <button
                  id="saveAnimeButton"
                  class="admin-primary"
                  type="button"
                >
                  💾 Save Anime
                </button>

                <button
                  id="cancelAnimeButton"
                  class="admin-secondary"
                  type="button"
                >
                  Cancel
                </button>

              </div>

            </div>


            <div
              id="adminAnimeList"
              class="admin-table"
            ></div>

          </div>

        </section>


        <section
          id="adminEpisodesPage"
          class="admin-page"
          style="display:none"
        >

          <div class="admin-card">

            <h2>Episode Management</h2>

            <p class="admin-help">
              Select an anime and manage its seasons.
            </p>


            <select
              id="episodeAnimeSelect"
              class="admin-select"
            ></select>


            <div class="admin-form-grid">

              <input
                id="episodeSeasonInput"
                type="number"
                min="1"
                placeholder="Season"
              >

              <input
                id="episodeCountInput"
                type="number"
                min="1"
                placeholder="Episode count"
              >

            </div>


            <button
              id="saveEpisodesButton"
              class="admin-primary"
              type="button"
            >
              💾 Save Season
            </button>


            <div
              id="adminEpisodeList"
              class="admin-table"
            ></div>

          </div>

        </section>


        <section
          id="adminSettingsPage"
          class="admin-page"
          style="display:none"
        >

          <div class="admin-card">

            <h2>Site Settings</h2>

            <p class="admin-help">
              Basic settings for your website.
            </p>

            <button
              id="resetSiteButton"
              class="admin-danger"
              type="button"
            >
              ♻️ Reset Anime Data
            </button>

          </div>

        </section>

      </main>

    </div>

  `;


  document.body.appendChild(
    panel
  );


  addAdminStyles();

  bindAdminEvents();

}


/* =========================================================
   ADMIN STYLES
========================================================= */

function addAdminStyles() {

  if ($("#adminStyles")) return;

  const style =
    document.createElement("style");

  style.id =
    "adminStyles";

  style.textContent = `

    #adminPanel {
      font-family:Arial,Helvetica,sans-serif;
    }

    .admin-screen {
      position:fixed;
      inset:0;
      z-index:20000;
      display:none;
      align-items:center;
      justify-content:center;
      padding:20px;
      background:
        radial-gradient(
          circle at center,
          rgba(229,9,20,.16),
          transparent 45%
        ),
        #07070b;
      backdrop-filter:blur(15px);
    }

    .admin-screen.show {
      display:flex;
    }

    .admin-login-box {
      position:relative;
      width:min(430px,100%);
      padding:40px;
      border:1px solid rgba(255,255,255,.1);
      border-radius:22px;
      background:#111118;
      box-shadow:
        0 30px 90px rgba(0,0,0,.6);
    }

    .admin-close {
      position:absolute;
      top:15px;
      right:15px;
      width:35px;
      height:35px;
      border:1px solid #333;
      border-radius:50%;
      background:#191922;
      color:#fff;
    }

    .admin-brand,
    .admin-sidebar-logo {
      font-size:22px;
      font-weight:900;
      letter-spacing:1px;
    }

    .admin-brand span,
    .admin-sidebar-logo span {
      color:#e50914;
    }

    .admin-login-box h2 {
      margin-top:25px;
      font-size:32px;
    }

    .admin-login-box p {
      color:#999;
      margin:10px 0 25px;
    }

    .admin-login-box input,
    .admin-form input,
    .admin-form textarea,
    .admin-form select,
    .admin-select,
    #adminEpisodesPage select {
      width:100%;
      padding:13px 15px;
      margin-bottom:10px;
      border:1px solid rgba(255,255,255,.1);
      border-radius:10px;
      outline:none;
      background:#181820;
      color:#fff;
    }

    .admin-form textarea {
      min-height:120px;
      resize:vertical;
    }

    .admin-primary,
    .admin-secondary,
    .admin-danger,
    .admin-logout {
      border:0;
      border-radius:9px;
      padding:12px 17px;
      color:#fff;
      cursor:pointer;
      transition:.2s;
    }

    .admin-primary {
      background:#e50914;
    }

    .admin-primary:hover {
      background:#ff2633;
      transform:translateY(-2px);
    }

    .admin-secondary {
      background:#25252f;
      border:1px solid rgba(255,255,255,.1);
    }

    .admin-danger {
      background:#7b1118;
    }

    .admin-message {
      min-height:20px;
      margin-top:12px;
      color:#ff6570;
      font-size:13px;
    }

    .admin-dashboard {
      position:fixed;
      inset:0;
      z-index:19999;
      display:none;
      grid-template-columns:250px 1fr;
      background:#08080d;
      color:#fff;
      overflow:hidden;
    }

    .admin-dashboard.show {
      display:grid;
    }

    .admin-sidebar {
      padding:25px 15px;
      border-right:1px solid rgba(255,255,255,.08);
      background:#0e0e15;
      display:flex;
      flex-direction:column;
      gap:8px;
    }

    .admin-sidebar-logo {
      padding:10px;
      margin-bottom:20px;
    }

    .admin-nav,
    .admin-logout {
      width:100%;
      padding:13px;
      text-align:left;
      border:0;
      border-radius:9px;
      background:transparent;
      color:#aaa;
    }

    .admin-nav:hover,
    .admin-nav.active {
      background:#1c1c26;
      color:#fff;
    }

    .admin-nav.active {
      border-left:3px solid #e50914;
    }

    .admin-logout {
      margin-top:auto;
      background:#251014;
      color:#ff6972;
    }

    .admin-main {
      min-width:0;
      overflow:auto;
      padding:30px;
    }

    .admin-header {
      display:flex;
      justify-content:space-between;
      align-items:center;
      margin-bottom:30px;
    }

    .admin-header small {
      color:#e50914;
      letter-spacing:2px;
    }

    .admin-header h1 {
      margin-top:5px;
      font-size:35px;
    }

    .admin-header > button {
      width:40px;
      height:40px;
      border:1px solid #333;
      border-radius:10px;
      background:#181820;
      color:#fff;
    }

    .admin-stats {
      display:grid;
      grid-template-columns:repeat(4,1fr);
      gap:15px;
      margin-bottom:20px;
    }

    .admin-stat {
      padding:22px;
      border:1px solid rgba(255,255,255,.08);
      border-radius:15px;
      background:#111119;
    }

    .admin-stat span {
      display:block;
      font-size:25px;
      margin-bottom:15px;
    }

    .admin-stat strong {
      display:block;
      font-size:30px;
    }

    .admin-stat small {
      color:#999;
    }

    .admin-card {
      padding:25px;
      margin-bottom:20px;
      border:1px solid rgba(255,255,255,.08);
      border-radius:15px;
      background:#111119;
    }

    .admin-card-heading {
      display:flex;
      justify-content:space-between;
      align-items:center;
      gap:15px;
      margin-bottom:20px;
    }

    .admin-card h2 {
      margin-bottom:8px;
    }

    .admin-card p,
    .admin-help {
      color:#999;
    }

    .admin-actions {
      display:flex;
      flex-wrap:wrap;
      gap:10px;
      margin-top:20px;
    }

    .admin-form {
      padding:20px;
      margin:20px 0;
      border:1px solid rgba(255,255,255,.08);
      border-radius:12px;
      background:#0d0d13;
    }

    .admin-form-grid {
      display:grid;
      grid-template-columns:repeat(2,1fr);
      gap:10px;
      margin-bottom:10px;
    }

    .admin-form-grid input {
      margin:0;
    }

    .admin-form-buttons {
      display:flex;
      gap:10px;
      margin-top:10px;
    }

    .admin-table {
      display:grid;
      gap:10px;
      margin-top:20px;
    }

    .admin-row {
      display:flex;
      align-items:center;
      justify-content:space-between;
      gap:15px;
      padding:15px;
      border:1px solid rgba(255,255,255,.07);
      border-radius:10px;
      background:#15151d;
    }

    .admin-row-info {
      min-width:0;
    }

    .admin-row-info strong {
      display:block;
      white-space:nowrap;
      overflow:hidden;
      text-overflow:ellipsis;
    }

    .admin-row-info small {
      display:block;
      margin-top:5px;
      color:#888;
    }

    .admin-row-actions {
      display:flex;
      gap:7px;
      flex-shrink:0;
    }

    .admin-row-actions button {
      border:1px solid #333;
      border-radius:8px;
      padding:8px 10px;
      background:#1b1b24;
      color:#fff;
      cursor:pointer;
    }

    .admin-row-actions .delete {
      color:#ff6570;
    }

    @media(max-width:800px) {

      .admin-dashboard {
        grid-template-columns:1fr;
      }

      .admin-sidebar {
        position:absolute;
        left:-270px;
        top:0;
        bottom:0;
        width:250px;
        z-index:5;
        transition:.25s;
      }

      .admin-dashboard.sidebar-open
      .admin-sidebar {
        left:0;
      }

      .admin-main {
        padding:20px 15px;
      }

      .admin-stats {
        grid-template-columns:repeat(2,1fr);
      }

      .admin-card-heading {
        align-items:flex-start;
        flex-direction:column;
      }

      .admin-form-grid {
        grid-template-columns:1fr;
      }

      .admin-row {
        align-items:flex-start;
        flex-direction:column;
      }

    }

    body.light #adminPanel {
      color:#111;
    }

  `;

  document.head.appendChild(
    style
  );

}


/* =========================================================
   ADMIN OPEN
========================================================= */

function openAdmin() {

  createAdminPanel();

  const login =
    $("#adminLogin");

  const dashboard =
    $("#adminDashboard");

  if (adminLoggedIn) {

    login.classList.remove(
      "show"
    );

    dashboard.classList.add(
      "show"
    );

    refreshAdmin();

  } else {

    login.classList.add(
      "show"
    );

    dashboard.classList.remove(
      "show"
    );

  }

  document.body.style.overflow =
    "hidden";

}


function closeAdmin() {

  $("#adminLogin")
    ?.classList.remove("show");

  $("#adminDashboard")
    ?.classList.remove("show");

  document.body.style.overflow =
    "";

}


/* =========================================================
   ADMIN LOGIN
========================================================= */

function adminLogin() {

  const username =
    $("#adminUsername")?.value.trim();

  const password =
    $("#adminPassword")?.value;

  const message =
    $("#adminLoginMessage");


  if (
    username === ADMIN_USERNAME &&
    password === ADMIN_PASSWORD
  ) {

    adminLoggedIn =
      true;

    localStorage.setItem(
      STORAGE.admin,
      "true"
    );

    if (message) {

      message.style.color =
        "#4cff8a";

      message.textContent =
        "Login successful.";

    }

    setTimeout(
      () => {

        $("#adminLogin")
          ?.classList.remove(
            "show"
          );

        $("#adminDashboard")
          ?.classList.add(
            "show"
          );

        refreshAdmin();

      },
      300
    );

  } else {

    if (message) {

      message.style.color =
        "#ff6570";

      message.textContent =
        "Wrong username or password.";

    }

  }

}


function adminLogout() {

  adminLoggedIn =
    false;

  localStorage.removeItem(
    STORAGE.admin
  );

  closeAdmin();

}


/* =========================================================
   ADMIN NAVIGATION
========================================================= */

function showAdminPage(page) {

  const pages = {

    dashboard:
      $("#adminDashboardPage"),

    anime:
      $("#adminAnimePage"),

    episodes:
      $("#adminEpisodesPage"),

    settings:
      $("#adminSettingsPage")

  };


  Object.values(pages)
    .forEach(element => {

      if (element) {

        element.style.display =
          "none";

      }

    });


  pages[page]?.style &&
    (pages[page].style.display =
      "block");


  $$(".admin-nav")
    .forEach(button => {

      button.classList.toggle(
        "active",
        button.dataset.adminPage ===
          page
      );

    });


  const title =
    $("#adminPageTitle");

  if (title) {

    title.textContent =
      page.charAt(0).toUpperCase() +
      page.slice(1);

  }


  if (page === "anime") {

    renderAdminAnime();

  }

  if (page === "episodes") {

    renderAdminEpisodes();

  }

}


/* =========================================================
   ADMIN DASHBOARD STATS
========================================================= */

function countEpisodes() {

  return animeList.reduce(
    (total, anime) => {

      const seasons =
        Object.values(
          anime.seasons || {}
        );

      return total +
        seasons.reduce(
          (a,b) =>
            a + Number(b || 0),
          0
        );

    },
    0
  );

}


function refreshAdmin() {

  $("#statAnime").textContent =
    animeList.length;

  $("#statEpisodes").textContent =
    countEpisodes();

  $("#statFavorites").textContent =
    favorites.length;

  $("#statHistory").textContent =
    watchHistory.length;

  renderAdminAnime();

  renderAdminEpisodes();

}


/* =========================================================
   ADMIN ANIME FORM
========================================================= */

function clearAnimeForm() {

  $("#editAnimeId").value =
    "";

  $("#animeTitleInput").value =
    "";

  $("#animeDescriptionInput").value =
    "";

  $("#animeYearInput").value =
    new Date().getFullYear();

  $("#animeRatingInput").value =
    "8.0";

  $("#animeEpisodesInput").value =
    "12";

  $("#animePosterInput").value =
    "";

  $("#animeTypeInput").value =
    "TV";

  $("#animeGenresInput").value =
    "Action";

  $("#animeStatusInput").value =
    "Ongoing";

}


function openAnimeForm(anime = null) {

  const form =
    $("#adminAnimeForm");

  if (!form) return;

  form.style.display =
    "block";


  if (!anime) {

    clearAnimeForm();

    return;

  }


  $("#editAnimeId").value =
    anime.id;

  $("#animeTitleInput").value =
    anime.title;

  $("#animeDescriptionInput").value =
    anime.description;

  $("#animeYearInput").value =
    anime.year;

  $("#animeRatingInput").value =
    anime.rating;

  $("#animeEpisodesInput").value =
    anime.episodes;

  $("#animePosterInput").value =
    anime.poster || "";

  $("#animeTypeInput").value =
    anime.type;

  $("#animeGenresInput").value =
    anime.genres.join(", ");

  $("#animeStatusInput").value =
    anime.status;

}


function closeAnimeForm() {

  $("#adminAnimeForm")
    ?.style &&
    ($("#adminAnimeForm").style.display =
      "none");

}


/* =========================================================
   SAVE ANIME
========================================================= */

function saveAnimeFromForm() {

  const title =
    $("#animeTitleInput").value.trim();

  if (!title) {

    alert("Please enter an anime title.");

    return;

  }


  const editId =
    $("#editAnimeId").value;


  const genres =
    $("#animeGenresInput")
      .value
      .split(",")
      .map(item => item.trim())
      .filter(Boolean);


  const data = {

    title,

    description:
      $("#animeDescriptionInput").value.trim(),

    year:
      Number(
        $("#animeYearInput").value
      ) || new Date().getFullYear(),

    rating:
      Number(
        $("#animeRatingInput").value
      ) || 0,

    episodes:
      Number(
        $("#animeEpisodesInput").value
      ) || 0,

    poster:
      $("#animePosterInput").value.trim(),

    type:
      $("#animeTypeInput").value,

    genres:

      genres.length
        ? genres
        : ["Action"],

    status:
      $("#animeStatusInput").value

  };


  if (editId) {

    const anime =
      getAnime(editId);

    if (anime) {

      Object.assign(
        anime,
        data
      );

      if (!anime.seasons) {

        anime.seasons = {
          1: data.episodes
        };

      }

    }

  } else {

    const newAnime = {

      id:
        Date.now(),

      ...data,

      seasons: {
        1: data.episodes
      }

    };

    animeList.unshift(
      newAnime
    );

  }


  saveAnime();

  closeAnimeForm();

  renderAll();

  refreshAdmin();

}


/* =========================================================
   ADMIN ANIME LIST
========================================================= */

function renderAdminAnime() {

  const list =
    $("#adminAnimeList");

  if (!list) return;

  if (!animeList.length) {

    list.innerHTML =
      "<p class='admin-help'>No anime.</p>";

    return;

  }


  list.innerHTML =
    animeList
      .map(
        anime => `

          <div class="admin-row">

            <div class="admin-row-info">

              <strong>
                ${escapeHTML(anime.title)}
              </strong>

              <small>
                ${anime.year}
                •
                ⭐ ${anime.rating}
                •
                ${anime.episodes} episodes
              </small>

            </div>

            <div class="admin-row-actions">

              <button
                data-edit-anime="${anime.id}"
              >
                ✏️ Edit
              </button>

              <button
                class="delete"
                data-delete-anime="${anime.id}"
              >
                🗑️ Delete
              </button>

            </div>

          </div>

        `
      )
      .join("");

}


/* =========================================================
   DELETE ANIME
========================================================= */

function deleteAnime(id) {

  const anime =
    getAnime(id);

  if (!anime) return;

  const confirmed =
    confirm(
      `Delete "${anime.title}"?`
    );

  if (!confirmed) return;


  animeList =
    animeList.filter(
      item =>
        Number(item.id) !==
        Number(id)
    );


  favorites =
    favorites.filter(
      item =>
        Number(item) !==
        Number(id)
    );


  watchHistory =
    watchHistory.filter(
      item =>
        Number(item.animeId) !==
        Number(id)
    );


  saveAnime();

  saveJSON(
    STORAGE.favorites,
    favorites
  );

  saveJSON(
    STORAGE.history,
    watchHistory
  );


  renderAll();

  refreshAdmin();

}


/* =========================================================
   ADMIN EPISODES
========================================================= */

function renderAdminEpisodes() {

  const select =
    $("#episodeAnimeSelect");

  const list =
    $("#adminEpisodeList");

  if (!select || !list) return;


  select.innerHTML =
    animeList
      .map(
        anime => `

          <option value="${anime.id}">
            ${escapeHTML(anime.title)}
          </option>

        `
      )
      .join("");


  renderAdminEpisodeList();

}


function renderAdminEpisodeList() {

  const select =
    $("#episodeAnimeSelect");

  const list =
    $("#adminEpisodeList");

  if (!select || !list) return;


  const anime =
    getAnime(
      select.value
    );


  if (!anime) {

    list.innerHTML =
      "<p class='admin-help'>No anime.</p>";

    return;

  }


  const seasons =
    Object.entries(
      anime.seasons || {}
    )
    .sort(
      (a,b) =>
        Number(a[0]) -
        Number(b[0])
    );


  list.innerHTML =
    seasons
      .map(
        ([season,count]) => `

          <div class="admin-row">

            <div class="admin-row-info">

              <strong>
                Season ${season}
              </strong>

              <small>
                ${count} Episodes
              </small>

            </div>

            <div class="admin-row-actions">

              <button
                data-delete-season="${season}"
              >
                🗑️ Delete
              </button>

            </div>

          </div>

        `
      )
      .join("") ||
      "<p class='admin-help'>No seasons yet.</p>";

}


function saveEpisodes() {

  const anime =
    getAnime(
      $("#episodeAnimeSelect").value
    );

  if (!anime) return;


  const season =
    Number(
      $("#episodeSeasonInput").value
    );

  const count =
    Number(
      $("#episodeCountInput").value
    );


  if (
    !season ||
    !count ||
    season < 1 ||
    count < 1
  ) {

    alert(
      "Enter a valid season and episode count."
    );

    return;

  }


  if (!anime.seasons) {

    anime.seasons = {};

  }


  anime.seasons[season] =
    count;


  anime.episodes =
    Object.values(
      anime.seasons
    )
    .reduce(
      (a,b) =>
        a + Number(b),
      0
    );


  saveAnime();

  renderAll();

  refreshAdmin();


  $("#episodeSeasonInput").value =
    "";

  $("#episodeCountInput").value =
    "";

}


function deleteSeason(season) {

  const anime =
    getAnime(
      $("#episodeAnimeSelect").value
    );

  if (!anime) return;


  if (
    !confirm(
      `Delete Season ${season}?`
    )
  ) return;


  delete anime.seasons[
    season
  ];


  anime.episodes =
    Object.values(
      anime.seasons || {}
    )
    .reduce(
      (a,b) =>
        a + Number(b),
      0
    );


  saveAnime();

  renderAll();

  refreshAdmin();

}


/* =========================================================
   RESET SITE
========================================================= */

function resetSite() {

  if (
    !confirm(
      "Reset all anime data to default?"
    )
  ) return;


  animeList =
    [...defaultAnime];

  favorites =
    [];

  watchHistory =
    [];


  saveAnime();

  saveJSON(
    STORAGE.favorites,
    favorites
  );

  saveJSON(
    STORAGE.history,
    watchHistory
  );


  renderAll();

  refreshAdmin();

}


/* =========================================================
   ADMIN EVENTS
========================================================= */

function bindAdminEvents() {

  $("#closeAdminLogin")
    ?.addEventListener(
      "click",
      closeAdmin
    );


  $("#closeAdminDashboard")
    ?.addEventListener(
      "click",
      closeAdmin
    );


  $("#adminLoginButton")
    ?.addEventListener(
      "click",
      adminLogin
    );


  $("#adminPassword")
    ?.addEventListener(
      "keydown",
      event => {

        if (
          event.key ===
          "Enter"
        ) {

          adminLogin();

        }

      }
    );


  $("#adminLogout")
    ?.addEventListener(
      "click",
      adminLogout
    );


  $$(".admin-nav")
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          showAdminPage(
            button.dataset.adminPage
          );

        }
      );

    });


  $$("#adminPanel [data-admin-page]")
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          showAdminPage(
            button.dataset.adminPage
          );

        }
      );

    });


  $("#newAnimeButton")
    ?.addEventListener(
      "click",
      () =>
        openAnimeForm()
    );


  $("#quickAddAnime")
    ?.addEventListener(
      "click",
      () =>
        openAnimeForm()
    );


  $("#cancelAnimeButton")
    ?.addEventListener(
      "click",
      closeAnimeForm
    );


  $("#saveAnimeButton")
    ?.addEventListener(
      "click",
      saveAnimeFromForm
    );


  $("#adminAnimeList")
    ?.addEventListener(
      "click",
      event => {

        const edit =
          event.target.closest(
            "[data-edit-anime]"
          );

        const del =
          event.target.closest(
            "[data-delete-anime]"
          );


        if (edit) {

          openAnimeForm(
            getAnime(
              edit.dataset.editAnime
            )
          );

        }


        if (del) {

          deleteAnime(
            del.dataset.deleteAnime
          );

        }

      }
    );


  $("#episodeAnimeSelect")
    ?.addEventListener(
      "change",
      renderAdminEpisodeList
    );


  $("#saveEpisodesButton")
    ?.addEventListener(
      "click",
      saveEpisodes
    );


  $("#adminEpisodeList")
    ?.addEventListener(
      "click",
      event => {

        const button =
          event.target.closest(
            "[data-delete-season]"
          );

        if (button) {

          deleteSeason(
            button.dataset.deleteSeason
          );

        }

      }
    );


  $("#resetSiteButton")
    ?.addEventListener(
      "click",
      resetSite
    );

}


/* =========================================================
   MAIN EVENT LISTENERS
========================================================= */

document.addEventListener(
  "click",
  event => {

    const card =
      event.target.closest(
        ".anime-card"
      );

    const play =
      event.target.closest(
        "[data-action='play']"
      );

    const favorite =
      event.target.closest(
        "[data-action='favorite']"
      );

    const searchResult =
      event.target.closest(
        ".search-result"
      );


    if (favorite) {

      event.stopPropagation();

      toggleFavorite(
        favorite.dataset.id
      );

      return;

    }


    if (play) {

      event.stopPropagation();

      const anime =
        getAnime(
          play.dataset.id
        );

      openDetails(
        anime.id
      );

      return;

    }


    if (card) {

      openDetails(
        card.dataset.id
      );

      return;

    }


    if (searchResult) {

      const anime =
        getAnime(
          searchResult.dataset.id
        );

      closeSearch();

      openDetails(
        anime.id
      );

    }

  }
);


/* =========================================================
   SEARCH EVENTS
========================================================= */

$("#searchButton")
  ?.addEventListener(
    "click",
    openSearch
  );


$("#heroSearch")
  ?.addEventListener(
    "click",
    openSearch
  );


$("#ctaSearch")
  ?.addEventListener(
    "click",
    openSearch
  );


$("#closeSearch")
  ?.addEventListener(
    "click",
    closeSearch
  );


$("#doSearch")
  ?.addEventListener(
    "click",
    performSearch
  );


$("#searchInput")
  ?.addEventListener(
    "keydown",
    event => {

      if (
        event.key ===
        "Enter"
      ) {

        performSearch();

      }

    }
  );


$("#searchModal")
  ?.addEventListener(
    "click",
    event => {

      if (
        event.target.id ===
        "searchModal"
      ) {

        closeSearch();

      }

    }
  );


/* =========================================================
   THEME EVENT
========================================================= */

$("#themeButton")
  ?.addEventListener(
    "click",
    toggleTheme
  );


/* =========================================================
   HEADER FAVORITES
========================================================= */

$("#favoriteHeader")
  ?.addEventListener(
    "click",
    () => {

      $("#favorites")
        ?.scrollIntoView({
          behavior:"smooth"
        });

    }
  );


/* =========================================================
   DETAILS EVENTS
========================================================= */

$("#closeDetails")
  ?.addEventListener(
    "click",
    closeDetails
  );


$("#detailsFavorite")
  ?.addEventListener(
    "click",
    () => {

      if (!currentAnime) return;

      toggleFavorite(
        currentAnime.id
      );

    }
  );


$("#detailsPlay")
  ?.addEventListener(
    "click",
    () => {

      if (!currentAnime) return;

      openWatch(
        currentAnime,
        1,
        1
      );

    }
  );


$("#seasonSelect")
  ?.addEventListener(
    "change",
    event => {

      currentSeason =
        Number(
          event.target.value
        );

      renderEpisodes();

    }
  );


$("#episodeGrid")
  ?.addEventListener(
    "click",
    event => {

      const button =
        event.target.closest(
          ".episode-button"
        );

      if (!button) return;

      openWatch(
        currentAnime,
        Number(
          button.dataset.episode
        ),
        Number(
          button.dataset.season
        )
      );

    }
  );


/* =========================================================
   WATCH EVENTS
========================================================= */

$("#closeWatch")
  ?.addEventListener(
    "click",
    closeWatch
  );


$("#nextEpisode")
  ?.addEventListener(
    "click",
    nextEpisode
  );


$("#previousEpisode")
  ?.addEventListener(
    "click",
    previousEpisode
  );


/* =========================================================
   MOBILE
========================================================= */

$("#menuButton")
  ?.addEventListener(
    "click",
    toggleMobileMenu
  );


$("#closeMenu")
  ?.addEventListener(
    "click",
    closeMobileMenu
  );


$("#mobileMenu")
  ?.addEventListener(
    "click",
    event => {

      if (
        event.target.closest(
          "a"
        )
      ) {

        closeMobileMenu();

      }

    }
  );


/* =========================================================
   LANGUAGE
========================================================= */

$("#languageButton")
  ?.addEventListener(
    "click",
    event => {

      event.stopPropagation();

      $("#languageMenu")
        ?.classList.toggle(
          "show"
        );

    }
  );


$$(
  "#languageMenu button"
)
.forEach(button => {

  button.addEventListener(
    "click",
    () => {

      setLanguage(
        button.dataset.language
      );

      $("#languageMenu")
        ?.classList.remove(
          "show"
        );

    }
  );

});


document.addEventListener(
  "click",
  event => {

    const wrapper =
      event.target.closest(
        ".language-wrapper"
      );

    if (!wrapper) {

      $("#languageMenu")
        ?.classList.remove(
          "show"
        );

    }

  }
);


/* =========================================================
   GENRES
========================================================= */

$$(
  ".genre-grid button"
)
.forEach(button => {

  button.addEventListener(
    "click",
    () => {

      filterGenre(
        button.dataset.genre
      );

    }
  );

});


/* =========================================================
   BACK TO TOP
========================================================= */

window.addEventListener(
  "scroll",
  () => {

    const button =
      $("#topButton");

    if (!button) return;

    button.classList.toggle(
      "show",
      window.scrollY > 500
    );

  }
);


$("#topButton")
  ?.addEventListener(
    "click",
    () => {

      window.scrollTo({
        top:0,
        behavior:"smooth"
      });

    }
  );


/* =========================================================
   ADMIN ACCESS
========================================================= */

/*
  ADMIN LOGIN:
  Username: admin
  Password: yusuf2026

  You can open the admin panel by:
  1. Pressing CTRL + ALT + A on desktop
  2. Typing /admin in the URL
*/

document.addEventListener(
  "keydown",
  event => {

    if (
      event.ctrlKey &&
      event.altKey &&
      event.key.toLowerCase() === "a"
    ) {

      openAdmin();

    }

  }
);


if (
  window.location.pathname
    .toLowerCase()
    .includes("/admin")
) {

  setTimeout(
    openAdmin,
    500
  );

}


/* =========================================================
   INITIALIZE
========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    loadTheme();

    setLanguage(
      currentLanguage
    );

    createAdminPanel();

    renderAll();

  }
);
