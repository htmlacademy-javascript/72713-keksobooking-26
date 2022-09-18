import {showAlert} from './util.js';

const getData = async(onSuccess) => {
  try {
    const response = await fetch('https://26.javascript.pages.academy/keksobooking/data');
    if (!response.ok) {
      throw new Error('Не удалось загрузить объявления');
    }
    const data = await response.json();
    onSuccess(data);

  } catch (err) {
    showAlert('Ошибка. Обновите страницу');
  }
};

const sendData = async (onSuccess, onFail, body) => {
  try {
    const response = await fetch(' https://26.javascript.pages.academy/keksobooking',
      {
        method: 'POST',
        body,
      }
    );
    if(!response.ok) {
      throw new Error ('Не удалось отправить форму. Попробуйте ещё раз');
    }
    onSuccess();

  } catch (err) {
    onFail('Не удалось отправить форму. Попробуйте ещё раз');
  }
};

export {getData, sendData};
