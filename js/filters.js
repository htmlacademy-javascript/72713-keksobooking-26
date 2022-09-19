import {setOffersMarker} from './map.js';
import { debounce } from './util.js';

const filterForm = document.querySelector('.map__filters');
const housingType = filterForm.querySelector('#housing-type');
const housingPrice = filterForm.querySelector('#housing-price');
const housingRooms = filterForm.querySelector('#housing-rooms');
const housingGuests = filterForm.querySelector('#housing-guests');
const housingFeatures = Array.from(filterForm.querySelectorAll('map__checkbox'));

const FILTER_PRICES = {
  middle: 10000,
  high: 50000,
};

const ADS_NUMBERS = 10;

let offers = [];

const activateFilter = (data) => {
  offers = data;
  filterForm.classList.remove('.map__filters--disabled');
  [...filterForm.children].forEach((element) => {
    element.disabled = false;
  });
};

const typeFilter = (offer) => housingType.value === offer.offer.type || housingType.value === 'any';

const priceFilter = (offer, price) => {
  switch (price) {
    case 'any':
      return true;
    case 'low':
      return offer.offer.price < FILTER_PRICES.middle;
    case 'middle':
      return (offer.offer.price < FILTER_PRICES.high && offer.offer.price >= FILTER_PRICES.middle);
    case 'high':
      return offer.offer.price >= FILTER_PRICES.high;
  }
};

const roomFilter = (offer) => Number(housingRooms.value) === offer.offer.rooms || housingRooms.value === 'any';

const guestFilter = (offer) => Number(housingGuests.value) === offer.offer.guests || housingGuests.value === 'any';

const featuresFilter = (offer) => {
  if (housingFeatures.length && offer) {
    return housingFeatures.every((element) => offer.includes(element.value));
  }
  return housingFeatures.length === 0;
};

const offersFilter = () => {
  const filteredOffers = [];
  for (const offer of offers) {
    if (
      typeFilter(offer) &&
      priceFilter(offer, housingPrice.value) &&
      roomFilter(offer) &&
      guestFilter(offer) &&
      featuresFilter(offer)) {
      filteredOffers.push(offer);
    }
    if (filteredOffers.length >= ADS_NUMBERS) {
      break;
    }
  }
  return filteredOffers;
};

const resetFilters = () => {
  filterForm.reset();
  setOffersMarker(offers.slice(0, ADS_NUMBERS));
};

const setOnFilterChange = () => filterForm.addEventListener('change', () => debounce(setOffersMarker(offersFilter())));

export {resetFilters, setOnFilterChange, activateFilter};
