---
title: Colors
mainHeading: "Baselayer 3: Colors"
layout: base.njk
prevPage: "/decoration/"
nextPage: "/forms/"
prevLink: "Decoration"
nextLink: "Forms"
---

<p class="t-lg">Baselayer’s color utility class system is based on using the modern CSS <code>oklch()</code> function and a series of interpolated lightness level variables that enable the lightness level utility classes to work. The lightnsses for color each class are not pre-created, unlike with other CSS frameworks.</p>

In the HTML, you first choose the color utility class, then you choose the lightness level class separately. Handled this way, the stylesheet doesn’t need to be loaded with lighness classes for every color — most of which you would never use.

The `oklch()` function has been [baseline: widely available](https://developer.mozilla.org/en-US/docs/Glossary/Baseline/Compatibility) since March 2023. All “evergreen” browsers (Chrome, Edge, Firefox, Safari) have capability to use it (see [Can I use](https://caniuse.com/?search=color-mix())).

In setting up the lightness utility classes, Baselayer’s `oklch()` formulas use the hue (h) and chroma (c) values out of the theme color variables. The lightness levels `*-100` trough `*-900` are _perceptually uniform_.

Demo using background `bg-*` utility classes:

<div class="full-bleed my-3 p-2 flex flex-center flex-wrap">
  <div style="width: clamp(96px, 15cqi, 208px)">
    <div class="p-2 t-center"><code class="t-small">blue</code></div>
    <div class="p-2 t-black t-small bg-blue bg-100">100</div>
    <div class="p-2 t-black t-small bg-blue bg-200">200</div>
    <div class="p-2 t-black t-small bg-blue bg-300">300</div>
    <div class="p-2 t-black t-small bg-blue bg-400">400</div>
    <div class="p-2 t-white t-small bg-blue bg-500">500</div>
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
    <div class="p-2 t-white t-small bg-green bg-500">500</div>
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
    <div class="p-2 t-white t-small bg-amber bg-500">500</div>
    <div class="p-2 t-white t-small bg-amber bg-600">600</div>
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
    <div class="p-2 t-white t-small bg-red bg-500">500</div>
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
    <div class="p-2 t-white t-small bg-gray bg-500">500</div>
    <div class="p-2 t-white t-small bg-gray bg-600">600</div>
    <div class="p-2 t-white t-small bg-gray bg-700">700</div>
    <div class="p-2 t-white t-small bg-gray bg-800">800</div>
    <div class="p-2 t-white t-small bg-gray bg-900">900</div>
  </div>
</div>

Also available:

1. A built-in [dark theme](#dark-theme).
2. `black`, `white`, `reversi`, `reversi-flip`, and `transparent` — see [other Baselayer color utilities](#other-baselayer-color-utilities).

## Color and shade utility classes

All colors and lightness levels are declared in `variables.css`.

Color utility classes (declared in `colors.css`) are prefixed acording to where the color will be applied — border `b-*` text `t-*` or background `bg-*`. I have named the colors according to their common names (blue, green, amber, red, gray). You can modify the root variables of these colors, and you can add your own by copying and modifying the border, text, and background utilities you see at the start of `css/_colors.css` — see [adding more colors](#adding-more-colors).

<div class="my-4 expand">
<table class="table">
<thead>
<tr>
<th></th>
<th class="t-center bg-gray bg-100 dark:bg-900">Border Color</th>
<th class="t-center">Text Color</th>
<th class="t-center bg-gray bg-100 dark:bg-900">Background Color</th>
</tr>
</thead>
<tbody>
<tr class="bb-thin">
<td colspan="7" class="p-0 px-1 t-heavy t-loose t-uppercase bg-gray bg-200 dark:bg-800">Light theme (default)</td>
</tr>
<tr class="bb-thin">
<td>Lightness modifier</td>
<td class="bg-gray bg-100 dark:bg-900"><code>b-100</code><br>...<br><code>b-900</code></td>
<td><code>t-100</code><br>...<br><code>t-900</code></td>
<td class="bg-gray bg-100 dark:bg-900"><code>bg-100</code><br>...<br><code>bg-900</code></td>
</tr>
<tr class="bb-thin">
<td colspan="7" class="p-0 px-1 t-heavy t-loose t-uppercase bg-gray bg-200 dark:bg-800">Dark theme*</td>
</tr>
<tr>
<td>Lightness modifier</td>
<td class="bg-gray bg-100 dark:bg-900"><code>dark:b-100</code><br>...<br><code>dark:b-900</code></td>
<td><code>dark:t-100</code><br>...<br><code>dark:t-900</code></td>
<td class="bg-gray bg-100 dark:bg-900"><code>dark:bg-100</code><br>...<br><code>dark:bg-900</code></td>
</tr>
</tbody>
</table>
</div>

Example border, text and background utilities:

<div class="my-4 flex flex-grow-equal gap-1 gap-2">
  <div class="b-heavy b-green p-3 flex flex-center flex-middle"><span class="t-nowrap">b-green</span></div>
  <div class="p-3 flex flex-center flex-middle gap-1 flex-wrap t-heavy t-green t-700 dark:t-300"><span class="t-nowrap">t-green</span> <span class="t-nowrap">t-700</span> <span class="t-nowrap">dark:t-300</span></div>
  <div class="p-3 flex flex-center flex-middle gap-1 flex-wrap t-black bg-green bg-300"><span class="t-nowrap">bg-green</span> <span class="t-nowrap">bg-200</span></div>
</div>

```html
<div class="b-heavy b-green"></div>

<div class="t-heavy t-green t-700 dark:t-300"></div>

<div class="t-black bg-green bg-300"></div>
```

See also [dark theme lightness levels](#dark-theme-lightness-levels) and [black, white, and reversi](#black%2C-white%2C-and-reversi).

Example usage:

<div aria-label="Note" class="popout my-4 bl-heavy b-blue b-400 dark:b-600 p-3 t-reversi bg-blue bg-200 dark:bg-800">
  &star; Note (information) panel.
</div>

```html
<div aria-label="Note" class="popout my-3 bl-heavy b-blue b-400 dark:b-600 p-3 t-reversi bg-blue bg-200 dark:bg-800">
  &star; Note (information) panel.
</div>
```

The lighness modifiers `*-100` through `*-900`, if used alone, do not provide color. But if you use them to supplement one of the base colors above, then that color class will provide the color, and the modifier will set its lightness level.

## Colors and accessibility

In any color model, color combinations must be chosen with care so that there is sufficient contrast between text and background colors for purposes of assessibility.

In your text and background color combinations, be careful to ensure that the text is readable — there needs to be an adequate contrast. Most organizations should to aim for [WCAG level AA](https://www.w3.org/WAI/WCAG2AA-Conformance) for accessibility requirements.

For WCAG level AA conformance, most user interface colors need to be _mid-level_ (i.e. use `*-500` up) if the text color is white, or _lighter than the mid-level_ (i.e. use `*-400` down) if the text color is black.

<form class="my-4">
  <p>
    <button type="button" name="button">Button</button>
    <button class="bg-blue" type="button" name="button">Button</button>
    <button class="bg-amber" type="button" name="button">Button</button>
    <button class="t-black bg-amber bg-200 dark:bg-300" type="button" name="button">Button</button>
    <button class="b-thin b-green bg-transparent t-green t-600 hover:t-white hover:bg-green hover:bg-600" type="button" name="button">Button</button>
  </p>
</form>

Buttons have a built-in hover background-color change: the background color becomes darker for the light theme, and lighter for the dark theme.

```html
<!-- Default button -->
<button type="button" name="button">Button</button>

<!-- Blue button -->
<button class="bg-blue" type="button" name="button">Button</button>

<!-- Amber buttons -->
<button class="bg-amber" type="button" name="button">Button</button>
<button class="t-black bg-amber bg-200 dark:bg-300" type="button" name="button">Button</button>

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

## How Baselayer CSS handles color

Baselayer handles color in a 4-step process:

1. The 5 baselayer colors are first declared as CSS variables:

    ```css
    :root {
      /* Theme base colors */
      --blue: #4166f5;
      --green: #00a550;
      --amber: #ffdc00;
      --red: #e34234;
      --gray: #838996;
    }
    ```

2. The utility class lightness level suffixes go up in hundreds, from `-100` to `-1000`. (The `-1000` is only used once in Baselayer, for setting the dark theme `<body>` background. Levels `-100` to `-900` are used in the lightness utility classes.)

    ```css
    :root {
      --l100: 98%;
      --l200: 86%;
      --l300: 74%;
      --l400: 62%;
      --l500: 50%;
      --l600: 42%;
      --l700: 34%;
      --l800: 26%;
      --l900: 18%;
      --l1000: 10%;
    }
    ```

3. In the variables file, Baselayer colors are set up using the formula. For example, in the base text color:

    ```css
    :root {
      --tc-base: background-color: light-dark(
        oklch(from var(--gray) var(--l900) c h),
        oklch(from var(--gray) var(--l100) c h)
      );
    }
    ```

4. Finally, the variable is used in a style rule:

    ```css
    body {
      color: var(--tc-base);
    }
    ```

## Adding more colors

You can add any colors you want, and in any format you want. But if you want to add colors in a way that integrates with the Baselayer system, do this:

1. You need to declare your colors first as CSS variables (preferably in the `:root{}`), so that they are available for the lightness utility classes.
2. You need to insert your colors _before_ the Baselayer `@layer bl-colors` so that  your colors can make use of the Baselayer color shades.

Examples:

```css
:root {
  --purple: #9400d3;
  --teal: #0080A2;
}

/* If you want to create your own utility classes */

/* Border colors */

.b-teal,
.hover\:b-teal:hover {
  --bc: var(--teal);
  border-color: oklch(from var(--bc) var(--bl, 50%) c h);
}
.b-purple,
.hover\:b-purple:hover {
  --bc: var(--purple);
  border-color: oklch(from var(--bc) var(--bl, 50%) c h);
}

/* Text colors */

.t-purple,
.hover\:t-purple:hover {
  --tc: var(--purple);
  color: oklch(from var(--tc) var(--tl, 50%) c h);
}
.t-teal,
.hover\:t-teal:hover {
  --tc: var(--teal);
  color: oklch(from var(--tc) var(--tl, 50%) c h);
}

/* Background colors */

.bg-purple,
.hover\:bg-purple:hover {
  --bgc: var(--purple);
  background-color: oklch(from var(--bgc) var(--bgl, 50%) c h);
}
.bg-teal,
.hover\:bg-teal:hover {
  --bgc: var(--teal);
  background-color: oklch(from var(--bgc) var(--bgl, 50%) c h);
}
```

The five Baselayer built-in theme colors (blue, green, amber, red, gray) are set using hex `#` codes). However, if you add your own in all other color system, the `oklch( ... )` formulas can handle it.

## How the dark theme works

Baselayer has a simple dark theme built in. Since v.3.4.0, the user’s operating system preference for light or dark mode is automatically detected on the HTML tag by the following CSS:

```css
html {
  color-scheme: light dark;
}
```

For the dark theme, HTML elements are generally flipped from light to dark, or dark to light, as required. The colors are shifted as follows:

<table class="table">
<thead>
<tr>
<th></th>
<th>Light theme</th>
<th>Dark theme</th>
</tr>
</thead>
<tbody>
<tr>
<td>Body background</td>
<td>White</td>
<td>Near black</td>
</tr>
<tr>
<td>Base text</td>
<td>Dark gray</td>
<td>White</td>
</tr>
<tr>
<td>Links/ hovered</td>
<td>Mid blue/ Darker blue</td>
<td>Mid blue/ Lighter blue</td>
</tr>
<tr>
<td>Buttons/ hovered</td>
<td>Mid gray/ Darker gray</td>
<td>Mid gray/ Lighter gray</td>
</tr>
<tr>
<td>Table borders, horizontal rules, form inputs</td>
<td>Mid-light gray</td>
<td>Mid-dark gray</td>
</tr>
<tr>
<td>Form elements’ text and background</td>
<td>Same as base text and body in light theme</td>
<td>Same as base text and body in dark theme</td>
</tr>
</tbody>
</table>

All the theme color variables in Baselayer involve a `light-dark()` CSS function. For example:

```css
:root {
  /* Body tag background color */

  --bgc-body: light-dark(
    white,
    color-mix(in oklch, var(--gray), var(--l950)));

  /* Base text color (also set on the body tag) */

  --tc-base: light-dark(
    color-mix(in OKLCH, var(--gray), var(--l900)),
    color-mix(in OKLCH, var(--gray), var(--l100))
  );
}
```

Baselayer does not use `@media (prefers-color-scheme: dark) {}` anywhere.

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
* Except for [reversi](#black%2C-white%2C-and-reversi), colors can't be switched when switching between light and dark mode (only lightness utilities have a `dark:` prefix option).

### What if you don’t want a dark theme?

Then you can simply override or replace the HTML tag as follows:

```css
html {
  color-scheme: light;
}
```

And then you won’t need to use any `dark:` prefixed uilities.

## Other Baselayer color utilities

### Black, white, and reversi

Black and white are explicitly named colors in baselayer. They do not have lightness levels (use grays).

If you want something black in the light theme but white in the dark theme (and vise versa like [reversi](https://en.wikipedia.org/wiki/Reversi) game pieces), Baselayer has `*-reversi` and `*-reversi-flip` classes that handle this.

* `*-black` / `hover:*-black` — named color black
* `*-white` / `hover:*-white` — named color white
* `*-reversi` / `hover:*-reversi` — black for light theme; white for dark theme
* `*-reversi-flip` / `hover:*-reversi-flip` — white for light theme; black for dark theme

<div class="w-xs mx-auto my-3 grid equal-2-cols">
<div class="b-thin aspect-ratio-1x1 rad rad-pill p-4 flex flex-center flex-middle t-center t-white bg-black"><span>t-white<br> bg-black</span></div>
<div class="b-thin aspect-ratio-1x1 rad rad-pill p-4 flex flex-center flex-middle t-center t-black bg-white"><span>t-black<br> bg-white</span></div>
<div class="b-thin aspect-ratio-1x1 rad rad-pill p-4 flex flex-center t-center flex-middle t-reversi-flip bg-reversi"><span>t-reversi-flip<br> bg-reversi</span></div>
<div class="b-thin aspect-ratio-1x1 rad rad-pill p-4 flex flex-center flex-middle t-center t-reversi bg-reversi-flip"><span>t-reversi<br> bg-reversi-flip</span></div>
</div>

### CurrentColor

* Border-color: `b-currentcolor` / background-color: `bg-currentcolor`
* Also aliases `b-currentolor` / `bg-currentColor`. 

Sets the border or background to `currentColor` — the current text color.

There are no hover states of `*-currentColor` — but if the color changes on hover, then so will the `*-currentColor`.

### Transparent

* Border-color: `b-transparent` / background-color `bg-transparent`

There are no hover states of `*-transparent`.

### Hover state utilities

Since Baselayer v.3.8.0, named color utility classes have a hover state (declared by the prefix `hover:`) but shade utility classes do not.

The following elements and classes have hover states:

* `<a href="">` links have a text-color change on hover: becoming darker for the light theme and lighter for the dark theme. Examples:
    <div class="my-3 t-center">
    <a href="">Default (blue) link</a>
    <a class="t-green" href="">Green link</a>
    </div>

    ```html
    <a href="">Default (blue) link</a>
    <a class="t-green" href="">Green link</a>
    ```
* Buttons (`<input>` buttons, `<button>`, and pseudo button links `<a class="btn" href="">`) have a background-color change on hover: becoming darker for the light theme and lighter for the dark theme.
* Named color utilities can “switch on” color in the hover state, if you add the `hover:` prefix. Example:
    ```html
    <!-- Outline (ghost) button -->
    <button class="b-thin b-green bg-transparent t-green t-600 hover:t-white hover:bg-green hover:bg-600" type="button" name="button">Button</button>

    <!-- Adding a hover color to a table row -->
    <tr class="hover:bg-gray bg-100 dark:bg-900"> ... </tr>
    ```

### Glass (blur) and filter backgrounds

The following color utility modifiers are intended for use in conjunction with background colors and shade (they do not include color).

Use these classes on layers above images. You will see little or no effect from them unless thy are used on a panel in front of a photo or complex pattern.

* `bg-glass` (alias `bg-blur`) — mid-opacity, blurred backround
* `bg-filter` — mid-opacity background
* `hover:bg-opaque` – removes the blur, and sets the opacity level to 1 (fully opaque)

These modifiers can also be used in conjunction with the background lightness utilities (but not the `dark:` lightness utilities). When `bg-100` ... `bg-900` are used with `bg-glass`, `bg-blur`, or `bg-filter`, the refactored to affect the transparency level.

Examples:

* `bg-glass bg-white bg-900` – a highly opaque white glassmorphic blur effect
* `bg-filter bg-white bg-200` – a lightly transparent black glass effect
* `bg-filter bg-green` – a green mid-opacity filter
