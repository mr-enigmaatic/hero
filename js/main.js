const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed: 1500,
    

    // autoplay: {
    //     delay:3000,
    // },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

  // Mobile menu
 let mobileMenuIcon = document.querySelector("header .fa-bars");
 let menu = document.querySelector("header .menu");

 mobileMenuIcon.addEventListener('click', function() {
  menu.classList.toggle("open");
 })
