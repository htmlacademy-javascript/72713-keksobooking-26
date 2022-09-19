import {isEscapeKey} from './util.js';
const successMessage = document.querySelector('#success').content.querySelector('.success');
const errMessage = document.querySelector('#error').content.querySelector('.error');
const errCloseButton = errMessage.querySelector('.error__button');
const bodyElement = document.querySelector('body');

const onSuccessMessageEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeSuccessMessage();
  }
};

const onErrMessageEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeErrMessage();
  }
};

const onWindowSuccessMessageClose = (evt) => {
  if (evt.target.className !== 'success__inner') {
    closeSuccessMessage();}
};

const onWindowErrMessageClose = (evt) => {
  if (evt.target.className !== 'success__inner') {
    closeErrMessage();}
};

const showSuccessMessage = () => {
  bodyElement.classList.add('.modal-open');
  document.body.appendChild(successMessage);
  document.addEventListener('keydown', onSuccessMessageEscKeydown);
  successMessage.addEventListener('click', onWindowSuccessMessageClose);
};

const showErrMessage = () => {
  bodyElement.classList.add('.modal-open');
  document.body.appendChild(errMessage);
  errCloseButton.addEventListener('click', () => {
    closeErrMessage();
  });
  document.addEventListener('keydown', onErrMessageEscKeydown);
  errMessage.addEventListener('click', onWindowErrMessageClose);
};

function closeSuccessMessage () {
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onSuccessMessageEscKeydown);
  successMessage.removeEventListener('click', onWindowSuccessMessageClose);
  successMessage.remove();
}

function closeErrMessage () {
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onErrMessageEscKeydown);
  errMessage.removeEventListener('click', onWindowErrMessageClose);
  errMessage.remove();
}

export {showSuccessMessage, showErrMessage, closeSuccessMessage, closeErrMessage};
