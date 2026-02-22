document.addEventListener("DOMContentLoaded", () => {

  /* BOTTOM NAV ACTIVE */
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

});
