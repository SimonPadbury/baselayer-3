---
title: Examples
mainHeading: Examples
layout: base-fw.njk
---

<style>
  h2 {
    width: min(100% - (var(--sp-2) * 2), var(--w-xl));
    margin-inline: auto;
  }
</style>

<p class="container">
<button class="pl-1" type="button" onclick="history.back();">
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><path d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z"></path></svg>
Back
</button>
</p>

## Widths

<div class="container mb-1 p-1 bg-gray bg-100">container</div>
<div class="container flex flex-wrap mb-1 bg-gray bg-100">
<div class="w-xs p-1 bg-gray bg-200">w-xs / 320px</div>
<div class="w-xs p-1">w-xs</div>
<div class="w-xs p-1 bg-gray bg-200">w-xs</div>
<div class="w-xs p-1">w-xs</div>
<div class="w-xs p-1 bg-gray bg-200">w-xs</div>
</div>
<div class="container flex flex-wrap mb-1 bg-gray bg-100">
<div class="w-sm p-1 bg-gray bg-200">w-sm / 640px</div>
<div class="w-xs p-1">w-xs</div>
<div class="w-xs p-1 bg-gray bg-200">w-xs</div>
<div class="w-xs p-1">w-xs</div>
</div>
<div class="container flex flex-wrap mb-1 bg-gray bg-100">
<div class="w-md p-1 bg-gray bg-200">w-md / 960px</div>
<div class="w-xs p-1">w-xs</div>
<div class="w-xs p-1 bg-gray bg-200">w-xs</div>
</div>
<div class="container flex flex-wrap mb-1 bg-gray bg-100">
<div class="w-lg p-1 bg-gray bg-200">w-lg / 1280px</div>
<div class="w-xs p-1">w-xs</div>
</div>
<div class="container flex flex-wrap mb-1 bg-gray bg-100">
<div class="w-xl p-1 bg-gray bg-200">w-xl / 1600px</div>
</div>

## Containers

<div class="container mb-1 p-1 bg-gray bg-100">container</div>
<div class="container-xl mb-1 p-1 bg-gray bg-100">container-xl</div>
<div class="container-lg mb-1 p-1 bg-gray bg-100">container-lg</div>
<div class="container-md mb-1 p-1 bg-gray bg-100">container-md</div>
<div class="container-sm mb-1 p-1 bg-gray bg-100">container-sm</div>
<div class="container-xs mb-1 p-1 bg-gray bg-100">container-xs</div>

## Labels

<div class="container">
  <label class="inline-block px-1 t-black bg-orange bg-200">Really?</label>
  <label class="inline-block px-1 t-white bg-red bg-600">Required</label>
  <label class="inline-block px-1 t-white bg-green bg-600">Success</label>
  <label class="inline-block px-1 t-white bg-blue bg-600">Information</label>
  <label class="inline-block px-1 t-white bg-purple bg-600">Author</label>
  <label class="inline-block px-1 t-white bg-teal bg-600">Description</label>
  <label class="inline-block px-1 t-white bg-coolgray bg-700">Uncategorized</label>
</div>

## Buttons

<div class="mb-2 container">
  <button type="button" name="button">Button</button>
  <button class="r-2" type="button" name="button">Rounded button</button>
  <button class="r-pill" type="button" name="button">Pill button</button>
  <button class="px-3" type="button" name="button">Stretched button</button>
  <a class="btn" href="#/">Link pseudo-button</a>
  <button class="b-blue b-600 hover:b-700 bg-blue bg-600 hover:bg-700" type="button" name="button">Blue button</button>
  <button class="b-orange b-300 hover:b-400 t-black hover:t-black bg-orange bg-300 hover:bg-400" type="button" name="button">Orange button</button>
  <a class="btn b-1 b-green bg-transparent bg-600 t-green t-600 hover:b-700 hover:t-white hover:bg-green hover:bg-700" href="#/">Link ghost pseudo-button</a>
</div>
<div class="container-sm mb-2">
  <p>Full width button inside a small container</p>
  <button class="w-100%">Button</button>
</div>

## Grid

<div class="container mb-3 ">
<p class="w-sm">A malleable grid without equalization set on the wrapper. For <code>sm</code> up, columns will adopt whatever width they require for their content. <em>CSS grid</em> requires column placement classes to know where you want your columns, so that it can figure out how many columns you need.</p>
<div class="grid gap-1">
  <div class="sm:col-1 p-cell bg-gray bg-100"><code class="bg-blue bg-200">sm:col-1</code> A narrow column</div>
  <div class="sm:col-2 p-cell bg-gray bg-100"><code class="bg-blue bg-200">sm:col-2</code> This will be a wide column because it has a lot of content. This will be a wide column because it has a lot of content. This will be a wide column because it has a lot of content. </div>
  <div class="sm:col-3 p-cell bg-gray bg-100"><code class="bg-blue bg-200">sm:col-3</code> Another narrow column</div>
</div>
</div>

<div class="container">

<code>grid sm:equal-2-cols gap-2</code>
<div class="mt-1 mb-3 grid sm:equal-2-cols gap-2">
    <div class="p-1 bg-gray bg-100">#</div>
    <div class="p-1 bg-gray bg-100">#</div>
</div>

<code>grid sm:equal-2-cols md:equal-3-cols gap-2</code>
<div class="mt-1 mb-3 grid sm:equal-3-cols gap-2">
    <div class="p-1 bg-gray bg-100">#</div>
    <div class="p-1 bg-gray bg-100">#</div>
    <div class="p-1 bg-gray bg-100">#</div>
    <div class="p-1 bg-gray bg-100">#</div>
    <div class="sm:col-span-2 p-1 bg-gray bg-100"><code class="bg-blue bg-200">sm:col-span-2</code></div>
</div>

<code>grid sm:equal-4-cols gap-2</code>
<div class="mt-1 mb-3 grid sm:equal-4-cols gap-2">
    <div class="p-1 bg-gray bg-100">#</div>
    <div class="p-1 bg-gray bg-100">#</div>
    <div class="sm:col-span-2 p-1 bg-gray bg-100"><code class="bg-blue bg-200">sm:col-span-2</code></div>
    <div class="sm:col-span-3 p-1 bg-gray bg-100"><code class="bg-blue bg-200">sm:col-span-3</code></div>
    <div class="p-1 bg-gray bg-100">#</div>
</div>

</div><!-- /.container -->

## Example components

<div class="container-lg grid md:equal-2-cols gap-3">
  <div>
    <div aria-label="Note" class="popout mb-2 bt-3 b-blue b-300 r-2 p-2 t-black bg-gray bg-100">
      &star; Information panel
    </div>
    <div aria-label="Note" class="popout mb-2 bl-3 b-orange b-300 p-2 t-black bg-orange bg-100">
      &#9888; Warning alert panel.
    </div>
  </div>
  <div>
    <div class="b-1 r-3">
      <div class="p-cell t-bold">Card category</div>
      <div class="aspect-ratio-21x9 relative">
        <svg xmlns="http://www.w3.org/2000/svg" class="absolute box img-cover" preserveAspectRatio="xMidYMid slice" width="1000" height="600"><defs><linearGradient id="gradient1" gradientTransform="rotate(45)"><stop offset="5%" stop-color="rgba(255,255,0,.5)"/><stop offset="50%" stop-color="rgba(255,255,255,0)"/><stop offset="95%" stop-color="rgba(255,0,0,.5)"/></linearGradient><linearGradient id="gradient2" gradientTransform="rotate(135)"><stop offset="5%" stop-color="rgba(0,0,255,.5)"/><stop offset="50%" stop-color="rgba(255,255,255,0)"/><stop offset="95%" stop-color="rgba(0,255,0,.5)"/></linearGradient></defs><rect width="100%" height="100%" fill="url('#gradient1')"/><rect width="100%" height="100%" fill="url('#gradient2')"/></svg>
      </div>
      <div class="p-cell">
      <p class="h3 my-1">Card title</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni rem animi quaerat accusantium illum architecto, nemo, ex harum voluptatum adipisci eum blanditiis dolorum.</p>
      <p><a class="btn r-2 bg-green" href="#/">Get this thing</a></p>
      </div>
    </div>
  </div>
</div>

## Example components using grid

<div class="container-lg grid md:equal-2-cols gap-3">
  <div>
    <form action="">
      <fieldset class="p-2">
        <legend>Form inputs etc. as grid items</legend>
        <div class="grid sm:equal-4-cols gap-2">
          <label for="name">Name</label>
          <input class="sm:col-span-3" type="text" id="name" name="name" placeholder="Enter your name">
          <label for="email">Email</label>
          <input class="sm:col-span-3" type="email" id="email" name="example" placeholder="Enter your email address">
          <button class="sm:col-2" type="submit">Subscribe</button>
        </div>
      </fieldset>
    </form>
  </div>
  <div>
    <div class="b-1 r-4 p-2 grid equal-4-cols gap-2">
      <div class="aspect-ratio-1x1 r-pill relative">
        <svg xmlns="http://www.w3.org/2000/svg" class="absolute box img-cover" preserveAspectRatio="xMidYMid slice" width="1000" height="600"><defs><linearGradient id="gradient1" gradientTransform="rotate(45)"><stop offset="5%" stop-color="rgba(255,255,0,.5)"/><stop offset="50%" stop-color="rgba(255,255,255,0)"/><stop offset="95%" stop-color="rgba(255,0,0,.5)"/></linearGradient><linearGradient id="gradient2" gradientTransform="rotate(135)"><stop offset="5%" stop-color="rgba(0,0,255,.5)"/><stop offset="50%" stop-color="rgba(255,255,255,0)"/><stop offset="95%" stop-color="rgba(0,255,0,.5)"/></linearGradient></defs><rect width="100%" height="100%" fill="url('#gradient1')"/><rect width="100%" height="100%" fill="url('#gradient2')"/></svg>
      </div>
      <div class="col-span-3">
        <p class="h4 mt-0 mb-1 ">Media object</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni rem animi quaerat accusantium illum architecto, nemo, ex harum voluptatum adipisci eum blanditiis dolorum.</p>
        <button>Something</button>
      </div>
    </div>
  </div>
</div>

<div class="container-lg my-3">
  <div class="grid sm:equal-2-cols grid-dense gap-3">
    <div class="sm:col-2 r-4 aspect-ratio-16x9 relative overflow-hidden">
      <svg xmlns="http://www.w3.org/2000/svg" class="absolute box img-cover" preserveAspectRatio="xMidYMid slice" width="1000" height="600"><defs><linearGradient id="gradient1" gradientTransform="rotate(45)"><stop offset="5%" stop-color="rgba(255,255,0,.5)"/><stop offset="50%" stop-color="rgba(255,255,255,0)"/><stop offset="95%" stop-color="rgba(255,0,0,.5)"/></linearGradient><linearGradient id="gradient2" gradientTransform="rotate(135)"><stop offset="5%" stop-color="rgba(0,0,255,.5)"/><stop offset="50%" stop-color="rgba(255,255,255,0)"/><stop offset="95%" stop-color="rgba(0,255,0,.5)"/></linearGradient></defs><rect width="100%" height="100%" fill="url('#gradient1')"/><rect width="100%" height="100%" fill="url('#gradient2')"/></svg>
    </div>
    <div class="sm:col-1 flex flex-column flex-center">
      <div class="w-sm t-long-read">
        <p class="h2">A “two-up” feature block</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni rem animi quaerat accusantium illum architecto, nemo, ex harum voluptatum adipisci eum blanditiis dolorum.</p>
        <p class="mb-0"><a class="btn r-pill bg-teal" href="#/">Discover more</a></p>
      </div>
    </div>
  </div>
</div>

<h2>Research article page layout using grid</h2>

<div class="container mt-2 mb-3">
  <code>grid md:equal-3-cols lg:equal-4-cols gap-3</code>
  <div class="mt-1 grid md:equal-3-cols lg:equal-4-cols gap-3">
    <!---->
    <div class="md:col-2 md:col-span-2 b-1 p-1">
      <code>md:col-2 md:col-span-2</code>
      <p class="h1 mb-0">Title of This Article</p>
    </div>
    <!---->
    <div class="md:col-2 md:col-span-2 lg:col-4 lg:row-1 lg:row-span-2 b-1 p-1">
      <code>md:col-2 md:col-span-2 lg:col-4 lg:row-span-2</code>
      <p class="h4 mt-0">On this page TOC</p>
      <ul>
        <li>Introduction</li>
        <li>Discussion</li>
        <li>Conclusion</li>
      </ul>
    </div>
    <!---->
    <div class="md:col-2 md:col-span-2 b-1 p-1">
      <code>md:col-2 md:col-span-2</code>
      <p class="h3 my-1">Introduction</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni rem animi quaerat accusantium illum architecto, nemo, ex harum voluptatum adipisci eum blanditiis dolorum. Natus debitis quisquam, expedita accusantium quos cumque?</p>
      <p class="h3 my-1">Discussion</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni rem animi quaerat accusantium illum architecto, nemo, ex harum voluptatum adipisci eum blanditiis dolorum. Natus debitis quisquam, expedita accusantium quos cumque?</p>
      <p class="h3 my-1">Conclusion</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni rem animi quaerat accusantium illum architecto, nemo, ex harum voluptatum adipisci eum blanditiis dolorum. Natus debitis quisquam, expedita accusantium quos cumque?</p>
    </div>
    <!---->
    <div class="md:col-1 md:row-1 md:row-span-3 lg:row-span-2 b-1 p-1">
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
