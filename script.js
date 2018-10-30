var scroll = new SmoothScroll('a[href*="#"]', {
  easing: 'easeInOutQuint'
});

var new_scroll_position = 0;
var last_scroll_position;
var header = document.getElementById("bar");
window.addEventListener('scroll', function(e) {
  last_scroll_position = window.scrollY;
  // Scrolling down
  if (new_scroll_position < last_scroll_position && last_scroll_position > 80) {
    // header.removeClass('slideDown').addClass('slideUp');
    header.classList.remove("slideDown");
    header.classList.add("slideUp");
  // Scrolling up
  } else if (new_scroll_position > last_scroll_position) {
    // header.removeClass('slideUp').addClass('slideDown');
    header.classList.remove("slideUp");
    header.classList.add("slideDown");
  }
  new_scroll_position = last_scroll_position;
});


// toggle hamburger menu

var nav = document.querySelector("nav ul"),
  navToggle = document.querySelector("nav .skip");
if (navToggle) {
  navToggle.addEventListener("click",
    function (e) {
      if (nav.className == "open") {
        nav.className = "";
      } else {
        nav.className = "open";
      }

      // po evencie klik zamykaj

      e.preventDefault();
    }, false);
}

/* Any click outside of the nav element will close the menu if it's open */
var specifiedElement = document.querySelector('nav');
document.addEventListener('click', function (event) {
  var isClickInside = specifiedElement.contains(event.target);
  if (!isClickInside && nav.className == "open") {
    nav.className = "";
  }
});
