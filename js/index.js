hamburger = document.querySelector(".hamburger");
hamburger.onclick = function() {
  navBar = document.querySelector(".nav-bar");
  navBar.classList.toggle("active");
}


var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

$(document).ready(function () {
  function initializeLightSlider() {
    $(".latest").lightSlider({
      autoWidth: true,
      onSliderLoad: function () {
        $(".latest");
      },
    });
  }
  initializeLightSlider();
});


