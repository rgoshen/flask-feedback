// js scripts go here
const currentYear = document.getElementById("current-year");

// update copyright date to current year
year = new Date().getFullYear();
currentYear.innerHTML = year;

// fade out for flash messaging
window.setTimeout(function () {
  $(".alert").fadeTo(500, 0);
}, 4000);
