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

export {getRandomInteger, getRandom, getRandomArrayElement, getRandomArray};
