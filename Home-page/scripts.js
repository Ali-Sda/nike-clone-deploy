// dropdown.js

// document.addEventListener('DOMContentLoaded', function() {
//     // Get all dropdown trigger elements
//     const dropdownTriggers = document.querySelectorAll('.relative');

//     // Loop through each dropdown trigger
//     dropdownTriggers.forEach(function(dropdownTrigger) {
//         // Get the dropdown menu associated with this trigger
//         const dropdownMenu = dropdownTrigger.querySelector('.absolute');

//         // Show the dropdown menu when hovering over the trigger
//         dropdownTrigger.addEventListener('mouseenter', function() {
//             dropdownMenu.classList.remove('hidden');
//         });

//         // Hide the dropdown menu when mouse leaves the trigger
//         dropdownTrigger.addEventListener('mouseleave', function() {
//             dropdownMenu.classList.add('hidden');
//         });
//     });
// });

document.addEventListener('DOMContentLoaded', function () {
    // Example: Smooth scroll behavior
    const scrollContainer = document.getElementById('scrollContainer');
    scrollContainer.addEventListener('wheel', function (event) {
        if (event.deltaY !== 0) {
            event.preventDefault();
            scrollContainer.scrollLeft += event.deltaY;
        }
    });
});





// test 
document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.hs-carousel');
    const carouselBody = carousel.querySelector('.hs-carousel-body');
    const slides = carouselBody.querySelectorAll('.hs-carousel-slide');
    const pagination = document.querySelectorAll('.hs-carousel-pagination span');
    const slideCount = slides.length;
    let currentIndex = 0;
  
    function updateCarousel() {
      const offset = currentIndex * -100;
      carouselBody.style.transform = `translateX(${offset}%)`;
      carouselBody.style.opacity = '1';
  
      pagination.forEach((indicator, index) => {
        if (index === currentIndex) {
          indicator.classList.add('hs-carousel-active');
        } else {
          indicator.classList.remove('hs-carousel-active');
        }
      });
    }
  
    function goToSlide(index) {
      if (index < 0) {
        currentIndex = slideCount - 1;
      } else if (index >= slideCount) {
        currentIndex = 0;
      } else {
        currentIndex = index;
      }
      updateCarousel();
    }
  
    pagination.forEach((indicator, index) => {
      indicator.addEventListener('click', () => goToSlide(index));
    });
  
    // Optional: auto-play functionality
    setInterval(() => {
      goToSlide(currentIndex + 1);
    }, 5000); // Change slide every 5 seconds
  
    updateCarousel(); // Initialize the carousel
  });
  