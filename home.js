document.addEventListener("DOMContentLoaded", () => {

  // ===== NAVIGATION =====
  const pages = {
    homeNav: "index.html",
    gamesNav: "games.html",
    tournamentsNav: "tournaments.html",
    chatNav: "chat.html",
    accountNav: "account.html"
  };

  Object.keys(pages).forEach(id => {
    const element = document.getElementById(id);
    if(element){
      element.addEventListener("click", () => {
        window.location.href = pages[id];
      });
    }
  });

  // ===== MENU BUTTON (Three Lines) =====
  const menuBtn = document.getElementById("menuBtn");
  if(menuBtn){
    menuBtn.addEventListener("click", () => {
      alert("Sidebar menu will open here 🔥");
    });
  }

  // ===== NOTIFICATION =====
  const notificationBtn = document.getElementById("notificationBtn");
  if(notificationBtn){
    notificationBtn.addEventListener("click", () => {
      alert("No new notifications 🔔");
    });
  }

  // ===== THREE DOTS =====
  const dotsBtn = document.getElementById("dotsBtn");
  if(dotsBtn){
    dotsBtn.addEventListener("click", () => {
      alert("More options menu ⚙️");
    });
  }

  // ===== IMAGE SLIDER =====
  let currentIndex = 0;
  const slides = document.getElementById("slides");

  if(slides){
    setInterval(() => {
      const total = slides.children.length;
      currentIndex = (currentIndex + 1) % total;
      slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    }, 3000);
  }

});
