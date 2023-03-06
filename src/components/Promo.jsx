import React from 'react';
import PromoHeading from './PromoHeading';

const Promo = () => {
  const promoDetails = {
    heading: '99% off all items!',
    callToAction: 'Everything must go!',
  };
  return (
    <div>
      <PromoHeading
        heading={promoDetails.heading}
        callToAction={promoDetails.callToAction}
      />
    </div>
  );
};

export default Promo;
