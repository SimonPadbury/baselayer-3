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

```css
:root {
  --t-sans: ui-sans-serif, sans-serif;
  --t-serif: ui-serif, serif;
  --t-mono: ui-monospace, monospace;
  --t-default: var(--t-sans);
  --t-prose: var(--t-serif);
}
```

Everything here is an example, a place to start. Your own `--base` and `--prose` don’t need to be both sans-serif and serif. See [setting font stacks](#setting-font-stacks) for more information.

The Baselayer docs make use of JavaScript and some extra CSS to enable a demo toggle, so that you can switch between `--base` and `--prose` in this main content area — see main menu.

Font stack usage in Baselayer:

* The base font stack `--t-default` is set in the `<body>` tag and via the `t-base` utility class. It is also set on form inputs and on heading tags (using `--h-ff: inherit;` so that you can override and set a different heading typeface).
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

* If your chosen prose typeface has an _x-height_ much different than your chosen base typeface, then [font-size-adjust](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/font-size-adjust) can help.
* If your base typeface has thicker strokes so that it “looks darker” than your prose typeface, then you may want to set your base font-weight slightly lighter. Variable fonts with font weight can allow fine tuning.

For inspiration:

* [Pairing Typefaces (Google Fonts article)](https://fonts.google.com/knowledge/choosing_type/pairing_typefaces)
* [fontpairings.com](https://www.fontpairings.com)
* [fontpair.co](https://www.fontpair.co)
* [fontjoy.com](https://fontjoy.com)
* [Pair & Compare](https://www.pairandcompare.net)
* [Top 50 Google Font Pairings [Handpicked by Pro Designers] (Pagecloud)](https://www.pagecloud.com/blog/best-google-fonts-pairings)

## Base font size

The default font size in Baselayer is 100% for small viewports. This sets the value of 1rem—that is 16px on most browsers (in 2025).

```css
:root {
  --t-base: 100%;
}
```

## Typographic block elements

Previously in Baselayer, typographic blocks had zero top margin, and a small bottom margin—following the traditional Bootstrap CSS. But since Baselayer v.3.7.x, all block elements including typographic blocks have _no built-in margin_ (margin is removed in the CSS reset). This gives you full control of whitespace in your design of components.

### The typographic block `flow` utility

Then I discovered a [YouTube video by Kevin Powell](https://youtu.be/CU8Plk-53RU) in which he flips the typographic block whitespace to become a top margin and sets it using _ems_, so that it is bigger for bigger font sizes (headings). This enabled the typographic styles to be simplified.

Subsequently I found [Andy Bell’s typographic flow utility class](https://piccalil.li/blog/my-favourite-3-lines-of-css/) to be a further improvement, enabling you to add back typographic whitepace (as top margin using ems) only where you need it in your prose or long read content areas. So now this `flow` utility has been added to Baselayer since v.3.7.x.

I have also added an override for situaions where you may have a sub-sub heading immediately following a sub-heading. The top margin of the lower level heading is reduced.

```css
/* In reset.css */

* {
  margin:  0;
  padding: 0;
}

/* In typography.css */

.flow > * + *:not(hr) {
  margin-top: var(--s-flow, 1em);
}

:where(h1, h2, h3, h4, h5, .h1, .h2, .h3, .h4, .h5)
  + :where(h2, h3, h4, h5, h6, .h2, .h3, .h4, .h5, .h6) {
  margin-top: var(--s-between-headings, --s-1) !important;
}
```

### Headings

Heading sizes are set a simple typographic scale (but set in **em**, not pt or px). The font size for `h6` and utility class `.h6` is not increased by this scale (remains the same as the base font size).

Example headings (using heading-size utility classes):

<p class="h1 mt-3 t-semibold">Heading h1</p>
<p class="h2 t-semibold">Heading h2</p>
<p class="h3 t-semibold">Heading h3</p>
<p class="h4 t-semibold">Heading h4</p>
<p class="h5 t-semibold">Heading h5</p>
<p class="h6 mb-3 t-semibold">Heading h6</p>

```css
:root {
  --h1: 2.5em;
  --h2: 1.875em;
  --h3: 1.5em;
  --h4: 1.25em;
  --h5: 1.125em;
  --h6: 1em;
}
```

<table class="table">
  <thead>
    <tr>
      <th>Heading Level</th>
      <th>Font Size in em</th>
      <th>Equivalent Size in pixels (px)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>h6</td>
      <td class="t-center">1</td>
      <td class="t-center">16</td>
    </tr>
    <tr>
      <td>h5</td>
      <td class="t-center">1.125</td>
      <td class="t-center">18</td>
    </tr>
    <tr>
      <td>h4</td>
      <td class="t-center">1.25</td>
      <td class="t-center">20</td>
    </tr>
    <tr>
      <td>h3</td>
      <td class="t-center">1.5</td>
      <td class="t-center">24</td>
    </tr>
    <tr>
      <td>h2</td>
      <td class="t-center">1.875</td>
      <td class="t-center">30px</td>
    </tr>
    <tr>
      <td>h1</td>
      <td class="t-center">2.5</td>
      <td class="t-center">40px</td>
    </tr>
  </tbody>
</table>

Notes on headings in Baselayer:

* Headings font sizes set in the variables file (see above).
* Headings font family set using `--h-ff: inherit`. This has been done so that you can use the variable to override it — your headings don’t need to be the same typeface as your paragraphs.
* Headings font weight is set using `--h-fw: var(--t-semibold)` — which you can also override.
* Headings line heights set using the formula `1em + 0.5rem`.
* The matching heading size utility classes `h2` to `h6` only affect font-size. They do not include font-weight styling.
* The CSS reset removes margin and padding from headings. Typographic block spacing can be controlled by the `flow` (see [the typographic block flow utility](#the-typographic-block-flow-utility)). You could also incorporate the `flow` styling directly into your `<article>` tag in your design layout, the typographic block elements are its immediate children.

```css
:root {
  --h-ff: inherit; /* headings font-family */
  --h-fw: var(--t-semibold);
  --h-lh: calc(1em + 0.5rem);
}
```

### Block quotes

Baselayer styles `<blockquote>` tags with some inline (x-axis) padding, to give the effect of indentation. This inline padding is set using the container-responsive spacing variable `--s-4` so that it increases if there is more available width.

Otherwise, blockquotes have the same as paragraph styling.

> Lorem ipsum dolor sit amet, adipiscing honestatis ius ut, nisl consulatu pro in. Imperdiet evertitur no usu, his te suavitate salutatus. Nullam ridens deterruisset an duo. Cum harum insolens ei, cum probo placerat praesent et.

### Lists

In Baselayer ordered `<ol>` and unordered `<ul>` have a small amount of left padding, to give them a left indent.

1. Ordered item one
2. Ordered item two
    1. Ordered item two child one
    2. Ordered item two child two
3. Ordered item three

```html
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

```html
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

For definition lists (dictionary lists), the title is bold and the definition data item is indented with the same left padding as for the lists (see above).

<dl>
  <dt>Definition list title</dt>
  <dd>Definition list data</dd>
  <dt>Definition list title</dt>
  <dd>Definition list data</dd>
</dl>

```html
<dl>
  <dt>Definition list title</dt>
  <dd>Definition list data</dd>
  <dt>Definition list title</dt>
  <dd>Definition list data</dd>
</dl>
```

## Links and menus

The default underline for links has been moved downwards slightly to improve legibility. The link decoration (underline) thickness has been set at 1px, so that it doesn’t become thicker when used on larger text (e.g. in headings) where link underline can be too bulky).

On `:hover`, the link text color remains unchanged. Instead, the visual cue that “this text is a clickable link” is indicated by underline becoming thicker, increasing to 3px.

This thickening of the line is more obvious than a slight color change, such as you see in other CSS starter kits and frameworks. But if you require a color change, you can add your own, e.g. by Baselayer variables or [color utilities]({{ '/colors' | url }}).

Example:

* <a href="">This is a link to nowhere</a> as a demonstration

### Link utilities

Then there are the following two classes that apply to links, that may be handy in some situations:

* <a class="t-underline-none" href="">This link has no underline</a> — `t-underline-none`
* <a class="t-underline-hover-only" href="">This link has no underline unless hovered</a> — `t-underline-hover-only`

When you remove the underline completely, you will want to add back affordance e.g. by changing the text or background color on hover.

The browser default, and the best practice for accessability, is to have links indicated by an underline (and the browser default color of links is blue). But in the context of menus it is permissible to deviate from the best practice, provided there are other visual and non-visual indicators. This is the reason why we should use [semantic HTML](https://www.codecademy.com/resources/blog/semantic-html/) tags on menus, and and why we should place navigation menus in their expected locations (in sitewide menu-bars, sidebars, and footers).

### Panel links

There may be situations where you have a link that contains some accompanying text that you don’t want to receive the `<a href="">` (link) underline. Examples where this may be used: media object, card or hero component, where you want the whole thing to behave as a “big button”.

In this case, you don’t want to place the `t-underline-none` on the `<a href="">` itself, but only on the inner element.

You will also want to style the outer `<a href="">` e.g. with the `block` utility (for `display:block`), and add more styles to this inner element text, so that it is not the same color as the link label.

In the example below, see how only the inner element _not_ styled with `t-underline-none` behaves as the link text.

<a class="my-3 p-3 bg-gray bg-100 dark:bg-900" href="#/">
  <p>Link label (title)</p>
  <p class="mb-0 t-gray t-900 dark:t-100 t-underline-none">Lorem ipsum dolor sit amet ...</p>
</a>

```html
<a href="">
  <p>Link label (title)</p>
  <p class="t-underline-none">Lorem ipsum dolor sit amet ...</p>
</a>
```

Another example: here `t-underline-hover-only` has also been added to the `<a href="">`:

<a class="my-3 p-3 t-underline-hover-only bg-gray bg-100 dark:bg-900" href="#/">
    <p>Link label (title)</p>
    <p class="mb-0 t-gray t-900 dark:t-100 t-underline-none">Lorem ipsum dolor sit amet ...</p>
</a>

```html
<a class="t-underline-hover-only" href="">
    <p>Link label (title)</p>
    <p class="t-underline-none">Lorem ipsum dolor sit amet ...</p>
</a>
```

### Menus

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

If you want a group of links (in a menu) to not have underlines, or to have underlines only when hovered, the following wrapper classes are available in Baselayer:

* `links-underline-none`
* `links-underline-hover-only`

And now, with a few other Baselayer utilities, you have a menubar:

<nav class="my-3">
  <menu class="p-2 flex flex-wrap gap-4 bg-gray bg-100 dark:bg-900 links-underline-none">
    <menuitem><a class="t-semibold t-gray t-700 dark:t-300 hover:t-reversi" href="">Menu item 1</a></menuitem>
    <menuitem><a class="t-semibold t-gray t-700 dark:t-300 hover:t-reversi" href="">Menu item 2</a></menuitem>
    <menuitem><a class="t-semibold t-gray t-700 dark:t-300 hover:t-reversi" href="">Menu item 3</a></menuitem>
  </menu>
</nav>

```html
<nav>
  <menu class="p-2 flex flex-wrap gap-4 bg-gray bg-100 dark:bg-900 links-underline-none">
    <menuitem><a class="t-semibold t-gray t-700 dark:t-300 hover:t-reversi" href="">Menu item 1</a></menuitem>
    <menuitem><a class="t-semibold t-gray t-700 dark:t-300 hover:t-reversi" href="">Menu item 2</a></menuitem>
    <menuitem><a class="t-semibold t-gray t-700 dark:t-300 hover:t-reversi" href="">Menu item 3</a></menuitem>
  </menu>
</nav>
```

Or a menu for a sidebar or footer buffet:

<nav class="my-3">
  <menu class="pl-0 flex flex-column gap-2 links-underline-hover-only">
    <menuitem><a href="">Menu item 1</a></menuitem>
    <menuitem><a href="">Menu item 2</a></menuitem>
    <menuitem><a href="">Menu item 3</a></menuitem>
  </menu>
</nav>

```html
<nav>
  <menu class="pl-0 flex flex-column gap-2 links-underline-hover-only">
    <menuitem><a href="">Menu item 1</a></menuitem>
    <menuitem><a href="">Menu item 2</a></menuitem>
    <menuitem><a href="">Menu item 3</a></menuitem>
  </menu>
</nav>
```

## Text alignment

* `t-right`, `t-center`, and `t-left`

In addition to the three simple text alignment classes above, Baselayer also has several container-query responsive variants, for `xs:`, `sm:`, `md:`, and `lg:` container breakpoints widths (corresponding to the four container breakpoints for the Baselayer [grid layout]({{ "/layout/#grid-layouts" | url }})) system).

Example: The hearing in the card below is left aligned by default, but becomes center aligned when its _container_ is `xs` (512px) wide and above, using `xs:t-center`:

<div class="my-3 resize-x">
<div class="container p-2 bg-amber bg-200 dark:bg-900">
<p class="h3 t-semibold xs:t-center">A title</p>
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
* Optional modifier `table-fixed` will force cells to have the same (fixed) width.

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

<table class="table table-grid">
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

<div class="overflow-x">
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
        <td>Table cell content</td>
        <td>Table cell content</td>
        <td>Table cell content</td>
        <td>Table cell content</td>
        <td>Table cell content</td>
        <td>Table cell content</td>
        <td>Table cell content</td>
        <td>Table cell content</td>
        <td>Table cell content</td>
        <td>Table cell content</td>
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

The base font size is 100% (16px default). Additionally:

### Font size multipliers

1. There’s a `t-lg` class that can be used to make text 1.325em — good for a lead paragraph, large button, or important messaging.
2. Classes `.h1` through `.h6` will resize text the same amount as for their respective heading tag sizes — use these when you want to make text bigger (or large text smaller) without adversely affecting accessibility/ SEO heading hierarchy.

### Responsive font size multipliers

In small container (or viewport) widths, these three utilities below do nothing. But with wider stace available, they use a CSS `clamp()` to ramp up the size to a maximum.

1. The `t-long-read` wrapping class ramps text up from 1× to 1.25× depending on container size.
2. The `t-comfort` wrapping class ramps text up from 1× to 1.625× depending on container size.
3. The `t-display` wrapping class ramps text up from 1× to 2× depending on container size.

The calculated max pixel sizes are as follows:

<table class="table">
  <thead>
    <tr>
      <th>Type size</th>
      <th class="t-balance t-center">Paragraph max font size (px)</th>
      <th class="t-balance t-center">H1 max font size (px)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Base</td>
      <td class="t-center">16px</td>
      <td class="t-center">40px</td>
    </tr>
    <tr>
      <td><code class="t-nowrap">t-long-read</code></td>
      <td class="t-center"><mark>20px</mark></td>
      <td class="t-center">50px</td>
    </tr>
    <tr>
      <td><code>t-comfort</code></td>
      <td class="t-center">26px</td>
      <td class="t-center">65px</td>
    </tr>
    <tr>
      <td><code>t-display</code></td>
      <td class="t-center">32px</td>
      <td class="t-center">80px</td>
    </tr>
  </tbody>
</table>

There’s a demo of these text size utilities in [examples]({{ "/examples/#text-sizes" | url }}).

## Code

`<code>` tags have monospaced text (set by `--t-mono`) over a white or black background (in light or dark modes), with a thin border and a little padding to improve readability.

If the `<code>` tag is wrapped in a `<pre>` tag, then it becomes a block level element with more padding, a max-width of 100%, and y-axis overflow scrolling.

## Other typographic utility classes

Besides those already introduced, Baselayer also has utility classes for:

* `t-sm` (or use the `<small>` HTML tag) — decrease font-size to 0.8em
* `t-thin`, `t-normal`, `t-semibold`, `t-bold`, `t-heavy` — font weights
* `t-italic` — font style italic
* `t-balance` — balances word-wrap, so that e.g. long headings don't have orphans
* `t-uppercase` — text transform to capitals
* `t-nowrap` — prevents text wrapping (spaces behave as non-breaking spaces)

**Note:** links can also be styled as though they are buttons using the `btn` utility class. See [buttons]({{ '/buttons/' | url }}).
