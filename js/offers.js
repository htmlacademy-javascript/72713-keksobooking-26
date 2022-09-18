//import {createManyAds} from './data.js';

const TYPES_IN_RUS = {
  'palace': 'Дворец',
  'flat': 'Квартира',
  'house': 'Дом',
  'bungalow': 'Бунгало',
  'hotel': 'Отель',
};
//const ADS_NUMBERS = 10;
//createManyAds(ADS_NUMBERS);

//const offerContainer = document.querySelector('#map-canvas');
const offerTemplate = document.querySelector('#card').content.querySelector('.popup');

const removeUnnecessary = (blockClass, element) => {
  element.querySelector(blockClass).remove();
};

const getPhotos = (photos, element) => {
  const photoContainer = element.querySelector('.popup__photos');
  photoContainer.textContent = '';
  if (photos) {
    photos.forEach((photo) => {
      const img = document.createElement('img');
      img.classList.add('popup__photo');
      img.src = photo;
      img.width = 45;
      img.height = 40;
      img.alt = 'Фотография жилья';
      photoContainer.appendChild(img);
    });
  } else {
    removeUnnecessary('.popup__photos', element);
  }
};

const getFeatures = (features, element) => {
  const featuresContainer = element.querySelector('.popup__features');
  featuresContainer.textContent = '';
  if (features) {
    features.forEach((feature) => {
      const list = document.createElement('li');
      list.classList.add('popup__feature', `popup__feature--${feature}`);
      featuresContainer.appendChild(list);
    });
  } else {
    removeUnnecessary('.popup__features', element);
  }
};

const renderNewOffer = (newOffers) => {
  const offerElement = offerTemplate.cloneNode(true);

  //Обязательные данные
  offerElement.querySelector('.popup__avatar').src = newOffers.author.avatar;
  offerElement.querySelector('.popup__title').textContent = newOffers.offer.title;
  offerElement.querySelector('.popup__text--address').textContent = newOffers.offer.address;
  offerElement.querySelector('.popup__text--price').textContent = `${newOffers.offer.price} ₽/ночь`;

  //Необязательные данные + проверка
  if (newOffers.offer.type) {
    offerElement.querySelector('.popup__type').textContent = TYPES_IN_RUS [newOffers.offer.type];
  } else {
    removeUnnecessary('.popup__type', offerElement);
  }

  if (newOffers.offer.rooms) {
    offerElement.querySelector('.popup__text--capacity').textContent = `${newOffers.offer.rooms} комнаты для ${newOffers.offer.guests} гостей`;
  } else {
    removeUnnecessary('.popup__text--capacity', offerElement);
  }

  if (newOffers.offer.checkin) {
    offerElement.querySelector('.popup__text--time').textContent = `Заезд после ${newOffers.offer.checkin}, выезд до ${newOffers.offer.checkout} гостей`;
  } else {
    removeUnnecessary('.popup__text--time', offerElement);
  }

  getFeatures(newOffers.offer.features, offerElement);

  if (newOffers.offer.description) {
    offerElement.querySelector('.popup__description').textContent = newOffers.offer.description;
  } else {
    removeUnnecessary('.popup__description', offerElement);
  }

  getPhotos(newOffers.offer.photos, offerElement);

  //newOffersFragment.appendChild(offerElement);
  return offerElement;
};

export {renderNewOffer};
