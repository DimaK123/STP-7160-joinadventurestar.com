const cookiesBlock = document.querySelector('.accept-cookies');
const acceptButton = document.querySelector('.accept-cookies__action-button');

acceptButton.addEventListener('click', () => {
  cookiesBlock.classList.add('accept-cookies--fade-out');

  setTimeout(() => {
    cookiesBlock.style.display = 'none';
  }, 500);
});