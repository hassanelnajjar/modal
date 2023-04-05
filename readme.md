## Overview

This is a simple modal component that can be used to create a modal. This component
is created using css and javascript.

## To use this component

we should use some of the predefined classes and javascript functions to create a modal.

## Predefined classes

- **overlay-root**: This class is used to create a root element. This element is used to position the modal in the center of the screen.
- **overlay-modal**: This class is used to create a modal element. This element is used to position the modal in the center of the screen by default.
- **backdrop-overlay**: This class is used to create a backdrop overlay
- **close-button-class**: This class is used to create a close button element. this element is used to close the modal.
- **close-button-icon** : This class is used to create a close button icon element. this element is used to style the button to be outside the modal.

## Predefined functions

- **showOverlayRootByModalName(modalName)**: This function is used to open a modal by name.
- **closeOverlayRootByNodalName(modalName)**: This function is used to close a modal by name.

## Steps to create a modal

1. Create a root element with class overlay-root.
2. Pass a custom-class(TOP-MENU) to the root element to make the root element selectable.
3. Create a backdrop overlay element with class backdrop-overlay.
4. Create a modal element with class overlay-modal.
5. Create your modal content into a div inside the overlay-modal element.
6. Create a close button element with class close-button-class.
7. Create a close button icon element with class close-button-icon.

## HTML structure

```html
<div class="overlay-root TOP-MENU">
  <div class="backdrop-overlay"></div>
  <div class="overlay-modal">
    <div>content</div>
    <button class="close-button-class close-button-icon">
      <span>X</span>
    </button>
  </div>
</div>
```

## Functions to used open and close the modal:-

This functions is used to open a modal by name , in this example the name of the modal is TOP-MENU.

```js
showOverlayRootByModalName("TOP-MENU)
```

This functions is used to close a modal by name , in this example the name of the modal is TOP-MENU.

```js
closeOverlayRootByNodalName("TOP-MENU)
```
