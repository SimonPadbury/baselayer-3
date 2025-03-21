<!--
• Increment version control numbers in
  README.md, baselayer.css, metadata.json,
  package.json, package-lock.json (x2), and
  this CHANGELOG.md
• Adjust filesize in README.md and
  metadata.json if necessary.
-->

# Baselayer 3 changelog

## v.3.4.4 -- 21 Mar 2025

* Renamed some text variables, so that variable names match respective typographic utility classes (easier to remember).

## v.3.4.3 -- 3 Jan 2025

* Improved clamp() ramps for `.t-long-read` and `.t-display`

## v.3.4.2 -- 27 December 2024

* Hover color state for `a.t-no-underline`

## v.3.4.1 -- 4 December 2024

* Added container query variants  `sm`, `md`, and `lg` of all the flexbox classes.

## v.3.4.0 -- 27 November 2024

* Focus state styling is now based on UK National Health Service nhs.uk and UK Government GOV.UK design systems.
* Amber is now closer to yellow, as it is used for focus backgrounds and rings.
* Everything is in a _container_, since the BODY tag now has `container-type: inline-size;`
* Decoration: removed viewport-width dependant spacing (paddings, margins & gaps).
* Utilities: `.h1` through `.h6` now only affect font-size. They do not include margins and font-weights.
* Font weights `t-lighter` and `t-bolder` renamed as `t-thin` and `t-heavy`.
* Text size modifiers: `{base} / t-sm / t-lg / t-long-read / t-display`
* Colors improved. Codebase swatches. OKLAB color space. Shades now have their white or black color mix built into their shade variables, thereby making downstream color coding easier.
* Removed: colors no longer have the built-in slight darkening for dark mode.
* Light and dark mode now using `light-dark()`.
* Margins, paddings, gaps, and border radius now use the same spacing variables.

## v.3.3.0 -- 9 March 2024

* Changed the version number `v.1` to `v.3` to prevent confusion. This is now Baselayer 3.3.0, not Baselayer 3 v.1.3.0). (From now on, the docs refer back to v.3.1.x, v.3.2.x etc.)
* Colour styles refactored to use Hex (#) and `color-mix()` for shades, instead of OKLAB and lightness channels. Color utility classes are mostly unchanged (orange is now amber).
* Form input indicators (e.g. date icon, time icon) are now visible (white) in the dark theme.
* Removed `:active` from buttons.
* Added `t-balance` for `text-wrap: balance` on e.g. titles.
* Added (again) `*-reversi` and `*-reversi-alt` black/white color utilities.

## v.1.2.5 -- 20 Jan 2024

* Fixed `.h-100dvh`
* Added `.w-100vh`

## v.1.2.4 -- 17 Jan 2024

* Increased upper wrapper of `.t-long-read` to 1.375rem (22px).

## v.1.2.3 -- 10 Jan 2024

* Improved `box-sizing: border-box`.
* Transparent 1px solid border on buttons (previously `border: 0`).
* Added `!important` to typography utilities `t-sm` and `t-lg`.
* Changed min-height to height on buttons (and `.btn` utility).

## v.1.2.2 -- 5 Jan 2024

* Minor typographic improvements.
* Adjusted the orange hue.

## v.1.2.1 -- 13 Dec 2023

* Improved native font stacks.
* Isolated sans-serif to `--t-sans` and serif to `--t-serif`.
* Baselayer’s earlier “Old Style” serif is still available as `--t-old-serif` but no longer deployed by default.

## v.1.2.0 -- 2 December 2023

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
* Added OKLAB lightness `--l1000` variable for use on the dark theme background color.
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
* OKLAB colors for theme and utility classes. A simple grayscale hex (#) fallback for pre-OKLAB browsers.
* `baselayer.css` is less than 22 KB.
