---
title: Baselayer 3
mainHeading: Baselayer 3 is a powerful, modern, tiny CSS library
layout: base.njk
nextPage: "/typography/"
nextLink: "Typography"
---

## Introduction

<p class="t-big">Designed as a good place to start, Baselayer may be all you need — for small static websites and blogs. Or you may use it as a <em>baselayer</em> to quick-start your mega project.</p>

Ready to use as-is, Baselayer 3’s {{ metadata.filesize }} (minified) stylesheet gives you all this:

* A modern CSS reset
* Foundational accessibility features
* A lightweight system of utility classes for controlling dimensions, positioning, spacing, borders, text, images, and colors
* Container-responsive typography and spacing 
* **Since v.3.2.0:** Container query responsive layouts using grid and flexbox
* Styled form elements and buttons
* **Since v.3.3.0:** A `color-mix()` based shade scale system of utilities for text, borders, and backgrounds
* Built-in dark mode
* Control of many of these things using CSS variables (a.k.a. custom properties)
* And more

## Using several modern CSS technologies

Such as:

* [Container queries (inline-size)](https://caniuse.com/css-container-queries)
* [Grid](https://caniuse.com/css-grid)
* [Math functions (e.g. clamp)](https://caniuse.com/?search=css%20math%20functions)
* [Custom properties (variables)](https://caniuse.com/css-variables)
* [Cascade layers](https://caniuse.com/css-cascade-layers)
* [color-mix() function](https://caniuse.com/?search=color-mix())

Therefore Baselayer supports only up-to-date (mid-2023 forward) “evergreen” web browsers (Safari, Firefox, Chrome, Edge, etc.).
  
## Baselayer’s design philosophy 

The design philosophy behind the Baselayer CSS project is as follows:

* Aim at being a good place to start — a _baselayer_ for a web design project.
* Being so small ({{ metadata.filesize }}), there’s less you need to overwrite in order to style it your own way (and most things in Baselayer can be restyles by CSS variables ). So, there’s no need for a purge process to remove a heavy payload of unused Baselayer styles.
* PostCSS only — no need for Sass, Less, Stylus etc.
* Plus, if you include the whole of `baselayer.min.css` along with your styles in a content management system (CMS), then you will still have it all available when you need to style simple components in the content editor.

## Built using PostCSS

Baselayer is built using [PostCSS](https://postcss.org) and some plugins. The plugins used by Baselayer are:

* [postcss-import](https://github.com/postcss/postcss-import) — so that Baselayer could be built from separate CSS files, linked together in an `index.css` using the `@import` rule, and then inlined
* [cssnano](https://cssnano.co) — to remove comments and minify the output `baselayer.min.css`

**Note:** neither [postcss-preset-env](https://preset-env.cssdb.org) nor [autoprefixer](https://github.com/postcss/autoprefixer) have been used in Baselayer. And preprocessors such as Sass are not required.

## Modern CSS reset

The Baselayer reset is a “best of both” combination of [Josh W Comeau’s custom CSS reset](https://www.joshwcomeau.com/css/custom-css-reset/) and [Andy Bell’s (more) modern CSS reset”](https://andy-bell.co.uk/a-more-modern-css-reset/).

From that basis, Baselayer then takes care of the basics by setting some minimalist, easy-to-read typography, and styles for buttons and forms.

## Basic accessibility features

Baselayer has two “must have” accessibility features built-in.

### (1.) Focus rings

**(a.) Form focus ring:**

For form inputs and buttons on `:focus`, there’s a 4px light blue ring (see [colors](/colors)). Example:

<form class="mt-2 mb-3">
  <fieldset class="flex">
    <legend>Example e-newsletter subscribe</legend>
    <input class="w-100%" type="email" id="example-input-email" placeholder="Enter email">
    <input type="submit" name="submit" value="Subscribe">
  </fieldset>
</form>

The zero outline resets the browser defaults, while the box shadow provides the same style across different browsers. Box-shadow has been used so that the focus ring curves around the corners that have border-radius.

**(b.) Button focus ring:**

Buttons (`<button>`, `<input type="button">`, etc.) get the same focus ring as for other form inputs, but only for `:focus-visible`.

**(c.) Link focus ring:**

For links, collapsible `<details>`, pseudo-buttons (i.e. links styled with the `btn` class), and anything else that is not a form input or button, the focus ring is a 2px dotted black outline supported by a 2px solid white box shadow. This white will appear _between_ the outline black dots, so that you get what loooks like alternating black and white dots.

Keyboard-tab through these links and buttons to see the accessibility rings:

<div class="mt-2 mb-3 b-1">
  <div class="grid sm:equal-3-cols">
    <div class="p-3 flex flex-column flex-center flex-middle">
    <p><a href="/#">Link</a></p>
    <p><button type="button">Button</button></p>
    </div>
    <div class="p-3 flex flex-column flex-center flex-middle bg-blue bg-700">
    <p><a class="t-blue t-200 hover:t-300" href="/#">Link</a></p>
    <p><button type="button">Button</button></p>
    </div>
    <div class="p-3 flex flex-column flex-center flex-middle bg-black">
    <p><a class="t-blue t-200 hover:t-300" href="/#">Link</a></p>
    <p><button type="button">Button</button></p>
    </div>
  </div>
</div>

### (2.) The `visually-hidden` class

The `visually-hidden` is used to provide additional content for screen-readers, for improved accessibility. For example, it is best practice to have “skip link” above the top navigation bar on your website, but have it (visually) hidden for ably sighted users.

```
<a href="#main-content"
  tabindex="1"
  class="inline-block m-1 visually-hidden"
>
  Skip to main content
</a>

<!-- Logo and site menu go in here -->

<div id="main-content">
  ...
</div>
```