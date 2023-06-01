
//swiper images 
document.addEventListener("DOMContentLoaded", function() {
  const swiper1 = new Swiper(".swiper-photocards", {
    // Optional parameters
    direction: "horizontal",
    slidesPerView: 1,
    spaceBetween: 0,
  
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  
    breakpoints: {
  
      550: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
  
  
      1024: {
        slidesPerView: 3,
        spaceBetween: 0,
      },
      1350: {
        slidesPerView: 4,
        spaceBetween: 0,
      },
    },
  });})
document.addEventListener("DOMContentLoaded", function() {
  const swiper2 = new Swiper(".swiper-property", {
    // Optional parameters
    direction: "horizontal",
    slidesPerView: 1,
    spaceBetween: 20,
  
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  
    breakpoints: {
  
      550: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
  
  
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1350: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },
  });})
  //swiper logos
  document.addEventListener("DOMContentLoaded", function() {
  const swiper3 = new Swiper(".swiper-brands", {
    // Optional parameters
    direction: "horizontal",
    slidesPerView: 4,
    spaceBetween: 0,
  
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  
    breakpoints: {
  
      550: {
        slidesPerView: 6,
        spaceBetween: 0,
      },
  
  
      1024: {
        slidesPerView: 8,
        spaceBetween: 0,
      },
      1350: {
        slidesPerView: 11,
        spaceBetween: 0,
      },
    },
  });})
  const scroll_top = document.getElementById('scroll_top');
  scroll_top.addEventListener('click', () => {
    $('body,html').animate({scrollTop: 0}, 'fast');
  })
//to pass the active class to the current page
  $(document).ready(function() {
    // Get the current URL
    var currentUrl = window.location.href;
    let currentPath = window.location.pathname;
  
    // Find the nav link element that matches the current URL
    var navLink = $('.nav-item a').filter(function() {
      return this.href === currentUrl;
    });
  
    // Remove the active class from all nav links
    $('.nav-item a').removeClass('active');
  
    // Add the active class to the nav link element that matches the current URL
    navLink.addClass('active');

//to change the theme for footer and nav depend on page


    if (!['/contact2.html', '/index.html','/'].some(path => currentPath.endsWith(path))) { // Check if the current page is not the home page or the contact page
      $('.home_nav').addClass('navbar-scrolled');
      $('.changesrc').attr('src', '../img/Group 151.png'); // Change the image source to 'new-image.jpg'
      $('.log').removeClass('text_primary');
      $('.bi-list').removeClass('text_primary');
    }

    if (!['/contact.html','/contact2.html','/index.html','/'].some(path => currentPath.endsWith(path))) { // Check if the current page is not the home page or the contact page

    $('footer').addClass('section-colors_primary ')

    $('footer a').addClass('text_third ')
    $('.footer_img img').attr('src', '../img/Group 389.png');
    }else{
      $('footer').addClass('bg_primary')
      $('footer a').addClass('text_primary ')

      $('.footer_img img').attr('src', '../img/Group 462.png');
    }


//add the litle tringle under active link

      // Get the active nav link element
      var activeNavLink = $('.nav-item .active');
      
      // Append the .triangle-top class to the active nav link element
      activeNavLink.append('<span class="triangle-top position-absolute d-none d-lg-block" style="top:35px; right:45% " ></span>');

//change the theme on scroll 



 $(window).scroll(function() {
            let scrollDistance = $(window).scrollTop();
            if (scrollDistance >= 500) {       
              $('#scroll_top').removeClass('d-none');
         } else {        
                $('#scroll_top').addClass('d-none');     
               }
    if ([ '/index.html','/'].some(path => currentPath.endsWith(path))) {


      // Show/hide menu on scroll
        if (scrollDistance >= 500) {
          $('.home_nav').addClass('navbar-scrolled');
          $('.changesrc').attr('src', '../img/Group 151.png'); // Change the image source to 'new-image.jpg'
          $('.log').removeClass('text_primary');
          $('.bi-list').removeClass('text_primary');

          } else {
          $('.home_nav').removeClass('navbar-scrolled');
          $('.changesrc').attr('src', '../img/Group 11.png'); // Change the image source back to 'original-image.jpg'
          $('.log').addClass('text_primary');
          $('.bi-list').addClass('text_primary');

        }
        
      }});});
   




const check1 = document.getElementById('check1');

const option11 = document.getElementById('option11');
const check2 = document.getElementById('check2');

const option12 = document.getElementById('option12');
if (check1 && check2 || option11 || option12) {


option11.addEventListener('click', () => {

    check1.classList.add('activecheckbox');
    check2.classList.remove('activecheckbox');

  
});

option12.addEventListener('click', () => {
    check2.classList.add('activecheckbox');
    check1.classList.remove('activecheckbox');

  
});}







// $(document).ready(function() {
//   // When a button is clicked
//   $('.collapsible-content').on('shown.bs.collapse', function() {
//     // Hide all other collapsible content
//     $('.collapsible-content').not(this).collapse('hide');
//   });
// });

$(document).ready(function() {
  // When a button is clicked
  $('.collapsible-btn').click(function() {
    // Toggle the active class on the button
    $(this).toggleClass('activebt');
    // Collapse or expand the associated content
    var content = $(this).next();
    if (content.is(':visible')) {
      content.slideUp('fast');
    } else {
      content.slideDown('fast');
    }
    // Hide all other collapsible content
    $('.collapsible-content').not(content).slideUp('fast');
    // Remove the active class from all other buttons
    $('.collapsible-btn').not(this).removeClass('activebt');
  });
});


