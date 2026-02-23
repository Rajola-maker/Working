document.addEventListener("DOMContentLoaded", () => {

  const navItems = document.querySelectorAll(".nav-item");

  navItems.forEach(item => {
    item.addEventListener("click", () => {
      document.querySelector(".nav-item.active").classList.remove("active");
      item.classList.add("active");

      // unaweza hapa redirect pages later
      console.log("Navigated to:", item.innerText.trim());
    });
  });

  /* MENU CLICK (three lines) */
  const menu = document.querySelector(".menu");
  if(menu){
    menu.addEventListener("click", () => {
      alert("Menu clicked! You can open sidebar later.");
    });
  }

  /* NOTIFICATION CLICK */
  const notification = document.querySelector(".bx-bell");
  if(notification){
    notification.addEventListener("click", () => {
      alert("Notifications opened (dummy). You can code page later.");
    });
  }

  /* DOTS MENU CLICK */
  const dots = document.querySelector(".bx-dots-horizontal-rounded");
  if(dots){
    dots.addEventListener("click", () => {
      alert("More options (dummy).");
    });
  }

  /* IMAGE SLIDER AUTO SLIDE */
  let currentIndex = 0;
  const slides = document.getElementById("slides");

  if(slides){
    setInterval(() => {
      const total = slides.children.length;

      if(total > 0){
        currentIndex++;
        if(currentIndex >= total){
          currentIndex = 0;
        }

        slides.style.transform = `translateX(-${currentIndex * 100}%)`;
      }
    }, 3000);
  }
  const chatBtn = document.getElementById("chatBtn");

if(chatBtn){
  chatBtn.addEventListener("click", () => {
    window.location.href = "chat.html";
  });
}
  document.addEventListener("DOMContentLoaded", () => {

  const homeNav = document.getElementById("homeNav");
  const gamesNav = document.getElementById("gamesNav");
  const tournamentsNav = document.getElementById("tournamentsNav");
  const chatNav = document.getElementById("chatNav");

  // HOME → stays here
  if(homeNav){
    homeNav.addEventListener("click", () => {
      window.location.href = "index.html";
    });
  }

  // GAMES
  if(gamesNav){
    gamesNav.addEventListener("click", () => {
      window.location.href = "games.html";
    });
  }

  // TOURNAMENTS
  if(tournamentsNav){
    tournamentsNav.addEventListener("click", () => {
      window.location.href = "tournaments.html";
    });
  }

  // CHAT
  if(chatNav){
    chatNav.addEventListener("click", () => {
      window.location.href = "chat.html";
    });
  }
// SLIDER
let currentIndex = 0;
const slides = document.getElementById("slides");

setInterval(() => {
  const total = slides.children.length;

  if(total > 0){
    currentIndex++;
    if(currentIndex >= total){
      currentIndex = 0;
    }

    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
  }
}, 3000);

// BUTTON ACTIONS (open pages)
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

// NAVIGATION
document.getElementById("homeNav").onclick = function(){
  window.location.href = "./home.html";
};

document.getElementById("gamesNav").onclick = function(){
  window.location.href = "./games.html";
};

document.getElementById("chatNav").onclick = function(){
  window.location.href = "./chats.html";
};
});

});
