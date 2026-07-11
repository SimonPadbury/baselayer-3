---
title: Decoration
mainHeading: "Baselayer 3: Decoration"
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

<div class="my-3 expand overt-flow-x">
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

All Baselayer border radius classes apply their border radius potentially to all four corners. If you want different radii on different corners of the same element, then you can access each of the spacing variables in your CSS, or set your own values.

**Tip:** If you are putting rounded corners on a block element that contains an image, you will also need to add `overt-flow-clip`.

There are five modifier classes. These only supply a spacing variable.

* `rounded-tiny` — `--s-tiny`
* `rounded` — `--s-1` (alias `rounded-1`)
* `rounded-2` — `--s-2`
* `rounded-3` — `--s-3`
* `rounded-4` — `--s-4`
* `rounded-pill` — 999em

Examples:

<div class="expand my-3 grid xs:equal-2-cols sm:equal-3-cols gap-2 t-center">
  <div class="b-thin rounded-tiny px-2 py-4"><code>rounded-tiny</code></div>
  <div class="b-thin rounded px-2 py-4"><code>rounded</code></div>
  <div class="b-thin rounded-2 px-2 py-4"><code>rounded-2</code></div>
  <div class="b-thin rounded-3 px-2 py-4"><code>rounded-3</code></div>
  <div class="b-thin rounded-4 px-2 py-4"><code>rounded-4</code></div>
  <div class="b-thin rounded-pill px-2 py-4"><code>rounded-pill</code></div>
</div>

If the element is a square, then `rounded rounded-pill` makes a circle.

<div class="w-xxs mx-auto mb-4">
<div class="b-thin aspect-ratio-1x1 rounded rounded-pill p-4 flex flex-center flex-middle"><code>rounded <span class="t-nowrap">rounded-pill</span></code></div>
</div>

## Box shadows

`bs-1` / `bs-2` / `bs-3`

Baselayer box shadows are intended to represent layer “lifts” along the z-axis. The higher a layer is lifted from the page, the less sharpness and more spread the box shadow has. This also means that the higher the suffix, the fainter the shadow becomes as it is spread over a wider area.</p>

**Note:** box shadows require a layer behind them that’s lighter than the shadow, else they will not be seen, especially in the dark theme.

<div class="my-3 p-3 flex flex-wrap gap-3 bg-gray bg-100 dark:bg-600">
  <div class="bs-1 p-2">bs-1</div>
  <div class="bs-2 p-2">bs-2</div>
  <div class="bs-3 p-2">bs-3</div>
</div>

Lighting is simulated as from the front top center, so more of the shadow is cast at the bottom the element. There's also a slight inset-shadow lighening (i.e. subtle highlight) of the top of the panel.

```html
<div class="bs-1">bs-1</div>

<div class="bs-2">bs-2</div>

<div class="bs-3">bs-3</div>
```

Baselayer also has hover states for each of the 3 levels of box shadows. Hover over the panels below to see them in action.

<div class="my-3 p-3 flex flex-wrap gap-3 bg-gray bg-100 dark:bg-600">
  <div class="hover:bs-1 p-2">hover:bs-1</div>
  <div class="hover:bs-2 p-2">hover:bs-2</div>
  <div class="hover:bs-3 p-2">hover:bs-3</div>
</div>

## Image contain and cover

`img-contain` and `img-cover` are designed for use on an `<img src="">` tag.

The `img-contain` class can be used to make an image expand or contract so that it is fully seen within a wrapper, without distorting the image. If the image aspect ratio is taller than the wrapper, then some empty space will appear right and left of the image. And if the image aspect ratio is wider than the wrapper, then some empty space will appear to the top and bottom of the image.

The `img-cover` class can be used to make an image expand or contract to fully cover a wrapper block rectangle. If the image aspect ratio is taller than the wrapper, then its top and bottom will seem to be cropped. And if the image aspect ratio is wider than the wrapper, then its right and left sides will seem to be cropped.

There are also some image alignment modifiers that can be paired with `img-cover`.

* `img-cover img-cover-top` — ensures the top part of the image is in view
* `img-cover img-cover-right` — ensures the right part of the image is in view
* `img-cover img-cover-bottom` — ensures the bottom part of the image is in view
* `img-cover img-cover-left` — ensures the left part of the image is in view
