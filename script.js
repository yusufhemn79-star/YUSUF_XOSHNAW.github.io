/* =========================================================
   YUSUF ANIME
   Main JavaScript
========================================================= */


/* =========================================================
   DEFAULT ANIME DATA
========================================================= */

const defaultAnime = [

  {
    id: 1,
    title: "One Piece",
    year: 1999,
    rating: 9.0,
    type: "TV",
    status: "Ongoing",
    genres: ["Action", "Adventure", "Shonen"],
    poster:
      "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=600&q=80",
    description:
      "Monkey D. Luffy and his crew travel across the Grand Line searching for the legendary One Piece treasure.",
    seasons: 1,
    episodes: 20
  },

  {
    id: 2,
    title: "Demon Slayer",
    year: 2019,
    rating: 8.6,
    type: "TV",
    status: "Completed",
    genres: ["Action", "Fantasy", "Drama"],
    poster:
      "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=600&q=80",
    description:
      "Tanjiro joins the Demon Slayer Corps after his family is attacked and his sister is turned into a demon.",
    seasons: 4,
    episodes: 12
  },

  {
    id: 3,
    title: "Jujutsu Kaisen",
    year: 2020,
    rating: 8.7,
    type: "TV",
    status: "Ongoing",
    genres: ["Action", "Fantasy", "Shonen"],
    poster:
      "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?auto=format&fit=crop&w=600&q=80",
    description:
      "Yuji Itadori becomes involved in the dangerous world of cursed spirits and sorcerers.",
    seasons: 2,
    episodes: 12
  },

  {
    id: 4,
    title: "My Dress-Up Darling",
    year: 2022,
    rating: 8.2,
    type: "TV",
    status: "Ongoing",
    genres: ["Romance", "Comedy", "School"],
    poster:
      "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=600&q=80",
    description:
      "Wakana Gojo and Marin Kitagawa become closer while working together on cosplay.",
    seasons: 1,
    episodes: 12
  },

  {
    id: 5,
    title: "Horimiya",
    year: 2021,
    rating: 8.1,
    type: "TV",
    status: "Completed",
    genres: ["Romance", "Comedy", "School"],
    poster:
      "https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&w=600&q=80",
    description:
      "Two high school students discover unexpected sides of each other and slowly fall in love.",
    seasons: 1,
    episodes: 13
  },

  {
    id: 6,
    title: "Attack on Titan",
    year: 2013,
    rating: 9.1,
    type: "TV",
    status: "Completed",
    genres: ["Action", "Drama", "Fantasy"],
    poster:
      "https://images.unsplash.com/photo-1541562232579-512a21360020?auto=format&fit=crop&w=600&q=80",
    description:
      "Humanity fights for survival against mysterious giant Titans outside the walls.",
    seasons: 4,
    episodes: 12
  },

  {
    id: 7,
    title: "Your Name",
    year: 2016,
    rating: 8.8,
    type: "Movie",
    status: "Completed",
    genres: ["Romance", "Drama", "Fantasy"],
    poster:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80",
    description:
      "Two teenagers mysteriously begin switching bodies and discover a connection across time.",
    seasons: 1,
    episodes: 1
  },

  {
    id: 8,
    title: "Naruto",
    year: 2002,
    rating: 8.4,
    type: "TV",
    status: "Completed",
    genres: ["Action", "Adventure", "Shonen"],
    poster:
      "https://images.unsplash.com/photo-1606112219348-204d7d8b94ee?auto=format&fit=crop&w=600&q=80",
    description:
      "Naruto Uzumaki dreams of becoming Hokage while growing stronger alongside his friends.",
    seasons: 5,
    episodes: 12
  },

  {
    id: 9,
    title: "Spy x Family",
    year: 2022,
    rating: 8.5,
    type: "TV",
    status: "Ongoing",
    genres: ["Comedy", "Action", "School"],
    poster:
      "https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?auto=format&fit=crop&w=600&q=80",
    description:
      "A spy, an assassin and a telepath form an unusual fake family.",
    seasons: 2,
    episodes: 12
  },

  {
    id: 10,
    title: "Death Note",
    year: 2006,
    rating: 8.9,
    type: "TV",
    status: "Completed",
    genres: ["Drama", "Fantasy"],
    poster:
      "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?auto=format&fit=crop&w=600&q=80",
    description:
      "A student discovers a supernatural notebook that can kill anyone whose name is written inside.",
    seasons: 1,
    episodes: 12
  }

];


/* =========================================================
   STORAGE
========================================================= */

const STORAGE = {
  anime: "yusuf_anime_data",
  favorites: "yusuf_anime_favorites",
  progress: "yusuf_anime_progress",
  users: "yusuf_anime_users",
  currentUser: "yusuf_anime_current_user",
  theme: "yusuf_anime_theme"
};


/* =========================================================
   STATE
========================================================= */

let animeList =
  JSON.parse(localStorage.getItem(STORAGE.anime)) ||
  defaultAnime;

let favorites =
  JSON.parse(localStorage.getItem(STORAGE.favorites)) ||
  [];

let progress =
  JSON.parse(localStorage.getItem(STORAGE.progress)) ||
  {};

let users =
  JSON.parse(localStorage.getItem(STORAGE.users)) ||
  [];

let currentUser =
  JSON.parse(localStorage.getItem(STORAGE.currentUser)) ||
  null;

let currentAnime = null;

let currentEpisode = 1;

let currentSeason = 1;

let authMode = "login";


/* =========================================================
   HELPERS
========================================================= */

function saveAnime() {
  localStorage.setItem(
    STORAGE.anime,
    JSON.stringify(animeList)
  );
}


function saveFavorites() {
  localStorage.setItem(
    STORAGE.favorites,
    JSON.stringify(favorites)
  );
}


function saveProgress() {
  localStorage.setItem(
    STORAGE.progress,
    JSON.stringify(progress)
  );
}


function saveUsers() {
  localStorage.setItem(
    STORAGE.users,
    JSON.stringify(users)
  );
}


function saveCurrentUser() {

  if (currentUser) {
    localStorage.setItem(
      STORAGE.currentUser,
      JSON.stringify(currentUser)
    );
  } else {
    localStorage.removeItem(
      STORAGE.currentUser
    );
  }

}


function escapeHTML(value) {

  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

}


/* =========================================================
   DOM
========================================================= */

const loader =
  document.getElementById("loader");

const trendingGrid =
  document.getElementById("trendingGrid");

const latestGrid =
  document.getElementById("latestGrid");

const topGrid =
  document.getElementById("topGrid");

const favoritesGrid =
  document.getElementById("favoritesGrid");

const continueGrid =
  document.getElementById("continueGrid");

const continueSection =
  document.getElementById("continueSection");

const emptyFavorites =
  document.getElementById("emptyFavorites");


/* =========================================================
   LOADER
========================================================= */

window.addEventListener("load", () => {

  setTimeout(() => {
    loader.classList.add("hide");
  }, 700);

});


/* =========================================================
   CARD
========================================================= */

function createAnimeCard(anime) {

  const isFavorite =
    favorites.includes(anime.id);

  return `
    <article
      class="anime-card"
      data-id="${anime.id}"
    >

      <div
        class="poster"
        onclick="openDetails(${anime.id})"
      >

        <img
          src="${escapeHTML(anime.poster)}"
          alt="${escapeHTML(anime.title)}"
          loading="lazy"
          onerror="this.style.display='none'"
        >

        <span class="card-top">
          ${anime.status}
        </span>

        <span class="card-bottom">
          ⭐ ${anime.rating}
        </span>

        <button
          class="card-favorite ${isFavorite ? "active" : ""}"
          onclick="event.stopPropagation(); toggleFavorite(${anime.id})"
          aria-label="Favorite"
        >
          <i class="fa-solid fa-heart"></i>
        </button>

        <button
          class="card-play"
          onclick="event.stopPropagation(); openDetails(${anime.id})"
          aria-label="Play"
        >
          ▶
        </button>

      </div>

      <div
        class="card-info"
        onclick="openDetails(${anime.id})"
      >

        <h3>
          ${escapeHTML(anime.title)}
        </h3>

        <p>
          ${anime.year}
          •
          ${anime.type}
          •
          ⭐ ${anime.rating}
        </p>

      </div>

    </article>
  `;

}


/* =========================================================
   RENDER
========================================================= */

function renderAnime() {

  const trending =
    [...animeList]
      .sort((a,b) => b.rating - a.rating)
      .slice(0, 10);

  const latest =
    [...animeList]
      .sort((a,b) => b.year - a.year)
      .slice(0, 10);

  const top =
    [...animeList]
      .sort((a,b) => b.rating - a.rating)
      .slice(0, 10);


  trendingGrid.innerHTML =
    trending.map(createAnimeCard).join("");

  latestGrid.innerHTML =
    latest.map(createAnimeCard).join("");

  topGrid.innerHTML =
    top.map(createAnimeCard).join("");


  renderFavorites();

  renderContinueWatching();

  renderAdmin();

}


/* =========================================================
   FAVORITES
========================================================= */

function toggleFavorite(id) {

  if (!currentUser) {

    openAuth();

    return;
  }


  if (favorites.includes(id)) {

    favorites =
      favorites.filter(
        item => item !== id
      );

  } else {

    favorites.push(id);

  }


  saveFavorites();

  renderAnime();

  if (currentAnime) {
    updateDetailsFavorite();
  }

}


function renderFavorites() {

  const favoriteAnime =
    animeList.filter(
      anime =>
        favorites.includes(anime.id)
    );


  favoritesGrid.innerHTML =
    favoriteAnime
      .map(createAnimeCard)
      .join("");


  emptyFavorites.style.display =
    favoriteAnime.length
      ? "none"
      : "block";

}


/* =========================================================
   CONTINUE WATCHING
========================================================= */

function renderContinueWatching() {

  const ids =
    Object.keys(progress)
      .map(Number)
      .filter(
        id =>
          progress[id] &&
          progress[id] > 1
      );


  const items =
    animeList.filter(
      anime =>
        ids.includes(anime.id)
    );


  if (!items.length) {

    continueSection.classList.add("hidden");

    return;
  }


  continueSection.classList.remove("hidden");


  continueGrid.innerHTML =
    items.map(anime => {

      return createAnimeCard(anime);

    }).join("");

}


/* =========================================================
   DETAILS
========================================================= */

function openDetails(id) {

  const anime =
    animeList.find(
      item => item.id === id
    );

  if (!anime) return;


  currentAnime = anime;

  currentSeason = 1;


  document.getElementById(
    "detailsTitle"
  ).textContent = anime.title;


  document.getElementById(
    "detailsType"
  ).textContent = anime.type;


  document.getElementById(
    "detailsDescription"
  ).textContent = anime.description;


  document.getElementById(
    "detailsMeta"
  ).innerHTML = `
    <span>📅 ${anime.year}</span>
    <span>⭐ ${anime.rating}</span>
    <span>🎬 ${anime.type}</span>
    <span>📺 ${anime.seasons} Season${anime.seasons > 1 ? "s" : ""}</span>
  `;


  document.getElementById(
    "detailsPoster"
  ).innerHTML = `
    <img
      src="${escapeHTML(anime.poster)}"
      alt="${escapeHTML(anime.title)}"
    >
  `;


  const seasonSelect =
    document.getElementById(
      "seasonSelect"
    );


  seasonSelect.innerHTML =
    Array.from(
      { length: anime.seasons },
      (_, index) => `
        <option value="${index + 1}">
          Season ${index + 1}
        </option>
      `
    ).join("");


  renderEpisodes();

  updateDetailsFavorite();


  document
    .getElementById("detailsPage")
    .classList.add("show");


  document.body.style.overflow = "hidden";

}


function closeDetails() {

  document
    .getElementById("detailsPage")
    .classList.remove("show");

  document.body.style.overflow = "";

}


function updateDetailsFavorite() {

  if (!currentAnime) return;


  const button =
    document.getElementById(
      "detailsFavorite"
    );


  const active =
    favorites.includes(
      currentAnime.id
    );


  button.innerHTML =
    active
      ? "❤️ Remove from Favorites"
      : "♡ Add to Favorites";

}


/* =========================================================
   EPISODES
========================================================= */

function renderEpisodes() {

  if (!currentAnime) return;


  const episodeGrid =
    document.getElementById(
      "episodeGrid"
    );


  const total =
    currentAnime.episodes || 12;


  const watched =
    progress[currentAnime.id] || 0;


  episodeGrid.innerHTML =
    Array.from(
      { length: total },
      (_, index) => {

        const episode =
          index + 1;

        return `
          <button
            class="episode-button ${episode <= watched ? "watched" : ""}"
            onclick="watchEpisode(${episode})"
          >
            Episode ${episode}
          </button>
        `;

      }
    ).join("");

}


document
  .getElementById("seasonSelect")
  .addEventListener(
    "change",
    event => {

      currentSeason =
        Number(event.target.value);

      renderEpisodes();

    }
  );


/* =========================================================
   WATCH
========================================================= */

function watchEpisode(episode = 1) {

  if (!currentAnime) return;


  currentEpisode = episode;


  progress[currentAnime.id] =
    Math.max(
      progress[currentAnime.id] || 0,
      episode
    );


  saveProgress();


  document.getElementById(
    "watchTitle"
  ).textContent =
    currentAnime.title;


  document.getElementById(
    "watchAnime"
  ).textContent =
    currentAnime.title;


  document.getElementById(
    "watchEpisode"
  ).textContent =
    `Season ${currentSeason} • Episode ${episode}`;


  document
    .getElementById("detailsPage")
    .classList.remove("show");


  document
    .getElementById("watchPage")
    .classList.add("show");


  renderEpisodes();

  renderContinueWatching();

}


document
  .getElementById("detailsPlay")
  .addEventListener(
    "click",
    () => watchEpisode(
      progress[currentAnime?.id] || 1
    )
  );


document
  .getElementById("previousEpisode")
  .addEventListener(
    "click",
    () => {

      if (currentEpisode > 1) {

        watchEpisode(
          currentEpisode - 1
        );

      }

    }
  );


document
  .getElementById("nextEpisode")
  .addEventListener(
    "click",
    () => {

      const total =
        currentAnime?.episodes || 12;


      if (currentEpisode < total) {

        watchEpisode(
          currentEpisode + 1
        );

      }

    }
  );


document
  .getElementById("closeWatch")
  .addEventListener(
    "click",
    () => {

      document
        .getElementById("watchPage")
        .classList.remove("show");

      document.body.style.overflow = "";

      renderAnime();

    }
  );


/* =========================================================
   DETAILS FAVORITE
========================================================= */

document
  .getElementById("detailsFavorite")
  .addEventListener(
    "click",
    () => {

      if (!currentAnime) return;

      toggleFavorite(
        currentAnime.id
      );

    }
  );


document
  .getElementById("closeDetails")
  .addEventListener(
    "click",
    closeDetails
  );


/* =========================================================
   SEARCH
========================================================= */

function openSearch() {

  document
    .getElementById("searchModal")
    .classList.add("show");


  setTimeout(() => {

    document
      .getElementById("searchInput")
      .focus();

  }, 100);

}


function closeSearch() {

  document
    .getElementById("searchModal")
    .classList.remove("show");

}


function performSearch() {

  const input =
    document
      .getElementById("searchInput")
      .value
      .trim()
      .toLowerCase();


  const results =
    document.getElementById(
      "searchResults"
    );


  if (!input) {

    results.innerHTML =
      "<p style='color:#999'>Type an anime name...</p>";

    return;
  }


  const matches =
    animeList.filter(anime => {

      const text =
        [
          anime.title,
          anime.description,
          ...anime.genres
        ]
        .join(" ")
        .toLowerCase();

      return text.includes(input);

    });


  if (!matches.length) {

    results.innerHTML =
      "<p style='color:#999'>No anime found.</p>";

    return;
  }


  results.innerHTML =
    matches.map(anime => `
      <div
        class="search-result"
        onclick="closeSearch(); openDetails(${anime.id})"
      >
        <strong>
          ${escapeHTML(anime.title)}
        </strong>

        <small style="display:block;color:#999;margin-top:5px">
          ${anime.year} • ⭐ ${anime.rating}
        </small>
      </div>
    `).join("");

}


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
    performSearch
  );


document
  .getElementById("searchInput")
  .addEventListener(
    "keydown",
    event => {

      if (event.key === "Enter") {
        performSearch();
      }

    }
  );


/* =========================================================
   THEME
========================================================= */

function applyTheme() {

  const theme =
    localStorage.getItem(
      STORAGE.theme
    ) || "dark";


  document.body.classList.toggle(
    "light",
    theme === "light"
  );


  const icon =
    document.querySelector(
      "#themeButton i"
    );


  if (icon) {

    icon.className =
      theme === "light"
        ? "fa-solid fa-sun"
        : "fa-solid fa-moon";

  }

}


document
  .getElementById("themeButton")
  .addEventListener(
    "click",
    () => {

      const isLight =
        document.body.classList.contains(
          "light"
        );


      localStorage.setItem(
        STORAGE.theme,
        isLight ? "dark" : "light"
      );


      applyTheme();

    }
  );


applyTheme();


/* =========================================================
   MOBILE MENU
========================================================= */

document
  .getElementById("menuButton")
  .addEventListener(
    "click",
    () => {

      document
        .getElementById("mobileMenu")
        .classList.add("open");

    }
  );


document
  .getElementById("closeMenu")
  .addEventListener(
    "click",
    () => {

      document
        .getElementById("mobileMenu")
        .classList.remove("open");

    }
  );


document
  .querySelectorAll("#mobileMenu a")
  .forEach(link => {

    link.addEventListener(
      "click",
      () => {

        document
          .getElementById("mobileMenu")
          .classList.remove("open");

      }
    );

  });


/* =========================================================
   LOGIN / REGISTER
========================================================= */

function openAuth() {

  document
    .getElementById("authModal")
    .classList.add("show");

}


function closeAuth() {

  document
    .getElementById("authModal")
    .classList.remove("show");

}


function setAuthMode(mode) {

  authMode = mode;


  const title =
    document.getElementById(
      "authTitle"
    );

  const subtitle =
    document.getElementById(
      "authSubtitle"
    );

  const submit =
    document.getElementById(
      "authSubmit"
    );

  const switchButton =
    document.getElementById(
      "switchAuth"
    );

  const nameBox =
    document.getElementById(
      "registerNameBox"
    );


  if (mode === "register") {

    title.textContent =
      "Create Account";

    subtitle.textContent =
      "Join Yusuf Anime.";

    submit.textContent =
      "Create Account";

    switchButton.textContent =
      "Already have an account? Login";

    nameBox.classList.remove(
      "hidden"
    );

  } else {

    title.textContent =
      "Welcome Back";

    subtitle.textContent =
      "Login to continue.";

    submit.textContent =
      "Login";

    switchButton.textContent =
      "Create an account";

    nameBox.classList.add(
      "hidden"
    );

  }

}


document
  .getElementById("loginButton")
  .addEventListener(
    "click",
    () => {

      if (currentUser) {

        const logout =
          confirm(
            `You are logged in as ${currentUser.name || currentUser.email}. Logout?`
          );

        if (logout) {

          currentUser = null;

          saveCurrentUser();

          updateLoginButton();

        }

      } else {

        setAuthMode("login");

        openAuth();

      }

    }
  );


document
  .getElementById("closeAuth")
  .addEventListener(
    "click",
    closeAuth
  );


document
  .getElementById("switchAuth")
  .addEventListener(
    "click",
    () => {

      setAuthMode(
        authMode === "login"
          ? "register"
          : "login"
      );

    }
  );


document
  .getElementById("authSubmit")
  .addEventListener(
    "click",
    handleAuth
  );


function handleAuth() {

  const email =
    document
      .getElementById("authEmail")
      .value
      .trim()
      .toLowerCase();


  const password =
    document
      .getElementById("authPassword")
      .value;


  if (!email || !password) {

    alert(
      "Please enter email and password."
    );

    return;
  }


  if (authMode === "register") {

    const name =
      document
        .getElementById("registerName")
        .value
        .trim();


    if (!name) {

      alert(
        "Please enter your name."
      );

      return;
    }


    if (
      users.some(
        user =>
          user.email === email
      )
    ) {

      alert(
        "This email is already registered."
      );

      return;
    }


    const user = {
      id: Date.now(),
      name,
      email,
      password,
      role: "user"
    };


    users.push(user);

    saveUsers();


    currentUser = user;

    saveCurrentUser();


    alert(
      "Account created successfully!"
    );


    closeAuth();

    updateLoginButton();

    return;
  }


  const user =
    users.find(
      item =>
        item.email === email &&
        item.password === password
    );


  if (!user) {

    alert(
      "Incorrect email or password."
    );

    return;
  }


  currentUser = user;

  saveCurrentUser();

  closeAuth();

  updateLoginButton();

}


function updateLoginButton() {

  const button =
    document.getElementById(
      "loginButton"
    );


  if (currentUser) {

    button.innerHTML =
      `
        <i class="fa-solid fa-user-check"></i>
        <span>
          ${escapeHTML(
            currentUser.name || "Account"
          )}
        </span>
      `;

  } else {

    button.innerHTML =
      `
        <i class="fa-solid fa-user"></i>
        <span>Login</span>
      `;

  }

}


updateLoginButton();


/* =========================================================
   ADMIN LOGIN
========================================================= */

document
  .getElementById("adminLoginToggle")
  .addEventListener(
    "click",
    () => {

      const username =
        prompt(
          "Admin username:"
        );

      const password =
        prompt(
          "Admin password:"
        );


      /*
        DEMO ADMIN CREDENTIALS

        username: admin
        password: 123456

        Change these before using a real backend.
      */

      if (
        username === "admin" &&
        password === "123456"
      ) {

        closeAuth();

        openAdmin();

      } else {

        alert(
          "Invalid admin credentials."
        );

      }

    }
  );


function openAdmin() {

  document
    .getElementById("adminPage")
    .classList.add("show");

  document.body.style.overflow =
    "hidden";

  renderAdmin();

}


function closeAdmin() {

  document
    .getElementById("adminPage")
    .classList.remove("show");

  document.body.style.overflow =
    "";

}


document
  .getElementById("closeAdmin")
  .addEventListener(
    "click",
    closeAdmin
  );


document
  .getElementById("adminLogout")
  .addEventListener(
    "click",
    closeAdmin
  );


/* =========================================================
   ADMIN ADD ANIME
========================================================= */

document
  .getElementById("addAnimeButton")
  .addEventListener(
    "click",
    addAnime
  );


function addAnime() {

  const title =
    document
      .getElementById("animeName")
      .value
      .trim();


  const poster =
    document
      .getElementById("animePoster")
      .value
      .trim();


  const year =
    Number(
      document
        .getElementById("animeYear")
        .value
    ) || new Date().getFullYear();


  const rating =
    Number(
      document
        .getElementById("animeRating")
        .value
    ) || 0;


  const genres =
    document
      .getElementById("animeGenres")
      .value
      .split(",")
      .map(item => item.trim())
      .filter(Boolean);


  const description =
    document
      .getElementById("animeDescription")
      .value
      .trim();


  if (!title) {

    alert(
      "Anime title is required."
    );

    return;
  }


  const anime = {

    id: Date.now(),

    title,

    poster:
      poster ||
      "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=600&q=80",

    year,

    rating,

    type: "TV",

    status: "New",

    genres:
      genres.length
        ? genres
        : ["Action"],

    description:
      description ||
      "No description available.",

    seasons: 1,

    episodes: 12

  };


  animeList.push(anime);

  saveAnime();

  renderAnime();

  clearAnimeForm();


  alert(
    "Anime added successfully!"
  );

}


function clearAnimeForm() {

  document.getElementById(
    "animeName"
  ).value = "";

  document.getElementById(
    "animePoster"
  ).value = "";

  document.getElementById(
    "animeYear"
  ).value = "";

  document.getElementById(
    "animeRating"
  ).value = "";

  document.getElementById(
    "animeGenres"
  ).value = "";

  document.getElementById(
    "animeDescription"
  ).value = "";

}


document
  .getElementById("resetAnimeForm")
  .addEventListener(
    "click",
    clearAnimeForm
  );


/* =========================================================
   ADMIN LIST
========================================================= */

function renderAdmin() {

  document.getElementById(
    "statAnime"
  ).textContent =
    animeList.length;


  document.getElementById(
    "statUsers"
  ).textContent =
    users.length;


  document.getElementById(
    "statFavorites"
  ).textContent =
    favorites.length;


  const list =
    document.getElementById(
      "adminAnimeList"
    );


  list.innerHTML =
    animeList.map(anime => `

      <div class="admin-anime-item">

        <div class="admin-anime-info">

          <img
            src="${escapeHTML(anime.poster)}"
            alt=""
          >

          <div>

            <strong>
              ${escapeHTML(anime.title)}
            </strong>

            <small
              style="display:block;color:#999;margin-top:4px"
            >
              ${anime.year}
              •
              ⭐ ${anime.rating}
            </small>

          </div>

        </div>


        <button
          class="delete-anime"
          onclick="deleteAnime(${anime.id})"
        >
          <i class="fa-solid fa-trash"></i>
          Delete
        </button>

      </div>

    `).join("");

}


function deleteAnime(id) {

  const anime =
    animeList.find(
      item => item.id === id
    );


  if (!anime) return;


  const confirmed =
    confirm(
      `Delete "${anime.title}"?`
    );


  if (!confirmed) return;


  animeList =
    animeList.filter(
      item => item.id !== id
    );


  favorites =
    favorites.filter(
      item => item !== id
    );


  delete progress[id];


  saveAnime();

  saveFavorites();

  saveProgress();

  renderAnime();

  renderAdmin();

}


/* =========================================================
   GENRE FILTER
========================================================= */

document
  .querySelectorAll(
    ".genre-grid button"
  )
  .forEach(button => {

    button.addEventListener(
      "click",
      () => {

        const genre =
          button.dataset.genre;


        const results =
          animeList.filter(
            anime =>
              anime.genres
                .map(g => g.toLowerCase())
                .includes(
                  genre.toLowerCase()
                )
          );


        if (!results.length) {

          alert(
            `No ${genre} anime found.`
          );

          return;
        }


        trendingGrid.innerHTML =
          results
            .map(createAnimeCard)
            .join("");


        document
          .getElementById("trending")
          .scrollIntoView({
            behavior: "smooth"
          });

      }
    );

  });


/* =========================================================
   HEADER NAV ACTIVE
========================================================= */

const navLinks =
  document.querySelectorAll(
    ".desktop-nav a"
  );


window.addEventListener(
  "scroll",
  () => {

    let current = "";


    document
      .querySelectorAll(
        "main section[id]"
      )
      .forEach(section => {

        const top =
          section.offsetTop - 130;

        if (
          window.scrollY >= top
        ) {
          current =
            section.id;
        }

      });


    navLinks.forEach(link => {

      link.classList.remove(
        "active"
      );


      if (
        link.getAttribute("href") ===
        `#${current}`
      ) {

        link.classList.add(
          "active"
        );

      }

    });

  }
);


/* =========================================================
   BACK TO TOP
========================================================= */

const topButton =
  document.getElementById(
    "topButton"
  );


window.addEventListener(
  "scroll",
  () => {

    topButton.classList.toggle(
      "show",
      window.scrollY > 500
    );

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


/* =========================================================
   FAVORITES HEADER
========================================================= */

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


/* =========================================================
   INITIALIZE
========================================================= */

renderAnime();
