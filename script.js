```javascript
"use strict";

/* =========================================================
   YUSUF ANIME
   Complete Frontend System
========================================================= */

const DEFAULT_ANIME = [
  {
    id:"one-piece",
    title:"One Piece",
    type:"TV",
    year:1999,
    rating:9.0,
    genres:["Action","Adventure","Fantasy","Shonen"],
    description:"The legendary journey of Monkey D. Luffy and his crew as they search for the greatest treasure in the world.",
    poster:"https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=700&q=80",
    seasons:1,
    episodes:12,
    trending:true,
    latest:false
  },
  {
    id:"naruto",
    title:"Naruto",
    type:"TV",
    year:2002,
    rating:8.4,
    genres:["Action","Adventure","Shonen"],
    description:"A young ninja dreams of becoming the strongest leader of his village.",
    poster:"https://images.unsplash.com/photo-1607604276583-eef5e0f7e7a3?auto=format&fit=crop&w=700&q=80",
    seasons:1,
    episodes:12,
    trending:true,
    latest:false
  },
  {
    id:"demon-slayer",
    title:"Demon Slayer",
    type:"TV",
    year:2019,
    rating:8.6,
    genres:["Action","Fantasy","Drama"],
    description:"Tanjiro begins a dangerous journey after demons destroy his family.",
    poster:"https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?auto=format&fit=crop&w=700&q=80",
    seasons:3,
    episodes:12,
    trending:true,
    latest:true
  },
  {
    id:"jujutsu-kaisen",
    title:"Jujutsu Kaisen",
    type:"TV",
    year:2020,
    rating:8.7,
    genres:["Action","Fantasy","Shonen"],
    description:"Yuji Itadori becomes involved in the dangerous world of cursed spirits.",
    poster:"https://images.unsplash.com/photo-1541562232579-512a21360020?auto=format&fit=crop&w=700&q=80",
    seasons:2,
    episodes:12,
    trending:true,
    latest:true
  },
  {
    id:"attack-on-titan",
    title:"Attack on Titan",
    type:"TV",
    year:2013,
    rating:9.1,
    genres:["Action","Drama","Fantasy"],
    description:"Humanity fights for survival against terrifying giants beyond the walls.",
    poster:"https://images.unsplash.com/photo-1531259683007-016a7b628fc3?auto=format&fit=crop&w=700&q=80",
    seasons:4,
    episodes:12,
    trending:true,
    latest:false
  },
  {
    id:"my-dress-up-darling",
    title:"My Dress-Up Darling",
    type:"TV",
    year:2022,
    rating:8.2,
    genres:["Romance","Comedy","School"],
    description:"A shy doll-maker discovers cosplay and an unexpected friendship with a popular classmate.",
    poster:"https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=700&q=80",
    seasons:2,
    episodes:12,
    trending:true,
    latest:true
  },
  {
    id:"horimiya",
    title:"Horimiya",
    type:"TV",
    year:2021,
    rating:8.5,
    genres:["Romance","Comedy","School"],
    description:"Two classmates discover unexpected sides of each other and slowly fall in love.",
    poster:"https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&w=700&q=80",
    seasons:1,
    episodes:13,
    trending:false,
    latest:false
  },
  {
    id:"spy-family",
    title:"SPY x FAMILY",
    type:"TV",
    year:2022,
    rating:8.4,
    genres:["Action","Comedy","Adventure"],
    description:"A spy, an assassin and a telepath create an unusual family.",
    poster:"https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=700&q=80",
    seasons:2,
    episodes:12,
    trending:false,
    latest:true
  },
  {
    id:"your-name",
    title:"Your Name",
    type:"Movie",
    year:2016,
    rating:8.9,
    genres:["Romance","Drama","Fantasy"],
    description:"Two teenagers mysteriously begin switching bodies and become connected by fate.",
    poster:"https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=700&q=80",
    seasons:1,
    episodes:1,
    trending:false,
    latest:false
  },
  {
    id:"frieren",
    title:"Frieren: Beyond Journey's End",
    type:"TV",
    year:2023,
    rating:9.0,
    genres:["Fantasy","Adventure","Drama"],
    description:"An immortal elf begins a new journey long after the heroes of an old adventure have passed.",
    poster:"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=700&q=80",
    seasons:1,
    episodes:12,
    trending:false,
    latest:true
  }
];

const LANGUAGES = {
  en:"English",
  ku:"کوردی",
  ar:"العربية",
  tr:"Türkçe",
  ja:"日本語",
  es:"Español",
  fr:"Français",
  de:"Deutsch"
};

let animeList = [];
let favorites = JSON.parse(localStorage.getItem("yusufFavorites") || "[]");
let watched = JSON.parse(localStorage.getItem("yusufWatched") || "{}");
let currentAnime = null;
let currentEpisode = 1;
let currentSeason = 1;
let adminLogged = sessionStorage.getItem("yusufAdmin") === "true";
let language = localStorage.getItem("yusufLanguage") || "en";

/* =========================================================
   STORAGE
========================================================= */

function saveAnime(){
  localStorage.setItem("yusufAnime", JSON.stringify(animeList));
}

function loadAnime(){
  const saved = localStorage.getItem("yusufAnime");

  if(saved){
    try{
      animeList = JSON.parse(saved);
    }catch{
      animeList = [...DEFAULT_ANIME];
      saveAnime();
    }
  }else{
    animeList = [...DEFAULT_ANIME];
    saveAnime();
  }
}

/* =========================================================
   HELPERS
========================================================= */

function $(id){
  return document.getElementById(id);
}

function escapeHTML(value){
  return String(value ?? "")
    .replaceAll("&","&amp;")
    .replaceAll("<","&lt;")
    .replaceAll(">","&gt;")
    .replaceAll('"',"&quot;")
    .replaceAll("'","&#039;");
}

function showToast(message){
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;

  $("toastContainer").appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(20px)";

    setTimeout(() => toast.remove(),300);
  },2500);
}

function findAnime(id){
  return animeList.find(a => a.id === id);
}

/* =========================================================
   CARDS
========================================================= */

function animeCard(anime){
  const isFav = favorites.includes(anime.id);

  return `
    <article class="anime-card" data-id="${escapeHTML(anime.id)}">

      <div class="poster">

        <img
          src="${escapeHTML(anime.poster)}"
          alt="${escapeHTML(anime.title)}"
          loading="lazy"
          onerror="this.style.display='none'"
        >

        <span class="card-top">${anime.type}</span>

        <span class="card-rating">⭐ ${anime.rating}</span>

        <button
          class="favorite-card ${isFav ? "active" : ""}"
          data-favorite="${escapeHTML(anime.id)}"
          aria-label="Favorite"
        >
          ${isFav ? "❤️" : "♡"}
        </button>

        <button class="card-play">▶</button>

      </div>

      <div class="card-info">
        <h3>${escapeHTML(anime.title)}</h3>
        <p>${anime.year} • ${anime.genres.slice(0,2).join(" • ")}</p>
      </div>

    </article>
  `;
}

function renderGrid(elementId,list){
  const element = $(elementId);
  if(!element) return;

  element.innerHTML = list.map(animeCard).join("");

  element.querySelectorAll(".anime-card").forEach(card => {
    card.addEventListener("click", e => {
      if(e.target.closest("[data-favorite]")) return;
      openDetails(card.dataset.id);
    });
  });

  element.querySelectorAll("[data-favorite]").forEach(button => {
    button.addEventListener("click", e => {
      e.stopPropagation();
      toggleFavorite(button.dataset.favorite);
    });
  });
}

function renderHome(){
  renderGrid(
    "trendingGrid",
    animeList.filter(a => a.trending).slice(0,10)
  );

  renderGrid(
    "latestGrid",
    animeList.filter(a => a.latest).slice(0,10)
  );

  renderGrid(
    "topGrid",
    [...animeList].sort((a,b)=>b.rating-a.rating).slice(0,10)
  );

  renderFavorites();
  renderContinue();
}

/* =========================================================
   FAVORITES
========================================================= */

function toggleFavorite(id){
  if(favorites.includes(id)){
    favorites = favorites.filter(x => x !== id);
    showToast("Removed from favorites");
  }else{
    favorites.push(id);
    showToast("Added to favorites ❤️");
  }

  localStorage.setItem("yusufFavorites",JSON.stringify(favorites));

  renderHome();

  if(currentAnime && currentAnime.id === id){
    updateFavoriteButton();
  }

  updateStats();
}

function renderFavorites(){
  const list = animeList.filter(a => favorites.includes(a.id));

  renderGrid("favoritesGrid",list);

  $("emptyFavorites").classList.toggle("hidden",list.length > 0);
}

function updateFavoriteButton(){
  if(!currentAnime) return;

  const active = favorites.includes(currentAnime.id);

  $("detailsFavorite").innerHTML =
    active ? "❤️ Remove from Favorites" : "♡ Add to Favorites";
}

/* =========================================================
   CONTINUE WATCHING
========================================================= */

function renderContinue(){
  const ids = Object.keys(watched);

  const list = ids
    .map(id => findAnime(id))
    .filter(Boolean);

  $("continueSection").classList.toggle("hidden",list.length === 0);

  renderGrid("continueGrid",list);
}

/* =========================================================
   DETAILS
========================================================= */

function openDetails(id){
  const anime = findAnime(id);

  if(!anime) return;

  currentAnime = anime;
  currentSeason = 1;
  currentEpisode = 1;

  $("detailsTitle").textContent = anime.title;
  $("detailsType").textContent = anime.type;

  $("detailsDescription").textContent = anime.description;

  $("detailsMeta").innerHTML = `
    <span>⭐ ${anime.rating}</span>
    <span>📅 ${anime.year}</span>
    <span>🎬 ${anime.type}</span>
    <span>📺 ${anime.seasons} Season${anime.seasons > 1 ? "s":""}</span>
    <span>🎞 ${anime.episodes} Episodes</span>
  `;

  $("detailsPoster").innerHTML = `
    <img src="${escapeHTML(anime.poster)}" alt="${escapeHTML(anime.title)}">
  `;

  buildSeasonSelect();
  renderEpisodes();
  updateFavoriteButton();

  $("detailsPage").classList.add("show");
  document.body.style.overflow = "hidden";
}

function closeDetails(){
  $("detailsPage").classList.remove("show");
  document.body.style.overflow = "";
}

function buildSeasonSelect(){
  const select = $("seasonSelect");

  select.innerHTML = "";

  for(let i=1;i<=currentAnime.seasons;i++){
    select.innerHTML += `
      <option value="${i}">Season ${i}</option>
    `;
  }

  select.value = currentSeason;
}

function renderEpisodes(){
  const grid = $("episodeGrid");

  grid.innerHTML = "";

  for(let i=1;i<=currentAnime.episodes;i++){
    const key = `${currentAnime.id}-s${currentSeason}-e${i}`;
    const wasWatched = watched[key];

    const button = document.createElement("button");

    button.className = "episode-button";
    if(wasWatched) button.classList.add("watched");

    button.textContent = `Episode ${i}`;

    button.addEventListener("click",()=>{
      watchEpisode(currentAnime,currentSeason,i);
    });

    grid.appendChild(button);
  }
}

/* =========================================================
   WATCH
========================================================= */

function watchEpisode(anime,season,episode){
  currentAnime = anime;
  currentSeason = season;
  currentEpisode = episode;

  const key = `${anime.id}-s${season}-e${episode}`;

  watched[key] = Date.now();

  localStorage.setItem("yusufWatched",JSON.stringify(watched));

  $("watchTitle").textContent = anime.title;
  $("watchAnime").textContent = anime.title;
  $("watchEpisode").textContent =
    `Season ${season} • Episode ${episode}`;

  $("watchStatus").textContent =
    `Season ${season} • Episode ${episode}`;

  $("demoProgress").style.width =
    `${Math.min(95,20 + episode * 5)}%`;

  $("watchPage").classList.add("show");
  $("detailsPage").classList.remove("show");

  renderContinue();
  updateStats();

  document.body.style.overflow = "hidden";
}

function closeWatch(){
  $("watchPage").classList.remove("show");
  document.body.style.overflow = "";
}

function nextEpisode(){
  if(!currentAnime) return;

  if(currentEpisode < currentAnime.episodes){
    currentEpisode++;
  }else if(currentSeason < currentAnime.seasons){
    currentSeason++;
    currentEpisode = 1;
  }else{
    showToast("This is the last episode.");
    return;
  }

  watchEpisode(currentAnime,currentSeason,currentEpisode);
}

function previousEpisode(){
  if(!currentAnime) return;

  if(currentEpisode > 1){
    currentEpisode--;
  }else if(currentSeason > 1){
    currentSeason--;
    currentEpisode = currentAnime.episodes;
  }else{
    showToast("This is the first episode.");
    return;
  }

  watchEpisode(currentAnime,currentSeason,currentEpisode);
}

/* =========================================================
   SEARCH
========================================================= */

function openSearch(){
  $("searchModal").classList.add("show");
  setTimeout(()=>$("searchInput").focus(),100);
}

function closeSearch(){
  $("searchModal").classList.remove("show");
  $("searchInput").value = "";
  $("searchResults").innerHTML = "";
}

function performSearch(){
  const query = $("searchInput").value.trim().toLowerCase();

  if(!query){
    $("searchResults").innerHTML = "";
    return;
  }

  const results = animeList.filter(anime =>
    anime.title.toLowerCase().includes(query) ||
    anime.genres.some(g=>g.toLowerCase().includes(query))
  );

  if(!results.length){
    $("searchResults").innerHTML =
      `<div class="search-result">No anime found.</div>`;
    return;
  }

  $("searchResults").innerHTML = results.map(anime=>`
    <div class="search-result" data-search-id="${escapeHTML(anime.id)}">
      <strong>${escapeHTML(anime.title)}</strong>
      <small>
        ⭐ ${anime.rating} • ${anime.year} • ${anime.genres.join(", ")}
      </small>
    </div>
  `).join("");

  $("searchResults")
    .querySelectorAll("[data-search-id]")
    .forEach(item=>{
      item.addEventListener("click",()=>{
        closeSearch();
        openDetails(item.dataset.searchId);
      });
    });
}

/* =========================================================
   GENRES
========================================================= */

function setupGenres(){
  document.querySelectorAll("[data-genre]").forEach(button=>{
    button.addEventListener("click",()=>{
      const genre = button.dataset.genre;

      const list = animeList.filter(anime =>
        anime.genres.includes(genre)
      );

      renderGrid("trendingGrid",list);

      document.querySelector("#trending")
        .scrollIntoView({behavior:"smooth"});

      showToast(`${genre}: ${list.length} anime`);
    });
  });
}

/* =========================================================
   THEME
========================================================= */

function setupTheme(){
  const saved = localStorage.getItem("yusufTheme");

  if(saved === "light"){
    document.body.classList.add("light");
    $("themeButton").textContent = "☀️";
  }

  $("themeButton").addEventListener("click",()=>{
    document.body.classList.toggle("light");

    const light = document.body.classList.contains("light");

    localStorage.setItem("yusufTheme",light ? "light" : "dark");

    $("themeButton").textContent = light ? "☀️" : "🌙";
  });
}

/* =========================================================
   LANGUAGE
========================================================= */

function setupLanguage(){
  $("currentLanguage").textContent = LANGUAGES[language];

  $("languageButton").addEventListener("click",e=>{
    e.stopPropagation();
    $("languageMenu").classList.toggle("show");
  });

  document.querySelectorAll("[data-language]").forEach(button=>{
    button.addEventListener("click",()=>{
      language = button.dataset.language;

      localStorage.setItem("yusufLanguage",language);

      $("currentLanguage").textContent = LANGUAGES[language];

      $("languageMenu").classList.remove("show");

      applyLanguage();

      showToast(`Language: ${LANGUAGES[language]}`);
    });
  });

  document.addEventListener("click",()=>{
    $("languageMenu").classList.remove("show");
  });
}

function applyLanguage(){
  if(language === "ku"){
    document.documentElement.lang = "ku";
    document.documentElement.dir = "rtl";

    const translations = {
      loading:"چاوەڕوان بە...",
      home:"سەرەکی",
      trending:"بەناوبانگ",
      latest:"نوێترین",
      genres:"جۆرەکان",
      favorites:"دڵخوازەکان"
    };

    document.querySelectorAll("[data-i18n]").forEach(el=>{
      const key = el.dataset.i18n;
      if(translations[key]) el.textContent = translations[key];
    });
  }else{
    document.documentElement.lang = language;
    document.documentElement.dir = "ltr";
  }
}

/* =========================================================
   MOBILE MENU
========================================================= */

function setupMobile(){
  $("menuButton").addEventListener("click",()=>{
    $("mobileMenu").classList.add("open");
  });

  $("closeMenu").addEventListener("click",()=>{
    $("mobileMenu").classList.remove("open");
  });

  document.querySelectorAll("#mobileMenu a").forEach(a=>{
    a.addEventListener("click",()=>{
      $("mobileMenu").classList.remove("open");
    });
  });

  $("mobileAdmin").addEventListener("click",()=>{
    $("mobileMenu").classList.remove("open");
    openAdmin();
  });
}

/* =========================================================
   ADMIN LOGIN
========================================================= */

function openAdmin(){
  if(adminLogged){
    openAdminPanel();
  }else{
    $("adminLoginModal").classList.add("show");
    setTimeout(()=>$("adminUsername").focus(),100);
  }
}

function closeAdminLogin(){
  $("adminLoginModal").classList.remove("show");
}

function loginAdmin(){
  const username = $("adminUsername").value.trim();
  const password = $("adminPassword").value;

  if(username === "admin" && password === "1234"){
    adminLogged = true;

    sessionStorage.setItem("yusufAdmin","true");

    closeAdminLogin();
    openAdminPanel();

    showToast("Admin login successful 🔐");
  }else{
    showToast("Wrong username or password");
  }
}

function logoutAdmin(){
  adminLogged = false;
  sessionStorage.removeItem("yusufAdmin");

  closeAdminPanel();

  showToast("Logged out");
}

/* =========================================================
   ADMIN PANEL
========================================================= */

function openAdminPanel(){
  if(!adminLogged){
    openAdmin();
    return;
  }

  renderAdminList();
  updateStats();

  $("adminPage").classList.add("show");
  document.body.style.overflow = "hidden";
}

function closeAdminPanel(){
  $("adminPage").classList.remove("show");
  document.body.style.overflow = "";
}

function updateStats(){
  $("statAnime").textContent = animeList.length;
  $("statFavorites").textContent = favorites.length;
  $("statWatching").textContent = Object.keys(watched).length;

  let episodes = 0;

  animeList.forEach(a=>{
    episodes += Number(a.episodes || 0) * Number(a.seasons || 1);
  });

  $("statEpisodes").textContent = episodes;
}

function renderAdminList(){
  const query = $("adminSearch").value.toLowerCase().trim();

  const list = animeList.filter(a =>
    a.title.toLowerCase().includes(query)
  );

  if(!list.length){
    $("adminAnimeList").innerHTML =
      `<p style="color:var(--muted)">No anime found.</p>`;
    return;
  }

  $("adminAnimeList").innerHTML = list.map(anime=>`
    <div class="admin-anime-item">

      <img
        src="${escapeHTML(anime.poster)}"
        alt="${escapeHTML(anime.title)}"
        onerror="this.style.display='none'"
      >

      <div>
        <h3>${escapeHTML(anime.title)}</h3>
        <p>
          ${anime.year} • ⭐ ${anime.rating}
          • ${anime.seasons} season(s)
        </p>
      </div>

      <div class="admin-actions">
        <button data-edit="${escapeHTML(anime.id)}">✏️</button>
        <button data-delete="${escapeHTML(anime.id)}">🗑️</button>
      </div>

    </div>
  `).join("");

  document.querySelectorAll("[data-edit]").forEach(button=>{
    button.addEventListener("click",()=>{
      editAnime(button.dataset.edit);
    });
  });

  document.querySelectorAll("[data-delete]").forEach(button=>{
    button.addEventListener("click",()=>{
      deleteAnime(button.dataset.delete);
    });
  });
}

function editAnime(id){
  const anime = findAnime(id);
  if(!anime) return;

  $("animeId").value = anime.id;
  $("animeTitle").value = anime.title;
  $("animeDescription").value = anime.description;
  $("animeType").value = anime.type;
  $("animeYear").value = anime.year;
  $("animeRating").value = anime.rating;
  $("animeEpisodes").value = anime.episodes;
  $("animeGenres").value = anime.genres.join(", ");
  $("animePoster").value = anime.poster;
  $("animeSeasons").value = anime.seasons;

  $("animeFormTitle").textContent = "✏️ Edit Anime";
  $("cancelEdit").classList.remove("hidden");

  window.scrollTo({top:0,behavior:"smooth"});
}

function resetAnimeForm(){
  $("animeForm").reset();

  $("animeId").value = "";
  $("animeYear").value = 2026;
  $("animeRating").value = 8.5;
  $("animeEpisodes").value = 12;
  $("animeSeasons").value = 1;

  $("animeFormTitle").textContent = "➕ Add Anime";
  $("cancelEdit").classList.add("hidden");
}

function saveAnimeForm(e){
  e.preventDefault();

  const idInput = $("animeId").value.trim();

  const data = {
    id:idInput || `${slugify($("animeTitle").value)}-${Date.now()}`,
    title:$("animeTitle").value.trim(),
    description:$("animeDescription").value.trim(),
    type:$("animeType").value,
    year:Number($("animeYear").value),
    rating:Number($("animeRating").value),
    episodes:Number($("animeEpisodes").value),
    seasons:Number($("animeSeasons").value),
    genres:$("animeGenres").value
      .split(",")
      .map(x=>x.trim())
      .filter(Boolean),
    poster:$("animePoster").value.trim() ||
      "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=700&q=80",
    trending:true,
    latest:true
  };

  if(!data.title){
    showToast("Enter anime title");
    return;
  }

  const existingIndex =
    animeList.findIndex(a=>a.id === data.id);

  if(existingIndex >= 0){
    animeList[existingIndex] = data;
    showToast("Anime updated successfully ✏️");
  }else{
    animeList.unshift(data);
    showToast("Anime added successfully 🎬");
  }

  saveAnime();
  renderHome();
  renderAdminList();
  updateStats();
  resetAnimeForm();
}

function deleteAnime(id){
  const anime = findAnime(id);

  if(!anime) return;

  if(!confirm(`Delete "${anime.title}"?`)) return;

  animeList = animeList.filter(a=>a.id !== id);

  favorites = favorites.filter(x=>x !== id);

  Object.keys(watched).forEach(key=>{
    if(key.startsWith(id + "-")){
      delete watched[key];
    }
  });

  saveAnime();

  localStorage.setItem("yusufFavorites",JSON.stringify(favorites));
  localStorage.setItem("yusufWatched",JSON.stringify(watched));

  renderHome();
  renderAdminList();
  updateStats();

  showToast("Anime deleted 🗑️");
}

function slugify(text){
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g,"-")
    .replace(/^-+|-+$/g,"");
}

function resetAllData(){
  if(!confirm("Reset all website data?")) return;

  animeList = [...DEFAULT_ANIME];
  favorites = [];
  watched = {};

  localStorage.removeItem("yusufAnime");
  localStorage.removeItem("yusufFavorites");
  localStorage.removeItem("yusufWatched");

  saveAnime();

  renderHome();
  renderAdminList();
  updateStats();
  resetAnimeForm();

  showToast("Website data reset successfully");
}

/* =========================================================
   TOP BUTTON
========================================================= */

function setupTopButton(){
  window.addEventListener("scroll",()=>{
    $("topButton").classList.toggle(
      "show",
      window.scrollY > 500
    );
  });

  $("topButton").addEventListener("click",()=>{
    window.scrollTo({top:0,behavior:"smooth"});
  });
}

/* =========================================================
   EVENTS
========================================================= */

function setupEvents(){

  $("searchButton").addEventListener("click",openSearch);
  $("heroSearch").addEventListener("click",openSearch);
  $("ctaSearch").addEventListener("click",openSearch);

  $("closeSearch").addEventListener("click",closeSearch);
  $("doSearch").addEventListener("click",performSearch);

  $("searchInput").addEventListener("input",performSearch);

  $("searchInput").addEventListener("keydown",e=>{
    if(e.key === "Enter") performSearch();
    if(e.key === "Escape") closeSearch();
  });

  $("favoriteHeader").addEventListener("click",()=>{
    document.querySelector("#favorites")
      .scrollIntoView({behavior:"smooth"});
  });

  $("closeDetails").addEventListener("click",closeDetails);
  $("closeWatch").addEventListener("click",closeWatch);

  $("detailsFavorite").addEventListener("click",()=>{
    if(currentAnime) toggleFavorite(currentAnime.id);
  });

  $("detailsPlay").addEventListener("click",()=>{
    if(currentAnime){
      watchEpisode(currentAnime,1,1);
    }
  });

  $("seasonSelect").addEventListener("change",()=>{
    currentSeason = Number($("seasonSelect").value);
    renderEpisodes();
  });

  $("nextEpisode").addEventListener("click",nextEpisode);
  $("previousEpisode").addEventListener("click",previousEpisode);

  $("adminButton").addEventListener("click",openAdmin);

  $("closeAdminLogin").addEventListener("click",closeAdminLogin);
  $("adminLoginButton").addEventListener("click",loginAdmin);

  $("adminPassword").addEventListener("keydown",e=>{
    if(e.key === "Enter") loginAdmin();
  });

  $("closeAdmin").addEventListener("click",closeAdminPanel);
  $("adminLogout").addEventListener("click",logoutAdmin);

  $("animeForm").addEventListener("submit",saveAnimeForm);
  $("cancelEdit").addEventListener("click",resetAnimeForm);

  $("adminSearch").addEventListener("input",renderAdminList);

  $("resetData").addEventListener("click",resetAllData);

  document.querySelectorAll("[data-scroll]").forEach(button=>{
    button.addEventListener("click",()=>{
      const target = document.querySelector(button.dataset.scroll);
      if(target) target.scrollIntoView({behavior:"smooth"});
    });
  });

  document.addEventListener("keydown",e=>{
    if(e.key === "Escape"){
      closeSearch();
      closeAdminLogin();
      closeDetails();
      closeWatch();
    }
  });

  $("adminLoginModal").addEventListener("click",e=>{
    if(e.target === $("adminLoginModal")){
      closeAdminLogin();
    }
  });

  $("searchModal").addEventListener("click",e=>{
    if(e.target === $("searchModal")){
      closeSearch();
    }
  });
}

/* =========================================================
   INIT
========================================================= */

function init(){

  loadAnime();

  setupTheme();
  setupLanguage();
  applyLanguage();

  setupMobile();
  setupGenres();
  setupEvents();
  setupTopButton();

  renderHome();
  updateStats();

  setTimeout(()=>{
    $("loader").classList.add("hide");
  },700);
}

window.addEventListener("load",init);
```
