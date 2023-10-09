---
title: Decoration
mainHeading: Decoration
layout: base.njk
prevPage: "/layout/"
nextPage: "/colors/"
prevLink: "Layout"
nextLink: "Colors"
---

## Spacing (margins and paddings)

[Box model](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model) margin and padding spacing have both 4 levels based on 4 CSS variables. The smallest simply adds 0.5rem spacing, whereas levels 2-4 are responsive to viewport width using `clamp()` functions to ramp up to 1.5× their base size. These variables are set in the variables file. They have been calculated using Petter Walbø Johnsgård’s [Font-size Clamp Generator](https://clamp.font-size.app/).

```
:root {
  --sp-1: 0.5rem;
  --sp-2: clamp(1rem, 0.5rem + 1.25vw, 1.5rem);
  --sp-3: clamp(2rem, 1rem + 2.5vw, 3rem);
  --sp-4: clamp(3rem, 1.5rem + 3.75vw, 4.5rem);
}
```

This makes the negative space (“whitespace”) for spacing levels 2-4 larger for larger screens.

Both margin and padding spacers are controlled on the 4 sides of blocks, as follows:

* All: `m-1` through `m-4` / `p-1` through `p-4` (all four sides)
* Top: `mt-1` through `mt-4` / `pt-1` through `pt-4`
* Right: `mr-1` through `mr-4` / `pr-1` through `pr-4`
* Bottom: `mb-1` through `mb-4` / `pb-1` through `pb-4`
* Left: `ml-1` through `ml-4` / `pl-1` through `pl-4`
* Inline x-axis (right and left): `mx-1` through `mx-4` / `px-4` through `px-4`
* Block y-axis (top and bottom): `my-1` through `my-4` / `py-4` through `py-4`

Spacing example with paddings:

<div class="mb-2 b-1 p-1"><code>p-1</code></div>

<div class="mb-2 b-1 p-2"><code>p-2</code></div>

<div class="mb-2 b-1 p-3"><code>p-3</code></div>

<div class="mt-1 mb-2 b-1 p-4"><code>p-4</code></div>

### Spacing extras

In addition, there are the following specials:

* `p-cell` — adds y-axis padding `--sp-1` and x-axis padding of double `--sp-1` for creating menu items. Same as the padding for table cells and buttons
* `mx-auto` — for x-axis margin auto-centering
* `m-0`, `mt-0`, `mb-0`, and `p-0` — for removing (resetting) unwanted space.

`mb-0` is commonly used for removing the bottom margin on the last paragraph (or other typographic block) inside a `<div>` panel. `mt-0` is commonly used for removing top margin for headers used in side-columns (e.g. for navigation menus).

These zero spacing utilities are declared before the spacers above in `decoration.css` so that you can use them to _reset_ and then use spacers to set spacing the way you want it.

## Borders

Baselayer provides three thicknesses of border (plus a zero border override):

<div class="mb-2 b-1 p-1"><code>b-1</code> (1px)</div>

<div class="mb-2 b-2 p-1"><code>b-2</code> (4px)</div>

<div class="mb-2 b-3 p-1"><code>b-3</code> (8px)</div>

Borders can be set as follows:

* All: `b-*`
* Top: `bt-*`
* Right: `br-*`
* Bottom: `bb-*`
* Left: `bl-*`

### Border extra

* `b-0` — for removing (resetting) all borders

## Rounded corners

* `r-2` — 4px border radius
* `r-3` — 8px border radius
* `r-4` — 16px border radius

<div class="mt-2 mb-3 grid equal-3-cols gap-2">
  <div class="b-1 r-2 p-1">r-2</div>
  <div class="b-1 r-3 p-1">r-3</div>
  <div class="b-1 r-4 p-1">r-4</div>
</div>

**Note:** border-radius classes have `overflow: hidden` built in, so that they can “clip” the corners of images.

Border and border-radius variables pair as follows:

<table class="table t-center">
  <thead>
    <tr>
      <th>Border variable</th>
      <th>Border-radius variable</th>
      <th>Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>--b1</code></td>
      <td>n/a</td>
      <td><code>1px</code></td>
    </tr>
    <tr>
      <td><code>--b2</code></td>
      <td><code>--r2</code></td>
      <td><code>4px</code></td>
    </tr>
    <tr>
      <td><code>--b3</code></td>
      <td><code>--r3</code></td>
      <td><code>8px</code></td>
    </tr>
    <tr>
      <td>n/a</td>
      <td><code>--r4</code></td>
      <td><code>16px</code></td>
    </tr>
  </tbody>
</table>

**Note:** There is no `--r1` (a border radius of 1px) or `--b4` (border radius of 16px) in Baselayer.

* `r-pill` — 99em border radius (more than sufficient to put x-axis semi-circular ends on even mid-sized blocks)

<div class="mt-2 mb-3 b-1 r-pill p-3">pill</div>

If `r-pill` is used on a square, then the result will be a circle.

<div class="mt-2 mb-3 b-1 r-pill flex flex-center flex-middle t-center" style="width: 280px; height: 280px;">280px²<br>square pill</div>

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