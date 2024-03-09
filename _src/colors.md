---
title: Colors
mainHeading: Colors
layout: base.njk
prevPage: "/decoration/"
nextPage: "/forms/"
prevLink: "Decoration"
nextLink: "Forms"

---

<div aria-label="Note" class="popout mb-2 bl-3 b-blue b-200 b-dark-invert p-2 bg-blue bg-100 bg-dark-invert">
  Since March 2023, all “evergreen” browsers (Chrome, Edge, Firefox, Safari) have capability for the new <code class="bg-blue bg-200 bg-dark-invert">color-mix()</code> function (see <a href="https://caniuse.com/?search=color-mix()">Can I use</a>). Baselayer 3.3.x uses this function to set up a range of shades for its built-in (example) colors. 
</div>

Example using background `bg-*` utility classes:

<div class="full-bleed mb-2 p-2 flex flex-center flex-wrap">
  <div style="width: max(72px, 160px)">
    <div class="p-1 t-center"><code class="t-small">bg-blue</code></div>
    <div class="p-1 t-black t-small bg-blue bg-100">bg-100</div>
    <div class="p-1 t-black t-small bg-blue bg-200">bg-200</div>
    <div class="p-1 t-black t-small bg-blue bg-300">bg-300</div>
    <div class="p-1 t-black t-small bg-blue bg-400">bg-400</div>
    <div class="p-1 t-white t-small bg-blue bg-500">bg-500</div>
    <div class="p-1 t-white t-small bg-blue bg-600">bg-600</div>
    <div class="p-1 t-white t-small bg-blue bg-700">bg-700</div>
    <div class="p-1 t-white t-small bg-blue bg-800">bg-800</div>
    <div class="p-1 t-white t-small bg-blue bg-900">bg-900</div>
  </div>
  <div style="width: max(72px, 160px)">
    <div class="p-1 t-center"><code class="t-small">bg-green</code></div>
    <div class="p-1 t-black t-small bg-green bg-100">bg-100</div>
    <div class="p-1 t-black t-small bg-green bg-200">bg-200</div>
    <div class="p-1 t-black t-small bg-green bg-300">bg-300</div>
    <div class="p-1 t-black t-small bg-green bg-400">bg-400</div>
    <div class="p-1 t-black t-small bg-green bg-500">bg-500</div>
    <div class="p-1 t-white t-small bg-green bg-600">bg-600</div>
    <div class="p-1 t-white t-small bg-green bg-700">bg-700</div>
    <div class="p-1 t-white t-small bg-green bg-800">bg-800</div>
    <div class="p-1 t-white t-small bg-green bg-900">bg-900</div>
  </div>
  <div style="width: max(72px, 160px)">
    <div class="p-1 t-center"><code class="t-small">bg-amber</code></div>
    <div class="p-1 t-black t-small bg-amber bg-100">bg-100</div>
    <div class="p-1 t-black t-small bg-amber bg-200">bg-200</div>
    <div class="p-1 t-black t-small bg-amber bg-300">bg-300</div>
    <div class="p-1 t-black t-small bg-amber bg-400">bg-400</div>
    <div class="p-1 t-black t-small bg-amber bg-500">bg-500</div>
    <div class="p-1 t-white t-small bg-amber bg-600">bg-600</div>
    <div class="p-1 t-white t-small bg-amber bg-700">bg-700</div>
    <div class="p-1 t-white t-small bg-amber bg-800">bg-800</div>
    <div class="p-1 t-white t-small bg-amber bg-900">bg-900</div>
  </div>
  <div style="width: max(72px, 160px)">
    <div class="p-1 t-center"><code class="t-small">bg-red</code></div>
    <div class="p-1 t-black t-small bg-red bg-100">bg-100</div>
    <div class="p-1 t-black t-small bg-red bg-200">bg-200</div>
    <div class="p-1 t-black t-small bg-red bg-300">bg-300</div>
    <div class="p-1 t-black t-small bg-red bg-400">bg-400</div>
    <div class="p-1 t-white t-small bg-red bg-500">bg-500</div>
    <div class="p-1 t-white t-small bg-red bg-600">bg-600</div>
    <div class="p-1 t-white t-small bg-red bg-700">bg-700</div>
    <div class="p-1 t-white t-small bg-red bg-800">bg-800</div>
    <div class="p-1 t-white t-small bg-red bg-900">bg-900</div>
  </div>
  <div style="width: max(72px, 160px)">
    <div class="p-1 t-center"><code class="t-small">bg-gray</code></div>
    <div class="p-1 t-black t-small bg-gray bg-100">bg-100</div>
    <div class="p-1 t-black t-small bg-gray bg-200">bg-200</div>
    <div class="p-1 t-black t-small bg-gray bg-300">bg-300</div>
    <div class="p-1 t-black t-small bg-gray bg-400">bg-400</div>
    <div class="p-1 t-white t-small bg-gray bg-500">bg-500</div>
    <div class="p-1 t-white t-small bg-gray bg-600">bg-600</div>
    <div class="p-1 t-white t-small bg-gray bg-700">bg-700</div>
    <div class="p-1 t-white t-small bg-gray bg-800">bg-800</div>
    <div class="p-1 t-white t-small bg-gray bg-900">bg-900</div>
  </div>
</div>

## Rationale for Baselayer’s color system

I wanted to develop a color system that was based on CSS variables for generating a series of shades for each color, so that the stylesheet didn’t need to be overloaded with all the shade permutations for each color — most of which you would never use. 

Previously, I experimented with setting **shades based on lightness channels**, first in the `hsl` (Baselayer 3.1.x) and later in the new `oklch` color systems (Baselayer 3.2.x). This was successful, but it involved the additional effort of converting colors to OKLCH and to separate out their color channels into different variables, for enabling them to work with the shade channel utilities.

In Baselayer 3.3, I have switched to setting **shades based on mixing in white or black** using the new `color-mix()` function (see [MDN docs: color-mix()](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/color-mix)). The CSS classes remain the same as before, while the color format is now hex (#) based. This is easier to maintain, and stylesheet is smaller.

## Color and shade utility classes

All colors and shades are declared in `variables.css`.

Color utility classes (declared in `@layer color-setup`) are prefixed acording to where the color will be applied:

* Border color:
    * `b-*`
    * `hover:b-*` — border color on hover
* Text color:
    * `t-*`
    * `hover:t-*` — text color on hover
* Background color:
    * `bg-*`
    *  `hover:bg-*` — background color on hover

I have named the colors according to their common names (blue, green, amber, red, gray), instead of opting to name them according to the common user interface (UI) “success”, “warning”, “danger” etc. — so that you can make color utilities or components with colors dedicated to those purposes, meanwhile allowing you to adjust these built-in named colors and also add your own.

All color utilities “start” at their `*-500` level, or mid-tone (this is what you will get if you don’t add a shade modifier utility). 

The shade modifier utilities (declared in `@layer color-shade`) are as follows:

* Border:
    * `b-100` through `b-900`
    * `hover:b-100` through `hover:b-900`
* Text:
    * `t-100` through `t-900`
    * `hover:t-100` through `hover:t-900`
* Background:
    * `bg-100` through `bg-900`
    * `hover:bg-100` through `hover:bg-900`

Also available:

1. [Dark theme](#dark-theme), via the `theme-dark` wrapper — see .
2. `b-dark-invert`, `t-dark-invert`, and `bg-dark-invert` modifiers that invert the shade for dark mode, in those situations when you want light elements in light mode to become dark elements in dark mode (and _vise versa_) — see [darker and inverted shade utilities](#darker-and-inverted-shade-utilities).
3. Black, white, reversi, and transparent — see [other Baselayer color utilities](#other-baselayer-color-utilities).

Example border, text and background utilities:

<div class="mt-2 mb-3 flex flex-grow-equal gap-2">
  <div class="b-3 b-green p-2 flex flex-center flex-middle"><span class="t-nowrap">b-green</span></div>
  <div class="p-2 flex flex-center flex-middle gap-1 flex-wrap t-green t-600 t-dark-invert"><span class="t-nowrap">t-green</span> <span class="t-nowrap">t-600</span> <span class="t-nowrap">t-dark-invert</span></div>
  <div class="p-2 flex flex-center flex-middle gap-1 flex-wrap t-black bg-green bg-300"><span class="t-nowrap">bg-green</span> <span class="t-nowrap">bg-200</span></div>
</div>

```
<div class="b-3 b-green"></div>
<div class="t-green t-600 t-dark-invert"></div>
<div class="t-black bg-green bg-300"></div>
```

Example usage:

<div aria-label="Note" class="popout mb-2 bl-3 b-amber b-300 p-2 t-black bg-amber bg-100">
  &#9888; Warning alert panel.
</div>

```html
<div aria-label="Note" class="popout mb-2 bl-3 b-amber b-300 p-2 t-black bg-amber bg-100">
  &#9888; Warning alert panel.
</div>
```

The shades `*-100` through `*-900`, if used alone, don’t provide color. But if you use them to supplement one of the other colors above, then that color class will provide the color, and the shade class will set its lightness level.

## Colors and accessibility

<div aria-label="Note" class="popout mb-2 bl-3 b-amber b-300 b-dark-invert p-2 bg-amber bg-100 bg-dark-invert">
  In any color model, color combinations must be chosen with care so that there is sufficient contrast between text and background colors for purposes of assessibility.
</div>

In your text and background color combinations, be careful to ensure that the text is readable — there needs to be an adequate contrast. Generally, you will want to aim at **WCAG level AA** for accessibility compliance.

For WCAG level AA compliance, most user interface colors need to be _darker than the middle shade_ (i.e. use `*-600` up) if the text color is white, or _lighter than the middle shade_ (i.e. use `*-400` down) if the text color is black.

However, any colors near yellow, such as Baselayer amber, as well as orange and yellow-green (not included) are notoriously difficult for accessibility. You may do better using a lighter background amber and pairing it with black text.

<form>
  <p>
    <button type="button" name="button">Button</button>
    <button class="bg-blue bg-600 hover:bg-700" type="button" name="button">Button</button>
    <button class="t-black hover:t-black bg-amber bg-400 hover:bg-500" type="button" name="button">Button</button>
    <button class="b-1 b-green bg-transparent t-green t-600 hover:b-700 hover:t-white hover:bg-green hover:bg-700" type="button" name="button">Button</button>
  </p>
</form>

When colorizing buttons, remember to set their `hover:` hover state shades too.

```html
<!-- Default button -->
<button type="button" name="button">Button</button>

<!-- Blue button -->
<button class="bg-blue bg-600 hover:bg-700" type="button" name="button">Button</button>

<!-- Amber button -->
<button class="t-black hover:t-black bg-amber bg-400 hover:bg-500" type="button" name="button">Button</button>

<!-- Green outline (a.k.a. ghost) button -->
<button class="b-1 b-green bg-transparent t-green t-600 hover:b-700 hover:t-white hover:bg-green hover:bg-700" type="button" name="button">Button</button>
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

## Adding more colors and shades

You can, of course, add any colors you want, and in any format you want.

However, if you want to use Baselayer 3.3.x’s shade classes `-100` thorugh `-900` on your color(s), then you need to start from a mid-tone that works as a `-500` shade. The `color-mix()` formulas mix in various levels of white to shades `-100` through `-400`, and various levels of black to shades `-600` through `-900`.

Also, you will need to put your color(s) in `@layer color-setup {}` so that it gets added before `@layer color-shades {}`.

You can add your own project colors in any format, but the Baselayer `color-mix()` formulas will output shade in SRGB format.

## Dark theme

Baselayer 3 has a simple dark theme built in. The dark theme is as follows:

1. HTML elements are generally flipped from light to dark, or dark to light:
    * Body background is near black
    * Text is near white
    * Table borders, horizontal rules, form inputs are dark gray
    * Text links are a lighter blue
    * Default buttons are a lighter gray
2. Color utilities (blue, green, amber, red, gray) are slightly darkened, to make them easier on the eye.
3. On hover, the link text color and the default button background color both are made lighter (inverted behavior).
4. Color utilities can optionally be inverted by adding the `*-dark-invert` modifier classes.

### The `theme-dark` class

In `baselayer.min.css` the dark theme is set by the CSS class `theme-dark` that can be programatically added to the `<html>` tag by a [JavaScript toggle](#dark%2Flight-theme-toggle).

If you don’t want to give your visitors the option to toggle, then you can manually refactor the CSS to make the dark theme simply respond to the `prefers-color-scheme: dark` instead.

```css
@media (prefers-color-scheme: dark) {
  /*
  Your dark theme styles
  */
}
```

### Darker and inverted shade utilities

Each color shade variant has a darker shade for the dark theme. For example, in dark mode `bg-100` is slightly darker than in light mode. This makes the shades easier on the eye in dark mode.

There are, however, circumstances in your design where you don’t want colors to be merely darkened but also inverted (light shades become dark shades, and dark shades become light shades).

This shade inverting has been built into the dark theme for (classless) `<body>` background, text, links, form inputs, table borders, and horizontal rules.

Baselayer 3 has an optinal inverted version of of its shade utilities (for text, border, and background), as well as having them shoghtly darkened. To make this happen, all you need to do is add another modifier class to those elements you wish to shade invert for dark mode.

Example using `bg-blue`:

```html
<!-- will slightly darken in dark mode -->
<div class="bg-blue bg-100"></div>

<!-- will slightly darken AND invert in dark mode -->
<div class="bg-blue bg-100 bg-dark-invert"></div>
```

<table class="table">
<thead>
<tr class="grid equal-3-cols">
<th>Shade (lightness)</th>
<th><code>bg-blue</code></th>
<th><code>bg-blue bg-dark-invert</code></th>
</tr>
</thead>
<tbody>
<tr class="grid equal-3-cols">
<td><code>bg-100</code></td>
<td class="bg-blue bg-100">&nbsp;</td>
<td class="bg-blue bg-dark-invert bg-100">&nbsp;</td>
</tr>
<tr class="grid equal-3-cols">
<td><code>bg-200</code></td>
<td class="bg-blue bg-200">&nbsp;</td>
<td class="bg-blue bg-dark-invert bg-200">&nbsp;</td>
</tr>
<tr class="grid equal-3-cols">
<td><code>bg-300</code></td>
<td class="bg-blue bg-300">&nbsp;</td>
<td class="bg-blue bg-dark-invert bg-300">&nbsp;</td>
</tr>
<tr class="grid equal-3-cols">
<td><code>bg-400</code></td>
<td class="bg-blue bg-400">&nbsp;</td>
<td class="bg-blue bg-dark-invert bg-400">&nbsp;</td>
</tr>
<tr class="grid equal-3-cols">
<td><code>bg-500</code></td>
<td class="bg-blue bg-500">&nbsp;</td>
<td class="bg-blue bg-dark-invert bg-500">&nbsp;</td>
</tr>
<tr class="grid equal-3-cols">
<td><code>bg-600</code></td>
<td class="bg-blue bg-600">&nbsp;</td>
<td class="bg-blue bg-dark-invert bg-600">&nbsp;</td>
</tr>
<tr class="grid equal-3-cols">
<td><code>bg-700</code></td>
<td class="bg-blue bg-700">&nbsp;</td>
<td class="bg-blue bg-dark-invert bg-700">&nbsp;</td>
</tr>
<tr class="grid equal-3-cols">
<td><code>bg-800</code></td>
<td class="bg-blue bg-800">&nbsp;</td>
<td class="bg-blue bg-dark-invert bg-800">&nbsp;</td>
</tr>
<tr class="grid equal-3-cols">
<td><code>bg-900</code></td>
<td class="bg-blue bg-900">&nbsp;</td>
<td class="bg-blue bg-dark-invert bg-900">&nbsp;</td>
</tr>
</tbody>
</table>

The middle `t-500`, `b-500`, and `bg-500` do not invert, of course. So, e.g. `bg-500 bg-dark-invert` does not exist in `baselayer.css`.

<p class="mb-3 t-bold t-center">Baselayer 3.3.x’s color shades are darkened for the dark theme</p>
<div class="mb-3 w-100% mx-auto" style="max-width: 30em">
<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:square;stroke-linejoin:round;stroke-miterlimit:1.5" viewBox="0 0 121 119"><path d="M20 1.964v100M110 17 30 97M20 101.964h100" style="fill:none;stroke:currentColor;stroke-width:.3px"/><text x="29.038" y="112.923" style="font-family:&quot;ArialMT&quot;,&quot;Arial&quot;,sans-serif;font-size:4.167px;fill:currentColor" transform="rotate(-60 29.038 112.923)">100</text><text x="39.038" y="112.923" style="font-family:&quot;ArialMT&quot;,&quot;Arial&quot;,sans-serif;font-size:4.167px;fill:currentColor" transform="rotate(-60 39.038 112.923)">200</text><text x="49.038" y="112.923" style="font-family:&quot;ArialMT&quot;,&quot;Arial&quot;,sans-serif;font-size:4.167px;fill:currentColor" transform="rotate(-60 49.038 112.923)">300</text><text x="59.038" y="112.923" style="font-family:&quot;ArialMT&quot;,&quot;Arial&quot;,sans-serif;font-size:4.167px;fill:currentColor" transform="rotate(-60 59.038 112.923)">400</text><text x="69.038" y="112.923" style="font-family:&quot;ArialMT&quot;,&quot;Arial&quot;,sans-serif;font-size:4.167px;fill:currentColor" transform="rotate(-60 69.038 112.923)">500</text><text x="79.038" y="112.923" style="font-family:&quot;ArialMT&quot;,&quot;Arial&quot;,sans-serif;font-size:4.167px;fill:currentColor" transform="rotate(-60 79.039 112.923)">600</text><text x="89.039" y="112.923" style="font-family:&quot;ArialMT&quot;,&quot;Arial&quot;,sans-serif;font-size:4.167px;fill:currentColor" transform="rotate(-60 89.038 112.923)">700</text><text x="99.039" y="112.923" style="font-family:&quot;ArialMT&quot;,&quot;Arial&quot;,sans-serif;font-size:4.167px;fill:currentColor" transform="rotate(-60 99.038 112.923)">800</text><text x="109.039" y="112.923" style="font-family:&quot;ArialMT&quot;,&quot;Arial&quot;,sans-serif;font-size:4.167px;fill:currentColor" transform="rotate(-60 109.039 112.923)">900</text><text x="4.843" y="3.456" style="font-family:&quot;ArialMT&quot;,&quot;Arial&quot;,sans-serif;font-size:4.167px;fill:currentColor">100%</text><text x="7.161" y="13.456" style="font-family:&quot;ArialMT&quot;,&quot;Arial&quot;,sans-serif;font-size:4.167px;fill:currentColor">90%</text><text x="7.161" y="23.456" style="font-family:&quot;ArialMT&quot;,&quot;Arial&quot;,sans-serif;font-size:4.167px;fill:currentColor">80%</text><text x="7.161" y="33.456" style="font-family:&quot;ArialMT&quot;,&quot;Arial&quot;,sans-serif;font-size:4.167px;fill:currentColor">70%</text><text x="7.161" y="43.456" style="font-family:&quot;ArialMT&quot;,&quot;Arial&quot;,sans-serif;font-size:4.167px;fill:currentColor">60%</text><text x="7.161" y="53.456" style="font-family:&quot;ArialMT&quot;,&quot;Arial&quot;,sans-serif;font-size:4.167px;fill:currentColor">50%</text><text x="7.161" y="63.456" style="font-family:&quot;ArialMT&quot;,&quot;Arial&quot;,sans-serif;font-size:4.167px;fill:currentColor">40%</text><text x="7.161" y="73.456" style="font-family:&quot;ArialMT&quot;,&quot;Arial&quot;,sans-serif;font-size:4.167px;fill:currentColor">30%</text><text x="7.161" y="83.456" style="font-family:&quot;ArialMT&quot;,&quot;Arial&quot;,sans-serif;font-size:4.167px;fill:currentColor">20%</text><text x="7.161" y="93.456" style="font-family:&quot;ArialMT&quot;,&quot;Arial&quot;,sans-serif;font-size:4.167px;fill:currentColor">10%</text><text x="9.478" y="103.456" style="font-family:&quot;ArialMT&quot;,&quot;Arial&quot;,sans-serif;font-size:4.167px;fill:currentColor">0%</text><text x="22.695" y="61.259" style="font-family:&quot;ArialMT&quot;,&quot;Arial&quot;,sans-serif;font-size:4.167px;fill:currentColor">Light theme shades</text><text x="33.236" y="65.562" style="font-family:&quot;ArialMT&quot;,&quot;Arial&quot;,sans-serif;font-size:4.167px;fill:currentColor">(default)</text><text style="font-family:&quot;ArialMT&quot;,&quot;Arial&quot;,sans-serif;font-size:4.167px;fill:currentColor" transform="translate(59.157 25.784)">Dark theme</text><text x="4.05" y="4.167" style="font-family:&quot;ArialMT&quot;,&quot;Arial&quot;,sans-serif;font-size:4.167px;fill:currentColor" transform="translate(59.157 25.784)">shades</text><text x="93.776" y="49.956" style="font-family:&quot;ArialMT&quot;,&quot;Arial&quot;,sans-serif;font-size:4.167px;fill:currentColor">Inverted dark</text><text x="92.848" y="54.259" style="font-family:&quot;ArialMT&quot;,&quot;Arial&quot;,sans-serif;font-size:4.167px;fill:currentColor">theme shades</text><text x="90.856" y="58.192" style="font-family:&quot;Menlo-Regular&quot;,&quot;Menlo&quot;,monospace;font-size:3.333px;fill:currentColor">(*-dark-invert)</text><text x="48.411" y="117.949" style="font-family:&quot;ArialMT&quot;,&quot;Arial&quot;,sans-serif;font-size:4.167px;fill:currentColor">Shade sufﬁx number</text><text style="font-family:&quot;Menlo-Regular&quot;,&quot;Menlo&quot;,monospace;font-size:4.167px;fill:currentColor" transform="rotate(-90 41.172 36.518)">color-mix()</text><text x="28.754" style="font-family:&quot;ArialMT&quot;,&quot;Arial&quot;,sans-serif;font-size:4.167px;fill:currentColor" transform="rotate(-90 41.172 36.518)">shade value</text><path d="M20 1.964h-2M20 11.964h-2M20 21.964h-2M20 31.964h-2M20 41.964h-2M20 51.964h-2M20 61.964h-2M20 71.964h-2M20 81.964h-2M20 91.964h-2M20 101.964h-2M30 101.964v2M40 101.964v2M50 101.964v2M60 101.964v2M70 101.964v2M80 101.964v2M90 101.964v2M100 101.964v2M110 101.964v2" style="fill:none;stroke:currentColor;stroke-width:.3px"/><path d="m45.845 77.973 2.155.991-1.13-2.086-1.025 1.095Z" style="fill:currentColor"/><path d="M41 67.964c.008 3.629 3.661 7.759 5.686 9.769" style="fill:none;stroke:currentColor;stroke-width:.5px"/><path d="M74.846 41.509 77 42.5l-1.129-2.086-1.025 1.095Z" style="fill:currentColor"/><path d="M70 31.5c.009 3.629 3.662 7.759 5.687 9.769" style="fill:none;stroke:currentColor;stroke-width:.5px"/><path d="m100.033 68.878-1.13 2.086 2.155-.991-1.025-1.095Z" style="fill:currentColor"/><path d="M105.903 59.964c-.008 3.629-3.661 7.759-5.686 9.769" style="fill:none;stroke:currentColor;stroke-width:.5px"/><path d="M110 16 30 80M30 16l80 64" style="fill:none;stroke:currentColor;stroke-width:.3px;stroke-dasharray:3,3,0,0"/></svg>
</div>

### Hover states for links and buttons

In the default light theme, the blue link text becomes a darker blue, and the default gray button becomes a darker gray, on `:hover` states. But in the dark theme, this behaviour is inverted: links become a lighter blue and buttons become a lighter gray.

You can easily change this. Lighter and darker options for blue links and gray buttons are included in variables as follows:

```css
.theme-dark {
  /* text color for links (default) */
  --tc-link: color-mix(in srgb, var(--blue) calc(var(--l400) * 2), white);
  --tc-link-lighter: color-mix(in srgb, var(--blue) calc(var(--l300) * 2), white);
  --tc-link-darker: color-mix(in srgb, var(--blue) calc(var(--l500) * 2), white);
  --tc-link-hover: var(--tc-link-lighter);

  /* background color for buttons (default) */
  --bgc-btn: color-mix(in srgb, var(--gray) calc((100% - var(--l600)) * 2), black);
  --bgc-btn-lighter: color-mix(in srgb, var(--gray) calc((100% - var(--l500)) * 2), white);
  --bgc-btn-darker: color-mix(in srgb, var(--gray) calc((100% - var(--l700)) * 2), black);
  --bgc-btn-hover: var(--bgc-btn-lighter);
}
```

To make your styled links and buttons have an inverted behavior as above, you need to use `*-dark-invert` utilities.

### Dark theme HTML body background color

Baselayer 3’s dark theme `<body>` color has been made darker than the color shades set by the `bg-900` utility, so that elements colored by those shades are still visible. For this purpose an shade variable of `--l1000` has been added. (Therefore, you can  use `bg-900` or `bg-100 bg-dark-invert` to color the background of a panel, without it “disappearing” into the body background color.)

```css
.theme-dark {
  --l1000: 87.5%;

  --bgc-body: color-mix(in srgb, var(--gray) calc((100% - var(--l1000)) * 2), black); /* = #1e1e1e */
}
```

As with all Baselayer’s variables, this dark theme `<body>` color is an example that you can change to suit the needs of your project.

### Dark/light theme toggle

Baselayer’s dark/light theme switcher JavaScript uses [sessionStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage) in the user’s browser to remember their theme preference as they visit multiple pages in this documentation.

This script adds the CSS class `theme-dark` to the `<html>` tag of the webpage, so that it is implimented (almost) immediately, before the `<body>` is painted in the browser window. 

The switcher script also adds `theme-light` to the `<html>` tag in light mode, but there are no `theme-light` classes in `baselayer.min.css`. The `theme-light` class is merely there for visual confirmation to the deleveloper viewing the browser inspector, and it is used for adjusting the dark/light theme state indicator symbol in the switcher button.

The theme switcher in the Baselayer docs is built into its `switcher.js` demo toggling system, that powers the buttons in the sidebar. If you want to use the same dark/light mode toggler, here it is isolated below (no JS framework required):

```js
const matchMediaDark = window.matchMedia('(prefers-color-scheme: dark)');
const htmlClassList = document.querySelector('html').classList;

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

function toggleTheme() {
  if ( sessionStorage.baselayerTheme === 'dark' ) {
    themeLight();
  } else {
    themeDark();
  }
};

function baselayerInit() {
  if (sessionStorage.baselayerTheme === 'dark' || (!('baselayerTheme' in sessionStorage) && matchMediaDark.matches)) {
    themeDark();
  } else {
    themeLight();
  }
};

baselayerInit();
```

You will also need a toggle button, like the one in the sidebar. The checkmarks are added in by CSS pseudo-selectors.

<p class="flex flex-center">
  <button class="toggler p-cell flex flex-column gap-1 bg-blue bg-600 hover:bg-700 bg-dark-invert" onclick="toggleTheme()">
    <div class="label-light w-100% flex flex-middle gap-1">
      <div class="check-box flex flex-center flex-middle t-black bg-white"></div>
      <div class="grow left">Light theme</div>
    </div>
    <div class="label-dark w-100% flex flex-middle gap-1">
      <div class="check-box flex flex-center flex-middle t-black bg-white"></div>
      <div class="grow left">Dark theme</div>
    </div>
  </button>
</p>

Another, simpler example theme toggle button, using glyphs selected from [&what;](https://www.amp-what.com)

<style>
  .theme-dark .theme-toggle span::before { content: '☀️ light '; }
  .theme-light .theme-toggle span::before { content: '🌙 dark '; }
</style>

<p class="flex flex-center">
  <button class="theme-toggle pl-1 t-reversi-alt bg-reversi" onclick="toggleTheme()">
    <span>theme</span>
  </button>
</p>

```
<style>
  .theme-dark .theme-toggle span::before { content: '☀️ light '; }
  .theme-light .theme-toggle span::before { content: '🌙 dark '; }
</style>

<button class="theme-toggle pl-1 t-reversi-alt bg-reversi" onclick="toggleTheme()">
  <span>theme</span>
</button>
```

The simple example above uses `bg-reversi` to put a “night time” black background behind the moon and a “day time” white background behind the sun, meanwhile `t-reversi-` flips the text color the opposite way. See [black, white, reversi, and reversi-alt](/baselayer-3/colors/#black%2C-white%2C-reversi%2C-and-reversi-alt) below.

## Other Baselayer color utilities

<div aria-label="Note" class="popout mb-2 bl-3 b-blue b-200 b-dark-invert p-2 bg-blue bg-100 bg-dark-invert">
  The color utilities for black, white, reversi, reversi-alt, and transparent <em>can’t be used on the same element</em> with the colors and shades above (i.e. as either default or hover states). These other utilities are declared after the colors and shades, and so they will override them. 
</div>

Other color utilities included in Baselayer cover black, white, and transparent, as follows:

### Black, white, reversi, and reversi-alt

There are utilities for border color, text color, and background color for each of the following (and `hover:` prefix states):

* `-black` — named color black:
* `-white` — named color white:
* `-reversi` is black on a light theme, white on a dark theme:
* `-reversi-alt` is white on a light theme, black on a dark theme:

<div class="mt-2 mb-3 grid gap-1 sm:equal-4-cols">
<div class="b-1 p-3 t-center t-white bg-black">Black</div>
<div class="b-1 p-3 t-center t-black bg-white">White</div>
<div class="b-1 p-3 t-center t-reversi-alt bg-reversi">Reversi</div>
<div class="b-1 p-3 t-center t-reversi bg-reversi-alt">Reversi-alt</div>
</div>

```html
<div class="t-white bg-black">Black</div>

<div class="t-black bg-white">White</div>

<div class="t-reversi-alt bg-reversi">Reversi</div>

<div class="t-reversi bg-reversi-alt">Reversi-alt</div>
```

You don’t need to use `*-dark-invert` on the reversi and reversi-alt utilities. And `*-dark-invert` doesn’t work on the black and white utilities.

### Transparent background

E.g. for outline buttons.

* Transparent:
    * `bg-transparent`

There are no hover states of `bg-transparent`.