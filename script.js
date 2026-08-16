/* LOADER */

window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("loader").classList.add("hide");
  }, 1200);
});


/* MOBILE MENU */

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("open");

  menuBtn.textContent =
    navMenu.classList.contains("open")
      ? "✕"
      : "☰";
});


/* SEARCH */

const searchBtn = document.getElementById("searchBtn");
const searchPanel = document.getElementById("searchPanel");
const closeSearch = document.getElementById("closeSearch");
const searchInput = document.getElementById("searchInput");

searchBtn.addEventListener("click", () => {
  searchPanel.classList.add("show");
  searchInput.focus();
});

closeSearch.addEventListener("click", () => {
  searchPanel.classList.remove("show");
  searchInput.value = "";
  showAllAnime();
});


searchInput.addEventListener("input", () => {

  const query = searchInput.value.toLowerCase().trim();

  const cards = document.querySelectorAll(".anime-card");

  cards.forEach(card => {

    const name =
      card.dataset.name.toLowerCase();

    if (name.includes(query)) {
      card.style.display = "";
    } else {
      card.style.display = "none";
    }

  });

});


function showAllAnime() {

  document.querySelectorAll(".anime-card")
    .forEach(card => {
      card.style.display = "";
    });

}


/* ANIME BUTTON */

function showAnime(name) {

  alert(
    "🎬 " + name +
    "\n\nAnime details page coming soon! 🔥"
  );

}


/* THEME */

const themeBtn =
  document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

  document.body.classList.toggle("light");

  themeBtn.textContent =
    document.body.classList.contains("light")
      ? "🌙"
      : "☀️";

});


/* BACK TO TOP */

const topBtn =
  document.getElementById("topBtn");

window.addEventListener("scroll", () => {

  if (window.scrollY > 500) {
    topBtn.classList.add("show");
  } else {
    topBtn.classList.remove("show");
  }

});


topBtn.addEventListener("click", () => {

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

});


/* CLOSE MOBILE MENU */

document.querySelectorAll("#navMenu a")
  .forEach(link => {

    link.addEventListener("click", () => {
      navMenu.classList.remove("open");
      menuBtn.textContent = "☰";
    });

  });
