const formContainer = document.querySelector('.ad-form');
const formElemets = document.querySelectorAll('fieldset', 'select', '.map__filters');
//const status = true;

const addDisabled = (status) => {
  if (status === false) {
    formContainer.classList.add('ad-form--disabled');
    formElemets.forEach((element) => {
      element.disabled = true;
    });
  }
};

export {addDisabled};

