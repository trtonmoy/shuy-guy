(function ($) {
  "use strict";

  $(function () {
    //Data Background Set
    $('[data-background]').each(function () {
      $(this).css('background-image', 'url(' + $(this).attr('data-background') + ')');
    }); //dropdown menu hover js

    $("ul.nav li.dropdown").hover(function () {
      $(this).find(".dropdown-menu").stop(true, true).delay(100).fadeIn(200);
    }, function () {
      $(this).find(".dropdown-menu").stop(true, true).delay(100).fadeOut(200);
    }); //sticky header

    $(window).on("scroll", function () {
      var scroll = $(window).scrollTop();

      if (scroll < 2) {
        $("nav.sticky-header").removeClass("affix");
      } else {
        $("nav.sticky-header").addClass("affix");
      }
    }); //light dark mood switcher

    var themeType = 'theme_type';
    var themeDark = 'dark-bg';
    var themeLight = 'light-bg'; // default theme set the dark-bg

    var themeTypeVal = getItem(themeType);

    if (!themeTypeVal) {
      setItem(themeType, themeDark);
    } // load the set Theme color to the new page


    function loadDefaultThemeType() {
      var themeTypeVal = getItem(themeType);

      if (themeTypeVal == themeDark) {
        $("body").removeClass("light-bg");
        $("body").addClass("dark-bg");
        $(".sun").removeClass("d-none");
        $(".moon").addClass("d-none");
      } else {
        $("body").removeClass("dark-bg");
        $("body").addClass("light-bg");
        $(".moon").removeClass("d-none");
        $(".sun").addClass("d-none");
      }
    }

    loadDefaultThemeType(); // when click to switch the theme color

    if ($(".switch").length) {
      $(".switch").on("click", function () {
        var themeTypeVal = getItem(themeType);

        if (themeTypeVal == themeDark) {
          $(".moon").removeClass("d-none");
          $(".sun").addClass("d-none");
          $("body").removeClass("dark-bg");
          $("body").addClass("light-bg");
          setItem(themeType, themeLight);
        } else {
          $(".sun").removeClass("d-none");
          $(".moon").addClass("d-none");
          $("body").removeClass("light-bg");
          $("body").addClass("dark-bg");
          setItem(themeType, themeDark);
        }
      });
    } //Mobile Menu 


    $(".mobile-menu-toggle").on("click", function () {
      $(".nft-mobile-menu").toggleClass("mobile-menu-active");
      $(this).toggleClass("active");
    });
    $(".nft-mobile-menu ul li.has-submenu a").each(function () {
      $(this).on("click", function () {
        $(this).siblings('ul').slideToggle();
      });
    }); //CounterUp 

    $('.counter').counterUp({
      delay: 10,
      time: 1500
    }); //Hero Slider 

    $(".hero-slider").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: true,
      responsive: [{
        breakpoint: 992,
        settings: {
          slidesToShow: 2
        }
      }, {
        breakpoint: 576,
        settings: {
          slidesToShow: 1
        }
      }]
    }); //ScrollTop

    $(".scroll-top-btn").on("click", function () {
      $("body,html").animate({
        scrollTop: 0
      });
    }); //Mixit Up Filter

    var containerEl = document.querySelector("#MixItUp");

    if (typeof containerEl != 'undefined' && containerEl != null) {
      var mixer = mixitup(containerEl, {
        selectors: {
          control: '[data-mixitup-control]'
        },
        animation: {
          effects: "fade translateZ(-100px)"
        }
      });
    }
    /***** HC Slider ****/


    $(".nft2-hc-slider").slick({
      slidesToShow: 1,
      prevArrow: '<button class="prev-arrow"><i class="fa-solid fa-arrow-left"></i></button>',
      nextArrow: '<button class="next-arrow"><i class="fa-solid fa-arrow-right"></i></button>'
    });
    /*********** Countdown Timer  *********/

    var countDownTimer = $(".downcount-timer").each(function () {
      var date = $(this).attr("data-date");
      $(this).countdown({
        date: date
      });
    });
    /*******  User Slider  **********/

    $(".nft3-user-slider").slick({
      slidesToShow: 4,
      slidesToScroll: 4,
      speed: 300,
      infinite: false,
      arrows: false,
      dots: true,
      responsive: [{
        breakpoint: 992,
        settings: {
          slidesToShow: 3
        }
      }, {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      }, {
        breakpoint: 460,
        settings: {
          slidesToShow: 1
        }
      }]
    }); //Nice Select

    $('select:not(.not)').niceSelect(); //Feedback Slider

    $(".nft3-feedback-slider").slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      prevArrow: '<button class="slick-arrow slick-prev"><i class="fa-solid fa-arrow-left"></i></button>',
      nextArrow: '<button class="slick-arrow slick-next"><i class="fa-solid fa-arrow-right"></i></button>',
      responsive: [{
        breakpoint: 1200,
        settings: {
          slidesToShow: 2
        }
      }, {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }]
    }); //File Upload

    $(".nft1-file-browse").on("click", function () {
      $(".nft1-file-collect").trigger("click");
    });
    $(".nft1-file-collect").on("change", function () {
      var $fileName = this.files[0].name;
      $(".nft1-file-location").text($fileName);
    }); //Auction Slider 

    $(".nft1-ac-slide-wrapper").slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      dots: true,
      arrows: false,
      responsive: [{
        breakpoint: 1400,
        settings: {
          slidesToShow: 3
        }
      }, {
        breakpoint: 992,
        settings: {
          slidesToShow: 2
        }
      }, {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }]
    }); //Collection Slider 

    $(".similar-collection-slider").slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      dots: true,
      arrows: false,
      responsive: [{
        breakpoint: 1400,
        settings: {
          slidesToShow: 3
        }
      }, {
        breakpoint: 992,
        settings: {
          slidesToShow: 2
        }
      }, {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }]
    }); //Sidebar Toggle 

    $(".ex-sidebar-widget .sidebar-title span").on("click", function () {
      $(this).parentsUntil(".ex-sidebar-widget").siblings().slideToggle();
    }); //Blog Feature Slider 

    $(".blog-feature-slider").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: '<button type="button" class="slick-prev"><i class="fa-solid fa-arrow-left"></i></button>',
      nextArrow: '<button type="button" class="slick-next"><i class="fa-solid fa-arrow-right"></i></button>'
    }); //blog video popup 

    $('.blog-video-popup').magnificPopup({
      type: 'iframe'
    }); //blog video popup 

    $('.popup-video').magnificPopup({
      type: 'iframe'
    });
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl);
    }); //np team slider 

    $(".np-team-slider").slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      arrows: false,
      responsive: [{
        breakpoint: 992,
        settings: {
          slidesToShow: 3
        }
      }, {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      }, {
        breakpoint: 576,
        settings: {
          slidesToShow: 1
        }
      }]
    }); //np feedback slider 

    $(".np-feedback-slider").slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      arrows: false,
      responsive: [{
        breakpoint: 1400,
        settings: {
          slidesToShow: 2
        }
      }, {
        breakpoint: 992,
        settings: {
          slidesToShow: 1
        }
      }]
    }); //artwork home trending nft slider

    $(".at-trending-slider").slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      prevArrow: '<button class="prev-btn"><i class="fa-solid fa-arrow-left"></i></button>',
      nextArrow: '<button class="next-btn"><i class="fa-solid fa-arrow-right"></i></button>',
      responsive: [{
        breakpoint: 1400,
        settings: {
          slidesToShow: 3
        }
      }, {
        breakpoint: 992,
        settings: {
          slidesToShow: 2
        }
      }, {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }]
    });
    $(".crypto-team-slider").slick({
      slidesToShow: 4,
      slidesToScroll: 2,
      arrows: false,
      dots: true,
      responsive: [{
        breakpoint: 1200,
        settings: {
          slidesToShow: 3
        }
      }, {
        breakpoint: 992,
        settings: {
          slidesToShow: 2
        }
      }, {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }]
    }); //section dropdown

    var sectionDropdown = $(".artwork-section-dropdown");
    sectionDropdown.each(function () {
      var targetInput = $(this).children('input[type="hidden"]');
      var targetButton = $(this).children(".section-select-btn");
      var target_key_words = $(this).find("ul.dropdown-menu li");
      target_key_words.each(function () {
        $(this).on("click", function () {
          var targeted_text = $(this).text();
          targetInput.val(targeted_text);
          targetButton.find("h3").text(targeted_text);
        });
      });
    });
  });
  $(window).on("scroll", function () {
    var scrollBar = $(this).scrollTop();

    if (scrollBar > 200) {
      $(".scroll-top-btn").fadeIn();
    } else {
      $(".scroll-top-btn").fadeOut();
    } //Sticky Header 


    if (scrollBar > 200) {
      $(".header-sticky").addClass("sticky-header");
    } else {
      $(".header-sticky").removeClass("sticky-header");
    }
  });
  jQuery(window).on('load', function () {
    // WOW JS
    new WOW().init(); //Preloader 

    $(".preload-wrapper").fadeOut(); //ScrollBar 

    $(".hero-item-slider").mCustomScrollbar();
  });

  function getItem(name) {
    if (window.localStorage !== undefined) {
      return localStorage.getItem(name);
    } else {
      return null;
    }
  }

  function setItem(name, value) {
    if (window.localStorage !== undefined) {
      return localStorage.setItem(name, value);
    } else {
      return null;
    }
  }
})(jQuery);