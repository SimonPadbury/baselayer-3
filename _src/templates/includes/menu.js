/**
 * Site Navigation Toggle (Phones and tablet in portrait orientation)
 */

window.addEventListener("DOMContentLoaded", () => {
  let navButton = document.querySelector("#site-menu-toggle");
  let menu = document.querySelector("#js-menu-wrapper");
  let windowTest = function () {
    if (window.matchMedia("(max-width: 959px)").matches) {
      navButton.setAttribute("aria-expanded", "false");
      menu.hidden = true;
    } else {
      navButton.setAttribute("aria-expanded", "true");
      menu.hidden = false;
    }
  };

  windowTest();

  window.addEventListener("resize", function () {
    windowTest();
  });

  navButton.addEventListener("click", function () {
    let expanded = this.getAttribute("aria-expanded") === "true" || false;
    this.setAttribute("aria-expanded", !expanded);
    menu.hidden = !menu.hidden;
  });
});
