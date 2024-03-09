---
title: Layout
mainHeading: Layout
layout: base.njk
prevPage: "/typography/"
nextPage: "/decoration/"
prevLink: "Typography"
nextLink: "Decoration"
---

<div aria-label="Note" class="popout mb-2 bl-3 b-blue b-300 b-dark-invert p-2 bg-blue bg-100 bg-dark-invert">
  Since September 2023, all “evergreen” browsers (Chrome, Edge, Firefox, Safari) have capability for the new CSS Container Queries (see <a href="https://caniuse.com/?search=container">Can I use Container Queries</a>). Baselayer 3.2.x has <a href="#container-query-powered-layouts">container query powered layouts</a> to control <code>flex</code>, <code>grid</code>, and <code>hidden</code> utility classes. 
</div>

## Blocks

* `block` — make an inline element behave as a block element
* `inline-block` — to enable block-like settings on an inline element (width, height, margins, paddings)
* `inline-flex`, `flex` — see [flex layouts](#flex-layouts)
* `grid` — see [grid layouts](#grid-layouts)

## Dimensions

### Content wrappers

Baselayer’s `wrapper` classes add a constrained layout width, inline margin (x-axis) auto centering, and side edge whitespace when the viewport width is at or narrower then the wrapper width.

<div aria-label="Note" class="popout mb-2 bl-3 b-amber b-300 b-dark-invert p-2 bg-amber bg-100 bg-dark-invert">  Baselayer’s <em>wrapper</em> classes were previously known as <em>container</em> classes, copying the name from other CSS frameworks such as Bootstrap. But with Baselayer 3.2.x switching from <code>@media</code> queries to <code">@container</code> queries, a context-container was required for parent elements of container query controlled layout systems. Therefore, the <code>container</code> class is now specifically used for that purpose. See <a href="#container-query-powered-layouts">container query powered layouts</a>.
</div>

The centered layout `wrapper` is set up as follows:

In `variables.css`:

```css
:root {
  --w-xl: 1600px;

  --sp-2: clamp(1rem, 0.5rem + 1.25vw, 1.5rem);
}

/*
Container query context
*/
.container {
  --sp-2: clamp(1rem, 0.5rem + 1.25cqi, 1.5rem);  
}
```

For viewport widths below `--w-max` side spacing is provided by `--sp-2`. This adds a negative space (whitespace) right and left of the wrapper, to prevent text being difficult to read when up against the sides of the viewport. `--sp-2` involes viewport widths (vw), or container query widths (cqi) if the `wrapper` is places _inside_ a `container`.

In `layout.css`:

```css
.wrapper {
  --w-max: var(--w-xl);
  width: min(100% - (var(--sp-2) * 2), var(--w-max));
  margin-inline: auto;
}
```

There are several `wrapper` width modifiers, same as the width modifiers — see below.

### Widths

320px intervals. `w-` classes will have widths 100% until their max width. `wrapper-` classes will have widths (100% minus side space) until their max width.

The difference between width utilities and wrapper utilities is that wrappers have x-axis side padding and x-axis centering (see above).

* `wrapper-xs` / `w-xs` — max width 320px
* `wrapper-sm` / `w-sm` — max width 640px
* `wrapper-md` / `w-md` — max width 960px
* `wrapper-lg` / `w-lg` — max width 1280px
* `wrapper-xl` / `w-xl` — max width 1600px
* `wrapper` — max width 1600px

Both the `-xs`, `-sm`, `-md`, `-lg`, `-xl` wrapper and width utilities have their widths set using:

```css
width: min(100%, {variable});
```

This means they will responsively expand to width 100% within the space available, until they max out at their set width variable.

Three more:

* `w-100%` — width 100%
* `w-100vw` — width 100vw
* `w-max-100vw` — max-width 100vw


### Heights

* `h-100%` — height 100%, e.g. for making cards equal to the height of their wrapper
* `h-100dvh` — height 100dvh, e.g. for making “full cover” panels
* `h-max-100dvh` — max-height 100dvh, e.g. for tall sidebars (use `h-max-100dvh` with `overflow-y`)

Baselayer uses `100dvh` (dynamic viewport height) that gives a different viewport height for some devices — i.e. it compensates for the scroll-retracting interface toolbars on iOS Safari.

### Box

* `box` — expands an inner element using `inset: 0` to fill the size of its wrapper (you must put `relative` on a `box` wrapper). Useful for setting up a panel (e.g. hero or card) background image with text overlay.

## Positions

* `relative`
* `absolute`
* `sticky`
* `top` — top: 0
* `right` — right: 0
* `bottom` — bottom: 0
* `left` — left: 0
* `z-1` — z-index: 1
* `z-2` — z-index: 2
* `z-3` — z-index: 3

For centering and middling, you also need [flex](#flex-layouts).

Example: 

<div class="relative mb-2 b-1 aspect-ratio-16x9">
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

Since Baselyer 3.2.x, [flex](#flex-layouts), [grid](#grid-layouts), and [invisibility](#invisibility) (hidden) utilities have `@container` variants that only work if they are wrapped in a `container` class, that provides the _container query context_:

```css
.container {
  container-type: inline-size;
}
```

This `container` class does not constrain the outer element’s width in any way. You will need to control the widths of your content with e.g. [wrapper](#centered-layout-wrappers) or [width](#widths) utilities, or by placing the container within a grid cell, etc.

There are three `@container` variants for `flex`, `grid`, and `hidden` classes corresponding to prefix widths:

* `sm:` (640px)
* `md:` (960px)
* `lg:` (1280px)

<div aria-label="Note" class="popout mb-2 bl-3 b-amber b-300 b-dark-invert p-2 bg-amber bg-100 bg-dark-invert">
  Layout classes with <code>sm:</code>, <code>md:</code>, and <code>lg:</code> prefixes do not work unless they are inside a <code>container</code>.
</div>

You can place the `container` class on e.g.:

* The `<body>` tag (so that the container query will behave the same as a media query)
* Semantic layout sections, such as your page `<header>`, `<main>`, or `<footer>` 
* `<div>`’s of course
* Nested within other `container` elements (e.g. so you can have sidebars or arrays of cards within your `<main>`)
* And more.

### Supporting older browsers

What if you want to use Baselayer’s `flex`, `grid` and `hidden` clases but you really prefer media queries, or if you need to support pre-container query browsers?

Then all you need to do is find every instance of `@container` in `layout.css` and replace it with `@media`, and this will convert everything to media queries. (And then the `container` class will be redundant — you won’t need it.)

### Container query demos

This entire documentation template is built using a full-width container query powered [grid](#grid-layouts) that takes effect when the _viewport_ is at or above Baselayer’s `md` container query breakpoint (default ≥ 960px). Above `md`, the top navigation bar becomes the sidebar in column 1, with everything else in column 2.

The “everything else” area is organized in another grid within the same `container` context as the outer grid above, that becomes a two column grid when _that container’s_ width is at `lg` or above (≥ 1280px). Then the table of contents (TOC) block is placed in column 2 of this inner grid (that appear to be the third column in the overall page layout).

So, the page layout deonstrates two `grid` layouts, one nested inside the other, and both are inside one outer `container` — they share the same container query context.

The main content (everything else below the title) is organised within a [content-grid](#content-grid) (that is not powered by a container query).

Also, there There are small demos of container query layouts on this page below, demonstrating `flex`, `grid`, and `hidden classes` all set within their own `container`s. Some of those demos have an _x-axis resizer_, so that you can test them out and see how they work. The resizer is indicated by a dashed border and a resizer symbol in the bottom right corner. Example resizer without a container query demo inside:

<div class="mt-2 mb-3 resize-x">
<div class="flex flex-bottom flex-end t-right" style="min-height: 100px;">Resize symbol ↘</div>
</div>

### Flex layouts

Flexbox utilities for simple layout, menubars, pagination lists, cards, etc.

* `inline-flex` — inline flexbox at all viewport widths
* `flex` — flexbox at all viewport widths

#### Flex gaps

`gap-*` — adds a _horizontal and vertical_ gap (same as for [grid layouts](#grid-layouts)):

* `gap-1` — `--sp-1`
* `gap-2` — `--sp-2`
* `gap-3` — `--sp-3`
* `gap-4` — `--sp-4`

#### Flex modifiers

* X-axis: `flex-start` / `flex-center` / `flex-end`
* Y-axis: `flex-top` / `flex-middle` / `flex-bottom`
* `flex-wrap` — gives you flex-wrap: wrap
* `flex-column` — gives you flex-direction: column
* `flex-space-between` — gives you justify-content: space-between
* `flex-grow-equal` — makes grid item expand so that they occupy an equal fraction of the total width (or height, if used with `flex-column`)
* `flex-grow-auto` — makes grid item expand so that they occupy an unequal fraction of the total width (or height, if used with `flex-column`): each expanding as required by their respective content.

**Note:** the gaps have the same spacing CSS variables as [margins and paddings]({{ '/decoration/' | url }}#spacing-(margins-and-paddings)).

#### Flex-item grow

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

#### Flex and container queries

If you wrap the following in a `container` class, they will take effect at the following container widths up:

* `sm:flex` — flexbox at container width 640px and up
* `md:flex` — flexbox at container width 960px and up
* `lg:flex` — flexbox at container width 1280px and up

Example using `sm:flex` (container query breakpoint width 640px):

<div class="expand mt-2 mb-3">
  <div class="container resize-x">
    <nav class="sm:flex gap-1 flex-end">
      <a class="my-1 btn block" href="#/">Home</a>
      <a class="my-1 btn block" href="#/">About</a>
      <a class="my-1 btn block" href="#/">Blog</a>
      <a class="my-1 btn block" href="#/">Contact</a>
    </nav>
  </div>
</div>

```html
<div class="container">
  <nav class="sm:flex gap-1 flex-end">
    <a class="my-1 btn block" href="">Home</a>
    <a class="my-1 btn block" href="">About</a>
    <a class="my-1 btn block" href="">Blog</a>
    <a class="my-1 btn block" href="">Contact</a>
  </nav>
</div>
```

In the example above, each button has a y-axis (block axis) margin, so that they still have whitepace gaps below the `sm:flex` breakpoint width.

### Grid layouts

#### Setting up a grid

Controlling tracks at _grid wrapper_ level:

* **Grid** — the `grid` class initializes the CSS grid. It only adds `display: grid` — it doesn’t provide information about how many columns you want, or what their widths will be. To control columns, use `equal-` classes on the grid wrapper, or control the position of grid items.
* **Gap (optional)** — adds vertical _and_ horizontal whitespace (a.k.a. gutters) along internal grid tracks. See [grid gaps](#grid-gaps).
* **Equal width grid cell control (optional)** — `equal-*-cols` etc. specifies how many columns your layout has (2, 3, or 4), where each column width is equalized.
* **Dense packing (optional)** — `grid-dense` can be used as a quick way to _reorder_ grid items: packing so later items into earlier empty cells if there’s enough space for them. There is a [dense packing example](#grid-items-and-dense-packing) below, after where we have described per-item control.

Having 2, 3, or 4 _CSS grid_ columns covers most use cases for the traditional 12 column grid system in webpage design. The Baselayer 3 grid can do all that and so much more.

<div class="mt-2 mb-3 grid equal-3-cols">
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

If this is all you do to set up a grid, each _grid item_ will automatically span one _grid cell_. If you have more grid items than set columns, the excess will wrap onto new row(s).

<div class="mt-2 mb-3 grid equal-3-cols">
  <div class="b-1 p-cell">1</div>
  <div class="b-1 p-cell">2</div>
  <div class="b-1 p-cell">3</div>
  <div class="b-1 p-cell">4</div>
  <div class="b-1 p-cell">5</div>
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

#### Grid gaps

* `gap-*` — adds a _horizontal and vertical_ gap between grid cells, using the same spacing variables as for margins and paddings:
    * `gap-1` — `--sp-1`
    * `gap-2` — `--sp-2`
    * `gap-3` — `--sp-3`
    * `gap-4` — `--sp-4`

These same `gap-*` classes are used for [flex layouts](#flex-layouts).

<div class="mt-2 mb-3 grid equal-3-cols gap-2">
  <div class="b-1 p-cell">1</div>
  <div class="b-1 p-cell">2</div>
  <div class="b-1 p-cell">3</div>
  <div class="b-1 p-cell">4</div>
  <div class="b-1 p-cell">5</div>
</div>

```html
<div class="grid equal-3-cols gap-2">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
```

#### Controlling grid items

Controlling positioning and spanning at _per-grid-item_ level:

* **Spanning (optional)** — `col-span-*` and `row-span-*`etc. – spanning 2, 3, or 4 columns or rows.
* **Positioning (optional)** — `col-*` and `row-*` etc. – for positioning each grid item over the grid cells.

CSS grid positions grid items _automatically_ on the available grid cells — so an item will be placed on the _next_ available cell until required to begin again on the _next_ (i.e. new) row. You can use this automatic positioning to your advantage, allowing CSS grid to presume where you want your next item to be. As in the following simple example: 

<div class="mt-2 mb-3 grid equal-3-cols gap-2">
  <div class="b-1 p-cell">1</div>
  <div class="col-span-2 b-1 p-cell">columns 2 to 3</div>
</div>

```html
<div class="grid equal-3-cols gap-2">
  <div></div>
  <div class="col-span-2"></div>
</div>
```

The `col-span-` and `row-span-` spanning classes can be used to make grid items to span up to 4 columns and/or 4 rows.

You can also control positioning by using the responsive `col-` and `row-` classes. In the following example, all we needed todo is specify that the third grid item should go on `row-2` and the CSS grid _automatically_ figured out that the fourth item should start in the next available grid cell — in column 3 of row 1:

<div class="mt-2 mb-3 grid equal-4-cols gap-1">
  <div class="b-1 p-cell">1</div>
  <div class="b-1 p-cell">2</div>
  <div class="col-span-2 row-2 b-1 p-cell">columns 1 to 2, row 2</div>
  <div class="col-span-2 row-span-2 b-1 p-cell">columns 3 to 4, rows 1 to 2</div>
</div>

```html
<div class="grid equal-4-cols gap-1">
  <div>1</div>
  <div>2</div>
  <div class="col-span-2 row-2">columns 1 to 2, row 2</div>
  <div class="col-span-2 row-span-2">columns 3 to 4, rows 1 to 2</div>
</div>
```

The responsive `col-` and `row-` positioning classes are used to instruct the grid which grid cell you want your grid item to be placed on (up to 4 columns and/or 4 rows).

#### Grid items and dense packing

When you control the positioning of grid items, you cam sometimes leave leave spaces of unoccupied cells. This is because CSS grid automatially tries to place the next item in the next available cell — it does not automatically back-fill any empty cells that you have left:

<div class="mt-2 mb-3 grid gap-1 equal-4-cols">
  <div class="b-1 p-cell">Item 1</div>
  <div class="col-1 col-span-2 b-1 p-cell">Item 2</div>
  <div class="col-2 col-span-3 b-1 p-cell">Item 3</div>
  <div class="col-4 b-1 p-cell">Item 4</div>
  <div class="col-3 b-1 p-cell">Item 5</div>
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

<div class="mt-2 mb-3 grid grid-dense gap-1 equal-4-cols">
  <div class="b-1 p-cell">Item 1</div>
  <div class="col-1 col-span-2 b-1 p-cell">Item 2</div>
  <div class="col-2 col-span-3 b-1 p-cell">Item 3</div>
  <div class="col-4 b-1 p-cell">Item 4</div>
  <div class="col-3 b-1 p-cell">Item 5</div>
</div>


#### Grid and container queries

The Baselayer grid system has four tiers of container query breakpoint widths, for creating different grid layouts for different sized containers: all widths, `sm:`, `md:`, and `lg:`.

* Tier 1: grid layout effective at all container widths (including below 640px)
* Tier 2: `sm:` grid layout effective at container widths 640px and up
* Tier 3: `md:` grid layout effective at container widths 960px and up
* Tier 4: `lg:` grid layout effective at container widths 1280px and up

These three breakpoint prefixes can be added to grid wrapper `equal-` classes (to specify that you want 2, 3, or 4 equalized columns at those container widths). And they can also be added to the per-item positioning and spanning classes. Meanwhile the `grid`, `grid-dense`, and `gap-*` classes cannot be controlled by breatkpoints — because they don’t need to be.

**Note:** the `grid` class is effective at all widths, therefore the `gap-*` class will still work all the way down.

The _tier 1_ grid system has no container query prefixes (and doesn’t need to be surrounded by a `container`) — it takes effect at all widths. This makes the _tier 1_ `grid` ideal for creating small icon galleries, or for making small media objects that you don’t want to “stack collapse” in narrow columns or on phones (e.g. social messaging or comment cards).

The three responsive (container query powered) grid layout prefixes can be _combined_ on the same HTML elements, so that you can create up to four different layouts on the same `grid`.

Simple example: With just adding a `container` around your grid, and then width prefixes on `equal-` classes, this is all you need for setting up equal width items such as in image galleries, or sets of cards:

<div class="full-bleed mt-2 mb-3 px-2">
<div class="container resize-x">
<div class="grid sm:equal-2-cols md:equal-3-cols gap-2">
  <div class="b-1 p-cell">1</div>
  <div class="b-1 p-cell">2</div>
  <div class="b-1 p-cell">3</div>
  <div class="b-1 p-cell">4</div>
  <div class="b-1 p-cell">5</div>
  <div class="b-1 p-cell">6</div>
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

<div class="popout mt-2 mb-3 container resize-x">
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

### Invisibility (hidden) classes

There may be situation where you require some element(s) to be displayed on smaller or larger container widths, but hidden otherwise. Baselayer has:

* `sm:hidden` — hides elements in containers with width 640px and up
* `sm:hidden-below` — hides elements in containers with width below 640px
* `md:hidden` — hides elements in containers with width 960px and up
* `md:hidden-below` — hides elements in containers with width below 960px
* `lg:hidden` — hides elements in containers with width 1280px and up
* `lg:hidden-below` — hides elements in containers with width below 1280px

<div class="my-2 popout container resize-x">
<table class="table mb-0">
<caption><strong>Invisilility:</strong> ✓ = displayed; ✗ = hidden</caption>
  <thead>
    <tr>
      <th>Class</th>
      <th>Example</th>
      <th>≤639px</th>
      <th>640px–959px</th>
      <th>960px–1280px</th>
      <th>≥1280px</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code class="t-nowrap">sm:hidden-below</code></td>
      <td>
        <div class="sm:hidden-below p-block t-black bg-green bg-200">Example</div>
      </td>
      <td>✗</td>
      <td>✓</td>
      <td>✓</td>
      <td>✓</td>
    </tr>
    <tr>
      <td><code class="t-nowrap">md:hidden-below</code></td>
      <td>
        <div class="md:hidden-below p-block t-black bg-green bg-200">Example</div>
      </td>
      <td>✗</td>
      <td>✗</td>
      <td>✓</td>
      <td>✓</td>
    </tr>
    <tr>
      <td><code>lg:hidden-below</code></td>
      <td>
        <div class="lg:hidden-below p-block t-black bg-green bg-200">Example</div>
      </td>
      <td>✗</td>
      <td>✗</td>
      <td>✗</td>
      <td>✓</td>
    </tr>
    <tr>
      <td><code>sm:hidden</code></td>
      <td>
        <div class="sm:hidden p-block t-black bg-green bg-200">Example</div>
      </td>
      <td>✓</td>
      <td>✗</td>
      <td>✗</td>
      <td>✗</td>
    </tr>
    <tr>
      <td><code>md:hidden</code></td>
      <td>
        <div class="md:hidden p-block t-black bg-green bg-200">Example</div>
      </td>
      <td>✓</td>
      <td>✓</td>
      <td>✗</td>
      <td>✗</td>
    </tr>
    <tr>
      <td><code>lg:hidden</code></td>
      <td>
        <div class="lg:hidden p-block t-black bg-green bg-200">Example</div>
      </td>
      <td>✓</td>
      <td>✓</td>
      <td>✓</td>
      <td>✗</td>
    </tr>
  </tbody>
</table>
</div>

## Content-grid

**Note:** `content-grid` is not a [container query powered layout](#container-query-powered-layouts).

`content-grid` is intended for long-read (a.k.a. long-form) prose such as blog losts, news articles, and academic papers.

`content-grid` uses CSS Grid to set up a 7 column layout. The default behavior of `content-grid` will place your content in the middle (column 4), where it will have maximum width `--w-cg` = `40em`. This max width will be 640px for the default font size (1rem = 16px) and 800px when used with `t-long-read` (see [the long-lead utility class](/baselayer-3/typography/#the-long-lead-utility-class)).

`content-grid` expects your content typographic blocks (headings, paragraphs, lists, tables, etc.), and the panel blocks below, to be its _immediate children_.

### Popout panels

Use the `popout` utility class on an immediate child of `content-grid` to make an element span the middle 3 columns (3 to 5) instead of just column 4. Columns 3 and 5 have width `--sp-2`.

Example information panel using `popout`:

<div aria-label="Note" class="popout mb-2 bt-3 b-blue b-300 b-dark-invert r-2 p-2 bg-gray bg-100 bg-dark-invert">
  &star; Information panel
</div>

```html
<div aria-label="Note" class="popout mb-2 bt-3 b-blue b-300 b-dark-invert r-2 p-2 t-black bg-gray bg-100 bg-dark-invert">
  &star; Information panel
</div>
```

### Expanded panels

Sometimes you need to expand a panel more than as is done in the popout above. You can do this using the `expand` class, that makes an immediate child of `container-grid` to span the middle 5 columns (2 to 6).

Example “poster” infographic panel using `expand` (and showing how Baselayer’s [aspect ratio](#aspect-ratios) utilities work):

<div class="expand mt-2 mb-3 aspect-ratio-16x9 flex flex-center flex-middle relative">
  <svg xmlns="http://www.w3.org/2000/svg" class="absolute box img-cover" preserveAspectRatio="xMidYMid slice" width="1000" height="600"><defs><linearGradient id="gradient1" gradientTransform="rotate(45)"><stop offset="5%" stop-color="rgba(255,255,0,.5)"/><stop offset="50%" stop-color="rgba(255,255,255,0)"/><stop offset="95%" stop-color="rgba(255,0,0,.5)"/></linearGradient><linearGradient id="gradient2" gradientTransform="rotate(135)"><stop offset="5%" stop-color="rgba(0,0,255,.5)"/><stop offset="50%" stop-color="rgba(255,255,255,0)"/><stop offset="95%" stop-color="rgba(0,255,0,.5)"/></linearGradient></defs><rect width="100%" height="100%" fill="url('#gradient1')"/><rect width="100%" height="100%" fill="url('#gradient2')"/></svg>
  <div class="z-1 w-sm p-3">
    <div>
      <p class="h1 t-bold">This is a lot of example text that may or may not distort the aspect ratio (16×9) of this expand component.</p>
      <p class="h1 t-bold">See what it does on a small viewport width (e.g. phone).</p>
    </div>
  </div>
</div>

A z-index positioning layer (e.g. `z-1`) is required to make the text overlay the image layer. (Alternatively, you can add another `relative` context.)

```html
<div class="expand mt-2 mb-3 aspect-ratio-16x9 flex flex-center flex-middle relative">
  <svg>...</svg>
  <div class="z-1 w-sm aspect-ratio-16x9 p-3">
    <p class="h1 t-bold">This is a lot of example text that may or may not distort the aspect ratio (16×9) of this expand component.</p>
    <p class="h1 t-bold">See what it does on a small viewport width (e.g. phone).</p>
  </div>
</div>
```

### Full-bleed panels

Use the `full-bleed` utility class to make an element span all 7 columns of a `content-grid`.

Columns 1 and 7 (the first and last column) have a minimum width of `--sp-2` — providing the middle columns with inline (x-axis) side whitespace.

If your layout has no sidebars, side spacing (margin or padding), or other object that takes up some of the viewport width, then your `content-grid full-bleed` will expand to the full width of the viewport. But if it can’t get to the full viewport width, then it will expand to the available width (as seen in the docs example below).

Example colored stripe using `full-bleed`:

<div class="full-bleed mt-2 mb-3 p-2 t-semibold t-white bg-red">
 <code>full-bleed</code> — expands to the full width of the avilable space. If there are no sidebars, it will reach the sides of the viewport.
</div>

```
<div class="full-bleed">
 Full bleed panel content...
</div>
```

## Aspect ratios

Common aspect ratio constraints for images, video, and hero blocks.

<div class="full-bleed mt-2 mb-3">
  <div class="wrapper-md grid sm:equal-4-cols gap-2">
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