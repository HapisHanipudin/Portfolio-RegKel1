if ($(".mouse-cursor")) {
  const e = document.querySelector(".cursor-inner"),
    t = document.querySelector(".cursor-outer");
  let n,
    i = 0,
    o = !1;
  (window.onmousemove = function (s) {
    o || (t.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)"), (e.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)"), (n = s.clientY), (i = s.clientX);
  }),
    $("body").on("mouseenter", "a,.know_tm_topbar .trigger, .cursor-pointer, button", function () {
      e.classList.add("cursor-hover"), t.classList.add("cursor-hover");
    }),
    $("body").on("mouseleave", "a,.know_tm_topbar .trigger, .cursor-pointer, button", function () {
      ($(this).is("a") && $(this).closest(".cursor-pointer").length) || (e.classList.remove("cursor-hover"), t.classList.remove("cursor-hover"));
    }),
    (e.style.visibility = "visible"),
    (t.style.visibility = "visible");
}
