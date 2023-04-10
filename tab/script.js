document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      document.getElementById("navbar_top").classList.add("fixed-top");
      // add padding top to show content behind navbar
      navbar_height = document.querySelector(".navbar").offsetHeight;
      document.body.style.paddingTop = navbar_height + "px";
    } else {
      document.getElementById("navbar_top").classList.remove("fixed-top");
      // remove padding top from body
      document.body.style.paddingTop = "0";
    }
  });
});
// DOMContentLoaded  end

window.onload = function () {
  document.body.classList.add("loaded");
};

// menu bar

function menu_width() {
  "use strict";

  var ww = jQuery(window).width();
  var btn = jQuery(".nav-tabs ul li a");

  btn
    .on("mouseenter", function () {
      var element = jQuery(this);
      var a = element.closest("a");
      if (a.hasClass("active") || a.hasClass("entered")) {
        return false;
      }
      a.closest("li").children().removeClass("entered");
      a.addClass("entered");
      var elWidth = a.outerWidth();
      var textWidth = a.find("span").outerWidth();
      a.css({ width: elWidth + textWidth + "px" });
    })
    .on("mouseleave", function () {
      var element = jQuery(this);
      var a = element.closest("a");
      var allA = a.closest("li").children();
      var fixedA = a.closest("li").children(".fixed");
      var activeA = a.closest("li").children(".active");
      allA.removeClass("entered").css({ width: "135px" });
      if (ww <= 1400) {
        allA.removeClass("entered").css({ width: "95px" });
      }

      if (activeLi.length) {
        var elWidth = 135;
        if (ww <= 1400) {
          elWidth = 95;
        }
        var textWidth = activeA.find("span").outerWidth();
        activeLi
          .removeClass("fixed")
          .addClass("active")
          .css({ width: elWidth + textWidth + "px" });
      }
    });

  btn.on("click", function () {
    var element = jQuery(this);
    var a = element.closest("a");
    var href = element.attr("href");
    if (a.hasClass("active") && !a.hasClass("entered")) {
      return false;
    }
    a.addClass("active fixed");
    var mainMenu = element.closest("nav-tabs");

    if (ww <= 1040) {
      $("html, body").animate(
        {
          scrollTop: $(".tab-content").offset().top - 30,
        },
        1000
      );
    } else {
      $("html, body").animate(
        {
          scrollTop: mainMenu.offset().top - 30,
        },
        1000
      );
    }

    a.siblings().removeClass("active").css({ width: "135px" });
    if (ww <= 1400) {
      a.siblings().removeClass("active").css({ width: "95px" });
    }
    $(".tab-pane.active").removeClass("active");
    jQuery(".tab-content").addClass("opened");
    $(href).addClass("active");

    if (!a.hasClass("entered")) {
      var elWidth = a.outerWidth();
      var textWidth = a.find("span").outerWidth();
      a.css({ width: elWidth + textWidth + "px" });
    }
    iknow_tm_owl_carousel();

    return false;
  });

  jQuery(".nav-tabs ul li .nav-link.active").each(function () {
    var element = jQuery(this);
    var elWidth = element.outerWidth();
    var textWidth = element.find("span").outerWidth();
    var href = element.find("a").attr("href");
    element.css({ width: elWidth + textWidth + "px" });
    $(href).addClass("active");
  });
}
