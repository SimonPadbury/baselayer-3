---
title: Buttons
mainHeading: "Baselayer 3: Buttons"
layout: base.njk
prevPage: "/forms/"
prevLink: "Forms"
nextPage: "/examples/"
nextLink: "Examples"
---

Baselayer form elements have simple background, hover state and focus styling.

## Button types and link pseudo-buttons

<form class="mt-2 mb-3">
  <button type="button" name="button">Button</button>
  <input type="button" name="input" value="Input Button">
  <input type="submit" name="submit" value="Submit">
  <input type="reset" name="reset" value="Reset">
  <a class="btn" href="">Link “button”</a>
</form>

```html
<button type="button" name="button">Button</button>

<input type="button" name="input" value="Input Button">

<input type="submit" name="submit" value="Submit Button">

<input type="reset" name="reset" value="Reset Button">

<!-- Styling a link as a button -->
<a class="btn" href="">Link “button”</a>
```

**Notes:**

1. Form elements and buttons (including the `btn` class) have `font-size: inherit`. This means their font sizes can be modified by any font-size limit around the button in Baselayer.
2. The font-family of form elements and buttons is controlled by `var(--base-ff)` (default is sans-serif).
3. Buttons and form elements have the same min-width, min-height and padding, so that they can be used in combination. All these are sent to `0.5em`, so that it will also respond to the font-size of the form element or button.
4. Buttons have built-in `display: inline-flex` and centering and middling flexbox alignment.
5. Buttons have a built-in hover background-color change: the background color becomes darker for the light theme, and lighter for the dark theme. You don’t need to set the hover state of buttons.

## Full-width buttons

If you want a button to stretch full-width there are multiple options:

1. Add `class="w-100%"` to the button
2. Override the inline-flex by adding `class="flex"`. (Do not use `class="block"` on a button because that will override its inline flexbox.)
3. Include the button as a flex-item or grid-item, so that the `flex` or `grid` wrapper takes care of the button width.

<button class="w-100% my-2" type="button" name="button">Button</button>

```html
<button class="w-100%" type="button" name="button">
  Button
</button>
```

Also, since buttons already have `display: inlne-flex`, this means that adding the `flex-space-between` class to the button will also stretch the button _if you have more than one item_ inside the button, such as the descriptive text _plus_ an icon.

For example, here’s a full-width button with a down-caret icon and spacing controlled by flexbox:

<button class="mt-2 mb-3 flex-space-between" type="button" name="button">
  Button
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><polyline points="208 96 128 176 48 96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></polyline></svg>
</button>

```html
<button class="flex-space-between" type="button" name="button">
  Button
  <!-- Icon -->
  <svg>...</svg>
</button>
```

Down-caret SVG icon from [Phosphor Icons](https://phosphoricons.com/), with color set by `currentColor`, and width and height 16px — same as font size (1rem).

Another way to control the width of a button is _from outside of it_ — by wrapping the button in a `grid` so that the button adopts the dimensions of a grid item.

## Adding colors to buttons

Border, background, and text color utilities can be used.

<form class="my-3">
  <p>
    <button type="button" name="button">Button</button>
    <button class="bg-blue" type="button" name="button">Button</button>
    <button class="bg-amber" type="button" name="button">Button</button>
    <button class="t-black bg-amber bg-200 dark:bg-300" type="button" name="button">Button</button>
    <a class="btn b-thin b-green bg-transparent t-green hover:t-reversi-flip hover:bg-green" href="#/">Link “button”</a>
  </p>
</form>

Buttons have a built-in hover color-change: the background color becomes darker for the light theme, and lighter for the dark theme.

```html
<!-- Default button -->
<button type="button" name="button">Button</button>

<!-- Blue button -->
<button class="bg-blue" type="button" name="button">Button</button>

<!-- Amber buttons -->
<button class="bg-amber" type="button" name="button">Button</button>
<button class="t-black bg-amber bg-200 dark:bg-300" type="button" name="button">Button</button>

<!-- Green outline (a.k.a. ghost) link “button” -->
<a class="btn b-thin b-green bg-transparent t-green hover:t-reversi-flip hover:bg-green" href="#/">Link “button”</a>
```

## Buttons with icons

In Baselayer, buttons have built-in `display: inline-flex` and centering and middling flexbox alignment. So, all you need to do is add an icon (ASCII character, SVG or small image), and it will all line up.

Buttons have built-in equal min-width and min-height. So, if you only have an icon or single ASCII character, and if your icon width is equal or smaller than its height and your icon is square, then you get a square button. (`w-auto` can be used to override the min-width.)

<button type="button">button</button>
<button type="button">&star;</button>
<button class="w-auto" type="button">&star;</button>
<button type="button" name="button" class="gap-tiny">
  Search
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><circle cx="116" cy="116" r="84" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></circle><line x1="175.4" y1="175.4" x2="224" y2="224" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line></svg>
</button>

Baselayer CSS buttons works well with SVG icons, e.g. [Phosphor icons](https://phosphoricons.com/). Set the width and height of the icon to be 24px for default (medium) sized buttons. Also, you probably want to set the fill colors to be `currentColor` so that it can be controlled by the CSS.

If you are combining text with an icon, you may sometimes need to add some space using `gap-tiny` within your button (see [flex layouts]({{ '/layout/' | url }}#flex-layouts)). That’s the easiest way. Alternatively, you could put `&nbsp;` between your button text and icon.

## Pill buttons

`rounded-pill` roundes the right and left ends of a button. Adding `rounded-pill` to a square button will make it circular. (See [decoration: rounded corners]({{ "/decoration/#rounded-corners" | url }}).)

<form>
  <p class="flex flex-middle">
    <button class="rounded-pill" type="button" name="button">Button</button>&nbsp;
    <button class="rounded-pill aspect-ratio-1x1 p-0" type="button" name="button">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><line x1="40" y1="128" x2="216" y2="128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line><polyline points="144 56 216 128 144 200" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></polyline></svg>
    </button>
  </p>
</form>

If you have some text in a button with `rounded-pill` (i.e. not a single character or icon), the rounded ends will be too close to the text (as in the example above). So, add some inline paddingusing one of the `px-*` utilities, depending on how much you need.

Button with `rounded-pill px-2`: <button class="rounded-pill px-2" type="button">Button</button>

## Button sizes

Buttons (including the `btn` utility) and form inputs will resize according to the font-size of the block that they are inside.

In baselayer, button min-width, min-height, and padding are all set in ems, so that they scale according to the text size.

You can also use the typographic size classes `t-sm` and `t-lg` on the buttons or inputs to modify buttons directly. You will still need to use these if the internal character is replaced by an SVG icon. You will also want to change the `width=""` and the `height=""` directly.

<form class="mt-2 mb-3">
  <div class="flex flex-middle gap-1">
    <button  class="t-sm" type="button" name="button">Button</button>
    <button type="button" name="button">Button</button>
    <button  class="t-lg" type="button" name="button">Button</button>
  </div>
  <div class="mt-3 flex flex-middle gap-1">
    <button class="aspect-ratio-1x1 p-0 t-sm" type="button" name="button" class="t-sm">1</button>
    <button class="aspect-ratio-1x1 p-0" type="button" name="button">2</button>
    <button class="aspect-ratio-1x1 p-0 t-lg" type="button" name="button" class="t-lg">3</button>
    <button class="rounded-pill aspect-ratio-1x1 p-0 t-sm" type="button" name="button">
      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><line x1="40" y1="128" x2="216" y2="128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line><polyline points="144 56 216 128 144 200" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></polyline></svg>
    </button>
    <button class="rounded-pill aspect-ratio-1x1 p-0" type="button" name="button">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><line x1="40" y1="128" x2="216" y2="128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line><polyline points="144 56 216 128 144 200" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></polyline></svg>
    </button>
    <button class="rounded-pill aspect-ratio-1x1 p-0 t-lg" type="button" name="button">
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><line x1="40" y1="128" x2="216" y2="128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line><polyline points="144 56 216 128 144 200" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></polyline></svg>
    </button>
  </div>
  <div class="mt-3 flex flex-middle gap-1">
    <a href="#" class="btn t-sm">Link “button”</a>
    <a href="#" class="btn">Link “button”</a>
    <a href="#" class="btn t-lg">Link “button”</a>
  </div>
</form>

```html
<form class="flex flex-middle gap-1">
  <button type="button" name="button" class="t-sm">Button</button>
  <button type="button" name="button">Button</button>
  <button type="button" name="button" class="t-lg">Button</button>

  <a href="#" class="btn t-sm">Link “button”</a>
  <a href="#" class="btn">Link “button”</a>
  <a href="#" class="btn t-lg">Link “button”</a>
</form>
```
