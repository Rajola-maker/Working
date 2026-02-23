document.addEventListener("DOMContentLoaded", function() {

  function go(page){
    window.location.href = page;
  }

  // NAVIGATION
  document.getElementById("homeNav").onclick = () => go("index.html");
  document.getElementById("gamesNav").onclick = () => go("games.html");
  document.getElementById("tournamentsNav").onclick = () => go("tournaments.html");
  document.getElementById("accountNav").onclick = () => go("account.html");

  document.getElementById("chatNav").onclick = () => {
    alert("Chat page not ready yet 🚧");
  };

  // BACK ARROW
  document.getElementById("backBtn").onclick = () => go("index.html");

  // NOTIFICATION
  document.getElementById("notificationBtn").onclick = () => {
    alert("🔔 No new notifications.");
  };

  // THREE DOTS
  document.getElementById("dotsBtn").onclick = () => {
    alert("⚙️ More options coming soon.");
  };

  // OPEN GAME PAGES
  const items = document.querySelectorAll(".chat-item");

  items.forEach(item => {
    item.addEventListener("click", () => {
      const page = item.getAttribute("data-page");
      go(page);
    });
  });

});
