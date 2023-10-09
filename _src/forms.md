---
title: Forms
mainHeading: Forms
layout: base.njk
prevPage: "/colors/"
nextPage: "/buttons/"
prevLink: "Colors"
nextLink: "Buttons"
---

Baselayer form elements have simple background and focus styling (no default border).

**Notes:**

1. In Baselayer, form elements do not have set width. You can control widths them by one of two ways (same as for [buttons]({{ '/buttons/' | url }})):
    * By adding the `w-100%` utility class to the form element, or
    * By involving the form elements as immediate children of [flex layout]({{ '/layout/' | url }}#flex-layouts) or [grid layout]({{ '/layout/' | url }}#grid-layouts) wrappers.
2. Form inputs, textareas, buttons, and the `btn` class, have `font-size: inherit`. This means their font sizes can be modified by any font-size class in Baselayer.
3. The font-family of form elements, buttons, and `btn` is controlled by `var(--base)` (default is sans-serif).

## Textual Form Input Fields

<form action="">
  <p>
    <label for="example-input-text">Text</label>
    <input type="text" id="example-input-text" name="example" placeholder="Enter text">
  </p>
  <p>
    <label for="example-input-search">Search</label>
    <input type="search" id="example-input-serach" name="example" placeholder="Search ...">
  </p>
  <p>
    <label for="example-input-email">Email address</label>
    <input type="email" id="example-input-email" name="example" placeholder="Enter email">
    <br/>Expects an email address — on touch screens, this will invoke a keypad for entering emails.
  </p>
  <p>
    <label for="example-input-password">Password</label>
    <input type="password" id="example-input-password" name="example" placeholder="Password">
  </p>
  <p>
    <label for="example-input-url">Url</label>
    <input type="url" id="example-input-url" name="example" placeholder="Enter a url">
    <br/>Expects a web address — on touch screens, this will invoke a keypad for entering URLs.
  </p>
</form>

## Number Inputs

On touch screens, these inputs invoke the numeric keyboard instead of the text keyboard.

<form action="">
  <p>
    <label for="example-input-tel">Telephone number</label>
    <input type="tel" id="example-input-tel" name="example" placeholder="Telephone number">
  </p>
  <p>
    <label for="example-input-number">Number</label>
    <input type="number" id="quantity" name="example" min="0" inputmode="numeric" pattern="\d*">
  </p>
</form>

## Date and Time Inputs

On some devices (e.g. iOS Safari), these inputs get modified by date pickers, etc. The shape of the input fields gets changed.

<form action="">
  <p>
    <label for="example-input-date">Date</label>
    <input type="date" id="example-input-date" name="example">
  </p>
  <p>
    <label for="example-input-date-time-local">Date / Time local</label>
    <input type="datetime-local" id="example-input-date-time-local" name="example">
  </p>
  <p>
    <label for="example-input-time">Time</label>
    <input type="time" id="example-input-time" name="example">
  </p>
</form>

## Color Picker

Invokes the device’s color picker.

<form action="">
  <p>
    <label for="example-input-color">Color</label>
    <input type="color" id="example-inupt-color" placeholder="#fff">
  </p>
</form>

## File Upload

<form action="">
  <p>
    <label for="example-input-file">File input</label>
    <input class="w100%" type="file" id="example-input-file" accept="image/png, image/jpeg">
  </p>
</form>

**Note:** File upload inputs `<input type="file">` can break your page layout on the smallest phones in portrait orientation. But if you add `class="w100%"` that problem goes away.

## Select and Multi-select

On some devices (e.g. iOS Safari), these inputs get modified by number pickers (dropdowns).

<form action="">
  <p>
    <label for="example-select1">Example select</label>
    <select id="example-select1">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </p>
  <p>
    <label for="example-select2">Example multiple select</label>
    <select multiple id="example-select2">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </p>
</form>

## Text Area (Multiline)

<form action="" class="mt2">
    <label for="example-textarea">Example textarea</label><br>
    <textarea id="example-textarea" rows="3"></textarea>
</form>

## Radio Boxes and Checkboxes

<form action="">
  <p class="my2">Radio boxes:</p>
  <input type="radio" id="example-radio-1" name="example-radio" value="banana">
  <label for="example-radio-1">Banana</label><br>
  <input type="radio" id="example-radio-2" name="example-radio" value="mango">
  <label for="example-radio-2">Mango</label><br>
  <input type="radio" id="example-radio-3" name="example-radio" value="coconut" disabled>
  <label for="example-radio-3">Coconut (disabled)</label>
  <p class="my2">Checkboxes:</p>
  <input type="checkbox" id="example-check-1" name="example-check-1" value="strawberry">
  <label for="example-check-1"> Strawberry</label><br>
  <input type="checkbox" id="example-check-2" name="example-check-2" value="chocolatte">
  <label for="example-check-2"> Chocolate</label><br>
  <input type="checkbox" id="example-check-3" name="example-check-3" value="vanilla">
  <label for="example-check-3"> Vanilla</label><br><br>
  <input type="submit" value="Submit">
</form>


## Fieldsets and Legends

Groups of form elements can be wrapped in `<fieldset>` tags. Add a `<legend>` to provide a special title for the entire fieldset.

<form action="">
  <fieldset class="flex">
    <legend>Example e-newsletter subscribe</legend>
    <input class="w100%" type="email" id="example-input-email" placeholder="Enter email">
    <input type="submit" name="submit" value="Subscribe">
  </fieldset>
</form>

```
<form action="">
  <fieldset class="flex">
    <legend>Example e-newsletter subscribe</legend>
    <input class="w100%" type="email" id="example-input-email" placeholder="Enter email">
    <input type="submit" name="submit" value="Subscribe">
  </fieldset>
</form>
```

**Note:** In the example above, the Baselayer `flex` class has been used to align these form elements side-by-side, and then `grow` has been used to expand the email input field. A `<legend>` is also included — but since its text incorporates with the `<fieldset>` wrapping border line, it will not be controlled by the flexbox rule.

## Form Buttons

<form action="">
  <p>
    <button type="button" name="button">Button</button>
    <input type="button" name="input" value="Input Button">
    <input type="submit" name="submit" value="Submit Button">
    <input type="reset" name="reset" value="Reset Button">
  </p>
</form>

```
<form action="">
  <p>
    <button type="button" name="button">Button</button>
    <input type="button" name="input" value="Input Button">
    <input type="submit" name="submit" value="Submit Button">
    <input type="reset" name="reset" value="Reset Button">
  </p>
</form>
```

See [buttons]({{ '/buttons' | url }}) for more information.