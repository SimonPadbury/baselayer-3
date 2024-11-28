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

[Box model](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model) margin and padding spacing have both 4 levels based on 4 CSS variables. These same spacing variables are also used for gaps (in flexbox and the grid system), and for border radius utilities.

The smallest level simply adds 0.5rem spacing, whereas levels 2 thorugh 4 increase responsively depending how how much width is available, using `clamp()` functions to ramp up to 1.5× their base size.

The middle ramp within the clamp uses container query dependant units, `cqi`. This will either take effect from the container query context on the `<body>` tag, or from any inner `container` classes that may be added on block elements (see [Layouts/ container query contexts]({{ "/layout/#container-query-contexts" | url }})).

```css
:root {
  --s-1: 0.25rem; /* 4px */
  --s-2: 0.5rem; /* 8px */
  --s-3: clamp(1rem, 0.5rem + 1.25cqi, 1.5rem); /* 16px --> 24px */
  --s-4: clamp(2rem, 1rem + 2.5cqi, 3rem); /* 32px --> 40px */
}
```

This makes the negative space (“whitespace”) for spacing levels 2 through 4 larger where there is a larger container (or viewport) width available.

<div class="my-3 expand overflow-x">
<table class="table">
<thead>
<th>Spacing variable</th>
<th>Default value</th>
<th>Margin (e.g.)</th>
<th>Padding (e.g.)</th>
<th>Border radius</th>
<th>Gap (flexbox and grid)</th>
</thead>
<tbody>
<tr>
<td><code>--s-1</code></td>
<td><code>0.25rem</code></td>
<td><code>m-1</code></td>
<td><code>p-1</code></td>
<td><code class="t-nowrap">rad-1</code></td>
<td><code class="t-nowrap">gap-1</code></td>
</tr>
<tr>
<td><code>--s-2</code></td>
<td><code>0.5rem</code></td>
<td><code>m-2</code></td>
<td><code>p-2</code></td>
<td><code>rad-2</code></td>
<td><code>gap-2</code></td>
</tr>
<tr>
<td><code>--s-3</code></td>
<td><code>clamp(1rem, 0.5rem + 1.25cqi, 1.5rem)</code></td>
<td><code>m-3</code></td>
<td><code>p-3</code></td>
<td><code>rad-3</code></td>
<td><code>gap-3</code></td>
</tr>
<tr>
<td><code>--s-4</code></td>
<td><code>clamp(2rem, 1rem + 2.5cqi, 3rem)</code></td>
<td><code>m-4</code></td>
<td><code>p-4</code></td>
<td><code>rad-4</code></td>
<td><code>gap-4</code></td>
</tr>
</tbody>
</table>
</div>

Spacing example with paddings:

<div class="mt-3 mb-4 flex flex-column gap-3">
<div class="b-thin p-1"><code>p-1</code></div>
<div class="b-thin p-2"><code>p-2</code></div>
<div class="b-thin p-3"><code>p-3</code></div>
<div class="b-thin p-4"><code>p-4</code></div>
</div>

Both margin and padding spacers are controlled on the 4 sides of blocks, as follows:

* All: `m-0` through `m-4` / `p-0` through `p-4` (all four sides)
* Top: `mt-0` through `mt-4` / `pt-0` through `pt-4`
* Right: `mr-0` through `mr-4` / `pr-0` through `pr-4`
* Bottom: `mb-0` through `mb-4` / `pb-0` through `pb-4`
* Left: `ml-0` through `ml-4` / `pl-0` through `pl-4`
* Inline axis, or x-axis (right and left): `mx-1` through `mx-4` / `px-4` through `px-4`
* Block axis, or y-axis (top and bottom): `my-1` through `my-4` / `py-4` through `py-4`

The zero `*-0` options (top, right, bottom, left) are for removing (resetting) unwanted margin and padding.

### Spacing extras

In addition, there are the following specials:

* `p-cell` — adds y-axis padding `--s-1` and x-axis padding of 2 × `--s-1` for creating menu items. Same as the padding for table cells and buttons
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

### Border extra

* `b-0` — for removing (resetting) all borders

## Rounded corners

All Baselayer border radius classes apply their border radius _potentially to all four corners_. If you want different radii on different corners of the same element, then you can access each of the spacing variables in your CSS, or set your own values.

**Tip:** If you are putting rounded corners on a block element that contains an image, you will also need to add `overflow-clip`.

The first five border radius classes below supply the property `border-{...}-radius` and the default spacing variable `--s-1` (0.5rem).

* `rad`, alias `rad-1` — `border-radius:` (all) `--s-1` (0.5rem)
* `rad-tl` — `border-top-left-radius:` `--s-1`
* `rad-tr` — `border-top-right-radius:` `--s-1`
* `rad-br` — `border-bottom-right-radius:` `--s-1`
* `rad-bl` — `border-bottom-left-radius:` `--s-1`

Then there are five modifier classes. These only supply a spacing variable — they do not contain the `border-{...}-radius` property. Therefore, they need to be paired with (at least) one of the five border radius utilities above.

* `rad-1` — `--s-1` 0.25rem
* `rad-2` — `--s-1` 0.5rem
* `rad-3` — `--s-2` clamp(1rem, 0.5rem + 1.25cqi, 1.5rem)
* `rad-4` — `--s-3` clamp(2rem, 1rem + 2.5cqi, 3rem)
* `rad-pill` — `--s-pill` 99rem

Examples:

<div class="expand mt-2 mb-3 grid xs:equal-2-cols sm:equal-3-cols gap-1">
  <div class="b-thin rad px-2 py-4"><code>rad</code> or <code> rad rad-1</code></div>
  <div class="b-thin rad rad-2 px-2 py-4"><code>rad rad-2</code></div>
  <div class="b-thin rad rad-3 px-2 py-4"><code>rad rad-3</code></div>
  <div class="b-thin rad rad-4 px-2 py-4"><code>rad rad-4</code></div>
  <div class="b-thin rad rad-pill px-2 py-4"><code>rad rad-pill</code></div>
  <div class="b-thin rad-tl rad-br rad-3 px-2 py-4"><code>rad-tl rad-br rad-3</code></div>
  <div class="b-thin rad-tl rad-bl rad-pill px-2 py-4"><code>rad-tl rad-bl rad-pill</code></div>
  <div class="b-thin rad-tr rad-pill px-2 py-4"><code>rad-tr rad-pill</code></div>
  <div class="b-thin rad-br rad-bl rad-pill px-2 py-4"><code>rad-br rad-bl rad-pill</code></div>
</div>

If the element is a square, then `rad rad-pill` makes a circle.

<div class="w-xxs mx-auto mb-4">
<div class="b-thin aspect-ratio-1x1 rad rad-pill p-4 flex flex-center flex-middle"><code>rad <span class="t-nowrap">rad-pill</span></code></div>
</div>

## The `img-cover` class

The Baselayer `cover` class can be used to make an image expand or contract to fully cover a container block rectangle. It is designed for use on an `<img src="">` tag.

```
.img-cover {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  overflow: hidden;
}
```

An example of `img-cover` being used can be seen in the [expanded panel]({{ '/layout/#expanded-panels' | url }}) example.

## Opacity

Opacities (with hover states):

* `opacity-25%` / `hover:opacity-25%`
* `opacity-50%` / `hover:opacity-50%`
* `opacity-75%` / `hover:opacity-75%`
*  `hover:opacity-100%` — a reset that removes opacity on hover

The hover states are provided in case you want an image inside a link to change opacity on hover.

If you use these on an image over a colored background, then you get a color-tinted image.

If you have text over an image (e.g. in a hero component), then you can use opacity over a black (or dark color) background to make white text more readable — and _vise versa_.
