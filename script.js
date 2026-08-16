/* =====================================================
   YUSUF ANIME - MAIN JAVASCRIPT
===================================================== */

"use strict";

/* ================= DEFAULT ANIME ================= */

const defaultAnime = [

  {
    id: 1,
    title: "One Piece",
    year: 1999,
    rating: 9.0,
    type: "TV",
    genres: ["Action","Adventure","Fantasy","Shonen"],
    episodes: 1170,
    image: "",
    description: "Follow Monkey D. Luffy and his crew as they travel across the Grand Line searching for the legendary One Piece."
  },

  {
    id: 2,
    title: "Naruto",
    year: 2002,
    rating: 8.4,
    type: "TV",
    genres: ["Action","Adventure","Shonen"],
    episodes: 220,
    image: "",
    description: "Naruto Uzumaki dreams of becoming the strongest ninja and earning the respect of his village."
  },

  {
    id: 3,
    title: "Attack on Titan",
    year: 2013,
    rating: 9.1,
    type: "TV",
    genres: ["Action","Drama","Fantasy"],
    episodes: 87,
    image: "",
    description: "Humanity fights for survival against terrifying Titans beyond the walls."
  },

  {
    id: 4,
    title: "Demon Slayer",
    year: 2019,
    rating: 8.7,
    type: "TV",
    genres: ["Action","Fantasy","Adventure"],
    episodes: 63,
    image: "",
    description: "Tanjiro joins the Demon Slayer Corps after tragedy strikes his family."
  },

  {
    id: 5,
    title: "Jujutsu Kaisen",
    year: 2020,
    rating: 8.6,
    type: "TV",
    genres: ["Action","Fantasy","Shonen"],
    episodes: 47,
    image: "",
    description: "Yuji Itadori enters the dangerous world of curses and sorcery."
  },

  {
    id: 6,
    title: "My Dress-Up Darling",
    year: 2022,
    rating: 8.2,
    type: "TV",
    genres: ["Romance","Comedy","School"],
    episodes: 12,
    image: "",
    description: "A shy doll maker becomes friends with a popular girl who loves cosplay."
  },

  {
    id: 7,
    title: "Horimiya",
    year: 2021,
    rating: 8.6,
    type: "TV",
    genres: ["Romance","Comedy","School"],
    episodes: 13,
    image: "",
    description: "Two classmates discover unexpected sides of each other and slowly fall in love."
  },

  {
    id: 8,
    title: "Your Name",
    year: 2016,
    rating: 8.8,
    type: "Movie",
    genres: ["Romance","Drama","Fantasy"],
    episodes: 1,
    image: "",
    description: "Two teenagers mysteriously begin switching bodies and searching for each other."
  },

  {
    id: 9,
    title: "Solo Leveling",
    year: 2024,
    rating: 8.9,
    type: "TV",
    genres: ["Action","Fantasy"],
    episodes: 25,
    image: "",
    description: "A weak hunter gains a mysterious system that allows him to become stronger."
  },

  {
    id: 10,
    title: "Death Note",
    year: 2006,
    rating: 8.9,
    type: "TV",
    genres: ["Drama","Fantasy"],
    episodes: 37,
    image: "",
    description: "A student discovers a supernatural notebook that can kill anyone whose name is written inside."
  }

];

/* ================= STORAGE ================= */

let animeList =
  JSON.parse(localStorage.getItem("yusufAnime")) ||
  defaultAnime;

let favorites =
  JSON.parse(localStorage.getItem("yusufFavorites")) ||
  [];

let watchProgress =
  JSON.parse(localStorage.getItem("yusufProgress")) ||
  {};

let currentAnime = null;
let currentEpisode = 1;
let editingId = null;

/* ================= SAVE ================= */

function saveAnime() {
  localStorage.setItem(
    "yusufAnime",
    JSON.stringify(animeList)
  );
}

function saveFavorites() {
  localStorage.setItem(
    "yusufFavorites",
    JSON.stringify(favorites)
  );
}

function saveProgress() {
  localStorage.setItem(
    "yusufProgress",
    JSON.stringify(watchProgress)
  );
}

/* ================= LOADER ================= */

window.addEventListener("load", () => {

  setTimeout(() => {

    document
      .getElementById("loader")
      .classList.add("hide");

  }, 700);

  renderAll();

});

/* ================= HELPERS ================= */

function getAnime(id) {

  return animeList.find(
    anime => anime.id === Number(id)
  );

}

function escapeHTML(text) {

  return String(text ?? "")
    .replaceAll("&","&amp;")
    .replaceAll("<","&lt;")
    .replaceAll(">","&gt;")
    .replaceAll('"',"&quot;")
    .replaceAll("'","&#039;");

}

/* ================= CARD ================= */

function animeCard(anime) {

  const isFavorite =
    favorites.includes(anime.id);

  const letter =
    anime.title.charAt(0).toUpperCase();

  const image = anime.image
    ? `<img class="poster-image" src="${escapeHTML(anime.image)}" alt="${escapeHTML(anime.title)}" onerror="this.style.display='none'">`
    : "";

  return `

    <article class="anime-card"
      data-id="${anime.id}">

      <div
        class="poster poster-${(anime.id % 10) + 1} ${anime.image ? "has-image" : ""}"
        data-letter="${letter}"
      >

        ${image}

        <span class="card-top">
          ${escapeHTML(anime.type)}
        </span>

        <span class="card-bottom">
          ⭐ ${anime.rating}
        </span>

        <button
          class="card-favorite ${isFavorite ? "active" : ""}"
          data-favorite="${anime.id}"
        >
          ${isFavorite ? "❤️" : "♡"}
        </button>

        <button
          class="card-play"
          data-play="${anime.id}"
        >
          ▶
        </button>

      </div>

      <div class="card-info">

        <h3>${escapeHTML(anime.title)}</h3>

        <p>
          ${anime.year} • ${anime.genres.slice(0,2).join(" • ")}
        </p>

      </div>

    </article>

  `;

}

/* ================= RENDER GRID ================= */

function renderGrid(elementId, list) {

  const element =
    document.getElementById(elementId);

  if (!element) return;

  element.innerHTML =
    list.map(animeCard).join("");

}

/* ================= RENDER ALL ================= */

function renderAll() {

  renderGrid(
    "trendingGrid",
    animeList.slice(0,5)
  );

  renderGrid(
    "latestGrid",
    [...animeList]
      .sort((a,b) => b.year - a.year)
      .slice(0,5)
  );

  renderGrid(
    "topGrid",
    [...animeList]
      .sort((a,b) => b.rating - a.rating)
      .slice(0,5)
  );

  renderFavorites();

  renderContinue();

  renderAdminList();

  updateStats();

}

/* ================= FAVORITES ================= */

function toggleFavorite(id) {

  id = Number(id);

  if (favorites.includes(id)) {

    favorites =
      favorites.filter(
        item => item !== id
      );

  } else {

    favorites.push(id);

  }

  saveFavorites();

  renderAll();

  if (currentAnime) {
    updateFavoriteButton();
  }

}

function renderFavorites() {

  const list =
    animeList.filter(
      anime => favorites.includes(anime.id)
    );

  renderGrid(
    "favoritesGrid",
    list
  );

  const empty =
    document.getElementById("emptyFavorites");

  if (empty) {

    empty.style.display =
      list.length ? "none" : "block";

  }

}

/* ================= CONTINUE ================= */

function renderContinue() {

  const ids =
    Object.keys(watchProgress);

  const list =
    ids
      .map(id => getAnime(id))
      .filter(Boolean);

  const section =
    document.getElementById(
      "continueSection"
    );

  if (!list.length) {

    section.classList.add("hidden");

    return;

  }

  section.classList.remove("hidden");

  renderGrid(
    "continueGrid",
    list
  );

}

/* ================= DETAILS ================= */

function openDetails(id) {

  const anime =
    getAnime(id);

  if (!anime) return;

  currentAnime = anime;

  document
    .getElementById("detailsPage")
    .classList.add("show");

  document.body.style.overflow = "hidden";

  document.getElementById(
    "detailsTitle"
  ).textContent = anime.title;

  document.getElementById(
    "detailsType"
  ).textContent = anime.type;

  document.getElementById(
    "detailsMeta"
  ).innerHTML = `

    <span>⭐ ${anime.rating}</span>
    <span>📅 ${anime.year}</span>
    <span>🎬 ${anime.episodes} Episodes</span>
    <span>🎭 ${anime.genres.join(", ")}</span>

  `;

  document.getElementById(
    "detailsDescription"
  ).textContent = anime.description;

  const poster =
    document.getElementById("detailsPoster");

  poster.style.backgroundImage =
    anime.image
      ? `url("${anime.image}")`
      : "";

  renderEpisodes();

  updateFavoriteButton();

}

/* ================= CLOSE DETAILS ================= */

function closeDetails() {

  document
    .getElementById("detailsPage")
    .classList.remove("show");

  document.body.style.overflow = "";

}

/* ================= FAVORITE BUTTON ================= */

function updateFavoriteButton() {

  const button =
    document.getElementById(
      "detailsFavorite"
    );

  if (!currentAnime) return;

  const active =
    favorites.includes(currentAnime.id);

  button.textContent =
    active
      ? "❤️ Remove from Favorites"
      : "♡ Add to Favorites";

}

/* ================= EPISODES ================= */

function renderEpisodes() {

  const grid =
    document.getElementById(
      "episodeGrid"
    );

  if (!currentAnime) return;

  const total =
    currentAnime.episodes;

  let html = "";

  for (let i = 1; i <= total; i++) {

    const watched =
      watchProgress[currentAnime.id] >= i;

    html += `

      <button
        class="episode-button ${watched ? "watched" : ""}"
        data-episode="${i}"
      >
        EP ${i}
      </button>

    `;

  }

  grid.innerHTML = html;

}

/* ================= WATCH ================= */

function openWatch(id, episode = 1) {

  const anime =
    getAnime(id);

  if (!anime) return;

  currentAnime = anime;

  currentEpisode =
    Math.max(
      1,
      Math.min(
        Number(episode),
        anime.episodes
      )
    );

  watchProgress[anime.id] =
    currentEpisode;

  saveProgress();

  document
    .getElementById("watchPage")
    .classList.add("show");

  document.body.style.overflow =
    "hidden";

  updateWatchUI();

  renderContinue();

}

/* ================= WATCH UI ================= */

function updateWatchUI() {

  document.getElementById(
    "watchTitle"
  ).textContent =
    `${currentAnime.title} - Episode ${currentEpisode}`;

  document.getElementById(
    "watchAnime"
  ).textContent =
    currentAnime.title;

  document.getElementById(
    "watchEpisode"
  ).textContent =
    `Episode ${currentEpisode} / ${currentAnime.episodes}`;

}

/* ================= NEXT ================= */

function nextEpisode() {

  if (!currentAnime) return;

  if (
    currentEpisode <
    currentAnime.episodes
  ) {

    currentEpisode++;

    watchProgress[currentAnime.id] =
      currentEpisode;

    saveProgress();

    updateWatchUI();

  }

}

/* ================= PREVIOUS ================= */

function previousEpisode() {

  if (!currentAnime) return;

  if (currentEpisode > 1) {

    currentEpisode--;

    watchProgress[currentAnime.id] =
      currentEpisode;

    saveProgress();

    updateWatchUI();

  }

}

/* ================= SEARCH ================= */

function openSearch() {

  document
    .getElementById("searchModal")
    .classList.add("show");

  document
    .getElementById("searchInput")
    .focus();

}

function closeSearch() {

  document
    .getElementById("searchModal")
    .classList.remove("show");

}

function searchAnime() {

  const query =
    document
      .getElementById("searchInput")
      .value
      .trim()
      .toLowerCase();

  const results =
    animeList.filter(anime => {

      const text =
        `${anime.title}
        ${anime.genres.join(" ")}
        ${anime.description}`
        .toLowerCase();

      return text.includes(query);

    });

  const box =
    document.getElementById(
      "searchResults"
    );

  if (!query) {

    box.innerHTML =
      "<p>Type an anime name.</p>";

    return;

  }

  if (!results.length) {

    box.innerHTML =
      "<p>No anime found.</p>";

    return;

  }

  box.innerHTML =
    results.map(anime => `

      <div
        class="search-result"
        data-search-id="${anime.id}"
      >
        <strong>
          ${escapeHTML(anime.title)}
        </strong>

        <br>

        <small>
          ⭐ ${anime.rating}
          • ${anime.year}
        </small>

      </div>

    `).join("");

}

/* ================= THEME ================= */

function loadTheme() {

  const theme =
    localStorage.getItem(
      "yusufTheme"
    );

  if (theme === "light") {

    document.body.classList.add("light");

    document.getElementById(
      "themeButton"
    ).textContent = "☀️";

  }

}

function toggleTheme() {

  document.body.classList.toggle("light");

  const light =
    document.body.classList.contains("light");

  localStorage.setItem(
    "yusufTheme",
    light ? "light" : "dark"
  );

  document.getElementById(
    "themeButton"
  ).textContent =
    light ? "☀️" : "🌙";

}

/* ================= LANGUAGE ================= */

const languages = {

  en: {
    name: "English"
  },

  ku: {
    name: "کوردی"
  },

  ar: {
    name: "العربية"
  },

  tr: {
    name: "Türkçe"
  },

  ja: {
    name: "日本語"
  },

  es: {
    name: "Español"
  },

  fr: {
    name: "Français"
  },

  de: {
    name: "Deutsch"
  }

};

function selectLanguage(language) {

  const data =
    languages[language];

  if (!data) return;

  document.getElementById(
    "currentLanguage"
  ).textContent =
    data.name;

  localStorage.setItem(
    "yusufLanguage",
    language
  );

  document
    .querySelectorAll(
      ".language-menu button"
    )
    .forEach(button => {

      button.classList.toggle(
        "active",
        button.dataset.language === language
      );

    });

}

function loadLanguage() {

  const language =
    localStorage.getItem(
      "yusufLanguage"
    ) || "en";

  selectLanguage(language);

}

/* ================= ADMIN LOGIN ================= */

/*
  DEMO LOGIN

  Username: admin
  Password: 1234
*/

function openAdmin() {

  const loggedIn =
    localStorage.getItem(
      "yusufAdmin"
    ) === "true";

  if (loggedIn) {

    openAdminPanel();

  } else {

    document
      .getElementById("loginModal")
      .classList.add("show");

  }

}

function loginAdmin() {

  const username =
    document.getElementById(
      "adminUsername"
    ).value.trim();

  const password =
    document.getElementById(
      "adminPassword"
    ).value;

  if (
    username === "admin" &&
    password === "1234"
  ) {

    localStorage.setItem(
      "yusufAdmin",
      "true"
    );

    document
      .getElementById("loginModal")
      .classList.remove("show");

    openAdminPanel();

  } else {

    document.getElementById(
      "loginError"
    ).textContent =
      "❌ Wrong username or password.";

  }

}

/* ================= ADMIN PANEL ================= */

function openAdminPanel() {

  document
    .getElementById("adminPanel")
    .classList.add("show");

  document.body.style.overflow =
    "hidden";

  renderAdminList();

  updateStats();

}

function closeAdminPanel() {

  document
    .getElementById("adminPanel")
    .classList.remove("show");

  document.body.style.overflow =
    "";

}

/* ================= ADMIN LIST ================= */

function renderAdminList() {

  const container =
    document.getElementById(
      "adminAnimeList"
    );

  if (!container) return;

  container.innerHTML =
    animeList.map(anime => `

      <div class="admin-item">

        ${
          anime.image
          ? `<img src="${escapeHTML(anime.image)}" alt="">`
          : `<div class="admin-placeholder">
              ${escapeHTML(anime.title.charAt(0))}
             </div>`
        }

        <div class="admin-item-info">

          <strong>
            ${escapeHTML(anime.title)}
          </strong>

          <span>
            ${anime.year}
            • ⭐ ${anime.rating}
            • ${anime.episodes} Episodes
          </span>

        </div>

        <div class="admin-item-actions">

          <button
            data-edit="${anime.id}"
          >
            ✏️
          </button>

          <button
            data-delete="${anime.id}"
          >
            🗑️
          </button>

        </div>

      </div>

    `).join("");

}

/* ================= ADMIN SAVE ================= */

function saveAnimeForm() {

  const title =
    document.getElementById(
      "animeTitle"
    ).value.trim();

  const image =
    document.getElementById(
      "animeImage"
    ).value.trim();

  const year =
    Number(
      document.getElementById(
        "animeYear"
      ).value
    );

  const rating =
    Number(
      document.getElementById(
        "animeRating"
      ).value
    );

  const type =
    document.getElementById(
      "animeType"
    ).value;

  const genreText =
    document.getElementById(
      "animeGenre"
    ).value;

  const description =
    document.getElementById(
      "animeDescription"
    ).value.trim();

  const episodes =
    Number(
      document.getElementById(
        "animeEpisodes"
      ).value
    );

  if (
    !title ||
    !year ||
    !rating ||
    !episodes
  ) {

    alert(
      "Please fill the required fields."
    );

    return;

  }

  const genres =
    genreText
      .split(",")
      .map(item => item.trim())
      .filter(Boolean);

  if (editingId !== null) {

    const anime =
      getAnime(editingId);

    if (!anime) return;

    anime.title = title;
    anime.image = image;
    anime.year = year;
    anime.rating = rating;
    anime.type = type;
    anime.genres =
      genres.length
        ? genres
        : ["Action"];
    anime.description =
      description;
    anime.episodes = episodes;

  } else {

    animeList.push({

      id:
        Date.now(),

      title,

      image,

      year,

      rating,

      type,

      genres:
        genres.length
          ? genres
          : ["Action"],

      description,

      episodes

    });

  }

  saveAnime();

  resetForm();

  renderAll();

}

/* ================= EDIT ================= */

function editAnime(id) {

  const anime =
    getAnime(id);

  if (!anime) return;

  editingId =
    Number(id);

  document.getElementById(
    "formTitle"
  ).textContent =
    "✏️ Edit Anime";

  document.getElementById(
    "animeTitle"
  ).value =
    anime.title;

  document.getElementById(
    "animeImage"
  ).value =
    anime.image;

  document.getElementById(
    "animeYear"
  ).value =
    anime.year;

  document.getElementById(
    "animeRating"
  ).value =
    anime.rating;

  document.getElementById(
    "animeType"
  ).value =
    anime.type;

  document.getElementById(
    "animeGenre"
  ).value =
    anime.genres.join(", ");

  document.getElementById(
    "animeDescription"
  ).value =
    anime.description;

  document.getElementById(
    "animeEpisodes"
  ).value =
    anime.episodes;

  document.getElementById(
    "cancelEdit"
  ).classList.remove("hidden");

}

/* ================= DELETE ================= */

function deleteAnime(id) {

  const anime =
    getAnime(id);

  if (!anime) return;

  const ok =
    confirm(
      `Delete "${anime.title}"?`
    );

  if (!ok) return;

  animeList =
    animeList.filter(
      item =>
        item.id !== Number(id)
    );

  favorites =
    favorites.filter(
      item =>
        item !== Number(id)
    );

  delete watchProgress[id];

  saveAnime();
  saveFavorites();
  saveProgress();

  renderAll();

}

/* ================= RESET FORM ================= */

function resetForm() {

  editingId = null;

  document.getElementById(
    "formTitle"
  ).textContent =
    "➕ Add Anime";

  document.querySelectorAll(
    ".admin-form input, .admin-form textarea"
  ).forEach(input => {

    input.value = "";

  });

  document.getElementById(
    "animeType"
  ).value = "TV";

  document.getElementById(
    "cancelEdit"
  ).classList.add("hidden");

}

/* ================= STATS ================= */

function updateStats() {

  document.getElementById(
    "statAnime"
  ).textContent =
    animeList.length;

  document.getElementById(
    "statFavorites"
  ).textContent =
    favorites.length;

  document.getElementById(
    "statEpisodes"
  ).textContent =
    animeList.reduce(
      (sum, anime) =>
        sum + Number(anime.episodes || 0),
      0
    );

}

/* ================= RESET DEFAULT ================= */

function resetDefaultAnime() {

  const ok =
    confirm(
      "Reset anime library to default?"
    );

  if (!ok) return;

  animeList =
    JSON.parse(
      JSON.stringify(defaultAnime)
    );

  favorites = [];

  watchProgress = {};

  saveAnime();
  saveFavorites();
  saveProgress();

  renderAll();

}

/* ================= MOBILE MENU ================= */

function openMobileMenu() {

  document
    .getElementById("mobileMenu")
    .classList.add("open");

}

function closeMobileMenu() {

  document
    .getElementById("mobileMenu")
    .classList.remove("open");

}

/* ================= EVENTS ================= */

document.addEventListener(
  "click",
  event => {

    const favorite =
      event.target.closest(
        "[data-favorite]"
      );

    if (favorite) {

      event.stopPropagation();

      toggleFavorite(
        favorite.dataset.favorite
      );

      return;

    }

    const play =
      event.target.closest(
        "[data-play]"
      );

    if (play) {

      event.stopPropagation();

      openWatch(
        play.dataset.play
      );

      return;

    }

    const card =
      event.target.closest(
        ".anime-card"
      );

    if (card) {

      openDetails(
        card.dataset.id
      );

      return;

    }

    const episode =
      event.target.closest(
        "[data-episode]"
      );

    if (episode) {

      openWatch(
        currentAnime.id,
        Number(
          episode.dataset.episode
        )
      );

      return;

    }

    const searchResult =
      event.target.closest(
        "[data-search-id]"
      );

    if (searchResult) {

      closeSearch();

      openDetails(
        searchResult.dataset.searchId
      );

      return;

    }

    const edit =
      event.target.closest(
        "[data-edit]"
      );

    if (edit) {

      editAnime(
        edit.dataset.edit
      );

      return;

    }

    const del =
      event.target.closest(
        "[data-delete]"
      );

    if (del) {

      deleteAnime(
        del.dataset.delete
      );

      return;

    }

    const genre =
      event.target.closest(
        "[data-genre]"
      );

    if (genre) {

      const name =
        genre.dataset.genre;

      const results =
        animeList.filter(
          anime =>
            anime.genres.includes(name)
        );

      renderGrid(
        "trendingGrid",
        results
      );

      document
        .getElementById("trending")
        .scrollIntoView({
          behavior: "smooth"
        });

    }

  }
);

/* SEARCH */

document
  .getElementById("searchButton")
  .addEventListener(
    "click",
    openSearch
  );

document
  .getElementById("heroSearch")
  .addEventListener(
    "click",
    openSearch
  );

document
  .getElementById("ctaSearch")
  .addEventListener(
    "click",
    openSearch
  );

document
  .getElementById("closeSearch")
  .addEventListener(
    "click",
    closeSearch
  );

document
  .getElementById("doSearch")
  .addEventListener(
    "click",
    searchAnime
  );

document
  .getElementById("searchInput")
  .addEventListener(
    "input",
    searchAnime
  );

/* THEME */

document
  .getElementById("themeButton")
  .addEventListener(
    "click",
    toggleTheme
  );

/* LANGUAGE */

document
  .getElementById("languageButton")
  .addEventListener(
    "click",
    event => {

      event.stopPropagation();

      document
        .getElementById("languageMenu")
        .classList.toggle("show");

    }
  );

document
  .querySelectorAll(
    "[data-language]"
  )
  .forEach(button => {

    button.addEventListener(
      "click",
      () => {

        selectLanguage(
          button.dataset.language
        );

        document
          .getElementById(
            "languageMenu"
          )
          .classList.remove("show");

      }
    );

  });

/* ADMIN */

document
  .getElementById("adminButton")
  .addEventListener(
    "click",
    openAdmin
  );

document
  .getElementById("mobileAdmin")
  .addEventListener(
    "click",
    () => {

      closeMobileMenu();

      openAdmin();

    }
  );

document
  .getElementById("closeLogin")
  .addEventListener(
    "click",
    () => {

      document
        .getElementById("loginModal")
        .classList.remove("show");

    }
  );

document
  .getElementById("loginButton")
  .addEventListener(
    "click",
    loginAdmin
  );

document
  .getElementById("logoutButton")
  .addEventListener(
    "click",
    () => {

      localStorage.removeItem(
        "yusufAdmin"
      );

      closeAdminPanel();

    }
  );

document
  .getElementById("closeAdmin")
  .addEventListener(
    "click",
    closeAdminPanel
  );

document
  .getElementById("saveAnime")
  .addEventListener(
    "click",
    saveAnimeForm
  );

document
  .getElementById("cancelEdit")
  .addEventListener(
    "click",
    resetForm
  );

document
  .getElementById("resetAnime")
  .addEventListener(
    "click",
    resetDefaultAnime
  );

/* DETAILS */

document
  .getElementById("closeDetails")
  .addEventListener(
    "click",
    closeDetails
  );

document
  .getElementById("detailsPlay")
  .addEventListener(
    "click",
    () => {

      if (currentAnime) {

        openWatch(
          currentAnime.id,
          watchProgress[currentAnime.id] || 1
        );

      }

    }
  );

document
  .getElementById("detailsFavorite")
  .addEventListener(
    "click",
    () => {

      if (currentAnime) {

        toggleFavorite(
          currentAnime.id
        );

      }

    }
  );

document
  .getElementById("seasonSelect")
  .addEventListener(
    "change",
    renderEpisodes
  );

/* WATCH */

document
  .getElementById("closeWatch")
  .addEventListener(
    "click",
    () => {

      document
        .getElementById("watchPage")
        .classList.remove("show");

      document.body.style.overflow = "";

    }
  );

document
  .getElementById("nextEpisode")
  .addEventListener(
    "click",
    nextEpisode
  );

document
  .getElementById("previousEpisode")
  .addEventListener(
    "click",
    previousEpisode
  );

/* MOBILE */

document
  .getElementById("menuButton")
  .addEventListener(
    "click",
    openMobileMenu
  );

document
  .getElementById("closeMenu")
  .addEventListener(
    "click",
    closeMobileMenu
  );

/* FAVORITE HEADER */

document
  .getElementById("favoriteHeader")
  .addEventListener(
    "click",
    () => {

      document
        .getElementById("favorites")
        .scrollIntoView({
          behavior: "smooth"
        });

    }
  );

/* NAV */

document
  .querySelectorAll(
    ".desktop-nav a"
  )
  .forEach(link => {

    link.addEventListener(
      "click",
      () => {

        document
          .querySelectorAll(
            ".desktop-nav a"
          )
          .forEach(item =>
            item.classList.remove("active")
          );

        link.classList.add("active");

      }
    );

  });

/* TOP */

const topButton =
  document.getElementById(
    "topButton"
  );

window.addEventListener(
  "scroll",
  () => {

    if (window.scrollY > 500) {

      topButton.classList.add("show");

    } else {

      topButton.classList.remove("show");

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

/* CLOSE LANGUAGE OUTSIDE */

document.addEventListener(
  "click",
  () => {

    document
      .getElementById("languageMenu")
      .classList.remove("show");

  }
);

/* ESC */

document.addEventListener(
  "keydown",
  event => {

    if (event.key !== "Escape") return;

    closeSearch();
    closeDetails();
    closeAdminPanel();
    closeMobileMenu();

    document
      .getElementById("watchPage")
      .classList.remove("show");

    document
      .getElementById("loginModal")
      .classList.remove("show");

    document.body.style.overflow = "";

  }
);

/* INITIAL */

loadTheme();
loadLanguage();
