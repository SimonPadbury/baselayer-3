// Using sessionStorage so that it is discarded as soon as a visitor leaves this site or closes the current window/tab.

const htmlClassList = document.querySelector("html").classList;
const lightSwitch = document.querySelector("#lightSwitch");
const darkSwitch = document.querySelector("#darkSwitch");
const autoSwitch = document.querySelector("#autoSwitch");

function fontBase() {
  sessionStorage.setItem("baselayerFont", "base");
  htmlClassList.remove("font-prose");
  htmlClassList.add("font-base");
}

function fontProse() {
  sessionStorage.setItem("baselayerFont", "prose");
  htmlClassList.remove("font-base");
  htmlClassList.add("font-prose");
}

function themeAuto() {
  sessionStorage.setItem("baselayerTheme", "auto");
  htmlClassList.add("theme-auto");
  htmlClassList.remove("theme-light");
  htmlClassList.remove("theme-dark");
}

function themeLight() {
  sessionStorage.setItem("baselayerTheme", "light");
  htmlClassList.remove("theme-auto");
  htmlClassList.add("theme-light");
  htmlClassList.remove("theme-dark");
}

function themeDark() {
  sessionStorage.setItem("baselayerTheme", "dark");
  htmlClassList.remove("theme-auto");
  htmlClassList.remove("theme-light");
  htmlClassList.add("theme-dark");
}

// Init

function baselayerInit() {
  switch (sessionStorage.baselayerTheme) {
    case "light":
      result: themeLight();
      break;
    case "dark":
      result: themeDark();
      break;
    default:
      result: themeAuto();
  }

  if (sessionStorage.baselayerFont === "prose") {
    fontProse();
  } else {
    fontBase();
  }
}

baselayerInit();
