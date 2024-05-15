//Slider swiper sign up

var swiper = new Swiper(".sign-up-slider", {
    pagination: {
      el: ".swiper-pagination",
    },
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
      },
    },
  });


  //Dashboard site menu




  //notification toggle
  $(document).ready(function() {
    $(".notification-drop .item").on('click',function() {
      $(this).find('ul').toggle();
    });
  });
  


  //dark mode light mode

  // const body = document.querySelector("body"),
  //       sidebar = body.querySelector(".sidebar"),
  //       modeSwitch = body.querySelector(".toggle-switch"),
  //       modeText = body.querySelector(".mode-text");

  //       // toggle.addEventListener("click", () => {
  //       //   body.classList.toggle("dark");
  //       // });

  //       modeSwitch.addEventListener("click", () => {
  //         body.classList.toggle("dark");
  //       });



  let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".sidebarBtn");
sidebarBtn.onclick = function() {
  sidebar.classList.toggle("active");
  if(sidebar.classList.contains("active")){
  sidebarBtn.classList.replace("bx-menu" ,"bx-menu-alt-right");
}else
  sidebarBtn.classList.replace("bx-menu-alt-right", "bx-menu");
}
