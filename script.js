const modal = document.querySelector('#login-modal');
const toast = document.querySelector('#toast');

function setModal(open) {
  modal.classList.toggle('is-open', open);
  modal.setAttribute('aria-hidden', String(!open));
  document.body.style.overflow = open ? 'hidden' : '';
  if (open) modal.querySelector('input').focus();
}

document.querySelectorAll('[data-modal-open]').forEach((button) => {
  button.addEventListener('click', () => setModal(true));
});

document.querySelectorAll('[data-modal-close]').forEach((button) => {
  button.addEventListener('click', () => setModal(false));
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') setModal(false);
});

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  window.setTimeout(() => toast.classList.remove('show'), 4200);
}

document.querySelector('#login-form').addEventListener('submit', (event) => {
  event.preventDefault();
  setModal(false);
  showToast('Login is a prototype placeholder and can be connected to authentication next.');
});
