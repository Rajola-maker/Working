document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     🔥 NAVIGATION SYSTEM
  ========================== */

  const homeNav = document.getElementById("homeNav");
  const gamesNav = document.getElementById("gamesNav");
  const tournamentsNav = document.getElementById("tournamentsNav");
  const chatNav = document.getElementById("chatNav");
  const accountNav = document.getElementById("accountNav");

  if(homeNav){
    homeNav.addEventListener("click", () => {
      window.location.href = "index.html";
    });
  }

  if(gamesNav){
    gamesNav.addEventListener("click", () => {
      window.location.href = "games.html";
    });
  }

  if(tournamentsNav){
    tournamentsNav.addEventListener("click", () => {
      window.location.href = "tournaments.html";
    });
  }

  if(accountNav){
    accountNav.addEventListener("click", () => {
      window.location.href = "account.html";
    });
  }

  /* 🚫 CHAT NOT READY YET */
  if(chatNav){
    chatNav.addEventListener("click", () => {
      alert("Chat page not ready yet 🚧");
    });
  }


  /* =========================
     🔥 BACK ARROW
  ========================== */

  const backBtn = document.getElementById("backBtn");

  if(backBtn){
    backBtn.addEventListener("click", () => {
      window.location.href = "index.html";
    });
  }


  /* =========================
     🔔 NOTIFICATION
  ========================== */

  const notificationIcon = document.querySelector(".bx-bell");

  if(notificationIcon){
    notificationIcon.addEventListener("click", () => {
      alert("🔔 You have no new notifications.");
    });
  }


  /* =========================
     ⋮ THREE DOTS MENU
  ========================== */

  const dotsIcon = document.querySelector(".bx-dots-horizontal-rounded");

  if(dotsIcon){
    dotsIcon.addEventListener("click", () => {
      alert("⚙️ More options coming soon.");
    });
  }


  /* =========================
     🎮 OPEN GAME PAGES
  ========================== */

  const items = document.querySelectorAll(".chat-item");

  items.forEach(item => {
    item.addEventListener("click", () => {
      const page = item.getAttribute("data-page");
      window.location.href = page;
    });
  });


  /* =========================
     🔍 SEARCH
  ========================== */

  const searchInput = document.getElementById("tournamentSearch");

  if(searchInput){
    searchInput.addEventListener("keyup", () => {
      const value = searchInput.value.toLowerCase();

      items.forEach(item => {
        const text = item.innerText.toLowerCase();
        item.style.display = text.includes(value) ? "flex" : "none";
      });
    });
  }

});
