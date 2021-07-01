// Burger
const navSlide = () => {
  const burger = document.querySelector(".burger");
  const navElement = document.getElementById("nav-toggle");

  burger.addEventListener("click", () => {
    // Burger animation
    burger.classList.toggle("burger-toggle");
    navElement.classList.toggle("toggle");
  });
};

navSlide();

// When nav dropped down, close nav drop down and perform burger animation when clicking outside of area.
const closeNav = () => {
  document.addEventListener("click", (e) => {
    const burger = document.querySelector(".burger");
    const navElement = document.getElementById("nav-toggle");
    const headerElement = document.getElementById("header");
    let targetElement = e.target; // clicked element
    do {
      if (targetElement == headerElement) {
        // Click inside. Don't do anything.
        return;
      }
      // Go up the DOM
      targetElement = targetElement.parentNode;
    } while (targetElement);
    // Click outside.
    if (burger.classList.contains("burger-toggle")) {
      burger.classList.remove("burger-toggle");
      navElement.classList.remove("toggle");
    }
  });
};

closeNav();

//jQuery plugin to check within elements are within the visible viewport.
//Using this to know when to apply animation.
(function ($) {
  /**
   * Copyright 2012, Digital Fusion
   * Licensed under the MIT license.
   * http://teamdf.com/jquery-plugins/license/
   *
   * @author Sam Sehnert
   * @desc A small plugin that checks whether elements are within
   *     the user visible viewport of a web browser.
   *     only accounts for vertical position, not horizontal.
   */

  $.fn.visible = function (partial) {
    var $t = $(this),
      $w = $(window),
      viewTop = $w.scrollTop(),
      viewBottom = viewTop + $w.height(),
      _top = $t.offset().top,
      _bottom = _top + $t.height(),
      compareTop = partial === true ? _bottom : _top,
      compareBottom = partial === true ? _top : _bottom;

    return compareBottom <= viewBottom && compareTop >= viewTop;
  };
})(jQuery);

//Elements already visible. Don't trigger animation
var win = $(window);
var allMods = $(".module");

// Already visible modules
allMods.each(function (i, el) {
  var el = $(el);
  if (el.visible(true)) {
    el.addClass("already-visible");
  }
});

win.scroll(function (event) {
  allMods.each(function (i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("come-in");
    }
  });
});

$(document).ready(function () {
  // Transition effect for navbar
  $(window).scroll(function () {
    // checks if window is scrolled more than 750px, adds/removes solid class
    if ($(this).scrollTop() > 750) {
      $(".header-nav").addClass("solid");
      $("#nav").addClass("solid");
    } else {
      $(".header-nav").removeClass("solid");
      $("#nav").removeClass("solid");
    }
  });
});
