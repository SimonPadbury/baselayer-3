---
title: Layout
mainHeading: Layout
layout: base.njk
prevPage: "/typography/"
nextPage: "/decoration/"
prevLink: "Typography"
nextLink: "Decoration"
---


## Blocks

* `block` — make an inline element behave as a block element
* `inline-block` — to enable block-like settings on an inline element (width, height, margins, paddings)
* `inline-flex`, `flex` — see [flex layouts](#flex-layouts)
* `grid` — see [grid layouts](#grid-layouts)

## Widths

* `container-xs` / `w-xs` — (max) width 630px or 100%
* `container-sm` / `w-sm` — (max) width 640px or 100%
* `container-md` / `w-md` — (max) width 960px or 100%
* `container-lg` / `w-lg` — (max) width 1280px or 100%
* `container-xl` / `w-xl` — (max) width 1600px or 100%
* `w-100%` — width 100%
* `w-max-100vw` — max-width 100vw

Both the `xs`, `sm`, `md`, `lg`, `xl` container and width utilities have their widths set using:

```css
width: min(100%, {variable});
```

This means they will responsively expand to width 100% within the space available, until they max out at their set width variable.

The difference between these width utilities and container utilities is that containers have x-axis side padding and x-axis centering (see below).

## Containers

The centered layout `container` is set up as follows:

`variables.css`

```css
:root {
  --w-xl: 1600px;

  --sp-2: clamp(1rem, 0.5rem + 1.25vw, 1.5rem);
}
```

`layout.css`

```css
.container {
  --w-max: var(--w-xl);
  width: min(100% - (var(--sp-2) * 2), var(--w-max));
  margin-inline: auto;
}
```

For viewport widths below `--w-max` side spacing is provided by `--sp-2`. This adds a negative space (whitespace) right and left of the container, to prevent text being difficult to read when up against the sides of phone and tablet screens.

Smaller containers have the same (max) width behavior as described for the **width** utilities above.

## Heights

* `h-100%` — height 100%, e.g. for making cards equal to the height of their wrapper
* `h-100dvh` — height 100% _or_ 100dvh, e.g. for making “full cover” panels
* `h-max-100dvh` — max-height 100dvh, e.g. for tall sidebars (use `h-max-100dvh` with `overflow-y`)

Baselayer uses `100dvh` (dynamic viewport height) that gives a different viewport height for some devices — i.e. it compensates for the scroll retracting interface toolbars on iOS Safari.

## Box

* `box` — expands an inner element using `inset: 0` to fill the size of its wrapper (you must put `relative` on a `box` wrapper). Useful for setting up a panel (e.g. hero or card) background image with text overlay.

## Positions

* `relative`
* `absolute`
* `sticky`
* `top` — `top: 0`
* `right` — `right: 0`
* `bottom` — `bottom: 0`
* `left` — `left: 0`
* `z-1` — `z-index: 1`
* `z-2` — `z-index: 2`
* `z-3` — `z-index: 3`

For centering and middling, use [flex](#flex-layouts).

Example: 

<div class="relative mb-2 b-1 aspect-ratio-16x9">
  <div class="absolute top w-100% center t-center"><code>top</code></div>
  <div class="absolute right h-100% flex flex-middle"><code>right</code></div>
  <div class="absolute bottom w-100% center t-center"><code>bottom</code></div>
  <div class="absolute left h-100% flex flex-middle"><code>left</code></div>
  <div class="absolute box flex flex-center flex-middle t-center"><code>centered<br>and middled</code></div>
</div>

```
<div class="relative mb-2 b-1 aspect-ratio-16x9">
  <div class="absolute top w-100% center t-center"><code>top</code></div>
  <div class="absolute right h-100% flex flex-middle"><code>right</code></div>
  <div class="absolute bottom w-100% center t-center"><code>bottom</code></div>
  <div class="absolute left h-100% flex flex-middle"><code>left</code></div>
  <div class="absolute box flex flex-center flex-middle t-center"><code>centered<br>and middled</code></div>
</div>
```

## Flex layouts

Flexbox utilities for simple layout, menubars, pagination lists, cards, etc.

* `inline-flex` — inline flexbox at all viewport widths
* `flex` — flexbox at all viewport widths
* `sm:flex` — flexbox at 640px and up
* `md:flex` — flexbox at 960px and up
* `lg:flex` — flexbox at 1280px and up

### Flex modifiers

* `gap-*` — adds a _horizontal and vertical_ gap (same as for [grid layouts](#grid-layouts)):
    * `gap-1` — `--sp-1`
    * `gap-2` — `--sp-2`
    * `gap-3` — `--sp-3`
    * `gap-4` — `--sp-4`
* X-axis: `flex-start` / `flex-center` / `flex-end`
* Y-axis: `flex-top` / `flex-middle` / `flex-bottom`
* `flex-wrap` — gives you `flex-wrap: wrap`
* `flex-column` — gives you `flex-direction: column`
* `flex-space-between` — gives you `justify-content: space-between`
* `flex-grow-equal` — makes grid item expand so that they occupy an equal fraction of the total width (or height, if used with `flex-column`)
* `flex-grow-auto` — makes grid item expand so that they occupy an unequal fraction of the total width (or height, if used with `flex-column`): each expanding as required by their respective content.

**Note:** the gaps have the same spacing CSS variables as [margins and paddings]({{ '/decoration/' | url }}#spacing-(margins-and-paddings)).

Example using `sm:flex` (breakpoint width 640px):

<nav class="my-2 sm:flex gap-1 flex-end">
  <a class="mb-1 btn block" href="#/">Home</a>
  <a class="mb-1 btn block" href="#/">Products</a>
  <a class="mb-1 btn block" href="#/">About</a>
  <a class="mb-1 btn block" href="#/">Blog</a>
  <a class="mb-1 btn block" href="#/">Contact</a>
</nav>

```html
<nav class="my-2 sm:flex gap-1 flex-end">
  <a class="mb-1 btn block" href="">Home</a>
  <a class="mb-1 btn block" href="">Products</a>
  <a class="mb-1 btn block" href="">About</a>
  <a class="mb-1 btn block" href="">Blog</a>
  <a class="mb-1 btn block" href="">Contact</a>
</nav>
```

In the example above, each button has a bottom margin, so that they have whitepsae gaps below the `sm:flex` breakpoint width.

### Flex-item grow

* `grow` — gives you `flex-grow: 1`

<div class="mt-2 mb-3 flex">
<div class="b-1 p-cell">(no grow)</div>
<div class="grow b-1 p-cell"><code>grow</code></div>
</div>

```html
<div class="flex">
  <div></div>
  <div class="grow"></div>
</div>
```

## Grid layouts

<div aria-label="Note" class="popout mb-2 bl-3 b-orange b-300 p-2 t-black bg-orange bg-100">
  The grid system has been reinvented again in Baselayer v.3. It is not backwards compatible to Baselayer 1 or 2.
</div>

* **Controlling tracks at _grid wrapper_ level:**
    * Grid: `grid` initializes the CSS grid. It adds `display: grid` but it doesn’t provide information about how many columns you want.
    * Gap (optional) — adds vertical and horizontal whitespace (a.k.a. gutters) along internal grid tracks. See [grid gaps](#grid-gaps)
    * Equal width grid cell control (optional): `equal-*-cols` etc. specifies how many columns your layout has (up to four), where each column width is equalized.
    * Dense packing (optional): `grid-dense` can be used as a quick way to reorder grid items: packing so later items into earlier empty cells if there’s enough soace for them.
* **Controlling positioning and spanning at _per-grid-item_ level:**
    * Positioning (optional): `col-*` and `row-*` etc. – for positioning each grid item over the grid cells.
    * Spanning (optional): `col-span-*` and `row-span-*`etc. – spanning 2, 3, or 4 columns or rows.
* **Grid layouts at different _media query breakpoint widths_:**
    * The Baselayer 3 grid system has four tiers of media query breakpoint widths, for creating different grid layouts for different sized devices: all widths; `sm` (e.g. phones up); `md` (e.g. tablets up); and `lg` (laptops up).

While the wrapper `grid` (and gaps) classes take effect at all viewport widths, the lowest breakpoint that positioning and spanning takes effect is `sm` (640px). Below this, everything will be in a single column.

The responsive `col-` and `row-` positioning classes are used to instruct the grid which grid cell you want your grid item to be placed on (up to 4 columns and/or 4 rows).

The `col-span-` and `row-span-` spanning classes can be used to make grid items to span up to 4 columns and/or 4 rows.

The responsive grid item classes can be _combined_ on the same elements, so that you can set up to four different layouts on the same `grid`:

* Tier 1: Below 640px — for phones
* Tier 2: `sm` 640px and up — for large phones, and tablets in portrait orientation
* Tier 3: `md` 960px and up — for tablets in landscape orientation
* Tier 4: `lg` 1280px and up — for laptops up

The _tier 1_ grid system has no media query prefixes — it takes effect at all viewport widths. This is ideal for creating small icon galleries in sidebars or dropdown, or for making media objects (e.g. social messaging or comment cards).

CSS grid positions grid items _automatically_ on the available grid cells — so an item will be placed on the _next_ available cell until required to begin again on the _next_ (i.e. new) row. You can use this automatic positioning to your advantage, allowing CSS grid to presume where you want your next item to be. Or you can control positioning by using the responsive `col-` and `row-` classes (and sometimes `grid-dense` is all you need).

Having 2, 3, or 4 _CSS grid_ columns covers most use cases for the traditional 12 column grid system in webpage design. The Baselayer 3 grid can do all that and so much more.

<div class="my-3 grid equal-3-cols">
  <div class="b-1 p-cell">1</div>
  <div class="b-1 p-cell">2</div>
  <div class="b-1 p-cell">3</div>
</div>

```html
<div class="grid equal-3-cols">
  <div></div>
  <div></div>
  <div></div>
</div>
```

At this point, each _grid item_ will automatically span one _grid cell_. If you have more grid items than set columns, the excess will wrap onto new row(s). This is all you need for setting up equal width items such as in image galleries, or sets of cards.

`grid sm:equal-2-cols md:equal-4-cols gap-2`:

<div class="mt-2 mb-3 grid sm:equal-2-cols md:equal-4-cols gap-2">
  <div class="b-1 p-cell">1</div>
  <div class="b-1 p-cell">2</div>
  <div class="b-1 p-cell">3</div>
  <div class="b-1 p-cell">4</div>
  <div class="b-1 p-cell">5</div>
  <div class="b-1 p-cell">6</div>
  <div class="b-1 p-cell">7</div>
  <div class="b-1 p-cell">8</div>
</div>

### Grid gaps

* `gap-*` — adds a _horizontal and vertical_ gap between grid cells, using the same spacing variables as for margins and paddings:
    * `gap-1` — `--sp-1`
    * `gap-2` — `--sp-2`
    * `gap-3` — `--sp-3`
    * `gap-4` — `--sp-4`

These same `gap-*` classes are used for [flex layouts](#flex-layouts).

### Grid item control

A simple example: the following would be two rows on phones (below 768px width), and two columns on tablets up (e.g. sidebar plus main): 

<div class="mt-2 mb-3 grid sm:equal-3-cols gap-2">
  <div class="b-1 p-cell">1</div>
  <div class="sm:col-span-2 b-1 p-cell">columns 2 to 3</div>
</div>

```html
<div class="grid sm:equal-3-cols gap-2">
  <div></div>
  <div class="sm:col-span-2"></div>
</div>
```

A complex example, taking effect at 1024px (`md`):

<div class="mt-2 mb-3 grid md:equal-4-cols gap-1">
  <div class="b-1 p-cell">1</div>
  <div class="b-1 p-cell">2</div>
  <div class="md:col-span-2 md:row-2 b-1 p-cell">columns 1 to 2, row 2</div>
  <div class="md:col-span-2 md:row-span-2 b-1 p-cell">columns 3 to 4, rows 1 to 2</div>
</div>

```html
<div class="grid md:equal-4-cols gap-1">
  <div>1</div>
  <div>2</div>
  <div class="md:col-span-2 md:row-2">columns 1 to 2, row 2</div>
  <div class="md:col-span-2 md:row-span-2">columns 3 to 4, rows 1 to 2</div>
</div>
```

Grid items can sometimes leave spaces of unoccupied cells:

<div class="mt-2 mb-3 grid gap-1 equal-4-cols">
  <div class="b-1 p-cell">Item 1</div>
  <div class="col-1 col-span-2 b-1 p-cell">Item 2</div>
  <div class="col-2 col-span-3 b-1 p-cell">Item 3</div>
  <div class="col-4 b-1 p-cell">Item 4</div>
  <div class="col-3 b-1 p-cell">Item 5</div>
</div>

With `grid dense` you can close up this type of space, by CSS grid rearranging the grid items to fill in the unoccupied cells:

<div class="mt-2 mb-3 grid grid-dense gap-1 equal-4-cols">
  <div class="b-1 p-cell">Item 1</div>
  <div class="col-1 col-span-2 b-1 p-cell">Item 2</div>
  <div class="col-2 col-span-3 b-1 p-cell">Item 3</div>
  <div class="col-4 b-1 p-cell">Item 4</div>
  <div class="col-3 b-1 p-cell">Item 5</div>
</div>

## Content-grid

`content-grid` uses CSS Grid to set up a 5 column layout where the main content is placed in the middle (column 3) and has max width `--w-cg` = `40em`. This will be 640px for the default font size (1rem = 16px) and 800px for when used with `t-long-read` (see [the long-lead utility class](/baselayer-3/typography/#the-long-lead-utility-class)).

`content-grid` expects your content typographic blocks (headings, paragraphs, etc.), and the panel blocks below, to be its immediate children.

* Use the `popout` utility class to make an element span the middle 3 columns (2 to 4). Columns 3 and 5 have width `--sp-2`
* Use the `full-bleed` utility class to make an element span all 5 columns

Columns 1 and 5 (the first and last column) have a minimum width of `--sp-2` — providing the middle (content) column with x-axis side whitespace. Columns 2 and 4 have a maximum width of `--sp-2` — providing x-axis space for popouts when the acailable wdth allows.

Within a `full-bleed`, if you require, you can add another element with a `container-*` or other utilities with width constraint and x-axis side padding.

### Popout panels

Example information panel using `popout`:

<div aria-label="Note" class="popout mb-2 bt-3 b-blue b-300 r-2 p-2 t-black bg-gray bg-100">
  &star; Information panel
</div>

```html
<div aria-label="Note" class="popout mb-2 bt-3 b-blue b-300 r-2 p-2 t-black bg-gray bg-100">
  &star; Information panel
</div>
```

### Full-bleed panels

If your layout has no sidebars, side spacing (margin or padding), or other object that takes up some of the viewport width, then your `content-grid full-bleed` will expand to the full width of the viewport. But if it can’t get to the full viewport width, then it will expand to the available width (as seen in the docs example below).

Example colored stripe using `full-bleed`:

<div class="full-bleed mb-2 p-2 bg-red t-white">
 <code>full-bleed</code> — expands to the full width of the <code>article</code> wrapper.
</div>

```
<div class="full-bleed mb-2 p-2 bg-red t-white">
 Full bleed panel content...
</div>
```

You can constrain the width of elements inside full-bleeds. Here’s an example hero or poster component using an embedded `container-md`:

<div class="full-bleed mt-2 mb-3">
  <div class="container-md aspect-ratio-16x9 flex flex-center flex-middle relative">
    <svg xmlns="http://www.w3.org/2000/svg" class="absolute box img-cover" preserveAspectRatio="xMidYMid slice" width="1000" height="600"><defs><linearGradient id="gradient1" gradientTransform="rotate(45)"><stop offset="5%" stop-color="rgba(255,255,0,.5)"/><stop offset="50%" stop-color="rgba(255,255,255,0)"/><stop offset="95%" stop-color="rgba(255,0,0,.5)"/></linearGradient><linearGradient id="gradient2" gradientTransform="rotate(135)"><stop offset="5%" stop-color="rgba(0,0,255,.5)"/><stop offset="50%" stop-color="rgba(255,255,255,0)"/><stop offset="95%" stop-color="rgba(0,255,0,.5)"/></linearGradient></defs><rect width="100%" height="100%" fill="url('#gradient1')"/><rect width="100%" height="100%" fill="url('#gradient2')"/></svg>
    <div class="relative w-sm aspect-ratio-16x9 p-3">
      <p class="h1 t-bold">This is a lot of example text that may or may not distort the aspect ratio (16×9) of this hero component.</p>
      <p class="h1 t-bold">See what it does on a small viewport width (e.g. phone).</p>
    </div>
  </div>
</div>

```html
<div class="full-bleed mt-2 mb-3">
  <div class="container-md aspect-ratio-16x9 flex flex-center flex-middle relative bg-black">
    <img class="absolute box img-cover opacity-50%" src="">
    <div class="relative w-sm aspect-ratio-16x9 p-3">
      <p class="h1 t-bold">This is a lot of example text that may or may not distort the aspect ratio (16×9) of this hero component.</p>
      <p class="h1 t-bold">See what it does on a small viewport width.</p>
    </div>
  </div>
</div>
```

## Aspect ratios

Common aspect ratio constraints for images, video, and hero blocks.

<div class="full-bleed mt-2 mb-3">
  <div class="container-md grid sm:equal-4-cols gap-2">
    <div>
      <div class="aspect-ratio-1x1 b-1 p-1"><code>aspect-ratio-1x1</code></div>
    </div>
    <div>
      <div class="aspect-ratio-4x3 b-1 p-1"><code>aspect-ratio-4x3</code></div>
    </div>
    <div>
      <div class="aspect-ratio-16x9 b-1 p-1"><code>aspect-ratio-16x9</code></div>
    </div>
    <div>
      <div class="aspect-ratio-21x9 b-1 p-1"><code>aspect-ratio-21x9</code></div>
    </div>
  </div>
</div>

## Overflows

Using `auto` to add scrollling when the content of a block exceeds its constrained height or width.

* `overflow-x` — e.g. for wrapping tables with a lots of columns, that would break a template layout in small viewports
* `overflow-y` — e.g. for sidebar menus loaded with content

## Invisibility

There may be situation where you require some element(s) to be displayed on smaller or larger viewports, but hidden otherwise. Baselayer has:

* `sm:hidden` — hides elements on viewports with width 640px and up
* `sm:hidden-below` — hides elements on viewports with width below 640px
* `md:hidden` — hides elements on viewports with width 960px and up
* `md:hidden-below` — hides elements on viewports with width below 960px
* `lg:hidden` — hides elements on viewports with width 1280px and up
* `lg:hidden-below` — hides elements on viewports with width below 1280px