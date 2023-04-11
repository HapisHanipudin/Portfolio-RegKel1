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

// -------------------------------------------------
// ----------------  NEWS POPUP  -------------------
// -------------------------------------------------

function iknow_tm_news_popup() {
  "use strict";

  var modalBox = jQuery(".iknow_tm_modalbox");
  var button = jQuery(".iknow_tm_news .iknow_tm_full_link,.iknow_tm_news .news_list ul li .details .title a, .nav-link");
  var closePopup = modalBox.find(".close");

  button.on("click", function () {
    var element = jQuery(this);
    var parent = element.closest(".list_inner");
    var content = parent.find(".hidden_content").html();
    var image = parent.find(".image .main").data("img-url");
    var category = parent.find(".details .category a").text();
    var title = parent.find(".details .title a").text();
    modalBox.addClass("opened");
    modalBox.find(".description_wrap").html(content);
    modalBox.find(".news_informations").prepend('<div class="image"><img src="img/thumbs/4-2.jpg" alt="" /><div class="main" data-img-url="' + image + '"></div></div>');
    modalBox.find(".news_informations .image").after('<div class="details"><span>' + category + "</span><h3>" + title + "</h3><div>");
    iknow_tm_data_images();
    return false;
  });
  closePopup.on("click", function () {
    modalBox.removeClass("opened");
    modalBox.find(".description_wrap").html("");
    return false;
  });
}

// -----------------------------------------------------
// ---------------   MENU WIDTH   ----------------------
// -----------------------------------------------------

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

      if (activeA.length) {
        var elWidth = 135;
        if (ww <= 1400) {
          elWidth = 95;
        }
        var textWidth = activeA.find("span").outerWidth();
        activeA
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
      jQuery("html, body").animate(
        {
          scrollTop: jQuery(".tab-content").offset().top - 30,
        },
        1000
      );
    } else {
      jQuery("html, body").animate(
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
    jQuery(".tab-pane.active").removeClass("active");
    jQuery(".tab-content").addClass("active");
    jQuery(href).addClass("active");

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
    jQuery(href).addClass("active");
  });
}
