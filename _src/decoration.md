---
title: Decoration
mainHeading: Decoration
layout: base.njk
prevPage: "/layout/"
nextPage: "/colors/"
prevLink: "Layout"
nextLink: "Colors"
---

## Spacing

[Box model](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model) margin and padding spacing have 5 levels based on 5 CSS variables. These same spacing variables are also used for gaps (in flexbox and grid system), and for border radius utilities.

```css
:root {
  --s-tiny: 0.25rem
  --s-1: 0.5rem;
  --s-2: 1rem;
  --s-3: clamp(1.5rem, 0.5rem + 1.25cqi, 2rem);
  --s-4: clamp(2rem, 1rem + 2.5cqi, 3rem);
}
```

Spacing levels `--s-3` and `--s-4` increase responsively (to `@container` width, see [container query contexts]({{ "/layout/#container-query-contexts" | url }})) depending how how much width is available, using `clamp()` functions. This makes the negative space (“whitespace”) for spacing levels 3 and 4 larger where there is a larger container (or viewport) width available.

<div class="my-3 expand overflow-x">
<table class="table">
<thead>
<th>Spacing variable</th>
<th>Default value</th>
<th>Margin (e.g.)</th>
<th>Padding (e.g.)</th>
<th>Border radius</th>
<th>Gap (flexbox or grid)</th>
</thead>
<tbody>
<tr>
<td><code class="t-nowrap">--s-tiny</code></td>
<td><code>0.25rem</code></td>
<td><code>m-tiny</code></td>
<td><code>p-tiny</code></td>
<td><code class="t-nowrap">rounded-tiny</code></td>
<td><code class="t-nowrap">gap-tiny</code></td>
</tr>
<tr>
<td><code>--s-1</code></td>
<td><code>0.5rem</code></td>
<td><code>m-1</code></td>
<td><code>p-1</code></td>
<td><code class="t-nowrap">rounded,<br>rounded-1</code></td>
<td><code class="t-nowrap">gap-1</code></td>
</tr>
<tr>
<td><code>--s-2</code></td>
<td><code>1rem</code></td>
<td><code>m-2</code></td>
<td><code>p-2</code></td>
<td><code>rounded-2</code></td>
<td><code>gap-2</code></td>
</tr>
<tr>
<td><code>--s-3</code></td>
<td><code>clamp(1.5rem, 0.5rem + 1.25cqi, 2rem)</code></td>
<td><code>m-3</code></td>
<td><code>p-3</code></td>
<td><code>rounded-3</code></td>
<td><code>gap-3</code></td>
</tr>
<tr>
<td><code>--s-4</code></td>
<td><code>clamp(2rem, 1rem + 2.5cqi, 3rem)</code></td>
<td><code>m-4</code></td>
<td><code>p-4</code></td>
<td><code>rounded-4</code></td>
<td><code>gap-4</code></td>
</tr>
</tbody>
</table>
</div>

Spacing example with paddings:

<div class="mt-3 mb-4 flex flex-column gap-3">
<div class="b-thin p-tiny"><code>p-tiny</code></div>
<div class="b-thin p-1"><code>p-1</code></div>
<div class="b-thin p-2"><code>p-2</code></div>
<div class="b-thin p-3"><code>p-3</code></div>
<div class="b-thin p-4"><code>p-4</code></div>
</div>

Plus, there are zero `*-0` options (top, right, bottom, left) are for removing (resetting) unwanted margin and padding (and `unrounded` for removing border radius (see [rounded corners](#rounded-corners))).

Both margin and padding spacers are controlled on the 4 sides of blocks, as follows:

* All: `m-0` through `m-4` / `p-0` through `p-4` (all four sides)
* Top: `mt-0` through `mt-4` / `pt-0` through `pt-4`
* Right: `mr-0` through `mr-4` / `pr-0` through `pr-4`
* Bottom: `mb-0` through `mb-4` / `pb-0` through `pb-4`
* Left: `ml-0` through `ml-4` / `pl-0` through `pl-4`
* Inline axis, or x-axis (right and left): `mx-tiny` through `mx-4` / `px-4` through `px-4`
* Block axis, or y-axis (top and bottom): `my-tiny` through `my-4` / `py-4` through `py-4`

### Spacing extras

In addition, there are the following specials:

* `p-cell` — adds padding `0.5rem 1rem` for creating menu items. Same as the padding for table cells and buttons
* `mx-auto` — for x-axis margin auto-centering

## Borders

Baselayer provides three thicknesses of border (plus a zero border override):

<div class="mt-3 mb-4 flex flex-column gap-3">
<div class="b-thin p-1"><code>b-thin</code> (1px)</div>
<div class="b-thick p-1"><code>b-thick</code> (4px)</div>
<div class="b-heavy p-1"><code>b-heavy</code> (8px)</div>
</div>

Borders can be set as follows:

* All: `b-*`
* Top: `bt-*`
* Right: `br-*`
* Bottom: `bb-*`
* Left: `bl-*`

### Border extras

* `b-0` — for removing (resetting) all borders
* `b-currentColor` — for setting border color the same as its respective or inherited text color

For more on border colors see [colors]({{ "/colors/" | url }}).

## Rounded corners

All Baselayer border radius classes apply their border radius _potentially to all four corners_. If you want different radii on different corners of the same element, then you can access each of the spacing variables in your CSS, or set your own values.

**Tip:** If you are putting rounded corners on a block element that contains an image, you will also need to add `overflow-clip`.

The first five border radius classes below supply the property `border-{...}-radius` and the default spacing variable `--s-1` (0.25rem).

* `rounded` — `border-radius:` (all) `--s-1`
* `rounded-tl` — `border-top-left-radius:` `--s-1`
* `rounded-tr` — `border-top-right-radius:` `--s-1`
* `rounded-br` — `border-bottom-right-radius:` `--s-1`
* `rounded-bl` — `border-bottom-left-radius:` `--s-1`

Then there are five modifier classes. These only supply a spacing variable — they do not contain the `border-{...}-radius` property. Therefore, they need to be paired with (at least) one of the five border radius utilities above.

* `rounded-tiny` — `--s-tiny` 0.25rem
* `rounded`, `rounded-1` — `--s-1` 0.5rem<br>
(`rounded` comes with `--s-1` by defaut, so `rad-1` is redundant.)
* `rounded-2` — `--s-2` 0.5rem
* `rounded-3` — `--s-3` clamp(1.5rem, 0.5rem + 1.25cqi, 2rem)
* `rounded-4` — `--s-4` clamp(2rem, 1rem + 2.5cqi, 3rem)
* `rounded-pill` — `--s-pill` 99rem

Examples:

<div class="expand mt-2 mb-3 grid xs:equal-2-cols sm:equal-3-cols gap-1 t-center">
  <div class="b-thin rounded rounded-tiny px-2 py-4"><code>rounded rounded-tiny</code></div>
  <div class="b-thin rounded px-2 py-4"><code>rounded</code></div>
  <div class="b-thin rounded rounded-2 px-2 py-4"><code>rounded rounded-2</code></div>
  <div class="b-thin rounded rounded-3 px-2 py-4"><code>rounded rounded-3</code></div>
  <div class="b-thin rounded rounded-4 px-2 py-4"><code>rounded rounded-4</code></div>
  <div class="b-thin rounded rounded-pill px-2 py-4"><code>rounded rounded-pill</code></div>
  <div class="b-thin rounded-tl rounded-br rounded-3 px-2 py-4"><code>rounded-tl rounded-br rounded-3</code></div>
  <div class="b-thin rounded-tl rounded-bl rounded-pill px-2 py-4"><code>rounded-tl rounded-bl rounded-pill</code></div>
  <div class="b-thin rounded-tr rounded-pill px-2 py-4"><code>rounded-tr rounded-pill</code></div>
</div>

If the element is a square, then `rounded rounded-pill` makes a circle.

<div class="w-xxs mx-auto mb-4">
<div class="b-thin aspect-ratio-1x1 rounded rounded-pill p-4 flex flex-center flex-middle"><code>rounded <span class="t-nowrap">rounded-pill</span></code></div>
</div>

## The `img-cover` class

Codebase’s `img-cover` class can be used to make an image expand or contract to fully cover a container block rectangle. It is designed for use on an `<img src="">` tag.

```css
.img-cover {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  overflow: hidden;
}
```

## Opacity

Opacities (with hover states):

* `opacity-25%` / `hover:opacity-25%`
* `opacity-50%` / `hover:opacity-50%`
* `opacity-75%` / `hover:opacity-75%`
* `hover:opacity-100%` — a reset that removes opacity on hover

The hover states are provided in case you want an image inside a link to change opacity on hover.

If you use these on an image over a colored background, then you get a color-tinted image.

If you have text over an image (e.g. in a hero component), then you can use opacity over a black (or dark color) background to make white text more readable — and _vice versa_.
