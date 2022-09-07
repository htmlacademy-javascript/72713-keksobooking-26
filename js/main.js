import {createManyAds} from './data.js';
import {renderNewOffer} from './offers.js';
import {addDisabled} from './form.js';

const ADS_NUMBERS = 1;
renderNewOffer(createManyAds(ADS_NUMBERS));

addDisabled(false);
