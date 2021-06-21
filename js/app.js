$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".menubar").addClass("skictys");
    } else {
      $(".menubar").removeClass("skictys");
    }
  });
  // scroll-up
  $(window).scroll(function () {
    if (this.scrollY > 100) {
      $(".sroll-up-btn").addClass("active-scroll");
    } else {
      $(".sroll-up-btn").removeClass("active-scroll");
    }
  });
  // scroll btn top action
  $(".sroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
  });
  // toggle menu

  $(".menu-respon-bar").click(function () {
    $(".logo-menu .primary-menu").toggleClass("active");
    $(".menu-respon-bar i").toggleClass("active");
  });
  // typing animation
  var typed = new Typed(".typing", {
    strings: [
      "Freelancer",
      "Web Designer",
      "Digital Marketer",
      "Developer",
      "Youtuber",
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });
  var typed = new Typed(".typing-2", {
    strings: [
      "Freelancer",
      "Web Designer",
      "Digital Marketer",
      "Developer",
      "Youtuber",
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });
  // owl-carousel Script
  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });
});
