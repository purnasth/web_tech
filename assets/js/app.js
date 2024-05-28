document.addEventListener("DOMContentLoaded", function () {
  var links = document.querySelectorAll(".navbar ul li a");
  var currentUrl = window.location.href;

  links.forEach(function (link) {
    if (currentUrl.includes(link.getAttribute("href"))) {
      link.classList.add("active");
    }
  });
});
