---
title: Baselayer
mainHeading: Baselayer is a super tiny, super powerful CSS library
layout: base.njk
nextPage: "/typography/"
nextLink: "Typography"
---

## Introduction

<p class="t-big">Designed as a good place to start, Baselayer may be all you need — for small static websites and blogs. Or you may use it as a <em>baselayer</em> to quick-start your mega project.</p>

Ready to use as-is, Baselayer gives you all this and more:

* A modern CSS reset
* Foundational accessibility features
* Responsive typography
* Simple responsive layouts using grid, flexbox, dimensions, and positioning
* A lightweight system of utility classes for controlling spacing, borders, text, images, and colors
* Styled form elements and buttons
* A OKLCH color scale system of utilities for text, borders, and backgrounds
* Control of many of these things using CSS variables (a.k.a. custom properties)

Baselayer uses some modern web technologies such as [CSS Grid](https://caniuse.com/css-grid), [CSS math functions (e.g. clamp)](https://caniuse.com/?search=css%20math%20functions), [CSS variables](https://caniuse.com/css-variables), and the [OKLCH color model](https://caniuse.com/mdn-css_types_color_oklch), therefore it supports only up-to-date (2023 forward) evergreen web browsers (Safari, Firefox, Chrome, Edge, etc.).

Except for a simple hex (#) grayscale (and hyperlink blue) for pre-OKLCH browsers, there is no backwards compatibility provided for browers that predate the modern CSS technologies mentioned above. You are free to add hex or RGB colors according to your design.

<div aria-label="Note" class="popout mt-2 mb-3 bl-3 b-orange b-300 p-2 t-black bg-orange bg-100">
  <strong>Baselayer includes no JavaScript or icon fonts.</strong> You can pair Baselayer with whatever JS framework you prefer to work with, or do your own thing. For icon fonts, for small projects I usually use a character (glyph) from <a  class="t-blue t-600 hover:t-700"href="https://www.amp-what.com/">&amp;what;</a> and reach for <a class="t-blue t-600 hover:t-700" href="https://phosphoricons.com/">Phosphor icons</a> when I need something more (other icon sets are available).
</div>

The design philosophy behind the Baselayer project is:

* Make a stylesheet that does most things most people want
* With much less CSS that is mostly never used, e.g. rarely used grid column classes or color shade classes (filesize: {{ metadata.filesize }})
* Using modern CSS technologies such CSS variables, CSS math functions, CSS grid, and a modern color system, that enable a lot of code reuse (reducing duplication)
* All without a preprocessor (no need for Sass, Less, Stylus etc.)
* Aim at being a “good place to start” — a _baselayer_ for a web design project, closer to being a more powerful replacement for [Normalize](https://necolas.github.io/normalize.css/) than an entire design system like the much bigger CSS frameworks.
* Being so small, there’s less you need to overwrite to style it your own way, making it look “less like [Bootstrap](https://getbootstrap.com)”. And there’s no need for [Tailwind](https://tailwindcss.com)-like purging to remove a heavy payload of unused styles.

## Built using PostCSS

Baselayer is built using [PostCSS](https://postcss.org) and a few plugins. The PostCSS plugins used by Baselayer are:

* [postcss-import](https://github.com/postcss/postcss-import) — so that Baselayer could be built from separate CSS files, linked together in an `index.css` using the `@import` rule, and then inlined
* [postcss-custom-media](https://npm.devtool.tech/postcss-custom-media) — to enable CSS variables to be used in media queries (used only in the `flex` and `grid` layout classes)
* [cssnano](https://cssnano.co) — to remove comments and minify the output `baselayer.css`

**Note:** neither [postcss-preset-env](https://preset-env.cssdb.org) nor [autoprefixer](https://github.com/postcss/autoprefixer) have been used in Baselayer. And preprocessors such as Sass are not required.

## Modern CSS reset

The Baselayer reset is a “best of both” combination of: [Josh W Comeau’s custom CSS reset](https://www.joshwcomeau.com/css/custom-css-reset/) and [Andy Bell’s (more) modern CSS reset”](https://andy-bell.co.uk/a-more-modern-css-reset/).

From that basis, Baselayer then takes care of the basics by setting some minimalist, easy-to-read typography, and styles for buttons and forms.

## Basic accessibility features

Baselayer has two basic accessibility features built-in.

### (1.) Focus rings

**(a.) Form focus ring:**

For form inputs and buttons on `:focus`, there’s a 4px light blue ring (see [colors](/colors)). Example:

<form class="mt-2 mb-3">
  <fieldset class="flex">
    <legend>Example e-newsletter subscribe</legend>
    <input class="w100%" type="email" id="example-input-email" placeholder="Enter email">
    <input type="submit" name="submit" value="Subscribe">
  </fieldset>
</form>

The zero outline resets the browser defaults, while the box shadow provides the same style across different browsers. Box-shadow has been used so that the focus ring curves around the corners that have border-radius.

**(b.) Button focus ring:**

Buttons (`<button>`, `<input type="button">`, etc.) get the same focus ring as for other form inputs, but only for `:focus-visible`.

**(c.) Link focus ring:**

For links, collapsible `<details>`, pseudo-buttons (i.e. links styled with the `btn` class), and anything else that is not a form input or button, the focus ring is a 2px dotted black outline supported by a 2px solid white box shadow. This white will appear _between_ the outline dots, looking like a dotted white line. Keyboard-tab through these links and buttons to see the accessibility rings:

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

The `visually-hidden` is used for “skip links”, such as the visually-hidden link above the top navigation bar on this website.

```
<a href="#main-content"
  tabindex="1"
  class="inline-block m-1 visually-hidden"
>Skip to main content</a>

<!-- Logo and menu go in here -->

<main id="main-content">
  ...
</main>
```