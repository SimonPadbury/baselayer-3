<!-- 
• Increment version control numbers in
  README.md, baselayer.css, metadata.json,
  package.json, package-lock.json (x2), and
  this CHANGELOG.md
• Increment filesize in README.md, and
  metadata.json.
-->

# Baselayer 3 changelog

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