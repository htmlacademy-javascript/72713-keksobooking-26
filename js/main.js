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