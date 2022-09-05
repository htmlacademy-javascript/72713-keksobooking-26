import {createManyAds} from './data.js';

const TYPES_IN_RUS = {
  'palace': 'Дворец',
  'flat': 'Квартира',
  'house': 'Дом',
  'bungalow': 'Бунгало',
  'hotel': 'Отель',
};
const ADS_NUMBERS = 10;
createManyAds(ADS_NUMBERS);

const offerContainer = document.querySelector('#map-canvas');
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
  const newOffersFragment = document.createDocumentFragment();

  newOffers.forEach(({author, offer}) =>{
    const offerElement = offerTemplate.cloneNode(true);

    //Обязательные данные
    offerElement.querySelector('.popup__avatar').src = author.avatar;
    offerElement.querySelector('.popup__title').textContent = offer.title;
    offerElement.querySelector('.popup__text--address').textContent = offer.address;
    offerElement.querySelector('.popup__text--price').textContent = `${offer.price} ₽/ночь`;

    //Необязательные данные + проверка
    if (offer.type) {
      offerElement.querySelector('.popup__type').textContent = TYPES_IN_RUS [offer.type];
    } else {
      removeUnnecessary('.popup__type', offerElement);
    }

    if (offer.rooms) {
      offerElement.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;
    } else {
      removeUnnecessary('.popup__text--capacity', offerElement);
    }

    if (offer.checkin) {
      offerElement.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout} гостей`;
    } else {
      removeUnnecessary('.popup__text--time', offerElement);
    }

    getFeatures(offer.features, offerElement);

    if (offer.description) {
      offerElement.querySelector('.popup__description').textContent = offer.description;
    } else {
      removeUnnecessary('.popup__description', offerElement);
    }

    getPhotos(offer.photos, offerElement);

    newOffersFragment.appendChild(offerElement);
  });
  offerContainer.appendChild(newOffersFragment);
};

export {renderNewOffer};
