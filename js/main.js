import {createManyAds} from './data.js';
import {renderNewOffer} from './offers.js';

const ADS_NUMBERS = 1;
renderNewOffer(createManyAds(ADS_NUMBERS));
