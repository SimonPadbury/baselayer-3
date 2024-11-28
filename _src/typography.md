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
  --ff-sans: ui-sans-serif, system-ui, Arial, sans-serif;
  --ff-serif: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
  --ff-mono: ui-monospace, Menlo, Consolas, "Courier New", monospace;
  --ff-base: var(--t-sans);
  --ff-prose: var(--t-serif);
}
```

Everything here is an example, a place to start. Your own `--base` and `--prose` don’t need to be both sans-serif and serif. See [setting font stacks](#setting-font-stacks) for more information.

The Baselayer docs make use of JavaScript and some extra CSS to enable a demo toggle, so that you can switch between `--base` and `--prose` in this main content area — see main menu.

Font stack usage in Baselayer:

* The base font stack `--ff-base` is set in the `<body>` tag and via the `t-base` utility class. It is also set on form inputs and on heading tags (using `--h-ff: inherit;` so that you can override and set a different heading typeface).
* The prose is only available via the `t-prose` utility class. Employ it on your `<article>` tag, or wherever you need.
* The monotype is available via the `<code>`, `<kbd>`, and `<samp>` HTML tags, and in the `t-mono` utility class.

### Setting font stacks

In choosing your own font stacks, you will probably need two fonts that have similar _x-height_, so that you can set them using the same font size and line-height. Some other factors to compare are hights for lowercase ascenders and descenders, letter width, and stroke thickness.

If you want to stick with using native font stacks (i.e. those that come with computers, tablets, and phones), then the [Modern Font Stacks](https://modernfontstacks.com) website has several examples that you can easily copy.

In choosing your own typefaces from elsewhere, a good place to start is by pairing serif and sans-serif (or slab serif) fonts of the same typeface, if both are available. [Google Fonts](https://fonts.google.com) has several such typefaces to choose from, such as:

* Alegreya and Alegreya Sans
* IBM Plex and IBM Plex Sans
* Inria Serif and Inria Sans
* Noto Serif and Noto Sans
* PT Serif and PT Sans
* Roboto and Roboto Slab
* Source Sans 3 and Source Serif 4

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

## Base font size

The default font size in Baselayer is 100% for small viewports, and bumped up to 112.5% from width 640px up (equivalent to Baselayer width variable `sm`).

```css
/* in variables.css */
:root {
  --fs-base: 100%;
  --fs-bump: 112.5%;
}

/* in base.css */
body{
  container-type: inline-size;
  font-family: var(--ff-base);
  font-size: var(--fs-base);
}
@container (min-width: 640px) {
  body > * {
    font-size: var(--fs-bump);
  }
}
```

In addition to this base font size bump to 1.125em (18px), Baselayer also has a CSS `clamp()` controllled `t-long-read` utility class to further increase the font size on larger devices, for even more comfortable reading of longform articles (see [making text bigger]({{ "#making-text-bigger" | url }})).

## Typographic block elements

Most typographic blocks have zero top margin, and bottom margin set to `var(--s-2)` (1rem).

### Headings

Example heading sizes:

<p class="h1">Heading h1</p>
<p class="h2">Heading h2</p>
<p class="h3">Heading h3</p>
<p class="h4">Heading h4</p>
<p class="h5">Heading h5</p>
<p class="h6">Heading h6</p>

All headings `<h1>` to `<h6>` and matching utility classes `h1` to `h6` have:

* Headings font sizes set in the variables file.
* Headings also have their font-family set using `--h-ff: inherit`. This has been done so that you can use the variable to override it. So, your headings don’t need to be the same typeface as your paragraphs.
* Headings font weight is set using `--h-fw: var(--fwsemibold)` — which you can also override.
* Headings line heights set using the formula `1em + 0.5rem`.
* Headings have their bottom margin set the same as for paragraphs, `var(t--mb)`. The top margin for `<h2>` thorugh `<h6>` is double that — except then used as immediate child items of the [content-grid]({{ "/layout/#content-grid" | url }}) where the top margin is reduced to `var(t--mb)`. This is because _margin collapse_ is prevented by CSS grid. (And the top margin of `<h2>` is totally removed when it’s the first immediate child of a `.content-grid`.)
* The matching utility classes `h2` to `h6` only affect font-size. These utilities do not include margin or font-weight styling.

```css
:root {
  --h1: 2.25em;
  --h2: 1.875em;
  --h3: 1.5em;
  --h4: 1.25em;
  --h5: 1.125em;
  --h6: 1em;
  --h-ff: inherit; /* headings font-family */
  --h-fw: var(--fw-semibold);
  --h-lh: calc(1em + 0.5rem);
  --h-mt: calc(var(--t-mb) * 2);
}
```

Tips:

1. In some contexts (e.g. in card components) you may not want any built-in spacing for typographic block elements. Then, you can remove margins by using the `m-0` utility class.
2. You can also remove top margin indirectly: e.g. you can target the first item inside its wrapper using `.your-wrapper:first-child { margin-top: 0; }`, or the first sibling after the `<header>` or `<h1>`. Same as I have done in Baselayer at `.content-grid > h2:first-child { margin-top: 0; }`.

### Block quotes

Baselayer styles `<blockquote>` tags with some inline (x-axis) padding, to give the effect of indentation. This inline padding is set using the container-responsive spacing variable `--s-4` so that it increases if there is more available width.

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

For definition lists, the title is bold and the definition data item is indented with the same left padding as for the lists (see above).

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

The default underline for links has been moved downwards slightly to improve legibility. The link decoration (underline) thickness has been set at 1px, so that it doesn’t become thicker when used on larger text (e.g. in headings) where link underline can be too bulky).

On `:hover`, the link text color becomes slightly darker and underline becomes thicker, increasing to 3px. This thickening of the line helps people who don't see the slight color change.

All these styles are controlled by CSS variables so that you can change them.

* <a href="">This is a link to nowhere</a>

Then there are the following two classes that apply to links, that may be handy in some situations:

* <a class="t-no-underline" href="">This link has no underline</a> — `t-no-underline`
* <a class="t-underline-hover-only" href="">This link has no underline unless hovered</a> — `t-underline-hover-only`

The browser default, and the best practice for accessability, is to have links indicated by an underline (and the browser default color of links is blue). But in the context of menus it is permissible to deviate from the best practice, provided there are other visual and non-visual indicators. This is the reason why we should use [semantic HTML](https://www.codecademy.com/resources/blog/semantic-html/) tags on menus, and and why we should place navigation menus in their expected locations (in sitewide menubar ribbons, sidebars, and footers.

## Menus

* `nav` / `<menu>` / `<menuitem>`

The semantic `<nav>` tag has no styling of its own, other than its being a block element (similar to a `div`). Use it to organize your major navigation blocks of links (whether to other pages in your website, or “on this page”).

Semantic `<menu>` tags are treated by the browser as no different to an `<ul>`, but they are announced as a menu by [screen readers](https://web.dev/articles/semantics-and-screen-readers). Baselayer gives `<menu>`, `<ul>`, and `<ol>` the same styling: some left padding and bottom margin (and you can remove these you don't require them, using [spacing utility classes]({{ "/decoration/#spacing" | url }})).

Using an `<li>` within a `<menu>` will give you bulletpoint block items. This will be OK for sidebars and dropdown menus, for example, but there’s also the `<menuitem>` tag. This is an inline tag (like a `<span>` but semantic for menu items), and it doesn’t come with a bulletpoint.

This is what you get if you add no styling, other than the Baselayer defaults (but of course you will want to add more styling):

<nav class="my-3">
  <menu>
    <menuitem><a href="">Menu item 1</a></menuitem>
    <menuitem><a href="">Menu item 2</a></menuitem>
    <menuitem><a href="">Menu item 3</a></menuitem>
  </menu>
</nav>

```html
<nav>
  <menu>
    <menuitem><a href="">Menu item 1</a></menuitem>
    <menuitem><a href="">Menu item 2</a></menuitem>
    <menuitem><a href="">Menu item 3</a></menuitem>
  </menu>
</nav>
```

Notes:

1. Use `<nav>` to encapsulate your main navigation and “on this page” navigation. Navs can contain more than one menu, e.g. in dropdowns. The website or brand logo (with a link to the homepage) can be situated within the top `<nav>` but outside of the menu.
2. The `<menu>` tag can be used in other contexts, e.g. for a list of related links to other websites, or for a set of user interface controls in a web application.
3. Inside a `<menuitem>` can be a link, a button, or other interactive element.

If you want the group of links to not have underlines, or to have underlines only when hovered (because you intend to style them differently in your menu):

* `links-not-underlined`
* `links-underlined-hover-only`

And with a few other Baselayer utilities, you have a menubar:

<nav class="mt-3 mb-4">
  <menu class="p-3 flex flex-wrap gap-4 bg-gray bg-100 bg-dark-invert links-not-underlined">
    <menuitem><a href="">Menu item 1</a></menuitem>
    <menuitem><a href="">Menu item 2</a></menuitem>
    <menuitem><a href="">Menu item 3</a></menuitem>
  </menu>
</nav>

```html
<nav>
  <menu class="p-3 flex flex-wrap gap-4 bg-gray bg-100 bg-dark-invert links-not-underlined">
    <menuitem><a href="">Menu item 1</a></menuitem>
    <menuitem><a href="">Menu item 2</a></menuitem>
    <menuitem><a href="">Menu item 3</a></menuitem>
  </menu>
</nav>
```

Or a menu for a sidebar or footer buffet:

<nav class="mt-3 mb-4">
  <menu class="pl-0 flex flex-column gap-3 links-underlined-hover-only">
    <menuitem><a href="">Menu item 1</a></menuitem>
    <menuitem><a href="">Menu item 2</a></menuitem>
    <menuitem><a href="">Menu item 3</a></menuitem>
  </menu>
</nav>

```html
<menu class="pl-0 flex flex-column gap-3 links-underlined-hover-only">
  <menuitem><a href="">Menu item 1</a></menuitem>
  <menuitem><a href="">Menu item 2</a></menuitem>
  <menuitem><a href="">Menu item 3</a></menuitem>
</menu>
```

## Text alignment

* `t-right`, `t-center`, and `t-left`

In addition to the three simple text alignment classes above, Baselayer also has several container-query responsive variants, for `xs:`, `sm:`, `md:` and `lg:` container breakpoints widths.

Example: The hearing in the card below is left aligned by default, but becomes center aligned when its _container_ is `sm` (640px) wide and above, using `sm:t-center`:

<div class="my-3 resize-x">
<div class="container p-2 bg-amber bg-100 bg-dark-invert">
<p class="h3 t-semibold sm:t-center">A title</p>
<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni rem animi quaerat accusantium illum architecto, nemo, ex harum voluptatum adipisci eum blanditiis dolorum. Natus debitis quisquam, expedita accusantium quos cumque?</p>
</div>
</div>

For more information on Baselayer container queries, see [contaner query contexts]({{ '/layout/#container-query-contexts' | url }}) and [container query powered layouts]({{ '/layout/#container-query-powered-layouts' | url }}).

## Tables

Baselayer tables are set using the `.table` class.

* Table headers `<th>` are bold.
* Table cells `<th>` and `<td>` have a border set by `var(--b-1)` – the same detail as `<hr>` and [border]({{ '/decoration/' | url }}#borders) utility classes.
* Table cell paddings are set by `--p-cell` (see decoration [spacing extras]({{ '/decoration/' | url }}#spacing-extras))
* All cell content is left-aligned. You can change that on the whole `<table>` or on a per-cell basis using the [text alignment](#text-alignment) classes.
* Optional modifier `table-grid` will add the outline to all `th` and `td` cells.

<div class="mt-3 mb-4">
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
</div>

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
    ...
  </tbody>
</table>
```

With `table table-grid`:

<table class="mt-3 mb-4 table table-grid">
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

### Making wide tables responsive

If you have a lot of content in your table, it will probably break your page layout on small viewports (e.g. phones). The simplest way to make a table “responsive” is to wrap your table in a DIV with the `overflow-x` class to make it horizontally scrollable.

<div class="mt-3 mb-4 overflow-x">
  <table class="table table-grid">
    <thead>
      <th>Column title</th>
      <th>Column title</th>
      <th>Column title</th>
      <th>Column title</th>
      <th>Column title</th>
      <th>Column title</th>
      <th>Column title</th>
      <th>Column title</th>
      <th>Column title</th>
      <th>Column title</th>
    </thead>
    <tbody>
      <tr>
        <td>Tabel cell content</td>
        <td>Tabel cell content</td>
        <td>Tabel cell content</td>
        <td>Tabel cell content</td>
        <td>Tabel cell content</td>
        <td>Tabel cell content</td>
        <td>Tabel cell content</td>
        <td>Tabel cell content</td>
        <td>Tabel cell content</td>
        <td>Tabel cell content</td>
      </tr>
    <tbody>
  </table>
</div>

```html
<div class="overflow-x">
  <table class="table">
    ...
  </table>
</div>
```

## Making text bigger

The base font size is 100% (usually 16px), bumping up to 112.5% (usually 18px) for more comfortable reading on tablet devices up.

Additionally:

1. There’s a `t-lg` class that can be used to make text 1.325em — good for a lead paragraph or important messaging.
2. Classes `.h1` through `.h6` will resize text the same amount as for heading tag sizes — use when you want to make text larger (or large text smaller) without adversly affecting accessibility/ SEO heading hierarchy.
3. The `t-display` wrapping class uses a `clamp()` to raise text from starting size 1.25em up to 1.625rem depending on container size — e.g. used for responsively increasing text size in hero components. An `<h1>` inside a `t-display` will have maximum font size 72px.

The `t-display` text size clamp have been calculated using Petter Walbø Johnsgård’s [Font-size Clamp Generator](https://clamp.font-size.app/) and changed to a container query width controlled `cqi` unit instead of viewport-width controlled `vm`.

## Code

`<code>` tags have monospaced text (set by `--ff-mono`) over a white or black background (in light or dark modes), with a thin border and a little padding to improve readability.

If the `<code>` tag is wrapped in a `<pre>` tag, then it becomes a block level element with more padding, a max-width of 100%, and y-axis overflow scrolling.

## Other typographic utility classes

Besides those already introduced, Baselayer also has utility classes for:

* `t-lg` — increase font size by 1.5em. Use it directly on a `<p>` to enlarge the font (e.g. for a lead paragraph).
* `t-sm` (or use the `<small>` HTML tag) — decrease font-size to 0.8em
* `t-highlight` (or use the `<mark>` HTML tag) — text highlighter
* `t-thin`, `t-normal`, `t-semibold`, `t-bold`, `t-heavy` — font weights
* `t-italic` — font style italic
* `t-balance` — balances word-wrap, so that e.g. long headings don't have orphans
* `t-uppercase` — text transform to capitals
* `t-nowrap` — prevents text wrapping (spaces behave as non-breaking spaces)

**Note:** links can also be styled as though they are buttons using the `btn` utility class. See [buttons]({{ '/buttons/' | url }}).
