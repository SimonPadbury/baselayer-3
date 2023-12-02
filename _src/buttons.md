---
title: Buttons
mainHeading: Buttons
layout: base.njk
prevPage: "/forms/"
prevLink: "Forms"
nextPage: "/examples/"
nextLink: "Examples"
---

Baselayer form elements have simple background, hover/active and focus styling (no default border). 

### Button types and link “pseudo-buttons”

<form class="mt-2 mb-3">
  <button type="button" name="button">Button</button>
  <input type="button" name="input" value="Input Button">
  <input type="submit" name="submit" value="Submit Button">
  <input type="reset" name="reset" value="Reset Button">
  <a class="btn" href="">Link “button”</a>
</form>

```
<button type="button" name="button">Button</button>

<input type="button" name="input" value="Input Button">

<input type="submit" name="submit" value="Submit Button">

<input type="reset" name="reset" value="Reset Button">

<a class="btn" href="">Link “button”</a>
```

**Notes:**

1. Form inputs, textareas, buttons, and the `btn` class, have `font-size: inherit`. This means their font sizes can be modified by any font-size class in Baselayer.
2. The font-family of form elements, buttons, `btn` is controlled by `var(--base)` (default is sans-serif).
3. The `btn` class doesn’t include the input focus ring (that is set only on form inputs, textareas, and the `<button>` tag). But if the `btn` utility class is used on an `<a href="">` link tag, then will get the link focus ring insead (this is only visible when keyboard-tabbing or using assistive tech).

## Full-width buttons

In Baselayer, buttons are pre-styled with `display: inline-flex` and centering and middling flexbox alignment. So, if you want a button to stretch full-width, you can add `class="w100%"` or you can override the inline-flex by adding `class="flex"`.

<div aria-label="Note" class="popout mb-2 bl-3 b-orange b-300 p-2 t-black bg-orange bg-100">
  Do not use <code>class="block"</code> on a button (or <code>.btn</code>) because that will override its inline flexbox.
</div>

<button class="w-100% my-2" type="button" name="button">Button</button>

```
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

```
<button class="flex-space-between" type="button" name="button">
  Button
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><polyline points="208 96 128 176 48 96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></polyline></svg>
</button>
```

Down-caret SVG icon from [Phosphor Icons](https://phosphoricons.com/), with color set by `currentColor`, and width and height 16px — same as font size (1rem).

Another way to control the width of a button is _from outside of it_ — by wrapping the button in a `grid` so that the button adopts the dimensions of a grid item.

## Adding colors

Border, background, and text color utilities can be used.

<form class="mt-2 mb-3">
  <label for="example-input-text">Label</label>
  <input class="b-2 b-red" type="text" id="example-input-text" placeholder="Enter some text here">
  <input class="b-2 b-green" type="text" id="example-input-text" placeholder="Enter some text here">
</form>

```
<label for="example-input-text">Label</label>

<input class="b-2 b-red" type="text" id="example-input-text" placeholder="Enter some text here">

<input class="b-2 b-green" type="text" id="example-input-text" placeholder="Enter some text here">
```

When colorizing buttons, remember to set their `hover:` hover state shades too.

<form>
  <p>
    <button type="button" name="button">Button</button>
    <button class="b-blue b-600 hover:b-700 bg-blue bg-600 hover:bg-700" type="button" name="button">Button</button>
    <button class="b-orange b-300 hover:b-400 t-black hover:t-black bg-orange bg-300 hover:bg-400" type="button" name="button">Button</button>
    <a class="btn b-1 b-green bg-transparent bg-600 t-green t-600 hover:b-700 hover:t-white hover:bg-green hover:bg-700" href="#/">Link “button”</a>
  </p>
</form>

```
<!-- Default button -->
<button type="button" name="button">Button</button>

<!-- Blue button -->
<button class="b-blue b-600 hover:b-700 bg-blue bg-600 hover:bg-700" type="button" name="button">Button</button>

<!-- orange button -->
<button class="b-orange b-300 hover:b-400 t-black hover:t-black bg-orange bg-300 hover:bg-400" type="button" name="button">Button</button>

<!-- Green outline (a.k.a. ghost) link “button” -->
<a class="btn b-1 b-green bg-transparent bg-600 t-green t-600 hover:b-700 hover:t-white hover:bg-green hover:bg-700" href="#/">Link “button”</a>
```

## Buttons with icons

In Baselayer, buttons are pre-styled with `display: inline-flex` and centering and middling flexbox alignment. So, all you need to do is add an icon and it will all line up.

<p>
  <button type="button" name="button" class="gap-1">
    Search
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><circle cx="116" cy="116" r="84" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></circle><line x1="175.4" y1="175.4" x2="224" y2="224" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line></svg>
  </button>
</p>

```html
<button type="button" name="button" class="gap-1">
  Search
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor">
    <!-- SVG icon -->
  </svg>
</button>
```

Baselayer CSS buttons works well with SVG icons, e.g. [Phosphor icons](https://phosphoricons.com/). Set the width and height of the icon to be e.g. 16px, 20px, or 24px. Set the fill colors to be `currentColor` so that it can be controlled by the CSS.

If you are combining text with an icon, you may sometimes need to add some space using `gap-1` within your button (see [flex layouts]({{ '/layout/' | url }}#flex-layouts)). That’s the easiest way. Alternatively, you could put `&nbsp;` between your button text and icon.

For icon-only buttons, add the CSS class  `btn-icon` and have only a single character or icon in the button — this will make the button to be a square.

<form>
  <p class="flex flex-middle">
    <button type="button" name="button">Button</button>&nbsp;
    <button class="btn-icon" type="button" name="button">1</button>&nbsp;
    <button class="btn-icon" type="button" name="button">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><line x1="40" y1="128" x2="216" y2="128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line><polyline points="144 56 216 128 144 200" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></polyline></svg>
    </button>
  </p>
</form>

## Pill buttons

The `r-pill` class on a square icon button will make it circular. (See [decoration: rounded corners](/baselayer-3/decoration/#rounded-corners).)

<form>
  <p class="flex flex-middle">
    <button class="r-pill" type="button" name="button">Button</button>&nbsp;
    <button class="btn-icon r-pill" type="button" name="button">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><line x1="40" y1="128" x2="216" y2="128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line><polyline points="144 56 216 128 144 200" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></polyline></svg>
    </button>
  </p>
</form>

```
<button class="r-pill" type="button" name="button">Button</button>

<button class="btn-icon r-pill" type="button" name="button">I</button>
```

## Button sizes

The typographic size modifier classes `t-small` and `t-big` work on buttons.

<form class="mt-2 mb-3 flex flex-middle gap-1">
  <button type="button" name="button" class="t-small">Button</button>
  <button type="button" name="button">Button</button>
  <button type="button" name="button" class="t-big">Button</button>
</form>

```
<form class="flex flex-middle gap-1">
  <button type="button" name="button" class="t-small">Button</button>
  <button type="button" name="button">Button</button>
  <button type="button" name="button" class="t-big">Button</button>
</form>
```

**Note:** button x-axis padding is `1em`, so that it responds to the text size of the button.

## Stretch buttons

You can increase the x-axis padding (using the responsive `px-2` or `px-3`) to make a button more impressive:

<form class="mt-2 mb-3 flex flex-middle gap-1">
  <button type="button" name="button">Button</button>
  <button class="px-2" type="button" name="button">Button</button>
  <button class="px-3" type="button" name="button">Button</button>
</form>

```
<button type="button" name="button">Button</button>

<button class="px-2" type="button" name="button">Button</button>

<button class="px-3" type="button" name="button">Button</button>
```
