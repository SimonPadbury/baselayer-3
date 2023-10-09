const matchMediaDark = window.matchMedia('(prefers-color-scheme: dark)');
const htmlClassList = document.querySelector('html').classList;

function fontProse() {
  sessionStorage.setItem('baselayerFont', 'prose');
  htmlClassList.remove('font-base');
  htmlClassList.add('font-prose');
}

function fontBase() {
  sessionStorage.setItem('baselayerFont', 'base');
  htmlClassList.remove('font-prose');
  htmlClassList.add('font-base');
}

function fsLongRead() {
  sessionStorage.setItem('baselayerFS', 'longread');
  htmlClassList.remove('font-normal');
  htmlClassList.add('font-longread');
}

function fsNormal() {
  sessionStorage.setItem('baselayerFS', 'normal');
  htmlClassList.remove('font-longread');
  htmlClassList.add('font-normal');
}

function themeDark() {
  sessionStorage.setItem("baselayerTheme", "dark");
  htmlClassList.remove('theme-light');
  htmlClassList.add('theme-dark');
}

function themeLight() {
  sessionStorage.setItem("baselayerTheme", "light");
  htmlClassList.remove('theme-dark');
  htmlClassList.add('theme-light');
}

// Toggles

function toggleFont() {
  if ( sessionStorage.baselayerFont === 'prose' ) {
    fontBase();
  } else {
    fontProse();
  }
};

function toggleFS() {
  if ( sessionStorage.baselayerFS === 'normal' ) {
    fsLongRead();
  } else {
    fsNormal();
  }
};

function toggleTheme() {
  if ( sessionStorage.baselayerTheme === 'dark' ) {
    themeLight();
  } else {
    themeDark();
  }
};

// init

function baselayerInit() {
  if (sessionStorage.baselayerTheme === 'dark' || (!('baselayerTheme' in sessionStorage) && matchMediaDark.matches)) {
    themeDark();
  } else {
    themeLight();
  }
  if ( sessionStorage.baselayerFont === 'prose' ) {
    fontProse();
  } else {
    fontBase();
  }
  if ( sessionStorage.baselayerFS === 'longread' ) {
    fsLongRead();
  } else {
    fsNormal();
  }
};

baselayerInit();