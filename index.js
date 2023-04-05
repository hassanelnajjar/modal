const disableBodyScrollInOverlayRoot = () => {
  document.body.style.overflow = 'hidden';
};

const enableBodyScrollInOverlayRoot = () => {
  document.body.style.overflow = 'auto';
};

// these classes are defined just to select the elements without styles
// class : .overlay-root .top-menu-modal
// class : .backdrop-overlay
// class : .modal
// class : .close-button-class

const hideAllModals = () => {
  enableBodyScrollInOverlayRoot();
  document
    .querySelectorAll('.overlay-root')
    .forEach((v) => (v.style.visibility = 'hidden'));
};

const closeOverlayRootByNodalName = (modal = '') => {
  const modalClass = '.' + modal;
  enableBodyScrollInOverlayRoot();
  document
    .querySelectorAll(modalClass)
    .forEach((v) => (v.style.visibility = 'hidden'));
  hideAllModals();
};

const showOverlayRootByModalName = (modal = '') => {
  const modalClass = '.' + modal;
  if (!modal) return;
  hideAllModals();
  disableBodyScrollInOverlayRoot();
  document.querySelector(modalClass).style.visibility = 'visible'; // root
  document.querySelector(modalClass + ' .backdrop-overlay').style.display =
    'block';
  document.querySelector(modalClass + ' .overlay-modal').style.display = 'flex';
};

function handleBackdropClickInOverlayRoot(event) {
  if (event.target === event.currentTarget) {
    hideModal('.overlay-root');
  }
}

document
  .querySelectorAll('.backdrop-overlay')
  .forEach((v) => v.addEventListener('click', hideAllModals));

document
  .querySelectorAll('.close-button-class')
  .forEach((v) => v.addEventListener('click', hideAllModals));
