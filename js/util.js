const getRandomInteger = (min, max) => {
  if (min < 0 || max < 0 || min >= max) {
    return -1;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandom = (min, max, afterComma) => {
  if (min < 0 || max < 0 || min >= max) {
    return -1;
  }
  return (Math.random() * (max - min + 1) + min).toFixed(afterComma);
};

const getRandomArrayElement = (elements) => elements[getRandom(0, elements.length - 1)];

const getRandomArray = (ourArray) => {
  const maxLength = ourArray.length;
  const lengthOfArray = getRandomInteger(1, maxLength);
  const randomArray = [];

  while (randomArray.length < lengthOfArray) {
    const i = getRandomInteger(0, maxLength - 1);
    const el = ourArray[i];

    if (!randomArray.includes(el)) {
      randomArray.push(el);
    }
  }
  return randomArray;

};

const checkTiteLength = (value, min, max) => value.length >= min && value.length <= max;

const checkPrice = (value, max) => value <= max;

const ALERT_SHOW_TIME = 5000;
const showAlert = (message) => {
  const alert=document.createElement('div');
  alert.style.position ='absolute';
  alert.style.zIndex ='100';
  alert.style.left ='0';
  alert.style.top ='0';
  alert.style.right ='0';
  alert.style.padding ='10px 3px';
  alert.style.fontSize ='35px';
  alert.style.textAlign ='center';
  alert.style.fontWeight = 'bold';
  alert.style.backgroundColor ='#f75757';

  alert.textContent=message;

  document.body.append(alert);

  setTimeout(()=>{
    alert.remove();
  }, ALERT_SHOW_TIME);
};

const isEscapeKey = (evt) => evt.key === 'Escape';

export {getRandomInteger, getRandom, getRandomArrayElement, getRandomArray, checkTiteLength, checkPrice, showAlert, isEscapeKey};
