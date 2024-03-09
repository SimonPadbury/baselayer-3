---
title: Typography
mainHeading: Typography
layout: base.njk
prevPage: "/"
nextPage: "/layout/"
prevLink: "Introduction"
nextLink: "Layout"
---

## Font stacks

A few native font stacks are set in the `root-vars.css` file.

```
:root {
  --t-sans: ui-sans-serif, system-ui, sans-serif;
  --t-serif: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
  --t-mono: ui-monospace, Menlo, Consolas, "Courier New", monospace;

  /* Alternative serif font stack (not used anywhere) */
  --t-old-serif: "Iowan Old Style", "Palatino Linotype", Palatino, Georgia, serif;

  --t-base: var(--t-sans);
  --t-prose: var(--t-serif);
}
```

Everything here is an example, a place to start. Your own `--base` and `--prose` don’t need to be both sans-serif and serif. See [setting font stacks](#setting-font-stacks) for more information.

The Baselayer docs make use of JavaScript and some extra CSS to enable a demo toggle, so that you can switch between `--base` and `--prose` in this main content area.

<p class="flex flex-center">
  <button class="toggler p-cell flex flex-column gap-1 bg-blue bg-500 hover:bg-600 bg-dark-invert" onclick="toggleFont()">
    <div class="label-base w-100% flex flex-middle gap-1">
      <div class="check-box flex flex-center flex-middle t-black bg-white"></div>
      <div class="grow t-left">Base font</div>
    </div>
    <div class="label-prose w-100% flex flex-middle gap-1">
      <div class="check-box flex flex-center flex-middle t-black bg-white"></div>
      <div class="grow t-left">Prose font</div>
    </div>
  </button>
</p>

Font stack usage in Baselayer:

* The base font stack is set in the `<body>` tag (in `base.css`) and via the `t-base` utility class.
* The prose is only available via the `t-prose` utility class
* The monotype is available via the `<code>`, `<kbd>`, and `<samp>` HTML tags, and in the `t-mono` utility class.

### Setting font stacks

In choosing your own font stacks, you will probably need two fonts that have similar _x-height_, so that you can set them using the same font size and line-height. Some other factors to compare are hights for lowercase ascenders and descenders, letter width, and stroke thickness.

If you prefer Baselayer’s ealier “Old Serif” font stack, this is still available in the variable `--t-old-serif`. You can easily revert to it by putting something like this in your own stylesheet:

```css
.t-prose {
  font-family: var(--t-old-serif);
}
```

If you want to stick with using native font stacks, the [Modern Font Stacks](https://modernfontstacks.com) website has several examples that you can easily copy.

In choosing your own typefaces from elsewhere, a good place to start is by pairing serif and sans-serif (or slab serif) fonts of the same typeface, if both are available. For example, [Google Fonts](https://fonts.google.com) has several typefaces to choose from, such as:

* Alegreya and Alegreya Sans
* IBM Plex and IBM Plex Sans
* Inria Serif and Inria Sans
* Noto Serif and Noto Sans
* PT Serif and PT Sans
* Roboto and Roboto Slab
* Source Sans 3 and Source Serif 4

Google provides examples of how to use their fonts in your CSS, where the fallback for each is only e.g. `sans-serif` or `serif`. But it may be better to use Baselayer’s native font stack variables instead. For example:

```css
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Serif:ital@0;1&display=swap');

body {
  /* Example from Google Fonts */
  font-family: 'IBM Plex Serif', serif;

  /* You can use this instead */
  font-family: 'IBM Plex Serif', var(--t-serif);
}
```

In Baselayer, sizes and weights for the base and prose typefaces can optionally be set independently — but you will still want them to share the same line height. For using another set of sizes and weights for prose, you will need to do some un-commenting in two files: `variables.css` and `typography.css`.

So, for example:

* If your chosen base typeface has an _x-height_ much larger than your chosen prose typeface, then you can set the prose font-size slightly larger, or the base slightly smaller.
* If your base typeface has thicker strokes so that it “looks darker” than your prose typeface, then you may want to set your base font-weight slightly lighter, to `300` (if this is available) while retaining your prose font-weight at the normal `400`.

For inspiration:

* [Pairing Typefaces (Google Fonts article)](https://fonts.google.com/knowledge/choosing_type/pairing_typefaces)
* [fontpairings.com](https://www.fontpairings.com)
* [fontpair.co](https://www.fontpair.co)
* [fontjoy.com](https://fontjoy.com)
* [Pair & Compare](https://www.pairandcompare.net)
* [Top 50 Google Font Pairings [Handpicked by Pro Designers] (Pagecloud)](https://www.pagecloud.com/blog/best-google-fonts-pairings)

## Typographic block elements

Most typographic blocks have zero top margin, and bottom margin set to the _line height in rems_ using these two variables:

```css
:root {
  --lh: 1.5; /* Base lineheight (no unit) */
  --mlh: calc(var(--lh) * 1rem); /* margin line height in rems */
}
```

### Headings

Example heading sizes (using utility classes, so that they don’t show up in the automatic table-of-contents generator):

<p class="h1">Heading h1</p>
<p class="h2">Heading h2</p>
<p class="h3">Heading h3</p>
<p class="h4">Heading h4</p>
<p class="h5">Heading h5</p>
<p class="h6">Heading h6</p>

All headings `<h1>` to `<h6>` and matching utility classes `h1` to `h6` have:

* Headings font sizes set in the variables file. The typographic scale is 1.250 (major third), calculated using the [Type Scale](https://type-scale.com) webapp.
* Headings also have their font-family set using `--hf: inherit`. This has been done so that you can use the variable to override it. Your headings don’t need to be the same typeface as your paragraphs.
* Headings font weight is set using `--hfw: var(--bold)` — which you can also override.
* Headings line heights set using the formula 1em + 0.5rem. Meanwhile the bottom margin is the same as for paragraphs: the line-height of _defaut_ text (1.5) made into rems (1.5rem), set by the variable `--mlh`. (When the default text size is 16px, the line height and margin-bottom of typographic block elements is 24px.)
* Headings `<h2>` to `<h6>` and matching utility classes `h2` to `h6` also have top margins equal to their respective line heights (so H2 has a bigger top margin than H3, and so on)

```css
:root {
  /* Heading font sizes */
  --h1: 2.441em;
  --h2: 1.953em;
  --h3: 1.563em;
  --h4: 1.25em;
  --h5: 1em;
  --h6: .8em;

  /* headings font */
  --hf: inherit;

  /* headings font-weight */
  --hfw: var(--bold);

  /* headings line-height */
  --hlh: calc(1em + 0.5rem);
}
```

Tips:

1. In some contexts (e.g. in card components) you may not want any built-in spacing for typographic block elements. Then, you can remove margins by using the `m-0` utility class.
2. You can also remove top margin “remotely” e.g. you can target the first item inside its wrapper using `.your-wrapper:first-child { margin-top: 0; }`, or the first sibling after the `<header>` or `<h1>` e.g. as I have done in these docs: `.content-grid header + * { margin-top: 0; }`. This takes care of any pages that start their content with an `<h2>` as the first element under the title (header) block.

### Block quotes

Baselayer styles `<blockquote>` tags with some inline (x-axis) padding, to give the effect of indentation. This inline padding is set using the responsive spacing variable `--sp-3` so that it increases if there is more available width. Whitespace `--sp-3` is either based on viewport width or container width, depending on context.

Otherwise, blockquotes have the same as paragraph styling.

> Lorem ipsum dolor sit amet, adipiscing honestatis ius ut, nisl consulatu pro in. Imperdiet evertitur no usu, his te suavitate salutatus. Nullam ridens deterruisset an duo. Cum harum insolens ei, cum probo placerat praesent et.

### Lists

In Baselayer ordered `<ol>` and unordered `<ul>` have a small amount of left padding. But Baselayer separates list items `<li>` to make them more obvious by setting a small top margin _between_ list items (smaller than the top margin between paragraphs), and the same amount _above_ nested `<ol>` and `<ul>`. This makes ordered and unordered lists have an even spacing like this:

1. Ordered item one
2. Ordered item two
    1. Ordered item two child one
    2. Ordered item two child two
3. Ordered item three

```
<ol>
  <li>Ordered item one</li>
  <li>Ordered item two
    <ol>
      <li>Ordered item two child one</li>
      <li>Ordered item two child two</li>
    </ol>
  </li>
  <li>Ordered item three</li>
</ol>
```

* Unordered item
* Unordered item
    * Unordered item child
    * Unordered item child
* Unordered item

```
<ul>
  <li>Unordered item</li>
  <li>Unordered item
    <ul>
      <li>Unordered item child</li>
      <li>Unordered item child</li>
    </ul>
  </li>
  <li>Unordered item</li>
</ul>
```

For definition lists, the title is bold and the data-item is indented with the same left padding as for the lists (see above).

<dl>
  <dt>Definition list title</dt>
  <dd>Definition list data</dd>
  <dt>Definition list title</dt>
  <dd>Definition list data</dd>
</dl>

```
<dl>
  <dt>Definition list title</dt>
  <dd>Definition list data</dd>
  <dt>Definition list title</dt>
  <dd>Definition list data</dd>
</dl>
```

## The link tag

The default underline for links has been moved downwards slightly to improve legibility. The link decoration (underscore) thickness has been set at 1px, so that it doesn’t become thicker when used on larger text (e.g. in headings) where link underscores can be too bulky).

Link color is set by `--tc-link`, which is the Baselayer theme middle blue (see [colors]({{ '/colors/' | url }})). The hover state is a shade darker.

## Tables

Baselayer tables are set using the `.table` class.

* Paddings are set by `--p-cell` (see decoration [spacing extras]({{ '/decoration/' | url }}#spacing-extras))
* Table headers `<th>` are bold. 
* Table cells `<th>` and `<td>` have a border set by `var(--b-1)` – the same detail as `<hr>` and [border]({{ '/decoration/' | url }}#borders) utility classes.
* All cell content is left-aligned. You can change that on the whole `<table>` or on a per-cell basis using the text alignment classes.

<table class="mt-2 mb-3 table">
  <caption>This is a Table Caption</caption>
  <thead>
    <tr>
      <th>Table Header 1</th>
      <th>Table Header 2</th>
      <th>Table Header 3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Table content 1.1</td>
      <td>Table content 2.1</td>
      <td>Table content 3.1</td>
    </tr>
    <tr>
      <td>Table content 1.2</td>
      <td>Table content 2.2</td>
      <td>Table content 3.2</td>
    </tr>
    <tr>
      <td>Table content 1.3</td>
      <td>Table content 2.3</td>
      <td>Table content 3.3</td>
    </tr>
    <tr>
      <td>Table content 1.4</td>
      <td>Table content 2.4</td>
      <td>Table content 3.4</td>
    </tr>
  </tbody>
</table>

```html
<table class="table">
  <caption>This is a Table Caption</caption>
  <thead>
    <tr>
      <th>Table Header 1</th>
      <th>Table Header 2</th>
      <th>Table Header 3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Table content 1.1</td>
      <td>Table content 2.1</td>
      <td>Table content 3.1</td>
    </tr>
    <tr>
      <td>Table content 1.2</td>
      <td>Table content 2.2</td>
      <td>Table content 3.2</td>
    </tr>
  </tbody>
</table>
```

### Making wide tables responsive

If you have a lot of content in your table, it will probably break your page layout on small viewports (e.g. phones). The simplest way to make a table “responsive” is to wrap your table in a DIV with the `overflow-x` class to make it horizontally scrollable.

```html
<div class="overflow-x">
  <table class="table">
    ...
  </table>
</div>
```

## The long-lead utility class 

Intended for long-read essays, articles and blog posts, the `t-long-read` utility class (used on a wrapping element around your article content) will enlarge all text, including any headings, depending on how much width is available.

The base font size is expanded to 125% over the middle range — for container widths 640px to 1280px (i.e. same as the `sm` to `md` default breakpoints). Starting from 1rem (16px), this expands the base sext size to 1.375rem (22px). This `clamp()` has been calculated using Petter Walbø Johnsgård’s [Font-size Clamp Generator](https://clamp.font-size.app/).

The default behavior of `t-long-read` is to be responsive to viewport width using the viewport width unit, `vw`. But the same `t-long-read` utility class _if used inside a `container`_ (see [container query powered layouts](/baselayer-3/layout/#container-query-powered-layouts)) will ramp up using the container query inline width unit, `cqi`.

These two CSS clamp variables are set in `variables.css`:

```css
/*
Default long-read
*/
:root {
  --fs-long-read: clamp(1rem, 0.625rem + 0.9375vw, 1.375rem);
}

/*
Container query powered long-read
*/
.container {
  --fs-long-read: clamp(1rem, 0.625rem + 0.9375cqi, 1.375rem);
}
```

The Baselayer docs make use of JavaScript and some extra CSS to enable a demo toggle, so that you can switch between normal and long-read font size in this main article column.

<p class="flex flex-center">
  <button class="toggler p-cell flex flex-column gap-1 bg-blue bg-500 hover:bg-600 bg-dark-invert" onclick="toggleFS()">
    <div class="label-normal w-100% flex flex-middle gap-1">
      <div class="check-box flex flex-center flex-middle t-black bg-white"></div>
      <div class="grow t-left">Normal font-size</div>
    </div>
    <div class="label-longread w-100% flex flex-middle gap-1">
      <div class="check-box flex flex-center flex-middle t-black bg-white"></div>
      <div class="grow t-left">Long read font-size</div>
    </div>
  </button>
</p>

## Code blocks

`<code>` tags have monospaced text over a pale blue background (set by `--cbgcode`) with a little padding to improve readability.

If the `<code>` tag is wrapped in a `<pre>` tag, then it becomes a block level element with more padding, a max-width of 100%, and y-axis overflow scrolling.

## Other typographic utility classes

Besides those already introduced, Baselayer also has utility classes for:

* `t-big` — increase font size by 1.25em. Use it directly on a `<p>` to enlarge the font (e.g. for a lead paragraph). Note: don’t use `t-big`  directly on a heading, because that will override the heading size. But you can use it on a wrapping element around a heading that you wish to enlarge (e.g. for a title or hero component).
* `t-small` (or use the `<small>` HTML tag) — decrease font-size to 0.8em
* `t-highlight` (or use the `<mark>` HTML tag) — text highlighter
* `t-right`, `t-center`, and `t-left` — text alignment
* `t-lighter`, `t-normal`, `t-semibold`, `t-bold`, `t-heavy` — font weights
* `t-italic` — font style italic
* `t-balance` — balances word-wrap, so that e.g. long headings don't have orphans
* `t-uppercase` — text transform to capitals
* `t-noline` — use to remove the underline (underscore) from links where having it may be inappropriate (e.g. in menus)
* `hover:t-line` – make underline appear on hover (pair as `t-noline hover:t-line` on a link)
  * Example `t-noline hover:t-line`: <a class="t-noline hover:t-line" href="http://example.com">example</a>
* `t-nowrap` — prevents text wrapping (spaces behave as non-breaking spaces)
* `unlist` — sets `list-style-type: none` on `<ol>`, `<ul>`, or `<li>`. You can use this when you want to use a list in a navigation menu. And you can combine it with `p-0` to remove the list inset padding.

**Note:** links can also be styled as though they are buttons using the `btn` utility class. See [buttons]({{ '/buttons/' | url }}).

## Simple menus

If you wrap links in a `<nav>` tag, as you should do when creating a menu, then the links have their underscores removed. (So, there is no need to use `noline` inside a `<nav>` tag.)

Simple menus can created in this way, whether or not you involve an `<ul>` unordered list. 

Example: simple links inside a `<nav>` (spacing controlled by [flex layout](/baselayer-3/layout/#flex-layouts)):

<nav class="mt-2 mb-3 p-2 flex flex-wrap gap-2 bg-gray bg-100 bg-dark-invert">
  <a href="#/">Home</a>
  <a href="#/">About</a>
  <a href="#/">Contact</a>
</nav>

```
<nav class="p-2 flex flex-wrap gap-2 bg-gray bg-100 bg-dark-invert">
  <a href="">Home</a>
  <a href="">About</a>
  <a href="">Contact</a>
</nav>
```

Read more about Baselayer’s [color utility classes](/baselayer-3/colors/).

Another example: a flex-column involving an unordered list:

<nav class="mt-2 mb-3 b-1 p-2">
  <ul class="unlist flex flex-column flex-wrap gap-2">
    <li><a href="#/">Home</a></li>
    <li><a href="#/">About</a></li>
    <li><a href="#/">Contact</a></li>
  </ul>
</nav>

```
<nav class="b-1 p-2">
  <ul class="unlist flex flex-column flex-wrap gap-2">
    <li><a href="">Home</a></li>
    <li><a href="">About</a></li>
    <li><a href="">Contact</a></li>
  </ul>
</nav>
```