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

  var ww = window.width();
  var btn = jQuery(".nav-tabs ul li a");

  btn
    .on("mouseenter", function () {
      var element = jQuery(this);
      var li = element.closest("li");
      if (li.hasClass("active") || li.hasClass("entered")) {
        return false;
      }
      li.closest("ul").children().removeClass("entered");
      li.addClass("entered");
      var elWidth = li.outerWidth();
      var textWidth = li.find("span").outerWidth();
      li.css({ width: elWidth + textWidth + "px" });
    })
    .on("mouseleave", function () {
      var element = jQuery(this);
      var li = element.closest("li");
      var allLi = li.closest("ul").children();
      var fixedLi = li.closest("ul").children(".fixed");
      var activeLi = li.closest("ul").children(".active");
      allLi.removeClass("entered").css({ width: "135px" });
      if (ww <= 1400) {
        allLi.removeClass("entered").css({ width: "95px" });
      }

      if (activeLi.length) {
        var elWidth = 135;
        if (ww <= 1400) {
          elWidth = 95;
        }
        var textWidth = activeLi.find("span").outerWidth();
        activeLi
          .removeClass("fixed")
          .addClass("active")
          .css({ width: elWidth + textWidth + "px" });
      }
    });

  btn.on("click", function () {
    var element = jQuery(this);
    var li = element.closest("li");
    var href = element.attr("href");
    if (li.hasClass("active") && !li.hasClass("entered")) {
      return false;
    }
    li.addClass("active fixed");
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

    li.siblings().removeClass("active").css({ width: "135px" });
    if (ww <= 1400) {
      li.siblings().removeClass("active").css({ width: "95px" });
    }
    $(".tab-pane.show").removeClass("show");
    jQuery(".tab-content").addClass("opened");
    $(href).addClass("active");

    if (!li.hasClass("entered")) {
      var elWidth = li.outerWidth();
      var textWidth = li.find("span").outerWidth();
      li.css({ width: elWidth + textWidth + "px" });
    }
    iknow_tm_owl_carousel();

    return false;
  });

  jQuery(".nav-tabs ul li. .nav-link.active").each(function () {
    var element = jQuery(this);
    var elWidth = element.outerWidth();
    var textWidth = element.find("span").outerWidth();
    var href = element.find("a").attr("href");
    element.css({ width: elWidth + textWidth + "px" });
    $(href).addClass("active");
  });
}
