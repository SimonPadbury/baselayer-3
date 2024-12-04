---
title: Layout
mainHeading: Layout
layout: base.njk
prevPage: "/typography/"
nextPage: "/decoration/"
prevLink: "Typography"
nextLink: "Decoration"
---

<div aria-label="Note" class="popout mb-3 bl-heavy b-blue b-300 b-dark-invert p-3 bg-blue bg-100 bg-dark-invert">
  Since September 2023, all “evergreen” browsers (Chrome, Edge, Firefox, Safari) have capability for the new CSS Container Queries (see <a href="https://caniuse.com/?search=container">Can I use: Container Queries</a>). So, Baselayer now has <a href="#container-query-powered-layouts">container query powered layouts</a> to control <code>flex</code>, <code>grid</code>, and <code>hidden</code> utility classes.
</div>

## Container query contexts

Since Baselayer v.3.4.0, The `<body>` tag now has container query context applied by `container-type: inline-size`.

There is also a `container` class whose role is to add another container query context wherever you need it.

There are no `@media` queries in Baseayer. Responsive [flexbox](#flex-layouts), [grid](#grid-layouts), and [invisibility](#invisibility-(hidden)-classes) classes are all set using `@container` queries. Since the `<body>` tag now has container query context by default, these will all behave in much the same way as media-query controlled grid systems in other CSS libraries.

Spacing variables `--s-3` and `--s-4` involve a `clamp()` that has its middle value set using `cqi` (container query percentile unit). These spacing variables are used on margin, padding, gap, and border radius utilities (see [decoration utilities]({{ "/decoration/" | url }})).

[Text alignment]({{ "/typography/#text-alignment" | url }}) utility classes also have responsive container query variants, as does the `block` utility class (see below).

## Blocks

* `block` — make an inline element behave as a block element. Also available: [responsive blocks](#responsive-blocks)
* `inline-block` — to enable block-like settings on an inline element (width, height, margins, paddings)
* `inline-flex`, `flex` — see [flex layouts](#flex-layouts)
* `grid` — see [grid layouts](#grid-layouts)

## Dimensions

### Wrappers (f.k.a. containers)

Baselayer’s `wrapper` classes add a constrained layout width, inline margin (x-axis) auto centering, and side edge whitespace when the viewport width is at or narrower then the wrapper width.

<div aria-label="Note" class="popout mb-3 bl-heavy b-blue b-300 b-dark-invert p-3 bg-blue bg-100 bg-dark-invert">  Baselayer’s <em>wrapper</em> classes were formerly known as <em>container</em> classes, copying the name from other CSS frameworks such as Bootstrap. But after switching from <code>@media</code> queries to <code">@container</code> queries, a context-container was required for parent elements of container query controlled layout systems. Therefore, the Baselayer <code>container</code> class is now exclusively used for that purpose. See <a href="#container-query-powered-layouts">container query powered layouts</a>.
</div>

The centered layout `wrapper` is set up as follows:

In `variables.css`:

```css
:root {
  --w-xl: 1600px;
  --s-3: clamp(1rem, 0.5rem + 1.25cqi, 1.5rem);
}
```

Wrapper side spacing is provided by `--s-3` when the viewport width is less than `--w-max`. This adds a minimum of 1rem (16px) negative space (commonly known as “whitespace” though it is not always white) right and left of the wrapper, to prevent text being difficult to read when up against the sides of the viewport.

In `layout.css`:

```css
.wrapper {
  --w-max: var(--w-xl);
  width: min(100% - (var(--s-3) * 2), var(--w-max));
  margin-inline: auto;
}
```

There are several `wrapper` utilities, with maximum widths same as the width utilities (see below).

### Widths

320px intervals. `w-` classes will have widths 100% until their max width. `wrapper-` classes will have widths (100% minus side space) until their max width.

The difference between width utilities and wrapper utilities is that wrappers have x-axis side padding and x-axis centering (see above).

* `wrapper-xs` / `w-max-xs` — maximum width 320px
* `wrapper-sm` / `w-max-sm` — maximum width 640px
* `wrapper-content` / `w-max-content` — maximum width 40rem
* `wrapper-md` / `w-max-md` — maximum width 960px
* `wrapper-lg` / `w-max-lg` — maximum width 1280px
* `wrapper-xl` / `w-max-xl` — maximum width 1600px
* `wrapper` — maximum width 1600px

The `-content` width constraints max out at 40rem, giving a comfortable ~67 characters per line for paragraphs.

Four more:

* `w-100%` — width expands to 100% of available space
* `w-100vw` — width expands to 100vw (viewport width)
* `w-max-100vw` — width constrained to 100vw (viewport width)
* `w-fit-content` — width constrained to content max-width (for “shrink wrapping”)

### Heights

* `h-100%` — height expands to 100%, e.g. for making cards equal to the height of their wrapper
* `h-100dvh` — height expands to 100dvh, e.g. for making “full cover” panels
* `h-max-100dvh` — height constrained to 100dvh, e.g. for tall sidebars (use this with `overflow-y`)

Baselayer uses `100dvh` (dynamic viewport height) that gives a different viewport height for some devices — i.e. it compensates for the retracting interface toolbars on iOS Safari.

### Box

* `box` — expands an inner element using `inset: 0` to fill the size of its wrapper (you must put `relative` on the parent element of a `box`). Useful for setting up a panel (e.g. hero or card) background image with text overlay.

## Positions

* `relative`
* `absolute`
* `sticky`
* `top` — top: 0
* `right` — right: 0
* `bottom` — bottom: 0
* `left` — left: 0
* `z-1` — z-index: 1 — e.g. use low value z-indexes for layering in hero components
* `z-2` — z-index: 2
* `z-3` — z-index: 3
* `z-997` — z-index: 997 — e.g. use high value z-indexed for layering in modals and fixed or sticky menubars
* `z-998` — z-index: 998
* `z-999` — z-index: 999

Examples: lower value z-index can be used for layering

For centering and middling, you will also need [flex](#flex-layouts).

Example:

<div class="relative mb-3 b-thin aspect-ratio-16x9">
  <div class="absolute top w-100% t-center"><code>Top</code></div>
  <div class="absolute right h-100% flex flex-middle"><code>Right</code></div>
  <div class="absolute bottom w-100% t-center"><code>Bottom</code></div>
  <div class="absolute left h-100% flex flex-middle"><code>Left</code></div>
  <div class="absolute box flex flex-center flex-middle t-center"><code>Mentered<br>and middled</code></div>
</div>

```html
<div class="relative">

  <div class="absolute top">
    Top
  </div>

  <div class="absolute right">
    Right
  </div>

  <div class="absolute bottom">
    Bottom
  </div>

  <div class="absolute left">
    Left
  </div>

  <div class="absolute box flex flex-center flex-middle">
    Centered and middled
  </div>

</div>
```

## Container query powered layouts

Since Baselayer 3.4.0, the `<body>` tag provides a _container query context_, using `container-type: inline-size`. Additionally you can set another (inner) container query context ising the `container` class.

<div aria-label="Warning" class="popout mb-3 bl-heavy b-amber b-300 b-dark-invert p-3 bg-amber bg-100 bg-dark-invert">The <code>container</code> class does not constrain the outer element’s width in any way. You may also need to control the widths of your content with e.g. <a href="#centered-layout-wrappers">wrapper</a> or <a href="#widths">width</a> utilities, or by placing the container within a grid cell, etc.
</div>

There are three `@container` variants for `flex`, `grid`, and `hidden` classes corresponding to prefix widths:

* `sm:*` (640px)
* `md:*` (960px)
* `lg:*` (1280px)

**Note:** There are no `xs` (320px) or `xl` (1600px) container queries in Baselayer.

Classes with container query variants are:

1. `block`, `inline-block` — block wrapper utilities
2. `flex`, `inline-flex` — flexbox wrapper utilities
3. `grid` — grid system wrapper utilities (using CSS Grid)
4. `col` and `row` — grid system column and row utilities
5. `hidden` — invisibility utilities

**Note:** [content-grid](#content-grid) is not controlled by a container query.

(Typography alignment classes `t-left` / `t-center` / `t-right` also have container query variants.)

There are some demos of container query layouts in these docs, each set within their own `container` context — and they have an x-axis resizer, so that you can play with them (if your device enables you to do so) and see how they work. The resizer is indicated by a dashed border and a “resizer” symbol in the bottom right corner.

Here is an example resizer with no demo inside:

<div class="my-3 resize-x">
<div class="flex flex-bottom flex-end t-right" style="min-height: 100px;">Resizer symbol ↘</div>
</div>

## Responsive blocks

* `sm:block` / `md:block` / `lg:block`

These set `display: block` at and above the four container-responsive breakpoint widths. Use one of these utilities as an _override_ when you only need some element to behave as a `flex` or a `grid` within a smaller width.

Example: in the template for this documentation, at body-container width 960px and up (same as viewport width), the Baselayer logo and title in the used `md:block` to switch off the `flex` that’s required to push these to the left of the menubar. This push would break the layout when the menubar is a sidebar from `md` up, so `md:block` to stop that heppening.

## Flex layouts

Flexbox utilities for simple layout, menubars, pagination lists, cards, etc.

* `flex` — flexbox at all viewport widths
  * `flex` puts flexbox behaviour on _flex items_, while the _flexbox wrapper_ continues to behave as a block element. And the flex items will behave as blocks.
* `inline-flex` — inline flexbox at all viewport widths
  * `inline-flex` makes the _flexbox wrapper_ itself behave as an inline item (similar to `inline-block`), as well as putting flexbox behavior on _flex items_ (immediate child elements). And the flex items will behave as inline-blocks.

Examples:

<div class="my-3 flex">
  <div class="b-thin p-cell">One</div>
  <div class="b-thin p-cell">Two</div>
  <div class="b-thin p-cell">Three</div>
  <div class="b-thin p-cell">Four</div>
</div>

```html
<div class="flex">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
</div>
```

<div>
<div class="my-3 inline-flex">
  <div class="b-thin p-cell">One</div>
  <div class="b-thin p-cell">Two</div>
  <div class="b-thin p-cell">Three</div>
</div>
<div class="my-3 inline-flex">
  <div class="b-thin p-cell">One</div>
  <div class="b-thin p-cell">Two</div>
  <div class="b-thin p-cell">Three</div>
</div>
<div class="my-3 inline-flex">
  <div class="b-thin p-cell">One</div>
  <div class="b-thin p-cell">Two</div>
  <div class="b-thin p-cell">Three</div>
</div>
</div>

```html
<div class="my-3 inline-flex">
  <div class="b-thin p-cell">One</div>
  <div class="b-thin p-cell">Two</div>
  <div class="b-thin p-cell">Three</div>
</div>
<div class="my-3 inline-flex">
  <div class="b-thin p-cell">One</div>
  <div class="b-thin p-cell">Two</div>
  <div class="b-thin p-cell">Three</div>
</div>
<div class="my-3 inline-flex">
  <div class="b-thin p-cell">One</div>
  <div class="b-thin p-cell">Two</div>
  <div class="b-thin p-cell">Three</div>
</div>
```

### Flex modifiers

Modifiers for `flex`:

* X-axis: `flex-start` / `flex-center` / `flex-end`
* Y-axis: `flex-top` / `flex-middle` / `flex-bottom`
* `flex-wrap` — gives you flex-wrap: wrap
* `flex-column` — gives you flex-direction: column
* `flex-row` — gives you flex-direction: row (default behavior)
* `flex-space-between` — gives you justify-content: space-between
* `flex-grow-equal` — makes grid item expand so that they occupy an equal fraction of the total width (or height, if used with `flex-column`)
* `flex-grow-auto` — makes grid item expand so that they occupy an unequal fraction of the total width (or height, if used with `flex-column`). Each flex item will expand as required by its respective content.
* `gap-*` — flex (and grid) gaps [see below](#flex-gaps)

<div class="my-3 flex flex-grow-equal">
  <div class="b-thin p-cell">One</div>
  <div class="b-thin p-cell">Two</div>
  <div class="b-thin p-cell">Three</div>
  <div class="b-thin p-cell">Four</div>
</div>

```html
<div class="flex flex-grow-equal">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
</div>
```

<div class="my-3 flex flex-space-between">
  <div class="b-thin p-cell">One</div>
  <div class="b-thin p-cell">Two</div>
  <div class="b-thin p-cell">Three</div>
  <div class="b-thin p-cell">Four</div>
</div>

```html
<div class="flex flex-space-between">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
</div>
```

<div class="my-3 flex flex-column">
  <div class="b-thin p-cell">One</div>
  <div class="b-thin p-cell">Two</div>
  <div class="b-thin p-cell">Three</div>
  <div class="b-thin p-cell">Four</div>
</div>

```html
<div class="flex flex-column">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
</div>
```

### Flex gaps

`gap-*` — adds a _horizontal and vertical_ gap (same as for [grid layouts](#grid-layouts)):

* `gap-1` — using `--s-1`
* `gap-2` — using `--s-2`
* `gap-3` — using `--s-3`
* `gap-4` — using `--s-4`

<div class="my-3 flex gap-2">
  <div class="b-thin p-cell">One</div>
  <div class="b-thin p-cell">Two</div>
  <div class="b-thin p-cell">Three</div>
  <div class="b-thin p-cell">Four</div>
</div>

```html
<div class="flex gap-2">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
</div>
```

**Note:** `flex` and `grid` these gaps have the same spacing CSS variables as [margins and paddings]({{ '/decoration/' | url }}#spacing-(margins-and-paddings)).

### Flex-item grow

* `grow` — gives you `flex-grow: 1`

<div class="my-3 flex">
<div class="b-thin p-cell">(no grow)</div>
<div class="grow b-thin p-cell"><code>grow</code></div>
</div>

```html
<div class="flex">
  <div></div>
  <div class="grow"></div>
</div>
```

### Flex and container queries

Baselayer has `@contaner` controlled `flex` and all flex modifier classes (including the `gap-*` classes) that will take effect at the following container widths up — use one of these instead of simply `flex` on your outer block element:

* `sm:flex`, `sm:flex-start` etc. — flex at container width 640px and up
* `md:flex`, `md:flex-start` etc. — flex at container width 960px and up
* `lg:flex`, `lg:flex-start` etc. — flex at container width 1280px and up

Example using a `container` outer with `sm:flex`:

<div class="expand mt-3 mb-4">
  <div class="container resize-x">
    <nav class="flex flex-column sm:flex-row gap-2 sm:gap-4 sm:flex-end">
      <a class="btn flex-start" href="#/">Home</a>
      <a class="btn flex-start" href="#/">About</a>
      <a class="btn flex-start" href="#/">Blog</a>
      <a class="btn flex-start" href="#/">Contact</a>
    </nav>
  </div>
</div>

```html
<div class="container">
  <nav class="flex flex-column sm:flex-row gap-2 sm:gap-4 sm:flex-end">
    <a class="btn flex-start" href="#/">Home</a>
    <a class="btn flex-start" href="#/">About</a>
    <a class="btn flex-start" href="#/">Blog</a>
    <a class="btn flex-start" href="#/">Contact</a>
  </nav>
</div>
```

In the example above, the `btn` class has inline-flex built in. The effect of `btn flex-start` will only be noticable when the container width is less than `sm` (640px).

## Grid layouts

### Setting up a grid

Controlling tracks at _grid wrapper_ level:

* **Grid** — the `grid` class initializes the CSS grid. It only adds `display: grid` — it doesn’t provide information about how many columns you want, or what their widths will be. To control the number of columns, you either:
  * Use the explicit grid by adding `equal-` classes on the grid wrapper (see below); or
  * Use the implicit grid by controlling the position of grid items.
* **Gap (optional)** — adds vertical _and_ horizontal whitespace (a.k.a. gutters) along internal grid tracks. See [grid gaps](#grid-gaps).
* **Equal width grid cell control (optional)** — `equal-*-cols` etc. specifies how many columns your layout has (2, 3, or 4), where each column width is equalized.
* **Dense packing (optional)** — `grid-dense` can be used as a quick way to automatically _reorder_ grid items: packing later items into earlier empty cells if there’s enough space for them. There is a [dense packing example](#grid-items-and-dense-packing) below, after where we have described per-item control.

Having 2, 3, or 4 explicit _CSS grid_ columns covers most use cases for the traditional 12 column grid system in webpage design (12 is used because it is divisible by 2, 3, or 4 without remainder). The Baselayer grid can do all that, and so much more.

<div class="mt-3 mb-4 grid equal-3-cols">
  <div class="b-thin p-cell">1</div>
  <div class="b-thin p-cell">2</div>
  <div class="b-thin p-cell">3</div>
</div>

```html
<div class="grid equal-3-cols">
  <div></div>
  <div></div>
  <div></div>
</div>
```

If you do only this to set up a Baselayer grid, then each _grid item_ will automatically occupy the next available _grid cell_ and span one grid cell. If you have more grid items than set columns, the surplus will wrap onto new row(s).

<div class="mt-3 mb-4 grid equal-3-cols">
  <div class="b-thin p-cell">1</div>
  <div class="b-thin p-cell">2</div>
  <div class="b-thin p-cell">3</div>
  <div class="b-thin p-cell">4</div>
  <div class="b-thin p-cell">5</div>
</div>

```html
<div class="grid equal-3-cols">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
```

### Grid gaps

* `gap-*` — adds a _horizontal and vertical_ gap between grid cells, using the same spacing variables as for margins and paddings:
    * `gap-1` — using spaing variable `--s-1`
    * `gap-2` — using spaing variable `--s-2`
    * `gap-3` — using spaing variable `--s-3`
    * `gap-4` — using spaing variable `--s-4`

These same `gap-*` classes are used for [flex layouts](#flex-layouts).

<div class="mt-3 grid equal-3-cols gap-1">
  <div class="b-thin p-cell">With <code>gap-1</code></div>
  <div class="b-thin p-cell"></div>
  <div class="b-thin p-cell"></div>
</div>

<div class="mt-3 grid equal-3-cols gap-2">
  <div class="b-thin p-cell">With <code>gap-2</code></div>
  <div class="b-thin p-cell"></div>
  <div class="b-thin p-cell"></div>
</div>

<div class="mt-3 grid equal-3-cols gap-3">
  <div class="b-thin p-cell">With <code>gap-3</code></div>
  <div class="b-thin p-cell"></div>
  <div class="b-thin p-cell"></div>
</div>

<div class="mt-3 mb-4 grid equal-3-cols gap-4">
  <div class="b-thin p-cell">With <code>gap-4</code></div>
  <div class="b-thin p-cell"></div>
  <div class="b-thin p-cell"></div>
</div>

```html
<div class="grid equal-3-cols gap-2">
  <div>...</div>
  <div>...</div>
  <div>...</div>
</div>
```

### Controlling grid items

If you want your grid items to simply be placed in adjacent cells and to span one cell each — and you wanted your columns to be equal width — then there's nothing else you need to do. E.g. this is sufficient for setting up a gallery that has 3 columns:

<div class="mt-3 mb-4 grid equal-2-cols">
  <div class="b-thin p-cell">1</div>
  <div class="b-thin p-cell">2</div>
  <div class="b-thin p-cell">3</div>
  <div class="b-thin p-cell">4</div>
</div>

<div class="grid mb-4 equal-3-cols">
  <div class="b-thin p-cell">1</div>
  <div class="b-thin p-cell">2</div>
  <div class="b-thin p-cell">3</div>
  <div class="b-thin p-cell">4</div>
</div>

<div class="grid mb-4 equal-4-cols">
  <div class="b-thin p-cell">1</div>
  <div class="b-thin p-cell">2</div>
  <div class="b-thin p-cell">3</div>
  <div class="b-thin p-cell">4</div>
</div>

```html
<div class="grid equal-4-cols">
  <div>...</div>
  <div>...</div>
  <div>...</div>
  <div>...</div>
</div>
```

Controlling positioning and spanning at _per-grid-item_ level:

* **Positioning (optional)** — `col-*` and `row-*` etc. – for positioning each grid item over non-adjacent grid cells.
* **Spanning (optional)** — `col-span-*` and `row-span-*`etc. – spanning 2, 3, or 4 columns or rows.

CSS grid positions grid items _automatically_ on the available grid cells — so an item will be placed on the _next_ available cell until required to begin again on the _next_ (i.e. new) row. You can use this automatic positioning to your advantage, allowing CSS grid to presume where you want your next item to be. As in the following simple example:

<div class="mt-3 mb-4 grid equal-3-cols gap-2">
  <div class="b-thin p-cell">1</div>
  <div class="col-span-2 b-thin p-cell">columns 2 to 3</div>
</div>

```html
<div class="grid equal-3-cols gap-2">
  <div>...</div>
  <div class="col-span-2">...</div>
</div>
```

The `col-span-` and `row-span-` spanning classes can be used to make grid items to span up to 4 columns and/or 4 rows.

The `col-` and `row-` positioning classes are used to instruct the grid which grid cell you want your grid item to be placed on (up to 4 columns and/or 4 rows).

Pairing spanning with positioning gives yo even more control. In the following example, we specified that item 3 should go on `row-2` and the CSS grid automatically figured out that item 4 should start in the next available grid  column (i.e. column 3):

<div class="mt-3 mb-4 grid equal-4-cols gap-1">
  <div class="b-thin p-cell">1</div>
  <div class="b-thin p-cell">2</div>
  <div class="col-span-2 row-2 b-thin p-cell">columns 1 to 2, row 2</div>
  <div class="col-span-2 row-span-2 b-thin p-cell">columns 3 to 4, rows 1 to 2</div>
</div>

```html
<div class="grid equal-4-cols gap-1">
  <div>1</div>
  <div>2</div>
  <div class="col-span-2 row-2">columns 1 to 2, row 2</div>
  <div class="col-span-2 row-span-2">columns 3 to 4, rows 1 to 2</div>
</div>
```

### Grid items and dense packing

When you control the positioning of grid items, you cam sometimes leave leave spaces of unoccupied cells. This is because CSS grid automatially tries to place the next item in the next available cell — it does not automatically back-fill any empty cells that you have left:

<div class="mt-3 mb-4 grid gap-1 equal-4-cols">
  <div class="b-thin p-cell">Item 1</div>
  <div class="col-1 col-span-2 b-thin p-cell">Item 2</div>
  <div class="col-2 col-span-3 b-thin p-cell">Item 3</div>
  <div class="col-4 b-thin p-cell">Item 4</div>
  <div class="col-3 b-thin p-cell">Item 5</div>
</div>

```html
<div class="grid gap-1 equal-4-cols">
  <div>Item 1</div>
  <div class="col-1 col-span-2">Item 2</div>
  <div class="col-2 col-span-3">Item 3</div>
  <div class="col-4">Item 4</div>
  <div class="col-3">Item 5</div>
</div>
```

With the `grid-dense` modifier you can back-fill some or all of these unoccupied cells, by CSS grid reordering (rearranging) your grid items to fill in the spaces. Here’s the example above again, but with `grid grid-dense`:

<div class="mt-3 mb-4 grid grid-dense gap-1 equal-4-cols">
  <div class="b-thin p-cell">1</div>
  <div class="col-1 col-span-2 b-thin p-cell">2</div>
  <div class="col-2 col-span-3 b-thin p-cell">3</div>
  <div class="col-4 b-thin p-cell">4</div>
  <div class="col-3 b-thin p-cell">5</div>
</div>

```html
<div class="grid gap-1 equal-4-cols grid-dense">
  <div>Item 1</div>
  <div class="col-1 col-span-2">2</div>
  <div class="col-2 col-span-3">3</div>
  <div class="col-4">4</div>
  <div class="col-3">5</div>
</div>
```

### Grid and container queries

The Baselayer grid system has three tiers of container query breakpoint widths, for creating different grid layouts for different sized containers: all widths, `sm:`, `md:`, and `lg:`.

* Tier 0: `grid` layout effective at all container widths (including below 640px)
* Tier 1: `sm:grid` grid layout effective at container widths 640px and up
* Tier 2: `md:grid` grid layout effective at container widths 960px and up
* Tier 3: `lg:grid` grid layout effective at container widths 1280px and up

**Note:** Below these breakpoints `grid-dense` and `gap-*` will not work, because they are dependant on CSS grid.

These three breakpoint prefixes can also be added to grid wrapper modifier `equal-` classes (to specify that you want 2, 3, or 4 equalized columns at those container widths). And they can also be added to the per-item positioning and spanning classes.

The _tier 1_ grid system has no container query prefixes (and doesn’t need to be surrounded by a `container`) — it takes effect at all widths. This makes the _tier 1_ `grid` ideal for creating small icon galleries, or for making small media objects that you don’t want to “stack collapse” in narrow columns or on phones (e.g. social messaging or comment cards).

### Responsive grid layout tiers can be combined

Therefore you can create up to four different layouts on the same `grid`.

Simple example: With just adding a `container` around your grid, and then container query width prefixes on `equal-` classes, this is all you need for setting up equal width items such as in image galleries, or sets of cards:

<div class="full-bleed mt-3 mb-4 px-3">
<div class="container resize-x">
<div class="grid sm:equal-2-cols md:equal-3-cols gap-2">
  <div class="b-thin p-cell">1</div>
  <div class="b-thin p-cell">2</div>
  <div class="b-thin p-cell">3</div>
  <div class="b-thin p-cell">4</div>
  <div class="b-thin p-cell">5</div>
  <div class="b-thin p-cell">6</div>
</div>
</div>
</div>

```html
<div class="container">
  <div class="grid sm:equal-2-cols md:equal-3-cols gap-2">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
    <div>6</div>
  </div>
</div>
```

Another example:

<div class="popout mt-3 mb-4 container resize-x">
  <div class="b-1 r-4 p-2 grid sm:equal-4-cols gap-2">
    <div>
      <div class="mx-auto" style="width: min(140px, 100%);">
        <svg xmlns="http://www.w3.org/2000/svg" class="r-pill img-cover" preserveAspectRatio="xMidYMid slice" width="1000" height="1000"><defs><linearGradient id="gradient1" gradientTransform="rotate(45)"><stop offset="5%" stop-color="rgba(255,255,0,.5)"></stop><stop offset="50%" stop-color="rgba(255,255,255,0)"></stop><stop offset="95%" stop-color="rgba(255,0,0,.5)"></stop></linearGradient><linearGradient id="gradient2" gradientTransform="rotate(135)"><stop offset="5%" stop-color="rgba(0,0,255,.5)"></stop><stop offset="50%" stop-color="rgba(255,255,255,0)"></stop><stop offset="95%" stop-color="rgba(0,255,0,.5)"></stop></linearGradient></defs><rect width="100%" height="100%" fill="url('#gradient1')"></rect><rect width="100%" height="100%" fill="url('#gradient2')"></rect></svg>
      </div>
    </div>
    <div class="sm:col-2 sm:col-span-3">
      <p class="h4 mt-0 mb-1 ">Media object</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni rem animi quaerat accusantium illum architecto, nemo, ex harum voluptatum adipisci eum blanditiis dolorum.</p>
      <button>Something</button>
    </div>
  </div>
</div>

A few more examples can be found in [examples](/baselayer-3/examples/), where you can see how container query breakpoint width tiers can be used on grid items for positioning and spanning.

## Invisibility (hidden) classes

There may be situation where you require some element(s) to be displayed on smaller or larger container widths, but hidden otherwise. Baselayer has:

* `sm:hidden` — hides elements in containers with width 640px and up
* `sm:hidden-below` — hides elements in containers with width below 640px
* `md:hidden` — hides elements in containers with width 960px and up
* `md:hidden-below` — hides elements in containers with width below 960px
* `lg:hidden` — hides elements in containers with width 1280px and up
* `lg:hidden-below` — hides elements in containers with width below 1280px

<div class="full-bleed mt-3 mb-4 px-3">
<div class="container resize-x">
<table class="table mb-0">
<caption><strong>Invisibility:</strong> ✓ = displayed; ✗ = hidden</caption>
  <thead>
    <tr>
      <th>Class</th>
      <th>Example</th>
      <th>≤639px</th>
      <th>640px–959px</th>
      <th>960px–1279px</th>
      <th>≥1280px</th>
    </tr>
  </thead>
  <tbody>
    <tr class="bt-thick">
      <td><code class="t-nowrap">sm:hidden-below</code></td>
      <td>
        <div class="sm:hidden-below p-cell bg-green bg-200 bg-dark-invert">Example</div>
      </td>
      <td>✗</td>
      <td>✓</td>
      <td>✓</td>
      <td>✓</td>
    </tr>
    <tr>
      <td><code class="t-nowrap">md:hidden-below</code></td>
      <td>
        <div class="md:hidden-below p-cell bg-green bg-200 bg-dark-invert">Example</div>
      </td>
      <td>✗</td>
      <td>✗</td>
      <td>✓</td>
      <td>✓</td>
    </tr>
    <tr>
      <td><code>lg:hidden-below</code></td>
      <td>
        <div class="lg:hidden-below p-cell bg-green bg-200 bg-dark-invert">Example</div>
      </td>
      <td>✗</td>
      <td>✗</td>
      <td>✗</td>
      <td>✓</td>
    </tr>
    <tr class="bt-thick">
      <td><code>sm:hidden</code></td>
      <td>
        <div class="sm:hidden p-cell bg-green bg-200 bg-dark-invert">Example</div>
      </td>
      <td>✓</td>
      <td>✗</td>
      <td>✗</td>
      <td>✗</td>
    </tr>
    <tr>
      <td><code>md:hidden</code></td>
      <td>
        <div class="md:hidden p-cell bg-green bg-200 bg-dark-invert">Example</div>
      </td>
      <td>✓</td>
      <td>✓</td>
      <td>✗</td>
      <td>✗</td>
    </tr>
    <tr>
      <td><code>lg:hidden</code></td>
      <td>
        <div class="lg:hidden p-cell bg-green bg-200 bg-dark-invert">Example</div>
      </td>
      <td>✓</td>
      <td>✓</td>
      <td>✓</td>
      <td>✗</td>
    </tr>
  </tbody>
</table>
</div>
</div>

## Content-grid

`content-grid` is intended for long-read (a.k.a. long-form) prose such as blog losts, news articles, and academic papers. Using a 7 column CSS Grid layout, the default behavior of `content-grid` will place your content in the middle (column 4), where it will have maximum width `--w-cg` = `768px`. It expects your content typographic blocks (headings, paragraphs, lists, tables, etc.), and the panel blocks below, to be its _immediate children_.

<div aria-label="Note" class="popout mt-3 mb-4 bl-heavy b-blue b-300 b-dark-invert p-3 bg-blue bg-100 bg-dark-invert">  <strong>Note:</strong> <code>content-grid</code> is not a <a href="#container-query-powered-layouts">container query powered layout</a> — it doesn’t need to be.</code"></div>

### Popout panels

Use the `popout` utility class on an immediate child of `content-grid` to make an element span the middle 3 columns (3 to 5) instead of just column 4. Columns 3 and 5 have width `--s-2`.

Example information panel using `popout`:

<div aria-label="Note" class="popout mt-3 mb-4 bt-heavy b-blue b-300 b-dark-invert rad-1 p-3 bg-gray bg-100 bg-dark-invert">
  &star; Information panel
</div>

```html
<div aria-label="Note" class="popout mb-2 bt-heavy b-blue b-300 b-dark-invert rad-1 p-2 t-black bg-gray bg-100 bg-dark-invert">
  &star; Information panel
</div>
```

### Expanded panels

Sometimes you need to expand a panel more than as is done in the popout above. You can do this using the `expand` class, that makes an immediate child of `container-grid` to span the middle 5 columns (2 to 6). The expanded area has max-width equivalent to Baselayer `var(--w-md)` (1024px default).

Example “poster” infographic panel using `expand` (and showing how Baselayer’s [aspect ratio](#aspect-ratios) utilities work):

<div class="expand mt-3 mb-4">
  <div class="aspect-ratio-16x9 flex flex-center flex-middle relative">
    <svg xmlns="http://www.w3.org/2000/svg" class="absolute box img-cover" preserveAspectRatio="xMidYMid slice" width="1000" height="600"><defs><linearGradient id="gradient1" gradientTransform="rotate(45)"><stop offset="5%" stop-color="rgba(255,255,0,.5)"/><stop offset="50%" stop-color="rgba(255,255,255,0)"/><stop offset="95%" stop-color="rgba(255,0,0,.5)"/></linearGradient><linearGradient id="gradient2" gradientTransform="rotate(135)"><stop offset="5%" stop-color="rgba(0,0,255,.5)"/><stop offset="50%" stop-color="rgba(255,255,255,0)"/><stop offset="95%" stop-color="rgba(0,255,0,.5)"/></linearGradient></defs><rect width="100%" height="100%" fill="url('#gradient1')"/><rect width="100%" height="100%" fill="url('#gradient2')"/></svg>
    <div class="z-1 w-max-sm p-3">
      <div>
        <p class="h1 t-bold">This is a lot of example text that may or may not distort the aspect ratio (16×9) of this expand component.</p>
        <p class="h1 t-bold">See what it does on a small viewport width (e.g. phone).</p>
      </div>
    </div>
  </div>
</div>

A z-index positioning layer (e.g. `z-1`) is required to make the text overlay the image layer. (Alternatively, you can add another `relative` context.)

```html
<div class="expand mb-2 aspect-ratio-16x9 flex flex-center flex-middle relative">
  <svg>...</svg>
  <div class="z-1 w-max-sm aspect-ratio-16x9 p-3">
    <p class="h1 t-bold">This is a lot of example text that may or may not distort the aspect ratio (16×9) of this expand component.</p>
    <p class="h1 t-bold">See what it does on a small viewport width (e.g. phone).</p>
  </div>
</div>
```

### Full-bleed panels

Use the `full-bleed` utility class to make an element span all 7 columns of a `content-grid`.

Columns 1 and 7 (the first and last column) have a minimum width of `--s-2` — providing the middle columns with inline (x-axis) side whitespace.

If your layout has no sidebars, side spacing (margin or padding), or other object that takes up some of the viewport width, then your `content-grid full-bleed` will expand to the full width of the viewport. But if it can’t get to the full viewport width, then it will expand to the available width (as seen in the docs example below).

Example colored stripe using `full-bleed`:

<div class="full-bleed mt-3 mb-4 p-2 t-semibold t-white bg-red">
 <code>full-bleed</code> — expands to the full width of the avilable space. If there are no sidebars, it will reach the sides of the viewport.
</div>

```
<div class="full-bleed">
 Full bleed panel content...
</div>
```

## Aspect ratios

Common aspect ratio constraints for images, video, and hero blocks.

<div class="full-bleed mt-3 mb-4">
  <div class="wrapper-md grid sm:equal-4-cols gap-2">
    <div>
      <div class="aspect-ratio-1x1 b-thin p-1"><code>aspect-ratio-1x1</code></div>
    </div>
    <div>
      <div class="aspect-ratio-4x3 b-thin p-1"><code>aspect-ratio-4x3</code></div>
    </div>
    <div>
      <div class="aspect-ratio-16x9 b-thin p-1"><code>aspect-ratio-16x9</code></div>
    </div>
    <div>
      <div class="aspect-ratio-21x9 b-thin p-1"><code>aspect-ratio-21x9</code></div>
    </div>
  </div>
</div>

## Overflows

Using `auto` to add scrollling when the content of a block exceeds its constrained height or width.

* `overflow-x` — e.g. for wrapping tables with a lots of columns, that would break a template layout in small viewports
* `overflow-y` — e.g. for sidebar menus loaded with content

### Overflow clip

* `overflow-clip` — for hiding content that overflows your set dimensions on an element, and for preventing images to show in the corners of elements that have [rounded corners]({{ "/decoration/#rounded-corners" | url}}).

## Floats

<div class="mb-3">
  <div class="float-right">
    <div class="b-thin p-2">This is an example of<br> <code>float-right</code></div>
  </div>
  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis dolore quis iste fuga molestias necessitatibus. Autem quidem, consequuntur dicta illo rem nobis ratione vel? Cupiditate beatae similique nobis temporibus sequi rerum mollitia, saepe architecto ad, necessitatibus placeat repudiandae commodi laboriosam quos molestiae sed modi dignissimos nisi magni adipisci eligendi.</p>
</div>

<div class="mb-4">
  <div class="float-left">
    <div class="b-thin p-2">This is an example of<br> <code>float-left</code></div>
  </div>
  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis dolore quis iste fuga molestias necessitatibus. Autem quidem, consequuntur dicta illo rem nobis ratione vel? Cupiditate beatae similique nobis temporibus sequi rerum mollitia, saepe architecto ad, necessitatibus placeat repudiandae commodi laboriosam quos molestiae sed modi dignissimos nisi magni adipisci eligendi.</p>
</div>

There's also a `clearfix` class, if you need it.
