console.log('hello');

const disableBodyScroll = () => {
  document.body.style.overflow = 'hidden';
};

const enableBodyScroll = () => {
  document.body.style.overflow = 'auto';
};

const hideModal = () => {
  enableBodyScroll();
  document.querySelector('.backdrop').style.display = 'none';
  document.querySelector('.modal').style.display = 'none';
};

const showModal = () => {
  disableBodyScroll();
  document.querySelector('.backdrop').style.display = 'block';
  document.querySelector('.modal').style.display = 'flex';
};

function handleBackdropClick(event) {
  if (event.target === event.currentTarget) {
    hideModal();
  }
}

document
  .querySelector('.backdrop')
  .addEventListener('click', handleBackdropClick);

document.querySelector('.button').addEventListener('click', showModal);

document.querySelector('.icon').addEventListener('click', hideModal);
