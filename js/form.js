import {checkTiteLength, checkPrice} from './util.js';

const formContainer = document.querySelector('.ad-form');
const formElemets = document.querySelectorAll('fieldset', 'select', '.map__filters');
const formTitle = formContainer.querySelector('#title');
const formPrice = formContainer.querySelector('#price');
const roomNumber = formContainer.querySelector('#room_number');
const guestNumber = formContainer.querySelector('#capacity');
const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;
const MAX_PRICE = 100000;

const ROOM_OPTION = {
  '1': ['1'],
  '2': ['2', '1'],
  '3': ['3', '2', '1'],
  '100': ['0']
};

const addDisabled = (status) => {
  if (status === false) {
    formContainer.classList.add('ad-form--disabled');
    formElemets.forEach((element) => {
      element.disabled = true;
    });
  } else {
    formContainer.classList.remove('ad-form--disabled');
    formElemets.forEach((element) => {
      element.disabled = false;
    });
  }
};

const pristine = new Pristine (formContainer, {
  classTo:'ad-form__element',
  errorClass: 'ad-form__element--error',
  successClass: 'ad-form__element--succes',
  errorTextParent: 'ad-form__element',
  errorTextTag: 'div',
  errorTextClass: 'form__error',
});

const checkCapacity = () => ROOM_OPTION[roomNumber.value].includes(guestNumber.value);

const errorTextCapacity = () => {
  if (roomNumber.value === '1') {
    return '1 комната — для 1 гостя';
  } else if (roomNumber.value === '2') {
    return '2 комнаты - для 1 или 2 гостей';
  } else if (roomNumber.value === '3') {
    return '3 комнаты - для 1, 2 или 3 гостей';
  } else if (roomNumber.value === '100') {
    return '100 комнат не подходят для гостей';
  }
};

pristine.addValidator(formTitle, (value) => checkTiteLength(value, MIN_TITLE_LENGTH, MAX_TITLE_LENGTH),
  `Заголовок должен быть от ${MIN_TITLE_LENGTH} до ${MAX_TITLE_LENGTH} символов!`);

pristine.addValidator(formPrice, (value) => checkPrice(value, MAX_PRICE),
  `Цена не более ${MAX_PRICE}!`);

pristine.addValidator(roomNumber, checkCapacity, errorTextCapacity);
pristine.addValidator(guestNumber, checkCapacity, errorTextCapacity);

formContainer.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});

export {addDisabled};

