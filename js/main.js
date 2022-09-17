import {createManyAds} from './data.js';
//import {renderNewOffer} from './offers.js';
//import {addDisabled} from './form.js';
import {initMap} from './map.js';

const ADS_NUMBERS = 10;
//renderNewOffer(createManyAds(ADS_NUMBERS));

//addDisabled(true);
const boo = createManyAds(ADS_NUMBERS);
initMap(boo);
