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

function colorsOKLCH() {
  sessionStorage.setItem('baselayerColors', 'oklch');
  htmlClassList.remove('colors-hsl');
  htmlClassList.add('colors-oklch');
}

function colorsHSL() {
  sessionStorage.setItem('baselayerColors', 'hsl');
  htmlClassList.remove('colors-oklch');
  htmlClassList.add('colors-hsl');
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

function toggleColors() {
  if ( sessionStorage.baselayerColors === 'oklch' ) {
    colorsHSL();
    document.getElementById('colors-hsl').disabled = false;
    document.getElementById('colors-oklch').disabled = true;
  
  } else {
    colorsOKLCH();
    document.getElementById('colors-hsl').disabled = true;
    document.getElementById('colors-oklch').disabled = false;
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
    // default
    fontBase();
  }
  if ( sessionStorage.baselayerFS === 'longread' ) {
    fsLongRead();
  } else {
    // default
    fsNormal();
  }
  if ( sessionStorage.baselayerColors === 'hsl' ) {
    colorsHSL();
  } else {
    // default
    colorsOKLCH();
  }
};

baselayerInit();