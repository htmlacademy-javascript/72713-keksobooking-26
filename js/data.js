import {getRandomInteger, getRandom, getRandomArrayElement, getRandomArray} from './util.js';

const TITLES = [
  'Best of Best',
  'Biautiful one',
  'Apartment',
  'Palace',
];

const TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];

const TIME = [
  '12:00',
  '13:00',
  '14:00',
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const DESCRIPTION_SET = [
  'Потрясающее жильё',
  'Берите, не думайте',
  'Единственная и неповторимая',
  'Квартирка, как квартирка',
];

const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const LAT = [
  35.65000,
  35.70000,
];

const LNG = [
  139.70000,
  139.80000,
];

const getUser = () => {
  const userNumber = getRandomInteger(1, 10);
  return `${userNumber}`.padStart(2, '0');
};

const createAd = () => ({
  author: {
    avatar: `img/avatars/user${getUser()}.png`,
  },
  offer: {
    title: getRandomArrayElement(TITLES),
    address: `${location.lat}, ${location.lng}`,
    price: getRandom(0, 100000.55, 2),
    type: getRandomArrayElement(TYPES),
    rooms: getRandomInteger(1, 8),
    guests: getRandomInteger(1, 10),
    checkin: getRandomArrayElement(TIME),
    checkout: getRandomArrayElement(TIME),
    features: getRandomArray(FEATURES),
    description: getRandomArrayElement(DESCRIPTION_SET),
    photos: getRandomArray(PHOTOS),
  },
  location: {
    lat: getRandom(LAT[0], LAT[1], 5),
    lng: getRandom(LNG[0], LNG[1], 5),
  },
});

const createManyAds = (ads) => Array.from({length: ads}, createAd);

export {createManyAds};
