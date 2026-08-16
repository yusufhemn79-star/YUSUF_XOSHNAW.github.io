/* ================= ANIME DATA ================= */

const animeData = {

  "One Piece": {
    type: "TV",
    rating: "9.0",
    episodes: 1171,
    genre: "Action • Adventure",
    description:
      "چیرۆکی Monkey D. Luffy و هاوڕێکانی کە بە دەریادا دەگەڕێن بۆ دۆزینەوەی One Piece و گەیشتن بە گەورەترین گەنجینەی جیهان."
  },

  "Solo Leveling": {
    type: "TV",
    rating: "8.8",
    episodes: 25,
    genre: "Action • Fantasy",
    description:
      "Sung Jin-Woo لە لاوازترین شکارییەوە دەگۆڕێت بۆ بەهێزترین شکاری، و توانایەکی نهێنی بەدەست دەهێنێت کە ژیانی بە تەواوی دەگۆڕێت."
  },

  "Jujutsu Kaisen": {
    type: "TV",
    rating: "8.7",
    episodes: 47,
    genre: "Action • Fantasy",
    description:
      "Yuji Itadori دەچێتە ناو جیهانی جادووی Jujutsu و ڕووبەڕووی نەخۆشی و هێزە تاریکەکان دەبێتەوە."
  },

  "Demon Slayer": {
    type: "TV",
    rating: "8.6",
    episodes: 63,
    genre: "Action • Fantasy",
    description:
      "Tanjiro دەست بە گەشتێکی مەترسیدار دەکات بۆ ئەوەی خێزانەکەی تۆڵە بکاتەوە و خواشکەکەی Nezuko بگەڕێنێتەوە بۆ مرۆڤایەتی."
  },

  "Attack on Titan": {
    type: "TV",
    rating: "9.1",
    episodes: 89,
    genre: "Action • Drama",
    description:
      "مرۆڤایەتی لە پشت دیوارە گەورەکاندا دەژی، بەڵام دەرکەوتنی Titans هەموو نهێنییەکانی جیهان دەخاتە ڕوو."
  },

  "Naruto": {
    type: "TV",
    rating: "8.4",
    episodes: 720,
    genre: "Action • Adventure",
    description:
      "Naruto Uzumaki خەون بەوە دەبینێت ببێتە Hokage و بە هەموو توانایەکی دەجەنگێت بۆ ئەو ئامانجە."
  },

  "Hunter x Hunter": {
    type: "TV",
    rating: "9.0",
    episodes: 148,
    genre: "Adventure • Fantasy",
    description:
      "Gon دەچێتە گەشتێکی گەورە بۆ بوون بە Hunter و دۆزینەوەی باوکی خۆی."
  },

  "Death Note": {
    type: "TV",
    rating: "8.9",
    episodes: 37,
    genre: "Mystery • Thriller",
    description:
      "کتێبێکی مرموز دەکەوێتە دەستی Light Yagami و توانای کوشتنی هەر کەسێکی بە ناوەوە دەداتێت."
  }

};


/* ================= ELEMENTS ================= */

const loader = document.getElementById("loader");

const searchOverlay = document.getElementById("searchOverlay");
const searchOpen = document.getElementById("searchOpen");
const searchClose = document.getElementById("searchClose");
const searchInput = document.getElementById("searchInput");
const searchSubmit = document.getElementById("searchSubmit");
const searchResults = document.getElementById("searchResults");

const themeButton = document.getElementById("themeButton");

const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");
const mobileClose = document.getElementById("mobileClose");

const animePage = document.getElementById("animePage");
const watchPage = document.getElementById("watchPage");

const detailsTitle = document.getElementById("detailsTitle");
const detailsType = document.getElementById("detailsType");
const detailsMeta = document.getElementById("detailsMeta");
const detailsDescription = document.getElementById("detailsDescription");
const detailsPoster = document.getElementById("detailsPoster");
const episodeList = document.getElementById("episodeList");

const favoriteButton = document.getElementById("favoriteButton");

const watchTitle = document.getElementById("watchTitle");

const topButton = document.getElementById("topButton");


/* ================= LOADER ================= */

window.addEventListener("load", function () {

  setTimeout(function () {

    loader.classList.add("hide");

  }, 700);

});


/* ================= SEARCH ================= */

searchOpen.addEventListener("click", function () {

  searchOverlay.classList.add("show");

  setTimeout(function () {
    searchInput.focus();
  }, 100);

});


searchClose.addEventListener("click", function () {

  searchOverlay.classList.remove("show");

  searchInput.value = "";

  searchResults.innerHTML = "";

});


searchOverlay.addEventListener("click", function (event) {

  if (event.target === searchOverlay) {

    searchOverlay.classList.remove("show");

  }

});


searchInput.addEventListener("input", function () {

  performSearch();

});


searchSubmit.addEventListener("click", function () {

  performSearch();

});


function performSearch() {

  const query =
    searchInput.value
      .trim()
      .toLowerCase();

  searchResults.innerHTML = "";

  if (!query) {

    return;

  }


  const results =
    Object.keys(animeData)
      .filter(function (title) {

        return title
          .toLowerCase()
          .includes(query);

      });


  if (results.length === 0) {

    searchResults.innerHTML = `
      <div class="search-result">
        😔 هیچ ئەنیەمێک نەدۆزرایەوە.
      </div>
    `;

    return;

  }


  results.forEach(function (title) {

    const result =
      document.createElement("div");

    result.className = "search-result";

    result.innerHTML = `
      <strong>${title}</strong>
      <br>
      <small>
        ⭐ ${animeData[title].rating}
        • ${animeData[title].genre}
      </small>
    `;

    result.addEventListener("click", function () {

      searchOverlay.classList.remove("show");

      searchInput.value = "";

      searchResults.innerHTML = "";

      openAnime(title);

    });

    searchResults.appendChild(result);

  });

}


/* ================= MOBILE MENU ================= */

menuButton.addEventListener("click", function () {

  mobileMenu.classList.toggle("open");

});


mobileClose.addEventListener("click", function () {

  mobileMenu.classList.remove("open");

});


mobileMenu.querySelectorAll("a").forEach(function (link) {

  link.addEventListener("click", function () {

    mobileMenu.classList.remove("open");

  });

});


/* ================= OPEN ANIME ================= */

function openAnime(title) {

  const anime = animeData[title];

  if (!anime) {

    return;

  }


  document.getElementById("app").style.display = "none";

  document.querySelector("footer").style.display = "none";

  animePage.style.display = "block";

  watchPage.style.display = "none";


  detailsTitle.textContent = title;

  detailsType.textContent = anime.type;


  detailsMeta.innerHTML = `
    <span>⭐ ${anime.rating}</span>
    <span>📺 ${anime.episodes} ئەڵقە</span>
    <span>🎭 ${anime.genre}</span>
  `;


  detailsDescription.textContent =
    anime.description;


  detailsPoster.className =
    "details-poster " +
    getPosterClass(title);


  createEpisodes(title, anime.episodes);


  updateFavoriteButton(title);


  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}


/* ================= CLOSE ANIME ================= */

function closeAnime() {

  animePage.style.display = "none";

  document.getElementById("app").style.display = "block";

  document.querySelector("footer").style.display = "block";

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}


/* ================= POSTER ================= */

function getPosterClass(title) {

  const posters = {

    "One Piece": "poster-one",

    "Solo Leveling": "poster-two",

    "Jujutsu Kaisen": "poster-three",

    "Demon Slayer": "poster-four",

    "Attack on Titan": "poster-five",

    "Naruto": "poster-six",

    "Hunter x Hunter": "poster-seven",

    "Death Note": "poster-eight"

  };

  return posters[title] || "poster-one";

}


/* ================= EPISODES ================= */

function createEpisodes(title, total) {

  episodeList.innerHTML = "";


  /*
    بۆ ئەوەی پەڕەکە قورس نەبێت،
    لە هەر anime ـێکدا تا 1000 episode
    بە button دروست دەکەین.
  */

  const maxEpisodes =
    Math.min(total, 1000);


  for (let i = 1; i <= maxEpisodes; i++) {

    const button =
      document.createElement("button");

    button.textContent = i;

    button.addEventListener("click", function () {

      openEpisode(title, i);

    });

    episodeList.appendChild(button);

  }

}


/* ================= WATCH EPISODE ================= */

function openEpisode(title, episode) {

  document.getElementById("app").style.display = "none";

  animePage.style.display = "none";

  document.querySelector("footer").style.display = "none";

  watchPage.style.display = "block";


  watchTitle.textContent =
    `${title} — ئەڵقەی ${episode}`;


  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}


/* ================= CLOSE WATCH ================= */

function closeWatch() {

  watchPage.style.display = "none";

  document.getElementById("app").style.display = "block";

  document.querySelector("footer").style.display = "block";

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}


/* ================= FAVORITES ================= */

function getFavorites() {

  try {

    return JSON.parse(
      localStorage.getItem("yusufAnimeFavorites")
    ) || [];

  } catch {

    return [];

  }

}


function saveFavorites(favorites) {

  localStorage.setItem(
    "yusufAnimeFavorites",
    JSON.stringify(favorites)
  );

}


function updateFavoriteButton(title) {

  const favorites =
    getFavorites();

  const isFavorite =
    favorites.includes(title);


  favoriteButton.textContent =
    isFavorite
      ? "💔 لابردنی لە دڵخوازەکان"
      : "❤️ زیادکردن بۆ دڵخوازەکان";


  favoriteButton.onclick =
    function () {

      toggleFavorite(title);

    };

}


function toggleFavorite(title) {

  let favorites =
    getFavorites();


  if (favorites.includes(title)) {

    favorites =
      favorites.filter(function (item) {

        return item !== title;

      });

  } else {

    favorites.push(title);

  }


  saveFavorites(favorites);

  updateFavoriteButton(title);

}


/* ================= GENRE FILTER ================= */

function filterGenre(genre) {

  const cards =
    document.querySelectorAll(".anime-card");

  let found = false;


  cards.forEach(function (card) {

    const category =
      card.dataset.category || "";


    if (
      category
        .toLowerCase()
        .includes(genre.toLowerCase())
    ) {

      card.style.display = "block";

      found = true;

    } else {

      card.style.display = "none";

    }

  });


  if (!found) {

    alert(
      `هێشتا ئەنیەمی ${genre} زیاد نەکراوە.`
    );

  }


  const trending =
    document.getElementById("trending");


  trending.scrollIntoView({
    behavior: "smooth"
  });

}


/* ================= THEME ================= */

function loadTheme() {

  const saved =
    localStorage.getItem("yusufAnimeTheme");


  if (saved === "light") {

    document.body.classList.add("light");

    themeButton.textContent = "☀️";

  } else {

    document.body.classList.remove("light");

    themeButton.textContent = "🌙";

  }

}


themeButton.addEventListener("click", function () {

  document.body.classList.toggle("light");


  const light =
    document.body.classList.contains("light");


  localStorage.setItem(
    "yusufAnimeTheme",
    light ? "light" : "dark"
  );


  themeButton.textContent =
    light ? "☀️" : "🌙";

});


loadTheme();


/* ================= TOP BUTTON ================= */

window.addEventListener("scroll", function () {

  if (window.scrollY > 500) {

    topButton.classList.add("show");

  } else {

    topButton.classList.remove("show");

  }

});


topButton.addEventListener("click", function () {

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

});


/* ================= NAVIGATION ================= */

document.querySelectorAll(".nav-link").forEach(function (link) {

  link.addEventListener("click", function () {

    document.querySelectorAll(".nav-link")
      .forEach(function (item) {

        item.classList.remove("active");

      });

    link.classList.add("active");

  });

});


/* ================= ESC KEY ================= */

document.addEventListener("keydown", function (event) {

  if (event.key === "Escape") {

    searchOverlay.classList.remove("show");

    mobileMenu.classList.remove("open");

  }

});


/* ================= HASH NAVIGATION ================= */

window.addEventListener("hashchange", function () {

  if (
    location.hash &&
    !location.hash.startsWith("#anime")
  ) {

    animePage.style.display = "none";
    watchPage.style.display = "none";

    document.getElementById("app").style.display = "block";

    document.querySelector("footer").style.display = "block";

  }

});
