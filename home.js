document.addEventListener("DOMContentLoaded", () => {

  /* ================= NAVIGATION ================= */

  const homeNav = document.getElementById("homeNav");
  const gamesNav = document.getElementById("gamesNav");
  const chatNav = document.getElementById("chatNav");
  const tournamentsNav = document.getElementById("tournamentsNav");
  const accountNav = document.getElementById("accountNav");

  if(homeNav){
    homeNav.addEventListener("click", () => {
      window.location.href = "./home.html";
    });
  }

  if(gamesNav){
    gamesNav.addEventListener("click", () => {
      window.location.href = "./games.html";
    });
  }

  if(chatNav){
    chatNav.addEventListener("click", () => {
      window.location.href = "./chat.html";
    });
  }

  if(tournamentsNav){
    tournamentsNav.addEventListener("click", () => {
      window.location.href = "./tournaments.html";
    });
  }

  if(accountNav){
    accountNav.addEventListener("click", () => {
      window.location.href = "./account.html";
    });
  }

  /* ================= SLIDER ================= */

  const slides = document.getElementById("slides");
  let currentIndex = 0;

  if(slides){
    setInterval(() => {
      const total = slides.children.length;

      if(total > 0){
        currentIndex++;
        if(currentIndex >= total){
          currentIndex = 0;
        }

        slides.style.transform =
          `translateX(-${currentIndex * 100}%)`;
      }
    }, 3000);
  }

  /* ================= MENU ================= */

  const menu = document.querySelector(".menu");
  if(menu){
    menu.addEventListener("click", () => {
      alert("Menu clicked!");
    });
  }

  const notification = document.querySelector(".bx-bell");
  if(notification){
    notification.addEventListener("click", () => {
      alert("Notifications opened.");
    });
  }

  const dots = document.querySelector(".bx-dots-horizontal-rounded");
  if(dots){
    dots.addEventListener("click", () => {
      alert("More options.");
    });
  }

});

/* ================= BUTTON PAGES ================= */

function openUpdates(){
  window.location.href = "./updates.html";
}

function openStore(){
  window.location.href = "./store.html";
}

function openMoney(){
  window.location.href = "./money.html";
}

function goTournaments(){
  window.location.href = "./tournaments.html";
}
