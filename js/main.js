//import {renderNewOffer} from './offers.js';
import {addDisabled, setOfferformSubmit, resetForm} from './form.js';
import {initMap} from './map.js';
import {getData} from './api.js';
import {showAlert} from './util.js';
import {setOnFilterChange, activateFilter} from './filters.js';
//renderNewOffer(createManyAds(ADS_NUMBERS));


addDisabled(false);
getData((newOffers) => {
  initMap(newOffers);
  activateFilter(newOffers);
  setOnFilterChange();
},
() => {
  showAlert('Ошибка. Обновите страницу');
});

setOfferformSubmit (resetForm);
