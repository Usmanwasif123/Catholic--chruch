let navbar = document.querySelector('.header .navbar');
let searchForm = document.querySelector('.header .search-form');
let loginForm = document.querySelector('.header .login-form');
let contactInfo = document.querySelector('.contact-info');


document.addEventListener('DOMContentLoaded', function () {
   const menuToggle = document.getElementById('menu-toggle');
   const navbar = document.querySelector('.navbar');

   menuToggle.addEventListener('click', function () {
       navbar.classList.toggle('active');
   });
});

document.querySelector('#close-contact-info').onclick = () =>{
   contactInfo.classList.remove('active');
}

window.onscroll = () =>{
   navbar.classList.remove('active');
   searchForm.classList.remove('active');
   loginForm.classList.remove('active');
   contactInfo.classList.remove('active');
}


var swiper = new Swiper(".events-slider", {
   loop: true,
   grabCursor: true,
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },
   breakpoints: {
      640: {
        slidesPerView: 1,   
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
      1200: {
         slidesPerView: 4,
      }
   },
});


// Play/pause functionality
document.querySelectorAll('.play-pause-button').forEach(function (button, index) {
   const video = button.previousElementSibling; // Get the corresponding video element

   button.addEventListener('click', function () {
       if (video.paused) {
           // Pause all other videos
           document.querySelectorAll('.right-video').forEach(function (vid) {
               if (vid !== video) {
                   vid.pause();
                   vid.nextElementSibling.classList.remove('playing');
               }
           });

           video.play();
           button.classList.add('playing'); // Optional: add a class for styling the playing state
       } else {
           video.pause();
           button.classList.remove('playing'); // Optional: remove the class for styling the playing state
       }
   });
});
