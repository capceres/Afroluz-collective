var multipleCardCarousel = document.querySelector(
    "#carouselExampleControls"
  );
  if (window.matchMedia("(min-width: 768px)").matches) {
    var carousel = new bootstrap.Carousel(multipleCardCarousel, {
      interval: false, wrap: false,
    });
    var carouselWidth = $(".carousel-inner")[0].scrollWidth;
    var cardWidth = $(".carousel-item").width();
    var scrollPosition = 0;
    $("#carouselExampleControls .carousel-control-next").on("click", function () {
      if (scrollPosition < carouselWidth - cardWidth * 4) {
        scrollPosition += cardWidth;
        $("#carouselExampleControls .carousel-inner").animate(
          { scrollLeft: scrollPosition },
          600
        );
      }
    });
    $("#carouselExampleControls .carousel-control-prev").on("click", function () {
      if (scrollPosition > 0) {
        scrollPosition -= cardWidth;
        $("#carouselExampleControls .carousel-inner").animate(
          { scrollLeft: scrollPosition },
          600
        );
      }
    });
  } else {
    $(multipleCardCarousel).addClass("slide");
  }







// carrusel multi-slide

//   window.addEventListener('DOMContentLoaded', (event) => {

//     let carouselWidth = document.querySelector('.carousel-inner').offsetWidth;
//     let cardWidth = document.querySelector('.carousel-item').offsetWidth;
//     let scrollPosition = 0;
//     let controlNext = document.querySelector('.carousel-control-next');
//     let controlPrev = document.querySelector('.carousel-control-prev');
//     let carouselInner = document.querySelector('.carousel-inner')
    
//     controlNext.addEventListener("click", function() {
//         if (scrollPosition > 0) {
//             scrollPosition -= cardWidth;
//             carouselInner.scroll({ left: scrollPosition, behavior: 'smooth' })
//         }
//       })
    

//   }
  





// window.addEventListener('DOMContentLoaded', (event) => {
//     let multipleCardCarousel = document.querySelector("#carouselExampleControls");
//     if (window.matchMedia("(min-width: 768px)").matches) {
//         let carousel = new bootstrap.Carousel(multipleCardCarousel, { interval: false, wrap: false, });
//         let carouselWidth = document.querySelector(".carousel-inner").scrollWidth;
//         let cardWidth = document.querySelector(".carousel-item").offsetWidth;
//         let scrollPosition = 0;

//         document.querySelector("#carouselExampleControls .carousel-control-next").addEventListener("click", function () {
//             if (scrollPosition < carouselWidth - cardWidth * 4) {
//                 scrollPosition += cardWidth;
//                 document.querySelector("#carouselExampleControls .carousel-inner").scroll({ left: scrollPosition, behavior: 'smooth' });
//             }
//         });

//         document.querySelector("#carouselExampleControls .carousel-control-prev").addEventListener("click", function () {
//             if (scrollPosition > 0) {
//                 scrollPosition -= cardWidth;
//                 document.querySelector("#carouselExampleControls .carousel-inner").scroll({ left: scrollPosition, behavior: 'smooth' });
//             }
//         });
//     } else {
//         multipleCardCarousel.classList.add("slide");
//     }
// });







// window.addEventListener('DOMContentLoaded', (event) => {
//     let multipleCardCarousel = document.querySelector("#carouselExampleControls");
//     if (window.matchMedia("(min-width: 768px)").matches) {
//         let carousel = new bootstrap.Carousel(multipleCardCarousel, { interval: false, wrap: false, });
//         let carouselWidth = document.querySelector(".carousel-inner").scrollWidth;
//         let cardWidth = document.querySelector(".carousel-item").offsetWidth;
//         let scrollPosition = 0;

//         document.querySelector("#carouselExampleControls .carousel-control-next").addEventListener("click", function () {
//             if (scrollPosition < carouselWidth - cardWidth * 4) {
//                 scrollPosition += cardWidth;
//                 document.querySelector("#carouselExampleControls .carousel-inner").scroll({ left: scrollPosition, behavior: 'smooth' });
//             }
//         });

//         document.querySelector("#carouselExampleControls .carousel-control-prev").addEventListener("click", function () {
//             if (scrollPosition > 0) {
//                 scrollPosition -= cardWidth;
//                 document.querySelector("#carouselExampleControls .carousel-inner").scroll({ left: scrollPosition, behavior: 'smooth' });
//             }
//         });
//     } else {
//         multipleCardCarousel.classList.add("slide");
//     }
// });