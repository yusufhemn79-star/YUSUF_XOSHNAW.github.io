/* =========================================================
   YUSUF ANIME
   Complete Front-End System
========================================================= */


/* =========================================================
   DEFAULT ANIME DATABASE
========================================================= */

const DEFAULT_ANIME = [

  {
    id:1,
    title:"One Piece",
    type:"TV",
    year:1999,
    rating:9.0,
    episodes:1000,
    genre:["Action","Adventure","Fantasy","Shonen"],
    description:"Monkey D. Luffy and his crew travel across the Grand Line in search of the legendary One Piece.",
    poster:"",
    trending:true,
    latest:false,
    top:true
  },

  {
    id:2,
    title:"Naruto Shippuden",
    type:"TV",
    year:2007,
    rating:8.7,
    episodes:500,
    genre:["Action","Adventure","Shonen"],
    description:"Naruto returns stronger and continues his journey to become Hokage while facing dangerous enemies.",
    poster:"",
    trending:true,
    latest:false,
    top:true
  },

  {
    id:3,
    title:"Demon Slayer",
    type:"TV",
    year:2019,
    rating:8.6,
    episodes:63,
    genre:["Action","Fantasy","Drama"],
    description:"Tanjiro Kamado becomes a demon slayer after his family is attacked and his sister is transformed.",
    poster:"",
    trending:true,
    latest:true,
    top:true
  },

  {
    id:4,
    title:"Jujutsu Kaisen",
    type:"TV",
    year:2020,
    rating:8.7,
    episodes:47,
    genre:["Action","Fantasy","Shonen"],
    description:"Yuji Itadori enters the dangerous world of curses after swallowing a cursed object.",
    poster:"",
    trending:true,
    latest:true,
    top:true
  },

  {
    id:5,
    title:"Attack on Titan",
    type:"TV",
    year:2013,
    rating:9.1,
    episodes:89,
    genre:["Action","Drama","Fantasy"],
    description:"Humanity fights for survival against terrifying Titans outside the walls.",
    poster:"",
    trending:true,
    latest:false,
    top:true
  },

  {
    id:6,
    title:"My Dress-Up Darling",
    type:"TV",
    year:2022,
    rating:8.2,
    episodes:12,
    genre:["Romance","Comedy","School"],
    description:"A shy doll maker discovers cosplay and meets an energetic classmate who changes his life.",
    poster:"",
    trending:true,
    latest:true,
    top:false
  },

  {
    id:7,
    title:"Horimiya",
    type:"TV",
    year:2021,
    rating:8.5,
    episodes:13,
    genre:["Romance","Comedy","School"],
    description:"Two classmates discover unexpected sides of each other and slowly fall in love.",
    poster:"",
    trending:true,
    latest:false,
    top:true
  },

  {
    id:8,
    title:"The Angel Next Door Spoils Me Rotten",
    type:"TV",
    year:2023,
    rating:7.8,
    episodes:12,
    genre:["Romance","Comedy","School"],
    description:"A quiet student unexpectedly becomes close to the beautiful girl who lives next door.",
    poster:"",
    trending:false,
    latest:true,
    top:false
  },

  {
    id:9,
    title:"Solo Leveling",
    type:"TV",
    year:2024,
    rating:8.8,
    episodes:25,
    genre:["Action","Fantasy","Adventure"],
    description:"Sung Jin-Woo receives a mysterious system that allows him to level up beyond normal limits.",
    poster:"",
    trending:true,
    latest:true,
    top:true
  },

  {
    id:10,
    title:"The Quintessential Quintuplets",
    type:"TV",
    year:2019,
    rating:8.5,
    episodes:24,
    genre:["Romance","Comedy","School"],
    description:"A hardworking student becomes the tutor of five identical sisters with very different personalities.",
    poster:"",
    trending:true,
    latest:false,
    top:true
  },

  {
    id:11,
    title:"Tonikawa",
    type:"TV",
    year:2020,
    rating:7.9,
    episodes:24,
    genre:["Romance","Comedy"],
    description:"A young couple begins married life together after an unusual first meeting.",
    poster:"",
    trending:false,
    latest:true,
    top:false
  },

  {
    id:12,
    title:"Your Name",
    type:"Movie",
    year:2016,
    rating:8.8,
    episodes:1,
    genre:["Romance","Drama","Fantasy"],
    description:"Two strangers mysteriously begin switching bodies and discover a connection that crosses time.",
    poster:"",
    trending:true,
    latest:false,
    top:true
  }

];


/* =========================================================
   STORAGE
========================================================= */

const STORAGE = {

  anime:"yusuf_anime_database",
  favorites:"yusuf_anime_favorites",
  watched:"yusuf_anime_watched",
  history:"yusuf_anime_history",
  theme:"yusuf_anime_theme",
  language:"yusuf_anime_language",
  admin:"yusuf_anime_admin"

};


function load(key, fallback){

  try{

    const data = localStorage.getItem(key);

    return data ? JSON.parse(data) : fallback;

  }catch{

    return fallback;

  }

}


function save(key,value){

  localStorage.setItem(key,JSON.stringify(value));

}


/* =========================================================
   STATE
========================================================= */

let animeDatabase = load(STORAGE.anime,null);

if(!Array.isArray(animeDatabase) || !animeDatabase.length){

  animeDatabase = DEFAULT_ANIME;

  save(STORAGE.anime,animeDatabase);

}

let favorites = load(STORAGE.favorites,[]);

let watched = load(STORAGE.watched,{});

let history = load(STORAGE.history,[]);

let currentAnime = null;

let currentEpisode = 1;

let currentSeason = 1;

let currentLanguage = localStorage.getItem(
  STORAGE.language
) || "en";


/* =========================================================
   DOM
========================================================= */

const $ = selector => document.querySelector(selector);

const $$ = selector => document.querySelectorAll(selector);


/* =========================================================
   LOADER
========================================================= */

window.addEventListener("load",()=>{

  setTimeout(()=>{

    $("#loader")?.classList.add("hide");

  },700);

});


/* =========================================================
   TOAST
========================================================= */

let toastTimer;

function toast(message){

  const box = $("#toast");

  if(!box) return;

  box.textContent = message;

  box.classList.add("show");

  clearTimeout(toastTimer);

  toastTimer = setTimeout(()=>{

    box.classList.remove("show");

  },2500);

}


/* =========================================================
   THEME
========================================================= */

function applyTheme(){

  const theme = localStorage.getItem(STORAGE.theme) || "dark";

  document.body.classList.toggle(
    "light",
    theme === "light"
  );

  const button = $("#themeButton");

  if(button){

    button.textContent =
      theme === "light" ? "☀️" : "🌙";

  }

}


$("#themeButton")?.addEventListener("click",()=>{

  const isLight =
    document.body.classList.contains("light");

  localStorage.setItem(
    STORAGE.theme,
    isLight ? "dark" : "light"
  );

  applyTheme();

});


applyTheme();


/* =========================================================
   LANGUAGE
========================================================= */

const translations = {

  en:{
    name:"English"
  },

  ku:{
    name:"کوردی"
  },

  ar:{
    name:"العربية"
  },

  tr:{
    name:"Türkçe"
  },

  ja:{
    name:"日本語"
  },

  es:{
    name:"Español"
  },

  fr:{
    name:"Français"
  },

  de:{
    name:"Deutsch"
  }

};


function applyLanguage(language){

  currentLanguage = language;

  localStorage.setItem(
    STORAGE.language,
    language
  );

  const current = $("#currentLanguage");

  if(current){

    current.textContent =
      translations[language]?.name ||
      translations.en.name;

  }

  $$(".language-menu button").forEach(button=>{

    button.classList.toggle(
      "active",
      button.dataset.language === language
    );

  });

}


$("#languageButton")?.addEventListener("click",event=>{

  event.stopPropagation();

  $("#languageMenu")?.classList.toggle("show");

});


$$(".language-menu button").forEach(button=>{

  button.addEventListener("click",()=>{

    applyLanguage(button.dataset.language);

    $("#languageMenu")?.classList.remove("show");

    toast(
      `${translations[button.dataset.language].name} selected`
    );

  });

});


document.addEventListener("click",event=>{

  if(
    !event.target.closest(".language-wrapper")
  ){

    $("#languageMenu")?.classList.remove("show");

  }

});


applyLanguage(currentLanguage);


/* =========================================================
   MOBILE MENU
========================================================= */

$("#menuButton")?.addEventListener("click",()=>{

  $("#mobileMenu")?.classList.add("open");

});


$("#closeMenu")?.addEventListener("click",()=>{

  $("#mobileMenu")?.classList.remove("open");

});


$$('#mobileMenu a').forEach(link=>{

  link.addEventListener("click",()=>{

    $("#mobileMenu")?.classList.remove("open");

  });

});


/* =========================================================
   CARD HTML
========================================================= */

function createCard(anime){

  const isFavorite =
    favorites.includes(anime.id);

  const posterStyle =
    anime.poster
      ? `background-image:url("${escapeAttribute(anime.poster)}")`
      : "";

  return `

    <article
      class="anime-card"
      data-id="${anime.id}"
    >

      <div
        class="poster"
        style="${posterStyle}"
      >

        <span class="card-top">
          ${anime.type}
        </span>

        <button
          class="favorite-card ${isFavorite ? "active":""}"
          data-favorite="${anime.id}"
          title="Favorite"
        >
          ${isFavorite ? "❤️" : "♡"}
        </button>

        <button
          class="card-play"
          data-play="${anime.id}"
          aria-label="Watch"
        >
          ▶
        </button>

        <span class="card-bottom">
          ⭐ ${anime.rating}
        </span>

      </div>

      <div class="card-info">

        <h3>${escapeHTML(anime.title)}</h3>

        <p>
          ${anime.year}
          •
          ${anime.episodes} Episodes
          •
          <span class="rating">
            ⭐ ${anime.rating}
          </span>
        </p>

      </div>

    </article>

  `;

}


/* =========================================================
   RENDER GRID
========================================================= */

function renderGrid(elementId,list){

  const container = $(`#${elementId}`);

  if(!container) return;

  container.innerHTML =
    list.length
      ? list.map(createCard).join("")
      : `<div class="empty-state">
           <div>😔</div>
           <h3>No Anime Found</h3>
           <p>Try another category or search.</p>
         </div>`;

}


/* =========================================================
   RENDER ALL
========================================================= */

function renderAll(){

  renderGrid(
    "trendingGrid",
    animeDatabase.filter(a=>a.trending)
  );

  renderGrid(
    "latestGrid",
    animeDatabase.filter(a=>a.latest)
  );

  renderGrid(
    "topGrid",
    [...animeDatabase]
      .sort((a,b)=>b.rating-a.rating)
      .filter(a=>a.top)
  );

  const favoriteAnime =
    animeDatabase.filter(a=>
      favorites.includes(a.id)
    );

  renderGrid(
    "favoritesGrid",
    favoriteAnime
  );

  $("#emptyFavorites")?.classList.toggle(
    "hidden",
    favoriteAnime.length > 0
  );

  renderContinue();

  updateFavoriteCount();

  bindCards();

  renderAdminAnime();

  updateStats();

}


/* =========================================================
   CONTINUE WATCHING
========================================================= */

function renderContinue(){

  const section = $("#continueSection");
  const grid = $("#continueGrid");

  if(!section || !grid) return;

  const list = history
    .map(id=>animeDatabase.find(a=>a.id===id))
    .filter(Boolean);

  if(!list.length){

    section.classList.add("hidden");

    return;

  }

  section.classList.remove("hidden");

  grid.innerHTML =
    list.map(createCard).join("");

}


/* =========================================================
   CARD EVENTS
========================================================= */

function bindCards(){

  $$(".anime-card").forEach(card=>{

    card.onclick = event=>{

      if(
        event.target.closest(".favorite-card") ||
        event.target.closest(".card-play")
      ) return;

      openDetails(
        Number(card.dataset.id)
      );

    };

  });


  $$("[data-play]").forEach(button=>{

    button.onclick = event=>{

      event.stopPropagation();

      openWatch(
        Number(button.dataset.play),
        1,
        1
      );

    };

  });


  $$("[data-favorite]").forEach(button=>{

    button.onclick = event=>{

      event.stopPropagation();

      toggleFavorite(
        Number(button.dataset.favorite)
      );

    };

  });

}


/* =========================================================
   FAVORITES
========================================================= */

function toggleFavorite(id){

  if(favorites.includes(id)){

    favorites =
      favorites.filter(item=>item!==id);

    toast("Removed from favorites");

  }else{

    favorites.push(id);

    toast("Added to favorites ❤️");

  }

  save(STORAGE.favorites,favorites);

  renderAll();

  if(currentAnime?.id===id){

    updateDetailsFavorite();

  }

}


function updateFavoriteCount(){

  const count = $("#favoriteCount");

  if(count){

    count.textContent =
      favorites.length;

  }

}


$("#favoriteHeader")?.addEventListener("click",()=>{

  document
    .querySelector("#favorites")
    ?.scrollIntoView({
      behavior:"smooth"
    });

});


/* =========================================================
   DETAILS
========================================================= */

function openDetails(id){

  const anime =
    animeDatabase.find(a=>a.id===id);

  if(!anime) return;

  currentAnime = anime;

  $("#detailsTitle").textContent =
    anime.title;

  $("#detailsType").textContent =
    anime.type;

  $("#detailsDescription").textContent =
    anime.description;

  $("#detailsMeta").innerHTML = `

    <span>⭐ ${anime.rating}</span>
    <span>📅 ${anime.year}</span>
    <span>🎬 ${anime.episodes} Episodes</span>

  `;

  $("#detailsGenres").innerHTML =
    anime.genre
      .map(g=>`<span>${escapeHTML(g)}</span>`)
      .join("");

  const poster =
    $("#detailsPoster");

  if(anime.poster){

    poster.style.backgroundImage =
      `url("${escapeAttribute(anime.poster)}")`;

  }else{

    poster.style.backgroundImage = "";

  }

  createSeasonSelect(anime);

  currentSeason = 1;

  renderEpisodes();

  updateDetailsFavorite();

  $("#detailsPage")?.classList.add("show");

  document.body.classList.add("no-scroll");

}


function closeDetails(){

  $("#detailsPage")?.classList.remove("show");

  document.body.classList.remove("no-scroll");

}


$("#closeDetails")?.addEventListener(
  "click",
  closeDetails
);


function updateDetailsFavorite(){

  if(!currentAnime) return;

  const button =
    $("#detailsFavorite");

  const active =
    favorites.includes(currentAnime.id);

  button.textContent =
    active
      ? "❤️ Remove from Favorites"
      : "♡ Add to Favorites";

}


$("#detailsFavorite")?.addEventListener("click",()=>{

  if(currentAnime){

    toggleFavorite(currentAnime.id);

  }

});


$("#detailsPlay")?.addEventListener("click",()=>{

  if(currentAnime){

    openWatch(
      currentAnime.id,
      1,
      1
    );

  }

});


/* =========================================================
   SEASONS
========================================================= */

function getSeasonCount(anime){

  if(anime.type==="Movie") return 1;

  if(anime.episodes>=100) return 3;

  if(anime.episodes>=40) return 3;

  if(anime.episodes>=20) return 2;

  return 1;

}


function createSeasonSelect(anime){

  const select =
    $("#seasonSelect");

  if(!select) return;

  const seasons =
    getSeasonCount(anime);

  select.innerHTML =
    Array.from(
      {length:seasons},
      (_,i)=>`
        <option value="${i+1}">
          Season ${i+1}
        </option>
      `
    ).join("");

}


$("#seasonSelect")?.addEventListener("change",event=>{

  currentSeason =
    Number(event.target.value);

  renderEpisodes();

});


function getEpisodesForSeason(anime,season){

  if(anime.type==="Movie") return 1;

  const seasons =
    getSeasonCount(anime);

  return Math.ceil(
    anime.episodes / seasons
  );

}


function episodeKey(
  animeId,
  season,
  episode
){

  return `${animeId}-${season}-${episode}`;

}


function renderEpisodes(){

  if(!currentAnime) return;

  const grid =
    $("#episodeGrid");

  if(!grid) return;

  const count =
    getEpisodesForSeason(
      currentAnime,
      currentSeason
    );

  let html="";

  for(let i=1;i<=count;i++){

    const key =
      episodeKey(
        currentAnime.id,
        currentSeason,
        i
      );

    const isWatched =
      watched[key];

    html += `

      <button
        class="episode-button ${isWatched ? "watched":""}"
        data-season="${currentSeason}"
        data-episode="${i}"
      >
        ${isWatched ? "✓ " : ""}
        Episode ${i}
      </button>

    `;

  }

  grid.innerHTML = html;

  $$(".episode-button").forEach(button=>{

    button.addEventListener("click",()=>{

      openWatch(
        currentAnime.id,
        Number(button.dataset.season),
        Number(button.dataset.episode)
      );

    });

  });

}


/* =========================================================
   WATCH
========================================================= */

function openWatch(
  animeId,
  season,
  episode
){

  const anime =
    animeDatabase.find(a=>a.id===animeId);

  if(!anime) return;

  currentAnime = anime;

  currentSeason = season;

  currentEpisode = episode;

  markWatched(
    animeId,
    season,
    episode
  );

  addHistory(animeId);

  $("#watchTitle").textContent =
    anime.title;

  $("#watchAnime").textContent =
    anime.title;

  $("#watchEpisode").textContent =
    `Season ${season} • Episode ${episode}`;

  $("#watchStatus").textContent =
    "Demo player — connect your video source here.";

  $("#watchPage")?.classList.add("show");

  document.body.classList.add("no-scroll");

}


function closeWatch(){

  $("#watchPage")?.classList.remove("show");

  document.body.classList.remove("no-scroll");

  renderAll();

}


$("#closeWatch")?.addEventListener(
  "click",
  closeWatch
);


function markWatched(
  animeId,
  season,
  episode
){

  const key =
    episodeKey(
      animeId,
      season,
      episode
    );

  watched[key]=true;

  save(
    STORAGE.watched,
    watched
  );

}


function addHistory(id){

  history =
    history.filter(item=>item!==id);

  history.unshift(id);

  history =
    history.slice(0,10);

  save(
    STORAGE.history,
    history
  );

}


/* =========================================================
   PREVIOUS / NEXT
========================================================= */

$("#previousEpisode")?.addEventListener(
  "click",
  ()=>{

    if(!currentAnime) return;

    if(currentEpisode<=1){

      if(currentSeason>1){

        currentSeason--;

        currentEpisode =
          getEpisodesForSeason(
            currentAnime,
            currentSeason
          );

      }else{

        toast("This is the first episode");

        return;

      }

    }else{

      currentEpisode--;

    }

    openWatch(
      currentAnime.id,
      currentSeason,
      currentEpisode
    );

  }
);


$("#nextEpisode")?.addEventListener(
  "click",
  ()=>{

    if(!currentAnime) return;

    const max =
      getEpisodesForSeason(
        currentAnime,
        currentSeason
      );

    if(currentEpisode<max){

      currentEpisode++;

    }else{

      const seasons =
        getSeasonCount(
          currentAnime
        );

      if(currentSeason<seasons){

        currentSeason++;

        currentEpisode=1;

      }else{

        toast("You reached the last episode");

        return;

      }

    }

    openWatch(
      currentAnime.id,
      currentSeason,
      currentEpisode
    );

  }
);


/* =========================================================
   SEARCH
========================================================= */

function openSearch(){

  $("#searchModal")?.classList.add("show");

  document.body.classList.add("no-scroll");

  setTimeout(()=>{

    $("#searchInput")?.focus();

  },100);

}


function closeSearch(){

  $("#searchModal")?.classList.remove("show");

  document.body.classList.remove("no-scroll");

}


$("#searchButton")?.addEventListener(
  "click",
  openSearch
);

$("#heroSearch")?.addEventListener(
  "click",
  openSearch
);

$("#ctaSearch")?.addEventListener(
  "click",
  openSearch
);

$("#closeSearch")?.addEventListener(
  "click",
  closeSearch
);


function searchAnime(){

  const query =
    $("#searchInput")?.value
      .trim()
      .toLowerCase();

  const results =
    $("#searchResults");

  if(!results) return;

  if(!query){

    results.innerHTML =
      `<p style="color:#999;margin-top:20px">
        Type an anime name to search.
       </p>`;

    return;

  }

  const matches =
    animeDatabase.filter(anime=>{

      const title =
        anime.title.toLowerCase();

      const genres =
        anime.genre.join(" ").toLowerCase();

      return (
        title.includes(query) ||
        genres.includes(query)
      );

    });

  if(!matches.length){

    results.innerHTML =
      `<div class="empty-state">
        <div>🔍</div>
        <h3>No Results</h3>
        <p>We couldn't find that anime.</p>
       </div>`;

    return;

  }

  results.innerHTML =
    matches.map(anime=>`

      <div
        class="search-result"
        data-search-id="${anime.id}"
      >

        <div class="search-result-poster"
          ${
            anime.poster
              ? `style="background-image:url('${escapeAttribute(anime.poster)}')"`
              : ""
          }
        ></div>

        <div>

          <strong>
            ${escapeHTML(anime.title)}
          </strong>

          <p style="color:#999;margin-top:5px">
            ${anime.year}
            •
            ⭐ ${anime.rating}
            •
            ${anime.type}
          </p>

        </div>

      </div>

    `).join("");

  $$("[data-search-id]").forEach(item=>{

    item.addEventListener("click",()=>{

      closeSearch();

      openDetails(
        Number(item.dataset.searchId)
      );

    });

  });

}


$("#doSearch")?.addEventListener(
  "click",
  searchAnime
);


$("#searchInput")?.addEventListener(
  "input",
  searchAnime
);


$("#searchInput")?.addEventListener(
  "keydown",
  event=>{

    if(event.key==="Enter"){

      searchAnime();

    }

    if(event.key==="Escape"){

      closeSearch();

    }

  }
);


/* =========================================================
   GENRES
========================================================= */

$$(".genre-grid button").forEach(button=>{

  button.addEventListener("click",()=>{

    const genre =
      button.dataset.genre;

    const matches =
      animeDatabase.filter(anime=>
        anime.genre.includes(genre)
      );

    openGenreResults(
      genre,
      matches
    );

  });

});


function openGenreResults(
  genre,
  matches
){

  const modal =
    $("#searchModal");

  const input =
    $("#searchInput");

  const results =
    $("#searchResults");

  modal?.classList.add("show");

  document.body.classList.add("no-scroll");

  if(input){

    input.value=genre;

  }

  if(results){

    results.innerHTML =
      matches.length
        ? matches.map(anime=>`

            <div
              class="search-result"
              data-search-id="${anime.id}"
            >

              <div class="search-result-poster"></div>

              <div>

                <strong>
                  ${escapeHTML(anime.title)}
                </strong>

                <p style="color:#999;margin-top:5px">
                  ${anime.genre.join(" • ")}
                </p>

              </div>

            </div>

          `).join("")
        : `<div class="empty-state">
             <div>😔</div>
             <h3>No Anime</h3>
             <p>No anime found in ${escapeHTML(genre)}.</p>
           </div>`;

    $$("[data-search-id]").forEach(item=>{

      item.addEventListener("click",()=>{

        closeSearch();

        openDetails(
          Number(item.dataset.searchId)
        );

      });

    });

  }

}


/* =========================================================
   ADMIN LOGIN
========================================================= */

function openAdmin(){

  const loggedIn =
    localStorage.getItem(STORAGE.admin)==="true";

  if(loggedIn){

    showAdminPanel();

  }else{

    $("#adminLogin")?.classList.add("show");

    document.body.classList.add("no-scroll");

  }

}


$("#adminButton")?.addEventListener(
  "click",
  openAdmin
);


$("#mobileAdmin")?.addEventListener(
  "click",
  ()=>{

    $("#mobileMenu")?.classList.remove("open");

    openAdmin();

  }
);


$("#closeAdminLogin")?.addEventListener(
  "click",
  ()=>{

    $("#adminLogin")?.classList.remove("show");

    document.body.classList.remove("no-scroll");

  }
);


/* =========================================================
   ADMIN LOGIN FORM
========================================================= */

/*
  DEMO LOGIN:

  Username: admin
  Password: 123456

  For a real website, NEVER keep admin credentials
  in front-end JavaScript.
*/

$("#adminLoginForm")?.addEventListener(
  "submit",
  event=>{

    event.preventDefault();

    const username =
      $("#adminUsername").value.trim();

    const password =
      $("#adminPassword").value;

    const error =
      $("#loginError");

    if(
      username==="admin" &&
      password==="123456"
    ){

      localStorage.setItem(
        STORAGE.admin,
        "true"
      );

      error.textContent="";

      $("#adminLogin")?.classList.remove("show");

      showAdminPanel();

      toast("Admin login successful");

    }else{

      error.textContent =
        "Incorrect username or password.";

    }

  }
);


/* =========================================================
   ADMIN PANEL
========================================================= */

function showAdminPanel(){

  $("#adminPanel")?.classList.add("show");

  document.body.classList.add("no-scroll");

  updateStats();

  renderAdminAnime();

}


function closeAdminPanel(){

  $("#adminPanel")?.classList.remove("show");

  document.body.classList.remove("no-scroll");

}


$("#adminHomeButton")?.addEventListener(
  "click",
  closeAdminPanel
);


$("#adminLogout")?.addEventListener(
  "click",
  ()=>{

    localStorage.removeItem(
      STORAGE.admin
    );

    closeAdminPanel();

    toast("Logged out");

  }
);


/* =========================================================
   ADMIN TABS
========================================================= */

$$(".admin-tab").forEach(button=>{

  button.addEventListener("click",()=>{

    const tab =
      button.dataset.adminTab;

    $$(".admin-tab").forEach(item=>
      item.classList.remove("active")
    );

    $$(".admin-tab-content").forEach(item=>
      item.classList.remove("active")
    );

    button.classList.add("active");

    const content =
      $(`#admin${capitalize(tab)}Tab`);

    content?.classList.add("active");

  });

});


function capitalize(text){

  return text.charAt(0).toUpperCase()+
    text.slice(1);

}


/* =========================================================
   ADMIN ADD TAB
========================================================= */

$("#adminAddAnime")?.addEventListener(
  "click",
  ()=>{

    switchAdminTab("add");

  }
);


function switchAdminTab(tab){

  const button =
    $(`.admin-tab[data-admin-tab="${tab}"]`);

  button?.click();

}


/* =========================================================
   ADD ANIME
========================================================= */

$("#addAnimeForm")?.addEventListener(
  "submit",
  event=>{

    event.preventDefault();

    const title =
      $("#animeTitle").value.trim();

    if(!title){

      toast("Please enter an anime title");

      return;

    }

    const newAnime={

      id:Date.now(),

      title,

      type:
        $("#animeType").value,

      year:
        Number($("#animeYear").value)||2026,

      rating:
        Number($("#animeRating").value)||8,

      episodes:
        Number($("#animeEpisodes").value)||12,

      genre:[
        $("#animeGenre").value
      ],

      description:
        $("#animeDescription").value.trim() ||
        "A new anime added to YUSUF ANIME.",

      poster:
        $("#animePoster").value.trim(),

      trending:false,

      latest:true,

      top:false

    };

    animeDatabase.push(newAnime);

    save(
      STORAGE.anime,
      animeDatabase
    );

    event.target.reset();

    $("#animeYear").value=2026;

    $("#animeRating").value=8.5;

    $("#animeEpisodes").value=12;

    renderAll();

    switchAdminTab("anime");

    toast("Anime added successfully 🎬");

  }
);


/* =========================================================
   ADMIN ANIME LIST
========================================================= */

function renderAdminAnime(){

  const list =
    $("#adminAnimeList");

  if(!list) return;

  list.innerHTML =
    animeDatabase.map(anime=>`

      <div class="admin-anime-row">

        <div class="admin-anime-info">

          <div
            class="admin-anime-thumb"
            ${
              anime.poster
                ? `style="background-image:url('${escapeAttribute(anime.poster)}')"`
                : ""
            }
          ></div>

          <div>

            <strong>
              ${escapeHTML(anime.title)}
            </strong>

            <small>
              ${anime.type}
              •
              ${anime.year}
              •
              ⭐ ${anime.rating}
            </small>

          </div>

        </div>

        <button
          class="delete-anime"
          data-delete-anime="${anime.id}"
        >
          🗑️ Delete
        </button>

      </div>

    `).join("");


  $$("[data-delete-anime]").forEach(button=>{

    button.addEventListener("click",()=>{

      deleteAnime(
        Number(button.dataset.deleteAnime)
      );

    });

  });

}


/* =========================================================
   DELETE ANIME
========================================================= */

function deleteAnime(id){

  const anime =
    animeDatabase.find(a=>a.id===id);

  if(!anime) return;

  const confirmed =
    confirm(
      `Delete "${anime.title}"?`
    );

  if(!confirmed) return;

  animeDatabase =
    animeDatabase.filter(a=>a.id!==id);

  favorites =
    favorites.filter(a=>a!==id);

  history =
    history.filter(a=>a!==id);

  save(STORAGE.anime,animeDatabase);

  save(STORAGE.favorites,favorites);

  save(STORAGE.history,history);

  renderAll();

  toast("Anime deleted");

}


/* =========================================================
   ADMIN STATISTICS
========================================================= */

function updateStats(){

  const animeCount =
    $("#statAnime");

  const favoriteCount =
    $("#statFavorites");

  const watchedCount =
    $("#statWatched");

  const episodeCount =
    $("#statEpisodes");

  if(animeCount){

    animeCount.textContent =
      animeDatabase.length;

  }

  if(favoriteCount){

    favoriteCount.textContent =
      favorites.length;

  }

  if(watchedCount){

    watchedCount.textContent =
      Object.keys(watched).length;

  }

  if(episodeCount){

    const total =
      animeDatabase.reduce(
        (sum,anime)=>
          sum + Number(anime.episodes||0),
        0
      );

    episodeCount.textContent =
      total;

  }

}


/* =========================================================
   ADMIN SETTINGS
========================================================= */

$("#resetData")?.addEventListener(
  "click",
  ()=>{

    const ok =
      confirm(
        "Reset the anime database to the default data?"
      );

    if(!ok) return;

    animeDatabase =
      DEFAULT_ANIME.map(anime=>({...anime}));

    save(
      STORAGE.anime,
      animeDatabase
    );

    renderAll();

    toast("Database reset");

  }
);


$("#clearFavorites")?.addEventListener(
  "click",
  ()=>{

    favorites=[];

    save(
      STORAGE.favorites,
      favorites
    );

    renderAll();

    toast("Favorites cleared");

  }
);


$("#clearHistory")?.addEventListener(
  "click",
  ()=>{

    history=[];

    watched={};

    save(
      STORAGE.history,
      history
    );

    save(
      STORAGE.watched,
      watched
    );

    renderAll();

    toast("Watch history cleared");

  }
);


/* =========================================================
   TOP BUTTON
========================================================= */

window.addEventListener("scroll",()=>{

  const button =
    $("#topButton");

  if(!button) return;

  button.classList.toggle(
    "show",
    window.scrollY>500
  );

});


$("#topButton")?.addEventListener(
  "click",
  ()=>{

    window.scrollTo({
      top:0,
      behavior:"smooth"
    });

  }
);


/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

const navLinks =
  $$(".desktop-nav a");

window.addEventListener(
  "scroll",
  ()=>{

    const sections =
      ["home","trending","latest","genres","favorites"];

    let current="home";

    sections.forEach(id=>{

      const section =
        document.getElementById(id);

      if(!section) return;

      const top =
        section.getBoundingClientRect().top;

      if(top<=150){

        current=id;

      }

    });

    navLinks.forEach(link=>{

      link.classList.toggle(
        "active",
        link.getAttribute("href") ===
        `#${current}`
      );

    });

  }
);


/* =========================================================
   KEYBOARD SHORTCUTS
========================================================= */

document.addEventListener(
  "keydown",
  event=>{

    if(event.key==="Escape"){

      closeSearch();

      closeDetails();

      closeWatch();

      $("#adminLogin")?.classList.remove("show");

      if(
        $("#adminPanel")?.classList.contains("show")
      ){

        closeAdminPanel();

      }

    }

  }
);


/* =========================================================
   SECURITY HELPERS
========================================================= */

function escapeHTML(value){

  return String(value ?? "")
    .replaceAll("&","&amp;")
    .replaceAll("<","&lt;")
    .replaceAll(">","&gt;")
    .replaceAll('"',"&quot;")
    .replaceAll("'","&#039;");

}


function escapeAttribute(value){

  return String(value ?? "")
    .replaceAll('"',"&quot;")
    .replaceAll("'","&#039;");

}


/* =========================================================
   INITIALIZE
========================================================= */

renderAll();

updateFavoriteCount();

console.log(
  "YUSUF ANIME loaded successfully."
);

console.log(
  "Admin demo: admin / 123456"
);
