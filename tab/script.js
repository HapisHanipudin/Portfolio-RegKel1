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

// function

$(document).ready(function () {
  menu_width();
});

// menu bar

// -------------------------------------------------
// ----------------  NEWS POPUP  -------------------
// -------------------------------------------------

function iknow_tm_news_popup() {
  "use strict";

  var modalBox = jQuery(".iknow_tm_modalbox");
  var button = jQuery(".iknow_tm_news .nav-links,.iknow_tm_news .news_list ul li .details .title a, .nav-link");
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

// Function

function menu_width() {
  "use strict";

  var ww = jQuery(window).width();
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
    var mainMenu = element.closest(".nav-tabs");

    if (ww <= 1040) {
      $("html, body").animate(
        {
          scrollTop: $("..tab-contents").offset().top - 30,
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
    $(".tab-panes.active").removeClass("active");
    jQuery(".tab-contents").addClass("opened");
    jQuery(".jumbotron").addClass("opened");
    jQuery(".iknow_tm_copyright.hidden").addClass("visible");
    $(href).addClass("active");

    if (!li.hasClass("entered")) {
      var elWidth = li.outerWidth();
      var textWidth = li.find("span").outerWidth();
      li.css({ width: elWidth + textWidth + "px" });
    }
    iknow_tm_owl_carousel();

    return false;
  });

  jQuery(".iknow_tm_hero .main_menu ul li.active").each(function () {
    var element = jQuery(this);
    var elWidth = element.outerWidth();
    var textWidth = element.find("span").outerWidth();
    var href = element.find("a").attr("href");
    element.css({ width: elWidth + textWidth + "px" });
    $(href).addClass("active");
  });
}

// -----------------------------------------------------
// ---------------   MENU WIDTH NEW   ------------------
// -----------------------------------------------------

function iknow_tm_menu_width_action(element, action) {
  "use strict";
  var ww = jQuery(window).width();

  // action active is mouseenter and was used in onepagenav for current item (on scroll)

  if (action === "active") {
    var li = element.closest("li");
    if (li.hasClass("current") || li.hasClass("entered")) {
      return false;
    }
    li.closest("ul").children().removeClass("entered");
    li.addClass("entered");
    var elWidth = li.outerWidth();
    var textWidth = li.find("span").outerWidth();
    li.css({ width: elWidth + textWidth + "px" });
  } else {
    var li = element.closest("li");
    var allLi = li.closest("ul").children();
    var fixedLi = li.closest("ul").children(".fixed");
    var activeLi = li.closest("ul").children(".current");
    allLi.removeClass("entered").css({ width: "70px" });
    if (ww <= 1400) {
      allLi.removeClass("entered").css({ width: "50px" });
    }

    if (activeLi.length) {
      var elWidth = 70;
      if (ww <= 1400) {
        elWidth = 50;
      }
      var textWidth = activeLi.find("span").outerWidth();
      activeLi
        .removeClass("fixed")
        .addClass("current")
        .css({ width: elWidth + textWidth + "px" });
    }
  }
}

function iknow_tm_menu_width_new() {
  "use strict";

  var ww = jQuery(window).width();
  var btn = jQuery(".iknow_tm_mainpart_new_2 .main_menu ul li a");

  btn
    .on("mouseenter", function () {
      iknow_tm_menu_width_action(jQuery(this), "active");
    })
    .on("mouseleave", function () {
      iknow_tm_menu_width_action(jQuery(this), "");
    });

  btn.on("click", function () {
    var element = jQuery(this);
    var li = element.closest("li");
    if (li.hasClass("current") && !li.hasClass("entered")) {
      return false;
    }
    li.addClass("current fixed");

    li.siblings().removeClass("current").css({ width: "70px" });
    if (ww <= 1400) {
      li.siblings().removeClass("current").css({ width: "50px" });
    }

    if (!li.hasClass("entered")) {
      var elWidth = li.outerWidth();
      var textWidth = li.find("span").outerWidth();
      li.css({ width: elWidth + textWidth + "px" });
    }

    return false;
  });

  jQuery(".iknow_tm_mainpart_new_2 .main_menu ul li.current").each(function () {
    var element = jQuery(this);
    var elWidth = element.outerWidth();
    var textWidth = element.find("span").outerWidth();
    element.css({ width: elWidth + textWidth + "px" });
  });
}

function hashtag() {
  "use strict";
  var ccc = $(".iknow_tm_topbar .wrapper .menu .ccc");
  var element = $(".iknow_tm_topbar .wrapper .menu .active a");
  $(".iknow_tm_topbar .wrapper .menu a").on("mouseenter", function () {
    var e = $(this);
    currentLink(ccc, e);
  });
  $(".iknow_tm_topbar .wrapper .menu").on("mouseleave", function () {
    element = $(".iknow_tm_topbar .wrapper .menu .active a");
    currentLink(ccc, element);
    element.parent().siblings().removeClass("mleave");
  });
  currentLink(ccc, element);
}

function currentLink(ccc, e) {
  "use strict";
  if (!e.length) {
    return false;
  }
  var left = e.offset().left;
  var width = e.outerWidth();
  var menuleft = $(".iknow_tm_topbar .wrapper .menu").offset().left;
  e.parent().removeClass("mleave");
  e.parent().siblings().addClass("mleave");
  ccc.css({ left: left - menuleft + "px", width: width + "px" });
}

function hashtag2() {
  "use strict";
  var ccc = $(".iknow_tm_sidebar_2 .ccc");
  var element = $(".iknow_tm_sidebar_2 .active a");
  $(".iknow_tm_sidebar_2 .menu a").on("mouseenter", function () {
    var e = $(this);
    currentLink2(ccc, e);
  });
  $(".iknow_tm_sidebar_2 .menu").on("mouseleave", function () {
    element = $(".iknow_tm_sidebar_2 .menu .active a");
    currentLink2(ccc, element);
    element.parent().siblings().removeClass("mleave");
  });
  currentLink2(ccc, element);
}

function currentLink2(ccc, e) {
  "use strict";
  if (!e.length) {
    return false;
  }
  var left = e.offset().top;
  var width = e.outerWidth();
  var menuleft = $(".iknow_tm_sidebar_2 .menu").offset().top;
  e.parent().removeClass("mleave");
  e.parent().siblings().addClass("mleave");
  ccc.css({ top: left - menuleft + "px" });
}

function iknow_tm_scrollable() {
  "use strict";

  var WW = jQuery(window).width();
  var H = jQuery(window).height();
  var scrollable = jQuery(".iknow_tm_sidebar_3 .menu.scrollable");
  var verMenu = jQuery(".iknow_tm_sidebar_3 .menu");
  var topbar = jQuery(".iknow_tm_extra_demo .iknow_tm_topbar").outerHeight();
  var image = jQuery(".iknow_tm_sidebar_3 .image").outerHeight() + 45;
  var footerHeight = jQuery(".iknow_tm_extra_demo .iknow_tm_copyright").outerHeight();

  if (WW <= 1400) {
    verMenu.css({ height: H - topbar - image - footerHeight });
  }

  verMenu.css({ height: H - topbar - image - footerHeight - 90 });

  if (WW <= 1400) {
    scrollable.each(function () {
      var element = jQuery(this);

      element.css({ height: H - topbar - image - footerHeight }).niceScroll({
        touchbehavior: false,
        cursorwidth: 0,
        autohidemode: true,
        cursorborder: "0px solid #eee",
      });
    });
  }

  scrollable.each(function () {
    var element = jQuery(this);

    element.css({ height: H - topbar - image - footerHeight - 90 }).niceScroll({
      touchbehavior: false,
      cursorwidth: 0,
      autohidemode: true,
      cursorborder: "0px solid #eee",
    });
  });
}
