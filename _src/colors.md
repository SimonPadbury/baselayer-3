---
title: Colors
mainHeading: Colors
layout: base.njk
prevPage: "/decoration/"
nextPage: "/forms/"
prevLink: "Decoration"
nextLink: "Forms"

---

`color-mix(in OKLCH ... )` has been [Baseline:widely available](https://developer.mozilla.org/en-US/docs/Glossary/Baseline/Compatibility) since March 2023 — all “evergreen” browsers (Chrome, Edge, Firefox, Safari) have capability to use it (see [Can I use](https://caniuse.com/?search=color-mix())). Baselayer uses this function to set up a range of lightness levels for its built-in colors.

## Rationale for Baselayer’s color system

I wanted to develop a color system based on interpolating CSS variables for generating a series _lightness levels_ for each color, so that the stylesheet doesn’t need to be loaded with lighness classes for every color — most of which you’d never use.

After experimenting with variables in _lightness channels_ within color codes, I discovered the new (mid-2023) [color-mix() function](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/color-mix). Using `color-mix()` is better suited to what I was trying to do. With it we can build a series of lightness levels by mixing in white (for tints) or black (for shades).

For usefulness in Baselayer CSS, starting color swatches need to have a mid-range lightness level, but they can be specified using any system (currently, Baselayer default colors are set using Hex `#` codes).

<table class="table table-fixed">
<thead>
<th>Blue</th>
<th>Green</th>
<th>Amber</th>
<th>Red</th>
<th>Gray</th>
</thead>
<tbody>
<td><div class="p-3 rad bg-blue">&nbsp;<div></td>
<td><div class="p-3 rad bg-green">&nbsp;<div></td>
<td><div class="p-3 rad bg-amber">&nbsp;<div></td>
<td><div class="p-3 rad bg-red">&nbsp;<div></td>
<td><div class="p-3 rad bg-gray">&nbsp;<div></td>
</tbody>
</table>

And the color-mix function now outputs colors in [OKLCH](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/oklch) using `color-mix(in OKLCH ...)` because this gives perceptually uniform lightness levels.

The color utility CSS class names remain the same as before (explained below). Example using background `bg-*` utility classes:

<div class="full-bleed mt-3 mb-4 p-2 flex flex-center flex-wrap">
  <div style="width: clamp(96px, 15cqi, 208px)">
    <div class="p-2 t-center"><code class="t-small">blue</code></div>
    <div class="p-2 t-black t-small bg-blue bg-100">100</div>
    <div class="p-2 t-black t-small bg-blue bg-200">200</div>
    <div class="p-2 t-black t-small bg-blue bg-300">300</div>
    <div class="p-2 t-black t-small bg-blue bg-400">400</div>
    <div class="p-2 t-black t-small bg-blue bg-500">500</div>
    <div class="p-2 t-white t-small bg-blue bg-600">600</div>
    <div class="p-2 t-white t-small bg-blue bg-700">700</div>
    <div class="p-2 t-white t-small bg-blue bg-800">800</div>
    <div class="p-2 t-white t-small bg-blue bg-900">900</div>
  </div>
  <div style="width: clamp(96px, 15cqi, 208px)">
    <div class="p-2 t-center"><code class="t-small">green</code></div>
    <div class="p-2 t-black t-small bg-green bg-100">100</div>
    <div class="p-2 t-black t-small bg-green bg-200">200</div>
    <div class="p-2 t-black t-small bg-green bg-300">300</div>
    <div class="p-2 t-black t-small bg-green bg-400">400</div>
    <div class="p-2 t-black t-small bg-green bg-500">500</div>
    <div class="p-2 t-white t-small bg-green bg-600">600</div>
    <div class="p-2 t-white t-small bg-green bg-700">700</div>
    <div class="p-2 t-white t-small bg-green bg-800">800</div>
    <div class="p-2 t-white t-small bg-green bg-900">900</div>
  </div>
  <div style="width: clamp(96px, 15cqi, 208px)">
    <div class="p-2 t-center"><code class="t-small">amber</code></div>
    <div class="p-2 t-black t-small bg-amber bg-100">100</div>
    <div class="p-2 t-black t-small bg-amber bg-200">200</div>
    <div class="p-2 t-black t-small bg-amber bg-300">300</div>
    <div class="p-2 t-black t-small bg-amber bg-400">400</div>
    <div class="p-2 t-black t-small bg-amber bg-500">500</div>
    <div class="p-2 t-black t-small bg-amber bg-600">600</div>
    <div class="p-2 t-white t-small bg-amber bg-700">700</div>
    <div class="p-2 t-white t-small bg-amber bg-800">800</div>
    <div class="p-2 t-white t-small bg-amber bg-900">900</div>
  </div>
  <div style="width: clamp(96px, 15cqi, 208px)">
    <div class="p-2 t-center"><code class="t-small">red</code></div>
    <div class="p-2 t-black t-small bg-red bg-100">100</div>
    <div class="p-2 t-black t-small bg-red bg-200">200</div>
    <div class="p-2 t-black t-small bg-red bg-300">300</div>
    <div class="p-2 t-black t-small bg-red bg-400">400</div>
    <div class="p-2 t-black t-small bg-red bg-500">500</div>
    <div class="p-2 t-white t-small bg-red bg-600">600</div>
    <div class="p-2 t-white t-small bg-red bg-700">700</div>
    <div class="p-2 t-white t-small bg-red bg-800">800</div>
    <div class="p-2 t-white t-small bg-red bg-900">900</div>
  </div>
  <div style="width: clamp(96px, 15cqi, 208px)">
    <div class="p-2 t-center"><code class="t-small">gray</code></div>
    <div class="p-2 t-black t-small bg-gray bg-100">100</div>
    <div class="p-2 t-black t-small bg-gray bg-200">200</div>
    <div class="p-2 t-black t-small bg-gray bg-300">300</div>
    <div class="p-2 t-black t-small bg-gray bg-400">400</div>
    <div class="p-2 t-black t-small bg-gray bg-500">500</div>
    <div class="p-2 t-white t-small bg-gray bg-600">600</div>
    <div class="p-2 t-white t-small bg-gray bg-700">700</div>
    <div class="p-2 t-white t-small bg-gray bg-800">800</div>
    <div class="p-2 t-white t-small bg-gray bg-900">900</div>
  </div>
</div>

Also available:

1. A built-in [dark theme](#dark-theme).
2. Black, white, and transparent — see [other Baselayer color utilities](#other-baselayer-color-utilities).

## Color and shade utility classes

All colors and lightness levels are declared in `variables.css`.

Color utility classes (declared in `@layer color` in `colors.css`) are prefixed acording to where the color will be applied — border `b-*` text `t-*` or background `bg-*`. I have named the colors according to their common names (blue, green, amber, red, gray). You can modify the root variables of these colors, and you can [add your own colors](#adding-more-colors).

<div class="my-4 expand">
<table class="table">
<thead>
<tr>
<th rowspan="2"></th>
<th colspan="2" class="t-center bg-gray bg-100 dark:bg-900">Border Color</th>
<th colspan="2" class="t-center">Text Color</th>
<th colspan="2" class="t-center bg-gray bg-100 dark:bg-900">Background Color</th>
</tr>
<tr>
<th class="t-nowrap bg-gray bg-100 dark:bg-900">Default state</th>
<th class="bg-gray bg-100 dark:bg-900">Hover state</th>
<th>Default state</th>
<th>Hover state</th>
<th class="t-nowrap bg-gray bg-100 dark:bg-900">Default state</th>
<th class="bg-gray bg-100 dark:bg-900">Hover state</th>
</tr>
</thead>
<tbody>
<tr>
<td>Lightness modifier</td>
<td class="bg-gray bg-100 dark:bg-900"><code>b-100</code><br>...<br><code>b-900</code></td>
<td class="bg-gray bg-100 dark:bg-900"><code>hover:b-100</code><br>...<br><code>hover:b-900</code></td>
<td><code>t-100</code><br>...<br><code>t-900</code></td>
<td><code>hover:t-100</code><br>...<br><code>hover:t-900</code></td>
<td class="bg-gray bg-100 dark:bg-900"><code>bg-100</code><br>...<br><code>bg-900</code></td>
<td class="bg-gray bg-100 dark:bg-900"><code>hover:bg-100</code><br>...<br><code>hover:bg-900</code></td>
</tr>
</tbody>
</table>
</div>

Example border, text and background utilities:

<div class="mt-3 mb-4 flex flex-grow-equal gap-1 gap-2">
  <div class="b-heavy b-green p-3 flex flex-center flex-middle"><span class="t-nowrap">b-green</span></div>
  <div class="p-3 flex flex-center flex-middle gap-1 flex-wrap t-heavy t-green t-700 dark:t-300"><span class="t-nowrap">t-green</span> <span class="t-nowrap">t-700</span> <span class="t-nowrap">dark:t-300</span></div>
  <div class="p-3 flex flex-center flex-middle gap-1 flex-wrap t-black bg-green bg-300"><span class="t-nowrap">bg-green</span> <span class="t-nowrap">bg-200</span></div>
</div>

```
<div class="b-heavy b-green"></div>
<div class="t-heavy t-green t-700 dark:t-300"></div>
<div class="t-black bg-green bg-300"></div>
```

See also [dark theme lightness levels](#dark-theme-lightness-levels) and [black, white, and reversi](#black%2C-white%2C-and-reversi).

Example usage:

<div aria-label="Note" class="popout mt-3 mb-4 bl-heavy b-blue b-400 dark:b-600 p-3 t-reversi bg-blue bg-200 dark:bg-800">
  &star; Note (information) panel.
</div>

```html
<div aria-label="Note" class="popout mt-3 mb-4 bl-heavy b-blue b-400 dark:b-600 p-3 t-reversi bg-blue bg-200 dark:bg-800">
  &star; Note (information) panel.
</div>
```

The lighness modifiers `*-100` through `*-900`, if used alone, do not provide color. But if you use them to supplement one of the base colors above, then that color class will provide the color, and the modifier will set its lightness level.

## Colors and accessibility

<div aria-label="Warning" class="popout mt-3 mb-4 bl-heavy b-amber b-400 dark:b-600 p-3 bg-amber bg-200 dark:bg-900">
  In any color model, color combinations must be chosen with care so that there is sufficient contrast between text and background colors for purposes of assessibility.
</div>

In your text and background color combinations, be careful to ensure that the text is readable — there needs to be an adequate contrast. Most organizations should to aim for [WCAG level AA](https://www.w3.org/WAI/WCAG2AA-Conformance) for accessibility requirements.

For WCAG level AA conformance, most user interface colors need to be _darker than the mid-level_ (i.e. use `*-600` up) if the text color is white, or _lighter than the mid-level_ (i.e. use `*-400` down) if the text color is black.

However, any colors near yellow such as Baselayer amber, as well as orange and yellow-green (not included), are especially difficult for accessibility. You may do better using a lighter background amber and pairing it with black text (or vise versa).

<form class="my-3">
  <p>
    <button type="button" name="button">Button</button>
    <button class="bg-blue bg-600 hover:bg-700" type="button" name="button">Button</button>
    <button class="t-black hover:t-black bg-amber bg-500 hover:bg-600" type="button" name="button">Button</button>
    <button class="b-thin b-green bg-transparent t-green t-600 hover:t-white hover:bg-green hover:bg-600" type="button" name="button">Button</button>
  </p>
</form>

When colorizing buttons, remember to set their `hover:` hover state shades too.

```html
<!-- Default button -->
<button type="button" name="button">Button</button>

<!-- Blue button -->
<button class="bg-blue bg-600 hover:bg-700" type="button" name="button">Button</button>

<!-- Amber button -->
<button class="t-black hover:t-black bg-amber bg-500 hover:bg-600" type="button" name="button">Button</button>

<!-- Green outline (a.k.a. ghost) button -->
<button class="b-thin b-green bg-transparent t-green t-600 hover:t-white hover:bg-green hover:bg-600" type="button" name="button">Button</button>
```

Background reading on colors and accessibility:

* Useful blog posts from [The Accessibility (A11Y) Project](https://www.a11yproject.com):
    * [A primer to visual impairment](https://www.a11yproject.com/posts/understanding-visual-impairment/)
    * [Understanding color blindness](https://www.a11yproject.com/posts/understanding-colourblindness/)
    * [How I deal with colorblindness as a digital product designer](https://www.a11yproject.com/posts/how-i-deal-with-colorblindness-as-a-digital-product-designer/)
* [Web Content Accessibility Guidelines (WCAG) 2](https://www.w3.org/WAI/standards-guidelines/wcag/)
* [Contrast and Color Accessibility (WEB AIM)](https://webaim.org/articles/contrast/)
* The [_Coolors_ contrast checker](https://coolors.co/contrast-checker/112a46-acc8e5)
* [Web Accessibility: Understanding Colors and Luminance (Mozilla Developer Network Docs)](https://developer.mozilla.org/en-US/docs/Web/Accessibility/Understanding_Colors_and_Luminance)

## Adding more colors

You can, of course, add any colors you want, and in any format you want.

However, if you want to use Baselayer’s lightness modifier classes `-100` thorugh `-900` on your colors, then you need to start from a _mid-lightness_ color so that the `-100` and the `-900` generated by the `color-mix()` formulas are distinguishable (not to chose to white or too close to black).

Also, you will need to put your color(s) in CSS layer `@layer colors {}` so that they take precence over the Baselayer lightness modifiers and other color utilities.

You can add your own project colors in any format, but the Baselayer `color-mix()` formulas will output shade in OKLCH format.

Examples:

```css
:root {
  --purple: #9400d3;
  --teal: #0080A2;
}

@layer colors {
  .bg-purple {
    --bgc: var(--purple);
    background: var(--bgc);
  }
  .bg-teal {
    --bgc: var(--teal);
    background: var(--bgc);
  }
}
```

## Dark theme

Baselayer has a simple dark theme built in. Since v.3.4.0, the user’s operating system preference for light or dark mode is automatically detected on the HTML tag:

```css
html {
  color-scheme: light dark;
}
```

For the dark theme, HTML elements are generally flipped from light to dark, or dark to light, as required. The colors are as follows:

* Body background is near black
* Text is near white
* Table borders, horizontal rules, form inputs are dark gray
* Text links are a lighter blue
* Default buttons are a lighter gray
* Form elements’ text and background are switched the same as base text and body in dark mode

All the theme color variables in Baselayer (since v.3.4.0) involve a `light-dark()` CSS function. For example:

```css
:root {
  /*
  Body tag background color
  */
  --bgc-body: light-dark(
    white,
    color-mix(in oklch, var(--gray), var(--l1000)));

  /*
  Base text color (also set on the body tag)
  */
  --tc-base: light-dark(
    color-mix(in OKLCH, var(--gray), var(--l900)),
    color-mix(in OKLCH, var(--gray), var(--l100))
  );
}
```

Baselayer does not use `@media (prefers-color-scheme: dark) {}` anywhere.

The color shade utilities can [optionally be inverted](#inverting-lightness-levels-for-the-dark-theme) by adding the `*-dark-invert` modifier classes.

### Light and dark theme classes

If you wish to give your visitors the option to switch between light and dark modes, you can include a JavaScript that swaps between CSS classes `theme-light` and `theme-dark` on the HTML tag. Baselayer has these two tags built in, so that you can implement the style selection:

```css
html {
  color-scheme: light dark;
  &.theme-light {
    color-scheme: light;
  }
  &.theme-dark {
    color-scheme: dark;
  }
}
```

Example implementation: the Baselayer documentation has demo JavaScript switches for light, dark, and auto modes. The auto mode removes `theme-light` and `theme-dark` from the `<html>` tag, so that you simply get the Baselayer default, that is the user’s operating system theme preference setting.

### Dark theme lightness levels

There will be many situations in your design where you want your utility color shades darkened or lightened for the dark theme (similar to how the background color is flipped from white to near black, etc.). Since v.3.5, Baselayer has `dark:` prefixed color lightness utilities for border, text, and background colors. (This is more versatile versalility than the `*-dark-invert` modifier classes in v.3.4, that are now removed.)

Example using `bg-blue`:

```html
<div class="bg-blue bg-100"></div>

<div class="bg-blue bg-100 dark:bg-900"></div>
```

<table class="mt-3 mb-4 table table-fixed">
<thead>
<tr>
<th>Lightness utilities</th>
<th>With dark mode</th>
</tr>
</thead>
<tbody>
<tr>
<td class="bg-blue bg-100"><code>bg-100</code></td>
<td class="bg-blue bg-100 dark:bg-900"><code>dark:bg-900</code></td>
</tr>
<tr>
<td class="bg-blue bg-200"><code>bg-200</code></td>
<td class="bg-blue bg-200 dark:bg-800"><code>dark:bg-800</code></td>
</tr>
<tr>
<td class="bg-blue bg-300"><code>bg-300</code></td>
<td class="bg-blue bg-300 dark:bg-700"><code>dark:bg-700</code></td>
</tr>
<tr>
<td class="bg-blue bg-400"><code>bg-400</code></td>
<td class="bg-blue bg-400 dark:bg-600"><code>dark:bg-600</code></td>
</tr>
<tr>
<td class="bg-blue bg-500"><code>bg-500</code></td>
<td class="bg-blue bg-500 dark:bg-500"><code>dark:bg-500</code></td>
</tr>
<tr>
<td class="bg-blue bg-600"><code>bg-600</code></td>
<td class="bg-blue bg-600 dark:bg-400"><code>dark:bg-400</code></td>
</tr>
<tr>
<td class="bg-blue bg-700"><code>bg-700</code></td>
<td class="bg-blue bg-700 dark:bg-300"><code>dark:bg-300</code></td>
</tr>
<tr>
<td class="bg-blue bg-800"><code>bg-800</code></td>
<td class="bg-blue bg-800 dark:bg-200"><code>dark:bg-200</code></td>
</tr>
<tr>
<td class="bg-blue bg-900"><code>bg-900</code></td>
<td class="bg-blue bg-900 dark:bg-100"><code>dark:bg-100</code></td>
</tr>
</tbody>
</table>

Notes:

* The middle dark mode `dark:bg-500` is the same lightness level as its light mode counterpart.
* The `dark:` prefix is only for switching lightness levels, not for switching colors.
* When setting the hover state lightness level, the `hover:` prefix must come before the `dark:` prefix.

```html
<!-- This is correct -->
<a href="" class="... hover:dark:bg-900">Link</a>

<!-- This will not work -->
<a href="" class="... dark:hover:bg-900">Link</a>
```

### What if you don’t want a dark theme?

Then you can simply override or replace the HTML tag as follows:

```css
html {
  color-scheme: light;
}
```

And you won’t need to use any `dark:` prefixed classes.

## Other Baselayer color utilities

<div aria-label="Note" class="popout mb-3 bl-heavy b-blue b-200 dark:b-600 p-3 bg-blue bg-100 dark:bg-900">
  The color utilities for black, white, and transparent <em>can’t be used on the same element</em> with the colors and shades above (i.e. as either default or hover states). These other utilities are declared after the colors and shades, and so they will override them.
</div>

Other color utilities included in Baselayer cover black, white, and transparent.

### Black, white, and reversi

Black and white are explicitly named colors in baselayer. They do not have lightness levels.

* `*-black` — named color black
* `*-white` — named color white

If you want “lightness levels” between white and black, then use grays.

<div class="my-4 grid gap-1">
<div class="b-thin p-2 t-center t-white bg-black">t-white bg-black</div>
<div class="b-thin p-2 t-center t-black bg-white">t-black bg-white</div>
</div>

**New in Baselayer v.3.5:** If you want something black in the light theme but white in the dark theme (and vise versa), Baselayer has `*-reversi` and `*-reversi-flip` classes that handle this. See [reversi](https://en.wikipedia.org/wiki/Reversi).

* `*-reversi` — black for light theme; white for dark theme
* `*-reversi-flip` — white for light theme; black for dark theme

<div class="my-4 grid gap-1">
<div class="b-thin p-2 t-center t-reversi-flip bg-reversi">t-reversi-flip bg-reversi</div>
<div class="b-thin p-2 t-center t-reversi bg-reversi-flip">t-reversi bg-reversi-flip</div>
</div>

```html
<div class="t-white bg-black">...</div>

<div class="t-black bg-white">...</div>

<div class="t-reversi-flip bg-reversi">...</div>

<div class="t-reversi bg-reversi-flip">...</div>
```

### Transparent background

E.g. for outline buttons.

* Transparent: `bg-transparent`

There are no hover states of `bg-transparent`.
