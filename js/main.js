//import {renderNewOffer} from './offers.js';
import {addDisabled, setOfferformSubmit, resetForm} from './form.js';
import {initMap} from './map.js';
import {getData} from './api.js';
import {showAlert} from './util.js';
//renderNewOffer(createManyAds(ADS_NUMBERS));


addDisabled(false);
getData((newOffers) => {
  initMap(newOffers);
},
() => {
  showAlert('Ошибка. Обновите страницу');
});

setOfferformSubmit (resetForm);
