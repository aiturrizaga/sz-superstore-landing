$(document).ready(() => {
  $("#homeCarouselXl").owlCarousel({
    loop: false,
    stagePadding: 0,
    margin: 20,
    nav: true,
    dots: false,
    navText: [
      '<span class="fas fa-chevron-left fa-2x"></span>',
      '<span class="fas fa-chevron-right fa-2x"></span>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      300: {
        items: 1,
      },
      640: {
        items: 1,
      },
      700: {
        items: 2,
      },
      960: {
        items: 2,
      },
      1200: {
        items: 2,
      },
    },
  });
});

$(document).ready(() => {
  $("#homeCarouselSm").owlCarousel({
    loop: false,
    stagePadding: 15,
    margin: 10,
    nav: true,
    dots: false,
    navText: ["", ""],
    responsive: {
      0: {
        items: 1,
      },
      300: {
        items: 1,
      },
      640: {
        items: 1,
      },
      700: {
        items: 2,
      },
      960: {
        items: 2,
      },
      1200: {
        items: 2,
      },
    },
  });
});
