---
title: Getting started
mainHeading: Getting started with Baselayer
layout: base.njk
nextPage: "/typography/"
nextLink: "Typography"
---

## Introduction

<p class="t-lg">Designed as a good place to start, Baselayer may be all you need for small projects such as static websites and blogs. Or you may use it as a <em>baselayer</em> to quick-start your mega project.</p>

Ready to use as-is, Baselayer’s {{ metadata.filesize }} (minified) stylesheet gives you all this:

* A modern CSS reset
* Minimalist styled classless typographic, and form elements
* Reliable accessibility features for assistive technology users
* A lightweight system of utility classes for controlling dimensions, positioning, spacing, borders, text, and images
* `@container` query responsive layout utilities using CSS grid and flexbox
* Responsive typography, layout, and spacing using `clamp()` ramps
* A compact color lightness system based on `color-mix(in OKLCH)` for text, borders, and backgrounds
* Built-in dark mode using `light-dark()`
* Theming control using CSS variables
* And more

## Modern CSS technologies

Baselayer supports only up-to-date (2023 forward) [baseline compatibility](https://developer.mozilla.org/en-US/docs/Glossary/Baseline/Compatibility) web browsers (Safari, Firefox, Chrome, Edge, etc.). Such as:

* [Container queries (inline-size)](https://caniuse.com/css-container-queries)
* [CSS Grid](https://caniuse.com/css-grid)
* [Math functions (e.g. clamp)](https://caniuse.com/?search=css%20math%20functions)
* [Custom properties (variables)](https://caniuse.com/css-variables)
* [color-mix() function](https://caniuse.com/?search=color-mix())
* [light-dark() function](https://caniuse.com/mdn-css_types_color_light-dark)
* [CSS class nesting](https://caniuse.com/css-nesting)
* [Cascade layers](https://caniuse.com/css-cascade-layers)

## Baselayer’s design philosophy

The design philosophy behind the Baselayer CSS project is as follows:

* Aim at being a good place to start — a _baselayer_ for a web design project.
* Being so small ({{ metadata.filesize }}), there’s less you need to overwrite in order to style it your own way (and most things in Baselayer can be restyles by CSS variables). So, there’s no need for a purge process to remove a heavy payload of unused Baselayer styles.
* PostCSS only — no need for Sass, Less, Stylus etc.

## Built using PostCSS

Baselayer is built using [PostCSS](https://postcss.org) and some plugins. The plugins used by Baselayer are:

* [postcss-import](https://github.com/postcss/postcss-import) — so that Baselayer could be built from separate CSS files, linked together in an `index.css` using the `@import` rule, and then inlined
* [cssnano](https://cssnano.co) — to remove comments and minify the output `baselayer.min.css`

**Note:** neither [postcss-preset-env](https://preset-env.cssdb.org) nor [autoprefixer](https://github.com/postcss/autoprefixer) have been used in Baselayer. And preprocessors such as Sass are not required.

## A modern CSS reset

The Baselayer reset is a “best of both” combination of [Josh W Comeau’s custom CSS reset](https://www.joshwcomeau.com/css/custom-css-reset/) and [Andy Bell’s (more) modern CSS reset”](https://andy-bell.co.uk/a-more-modern-css-reset/).

From that basis, Baselayer then takes care of the basics by setting some minimalist, easy-to-read typography, and styles for buttons and forms.

## Baselayer’s built-in accessibility features

Baselayer has two “must have” accessibility features built-in.

### (1.) Focus states

After experimenting and testing various focus state styles, I have decided to base Baselayer’s on the ones in the UK National Health Service [NHS.uk design system](https://design-system.service.gov.uk/get-started/focus-states/) and the UK Government [GOV.UK design system](https://design-system.service.gov.uk/get-started/focus-states/).

1. Links receive an amber background, black text and a thick black underline on `:focus-visible` — so that the element is clearly visible in a wide range of contexts.

2. Interacive elements such as form inputs, form buttons, collapsible details, and elements with overflowing content have what looks like a yellow and black “double border” that appears on `:focus` (actually its created by an outline and a box shadow).

**Note:** A `<button>` that is not within a `<form>`, and a `<button type="button">` will not receive the `:focus` ring (but it will receive the ring on `:focus-visible`). Ths is true for most browsers except Safari: Safari does not show `:focus` rings on buttons, and it does not place tabbing focus on overflowing elements, or on the color-picker input.

These focus states are visible on a wide range of colored backgrounds, in both light and dark themes. (See also [colors and accessibility]({{ "/colors/#colors-and-accessibility" | url }}).) A z-index raise has been added to prevent the focus ring tucking under a neighbouring item, e.g. in input/button groups.

Examples:

<form class="my-3">
  <fieldset class="flex">
    <legend>Example e-newsletter subscribe</legend>
    <input class="w-100%" type="email" id="example-input-email" placeholder="Enter email">
    <input type="submit" name="submit" value="Subscribe">
  </fieldset>
</form>

Keyboard-tab through these links and buttons to see the focus rings:

<div class="my-3 b-thin">
  <div class="grid sm:equal-4-cols">
    <div class="p-3 flex flex-column flex-center flex-middle bg-white bg-dark-invert">
    <p><a href="/#">Link</a></p>
    <p><button type="button">Button</button></p>
    </div>
    <div class="p-3 flex flex-column flex-center flex-middle bg-blue bg-700">
    <p><a class="t-blue t-200 hover:t-300" href="/#">Link</a></p>
    <p><button class="r-2" type="button">Button</button></p>
    </div>
    <div class="p-3 flex flex-column flex-center flex-middle bg-red bg-500 bg-dark-invert">
    <p><a class="t-blue t-200 hover:t-300" href="/#">Link</a></p>
    <p><button class="r-2" type="button">Button</button></p>
    </div>
    <div class="p-3 flex flex-column flex-center flex-middle bg-black bg-dark-invert">
    <p><a class="t-blue t-200 t-dark-invert hover:t-300" href="/#">Link</a></p>
    <p><button class="r-pill" type="button">Button</button></p>
    </div>
  </div>
</div>

### (2.) The `visually-hidden` class

The `visually-hidden` is used to provide additional content for screen-readers, for improved accessibility. For example, it is best practice to have “skip link” above the top navigation bar on your website, but have it (visually) hidden for ably sighted users.

```
<a href="#main-content"
  tabindex="1"
  class="block p-2 visually-hidden"
>
  Skip to page content
</a>

<!-- Logo and site navigation menu here -->

<div id="main-content">
  ...
</div>
```
