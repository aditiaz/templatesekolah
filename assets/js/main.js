$(document).ready(function () {
  $("#hero-area-slider").owlCarousel({
    loop: true,
    nav: true,
    items: 1,
    dots: false,
    navText: ["<i class='fas fa-angle-left'><i>", "<i class='fas fa-angle-right'><i>"],
    navContainer: "#slider-hero-nav",
  });
});

$("#tenaga-pendidik-slider").owlCarousel({
  loop: true,
  nav: true,
  items: 3,
  dots: false,
  margin: 20,
  navText: ["<i class='fas fa-angle-left'><i>", "<i class='fas fa-angle-right'><i>"],
  navContainer: "#slider-tools-1",
});
$("#alumni-slider").owlCarousel({
  loop: true,
  nav: true,
  items: 2,
  dots: false,
  margin: 20,
  navText: ["<i class='fas fa-angle-left'><i>", "<i class='fas fa-angle-right'><i>"],
  navContainer: "#slider-tools-2",
});
$("#galeri-slider").owlCarousel({
  loop: true,
  nav: true,
  items: 3,
  dots: false,
  margin: 20,
  navText: ["<i class='fas fa-angle-left'><i>", "<i class='fas fa-angle-right'><i>"],
  navContainer: "#slider-tools-3",
});


$('#pagination-demo').twbsPagination({
  totalPages: 16,
  visiblePages: 6,
  next: 'Next',
  prev: 'Prev',
  onPageClick: function (event, page) {
      //fetch content and render here
      $('#page-content').text('Page ' + page) + ' content here';
  }
});