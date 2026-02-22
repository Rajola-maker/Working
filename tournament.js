function openBoard(game){
  document.getElementById("leaderboard").classList.remove("hidden");
  document.getElementById("gameTitle").innerText = game.toUpperCase() + " Leaderboard";

  // example dynamic data
  document.querySelector(".section:nth-child(2) p").innerText = "Fixtures coming soon";
  document.querySelector(".section:nth-child(3) p").innerText = "15 users online";
  document.querySelector(".section:nth-child(4) p").innerText = "Rank: #7";
}

function closeBoard(){
  document.getElementById("leaderboard").classList.add("hidden");
}

function searchTournaments(){
  const input = document.getElementById("tournamentSearch").value.toLowerCase();
  const items = document.querySelectorAll(".chat-item");

  items.forEach(item=>{
    const text = item.innerText.toLowerCase();
    item.style.display = text.includes(input) ? "flex" : "none";
  });
}

function goHome(){ window.location.href = "home.html"; }
function goGames(){ window.location.href = "games.html"; }
function goChats(){ window.location.href = "chats.html"; }
function goAccount(){ window.location.href = "account.html"; }
