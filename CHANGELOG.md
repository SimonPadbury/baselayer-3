<!-- 
• Increment version control numbers in
  README.md, baselayer.css, metadata.json,
  package.json, package-lock.json (x2), and
  this CHANGELOG.md
• Increment filesize in README.md, and
  metadata.json.
-->

# Baselayer 3 changelog

## v.1.2.0

_The big **container query** upgrade._

* Renamed _containers_ as _wrappers_ so that the name `container` could be used exclusively for setting _container query_ context.
* Refactored the flexbox system for container queries.
* Refactored the grid system cor container queries.
* Refactored the invisibility (hidden) classes for container queries.
* Added `cqi` rules to spacing variables (used by margins, paddings, and gaps) for operation inside a `container`
* Added a `cqi` rule to `.t-long-read` for operation inside a `container`
* Fixed `.theme-dark` shade scale for the `<body>` tag.
* Darkened the dark theme `<body>` element so that `bg-gray bg-900` doesn’t disappear into the page background
* Removed `t-loose` and `t-tight` as unrequired for a _baselayer_ stylesheet.
* Removed colors [teal, purple, brown, coolgray, warmgray] -- commented out but retained as examples for inspiration.
* Added OKLCH lightness `--l1000` variable for use on the dark theme background color.
* Added `font-style: normal; font-style: normal;` to `code`, `kbd`, `samp`, and `pre` tags, so that these classes could be used within italic and bold text without being affected.
* Removed the NPM package `postcss-custom-media` because it does not work for container queries (only media queries).

## v.1.1.3 -- 10 Nov 2023

* Simplified font stacks.
* Added back `postcss-custom-media` and refactored the layout @media queries.
* Improved `content-grid` using named lines.
* Added `expand` to the content grid.
* Snagging: made `bg-transparent` to not work on hover, so that outline (ghost) buttons can get a hover background color.

## v.1.1.2 -- 21 Oct 2023

* Added `:active` attribute color states to color lightness (shades) utility classes (same as `.hover:*`).

## v.1.1.1 -- 13 Oct 2023

* Bug fix: `hidden-below` media queries.

## v.1.1.0 -- 12 Oct 2023

* Added CSS cascade layers (thereby e.g. enabling users to add colors _before_ the shade utilities).
* Added optional shade invert `*-dark-invert` color utility class modifiers.
* Removed `*-reversi` (black/white) color utilities. Use `*-dark-invert` (on other colors, including grayscale) instead.
* Added typographic utilities for letter spacing, and highlighting.
* Bug fixes.

## v.1.0.0 -- 09 Oct 2023

* A total reinvention of the Baselayer project. Not backwards compatible. 
* Class names now contain hyphens. 
* New grid system.
* OKLCH colors for theme and utility classes. A simple grayscale hex (#) fallback for pre-OKLCH browsers.
* `baselayer.css` is less than 22 KB.