---
title: Examples
mainHeading: Examples
layout: base-fw.njk
---

<div class="wrapper">
  <button class="pl-1" type="button" onclick="history.back();">
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><path d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z"></path></svg>
    Back
  </button>
</div>

* * *

## [Centered layout wrappers]({{ "/layout/#centered-layout-wrappers" | url }})

**Note:** `container` is simply used for adding a [container query context]({{ "/layout/#container-query-contexts" | url }}) — it doesn’t add any constraints.

<div class="wrapper mb-1 p-1 bg-gray bg-100 dark:bg-900">wrapper / wrapper-xl — max 1600px</div>
<div class="wrapper-lg mb-1 p-1 bg-gray bg-100 dark:bg-900">wrapper-lg — max 1280px</div>
<div class="wrapper-md mb-1 p-1 bg-gray bg-100 dark:bg-900">wrapper-md — max 960px</div>
<div class="wrapper-sm mb-1 p-1 bg-gray bg-100 dark:bg-900">wrapper-sm — max 640px</div>
<div class="wrapper-xs mb-1 p-1 bg-gray bg-100 dark:bg-900">wrapper-xs — max 320px</div>

* * *

## Labels (see [decoration]({{ '/decoration/' | url }}))

<div class="wrapper">
  <label class="inline-block px-1 t-black bg-amber">Really?</label>
  <label class="inline-block px-1 t-white bg-red bg-600">Required</label>
  <label class="inline-block px-1 t-white bg-green bg-600">Success</label>
  <label class="inline-block px-1 t-white bg-blue bg-600">Information</label>
  <label class="inline-block px-1 bg-gray bg-200 dark:bg-800">Uncategorized</label>
</div>

* * *

## [Buttons]({{ "/buttons/" | url }})

<div class="mb-2 wrapper">
  <button type="button" name="button">Button</button>
  <button class="rad rad-xs" type="button" name="button">Rounded button</button>
  <button class="rad rad-pill" type="button" name="button">Pill button</button>
  <button class="px-3" type="button" name="button">Stretched button</button>
  <a class="btn" href="#/">Link pseudo-button</a>
  <button class="b-blue b-600 hover:b-700 bg-blue bg-600 hover:bg-700" type="button" name="button">Blue button</button>
  <button class="b-amber b-400 hover:b-500 t-black hover:t-black bg-amber bg-400 hover:bg-500" type="button" name="button">Amber button</button>
  <a class="btn b-thin b-green bg-transparent t-green t-600 hover:b-700 hover:t-white hover:bg-green hover:bg-700" href="#/">Link ghost pseudo-button</a>
</div>
<div class="wrapper-sm mb-2">
  <p>Full width button inside <code>wrapper-sm</code></p>
  <button class="w-100%">Button</button>
</div>

* * *

## Up to four column [grid layouts]({{ "/layout/#grid" | url }})

A malleable grid without setting equalization on cell widths. In this example, for <code>sm</code> up, columns will adopt whatever width they require for their content. Specify where you want your _grid items_ using column placement classes — then _CSS grid_ will figure out how many columns you need.

<div class="wrapper mb-3">
  <p class="mb-1"><code>grid gap-1</code></p>
    <div class="grid gap-1">
      <div class="sm:col-1 p-cell bg-gray bg-100 dark:bg-900"><code>sm:col-1</code> A narrow column</div>
      <div class="sm:col-2 p-cell bg-gray bg-100 dark:bg-900"><code>sm:col-2</code> This will expand to become a wide column because it has a lot of content. This will expand to become a wide column because it has a lot of content. This will expand to become a wide column because it has a lot of content.</div>
      <div class="sm:col-3 p-cell bg-gray bg-100 dark:bg-900"><code>sm:col-3</code> Another narrow column</div>
  </div>
</div>

Using `equal-` modifiers on the grid wrapper will both equalize column width and specify the number of columns. Then for simple layouts (e.g. galleries), you won’t need column placement classes.

<div class="wrapper">
<code>grid sm:equal-2-cols gap-2</code>
<div class="mt-1 mb-2 grid sm:equal-2-cols gap-2">
  <div class="p-1 bg-gray bg-100 dark:bg-900">#</div>
  <div class="p-1 bg-gray bg-100 dark:bg-900">#</div>
</div>
<code>grid sm:equal-2-cols md:equal-3-cols gap-2</code>
<div class="mt-1 mb-2 grid sm:equal-2-cols md:equal-3-cols gap-2">
  <div class="p-1 bg-gray bg-100 dark:bg-900">#</div>
  <div class="p-1 bg-gray bg-100 dark:bg-900">#</div>
  <div class="p-1 bg-gray bg-100 dark:bg-900">#</div>
  <div class="p-1 bg-gray bg-100 dark:bg-900">#</div>
  <div class="sm:col-span-2 p-1 bg-gray bg-100 dark:bg-900"><code>sm:col-span-2</code></div>
</div>
<p><code>sm:grid</code> takes effect at 640px up. Below 640px, <code>gap-2</code> will have no effect.</p>
<code>sm:grid sm:equal-4-cols gap-2</code>
<div class="mt-1 mb-2 sm:grid sm:equal-4-cols gap-2">
  <div class="p-1 bg-gray bg-100 dark:bg-900">#</div>
  <div class="sm:col-span-2 p-1 bg-gray bg-100 dark:bg-900"><code>sm:col-span-2</code></div>
  <div class="sm:col-span-3 p-1 bg-gray bg-100 dark:bg-900"><code>sm:col-span-3</code></div>
  <div class="sm:col-4 sm:row-1 sm:row-span-2 p-1 bg-gray bg-100 dark:bg-900"><code>sm:col-4 sm:row-1 sm:row-span-2</code></div>
</div>
</div><!-- /.wrapper -->

* * *

## Text sizes

See [typography: making text bigger]({{ "/typography/#making-text-bigger" | url }}). `t-long-read` and `t-display` involve a `clamp()`.

<div class="wrapper-lg overflow-x">
  <table class="table">
    <thead>
      <th>Default</th>
      <th><code>t-long-read</code> wrapper</th>
      <th><code>t-display</code> wrapper</th>
    <thead>
    <tbody>
      <tr>
        <td>
          <h1>Heading 1</h1>
          <h2>Heading 2</h2>
          <h3>Heading 3</h3>
          <h4>Heading 4</h4>
          <h5>Heading 5</h5>
          <h6>Heading 6</h6>
          <p>Paragraph. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni rem animi quaerat accusantium illum architecto, nemo, ex harum voluptatum adipisci eum blanditiis dolorum. Natus debitis quisquam, expedita accusantium quos cumque?</p>
        </td>
        <td class="t-long-read">
          <h1>Heading 1</h1>
          <h2>Heading 2</h2>
          <h3>Heading 3</h3>
          <h4>Heading 4</h4>
          <h5>Heading 5</h5>
          <h6>Heading 6</h6>
          <p>Paragraph. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni rem animi quaerat accusantium illum architecto, nemo, ex harum voluptatum adipisci eum blanditiis dolorum. Natus debitis quisquam, expedita accusantium quos cumque?</p>
        </td>
        <td class="t-display">
          <h1>Heading 1</h1>
          <h2>Heading 2</h2>
          <h3>Heading 3</h3>
          <h4>Heading 4</h4>
          <h5>Heading 5</h5>
          <h6>Heading 6</h6>
        </td>
      </tr>
    </tbody>
  </table>
  </div>
</div>

## Example “research article” page layout using [grid](/baselayer-3/layout/#grid)

<div class="wrapper-xl container mt-2 mb-3">
  <code>grid md:equal-3-cols lg:equal-4-cols gap-3</code>
  <div class="mt-1 grid md:equal-3-cols lg:equal-4-cols gap-3">
    <!---->
    <div class="md:col-2 md:col-span-2">
      <code>md:col-2 md:col-span-2</code>
      <p class="h1 mb-0">Title of This Article</p>
    </div>
    <!---->
    <div class="md:col-2 md:col-span-2 lg:col-4 lg:row-1 lg:row-span-2 relative">
      <code class="mb-1">md:col-2 md:col-span-2 lg:col-4 lg:row-span-2 relative</code><br>
      <div class="sticky top">
        <code>sticky top</code>
        <p class="h4 mt-0">On this page TOC</p>
        <ul class="mb-0">
          <li>Abstract</li>
          <li>Materials and Methods</li>
          <li>Discussion</li>
          <li>Conclusion</li>
        </ul>
      </div>
    </div>
    <!---->
    <div class="md:col-2 md:col-span-2 b-1 p-1">
      <code>md:col-2 md:col-span-2</code>
      <p class="h3 my-1">Abstract</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni rem animi quaerat accusantium illum architecto, nemo, ex harum voluptatum adipisci eum blanditiis dolorum. Natus debitis quisquam, expedita accusantium quos cumque?</p>
      <p class="h3 my-1">Materials and Methods</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni rem animi quaerat accusantium illum architecto, nemo, ex harum voluptatum adipisci eum blanditiis dolorum. Natus debitis quisquam, expedita accusantium quos cumque?</p>
      <p class="h3 my-1">Discussion</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni rem animi quaerat accusantium illum architecto, nemo, ex harum voluptatum adipisci eum blanditiis dolorum. Natus debitis quisquam, expedita accusantium quos cumque?</p>
      <p class="h3 my-1">Conclusion</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni rem animi quaerat accusantium illum architecto, nemo, ex harum voluptatum adipisci eum blanditiis dolorum. Natus debitis quisquam, expedita accusantium quos cumque?</p>
    </div>
    <!---->
    <div class="md:col-1 md:row-1 md:row-span-3 lg:row-span-2">
      <code>md:col-1 md:row-1 md:rows-1-3 lg:rows-1-2</code>
      <p class="h4 mt-0">Navigation menu</p>
      <ul>
        <li>Page One</li>
        <li>Page Two</li>
        <li>Page Three</li>
      </ul>
    </div>
  </div>
</div>

* * *

## [Content-grid](/baselayer-3/layout/#content-grid) layouts

<div class="content-grid">
  <h3 class="h1">Title of this <code>content-grid</code> demo</h3>
  <p><code>content-grid</code> is intended for long-form articles. Its 7-column grid places the content in column 4, where each immediate-child elment will be its own grid item. <code>popout</code> spans rows 3-5. <code>expand</code> spans rows 2-6. <code>full-bleed</code> spans rows 1-7.</p>
  <p>Here’s a styled <code>&lt;p class="popout"&gt;</code>:</p>
  <div aria-label="Note" class="popout mt-2 mb-3 bt-heavy b-blue b-300 b-dark-invert rad rad-2 p-2 t-reversi bg-gray bg-100 dark:bg-900">
    &star; Information panel
  </div>
  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni rem animi quaerat accusantium illum architecto, nemo, ex harum voluptatum adipisci eum blanditiis dolorum. Natus debitis quisquam, expedita accusantium quos cumque?</p>
  <p>Here’s a styled <code>&lt;div class="expand"&gt;</code>:</p>
  <div class="expand mt-2 mb-3 aspect-ratio-16x9 flex flex-center flex-middle relative">
    <svg xmlns="http://www.w3.org/2000/svg" class="absolute box img-cover" preserveAspectRatio="xMidYMid slice" width="1000" height="600"><defs><linearGradient id="gradient1" gradientTransform="rotate(45)"><stop offset="5%" stop-color="rgba(255,255,0,.5)"/><stop offset="50%" stop-color="rgba(255,255,255,0)"/><stop offset="95%" stop-color="rgba(255,0,0,.5)"/></linearGradient><linearGradient id="gradient2" gradientTransform="rotate(135)"><stop offset="5%" stop-color="rgba(0,0,255,.5)"/><stop offset="50%" stop-color="rgba(255,255,255,0)"/><stop offset="95%" stop-color="rgba(0,255,0,.5)"/></linearGradient></defs><rect width="100%" height="100%" fill="url('#gradient1')"/><rect width="100%" height="100%" fill="url('#gradient2')"/></svg>
    <div class="z-1 wrapper-content py-3">
      <p class="h2 t-bold">This example text may or may not distort the 16×9 aspect ratio that has been given to this demo component.</p>
      <p class="h2 t-bold">The SVG image rectangle will be 1280px × 720px if your viewport is big enough. See what it does on a narrow viewport width (e.g. phone).</p>
    </div>
  </div>
  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni rem animi quaerat accusantium illum architecto, nemo, ex harum voluptatum adipisci eum blanditiis dolorum. Natus debitis quisquam, expedita accusantium quos cumque?</p>
  <p>Here’s a styled <code>&lt;p class="full-bleed"&gt;</code>:</p>
  <div class="full-bleed mt-2 mb-3 p-2 t-semibold t-white bg-red">
    <code>full-bleed</code> — expands to the full width of the avilable space. If there are no sidebars, it will reach the sides of the viewport.
  </div>
  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni rem animi quaerat accusantium illum architecto, nemo, ex harum voluptatum adipisci eum blanditiis dolorum. Natus debitis quisquam, expedita accusantium quos cumque?</p>
</div>

* * *

## Example components

Styled by utility classes.

<div class="wrapper">
  <div class="grid md:equal-2-cols gap-3">
    <div>
      <p>Without dark mode lightness levels using <code>dark:</code></p>
      <div aria-label="Note" class="mb-2 bt-heavy b-blue b-300 rad p-2 t-black bg-gray bg-100">
        <span class="t-lg">&star;</span> Information panel
      </div>
      <div aria-label="Note" class="mb-2 bl-heavy b-amber b-500 p-2 t-black bg-amber bg-200">
        <span class="t-lg">&#9888;</span> Warning alert panel.
      </div>
      <p>With <code>dark:</code></p>
      <div aria-label="Note" class="mb-2 bt-heavy b-blue b-300 rad p-2 t-reversi bg-gray bg-100 dark:bg-900">
        <span class="t-lg">&star;</span> Information panel
      </div>
      <div aria-label="Note" class="mb-2 bl-heavy b-amber b-500 p-2 t-reversi bg-amber bg-200 dark:bg-900">
        <span class="t-lg">&#9888;</span> Warning alert panel.
      </div>
    </div>
    <div>
      <div class="b-thin rad rad-2">
        <div class="p-cell t-bold">Card category</div>
        <div class="aspect-ratio-21x9 relative">
          <svg xmlns="http://www.w3.org/2000/svg" class="absolute box img-cover" preserveAspectRatio="xMidYMid slice" width="1000" height="600"><defs><linearGradient id="gradient1" gradientTransform="rotate(45)"><stop offset="5%" stop-color="rgba(255,255,0,.5)"/><stop offset="50%" stop-color="rgba(255,255,255,0)"/><stop offset="95%" stop-color="rgba(255,0,0,.5)"/></linearGradient><linearGradient id="gradient2" gradientTransform="rotate(135)"><stop offset="5%" stop-color="rgba(0,0,255,.5)"/><stop offset="50%" stop-color="rgba(255,255,255,0)"/><stop offset="95%" stop-color="rgba(0,255,0,.5)"/></linearGradient></defs><rect width="100%" height="100%" fill="url('#gradient1')"/><rect width="100%" height="100%" fill="url('#gradient2')"/></svg>
        </div>
        <div class="p-cell">
        <p class="h3 my-1">Card title</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni rem animi quaerat accusantium illum architecto, nemo, ex harum voluptatum adipisci eum blanditiis dolorum.</p>
        <p><a class="btn r-2 bg-green bg-600 hover:bg-700" href="#/">Get this thing</a></p>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="wrapper-md">
  <div class="mt-2 mb-3 container resize-x">
    <div class="b-thin rad rad-2 p-2 sm:flex gap-2">
      <div>
        <div class="mx-auto" style="width: 96px;">
          <svg xmlns="http://www.w3.org/2000/svg" class="rad rad-pill img-cover" preserveAspectRatio="xMidYMid slice" width="1000" height="1000"><defs><linearGradient id="gradient1" gradientTransform="rotate(45)"><stop offset="5%" stop-color="rgba(255,255,0,.5)"></stop><stop offset="50%" stop-color="rgba(255,255,255,0)"></stop><stop offset="95%" stop-color="rgba(255,0,0,.5)"></stop></linearGradient><linearGradient id="gradient2" gradientTransform="rotate(135)"><stop offset="5%" stop-color="rgba(0,0,255,.5)"></stop><stop offset="50%" stop-color="rgba(255,255,255,0)"></stop><stop offset="95%" stop-color="rgba(0,255,0,.5)"></stop></linearGradient></defs><rect width="100%" height="100%" fill="url('#gradient1')"></rect><rect width="100%" height="100%" fill="url('#gradient2')"></rect></svg>
        </div>
      </div>
      <div class="grow">
        <p class="h4 mt-0 mb-1 t-center sm:t-left">Flexbox media object</p>
        <p>In this example, the media object “collapses” to a single column below container width 640px, using <code>sm:flex</code>. And below that width, the title and button are centered using <code>t-center</code>, which is overridden by <code>sm:t-left</code>.</p>
        <p class="mb-0 t-center sm:t-left">
          <button>Something</button>
        </p>
      </div>
    </div>
  </div>
</div>

<div class="wrapper">
  <div class="container resize-x">
    <div class="grid sm:equal-2-cols md:equal-2-cols gap-3">
      <div>
        <form class="container" action="">
          <fieldset class="p-2">
            <legend>Form inputs etc. as grid items</legend>
            <div class="sm:grid sm:equal-4-cols gap-2">
              <label class="inline-block py-1" for="name">Your name</label>
              <input class="w-100% sm:col-span-3" type="text" id="name" name="name" placeholder="Enter your name">
              <label class="inline-block py-1" for="email">Your email</label>
              <input class="w-100% sm:col-span-3" type="email" id="email" name="example" placeholder="Enter your email address">
              <div class="mt-1 sm:col-2 sm:col-span-3">
                <button type="submit">Subscribe</button>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
      <div>
        <div class="b-thin rad p-2 container grid equal-4-cols gap-2">
          <div class="aspect-ratio-1x1 r-pill relative">
            <svg xmlns="http://www.w3.org/2000/svg" class="absolute box img-cover" preserveAspectRatio="xMidYMid slice" width="1000" height="600"><defs><linearGradient id="gradient1" gradientTransform="rotate(45)"><stop offset="5%" stop-color="rgba(255,255,0,.5)"/><stop offset="50%" stop-color="rgba(255,255,255,0)"/><stop offset="95%" stop-color="rgba(255,0,0,.5)"/></linearGradient><linearGradient id="gradient2" gradientTransform="rotate(135)"><stop offset="5%" stop-color="rgba(0,0,255,.5)"/><stop offset="50%" stop-color="rgba(255,255,255,0)"/><stop offset="95%" stop-color="rgba(0,255,0,.5)"/></linearGradient></defs><rect width="100%" height="100%" fill="url('#gradient1')"/><rect width="100%" height="100%" fill="url('#gradient2')"/></svg>
          </div>
          <div class="col-span-3">
            <p class="h4 mt-0 mb-1 ">Grid media object</p>
            <p>This example will behave as a grid for all container widths, even down to phones in portrait orientation.</p>
            <button>Something</button>
          </div>
        </div>
      </div>
      </div>
    </div>
</div>

<div class="wrapper-xl my-3">
  <div class="container resize-x">
    <div class="p-2 grid md:equal-2-cols grid-dense gap-3">
      <div class="md:col-2 rad rad-4 aspect-ratio-16x9 relative overflow-clip">
        <svg xmlns="http://www.w3.org/2000/svg" class="absolute box img-cover" preserveAspectRatio="xMidYMid slice" width="1000" height="600"><defs><linearGradient id="gradient1" gradientTransform="rotate(45)"><stop offset="5%" stop-color="rgba(255,255,0,.5)"/><stop offset="50%" stop-color="rgba(255,255,255,0)"/><stop offset="95%" stop-color="rgba(255,0,0,.5)"/></linearGradient><linearGradient id="gradient2" gradientTransform="rotate(135)"><stop offset="5%" stop-color="rgba(0,0,255,.5)"/><stop offset="50%" stop-color="rgba(255,255,255,0)"/><stop offset="95%" stop-color="rgba(0,255,0,.5)"/></linearGradient></defs><rect width="100%" height="100%" fill="url('#gradient1')"/><rect width="100%" height="100%" fill="url('#gradient2')"/></svg>
      </div>
      <div class="md:col-1 flex flex-column flex-center">
        <div class="w-sm t-long-read">
          <p class="h2 mt-0">A “two-up” feature block</p>
          <p>In this exmple, the image is <em>before</em> the text content in the HTML. But for container width above 768px, the grid system places the image to the right (in the 2nd column). The text content is positioned vertical-center by <code>flex flex-column flex-center</code></p>
          <p class="mb-0"><a class="btn r-pill bg-teal" href="#/">Discover more</a></p>
        </div>
      </div>
    </div>
  </div>
</div>
