import React from 'react';

const PromoHeading = ({ heading, callToAction }) => {
  return (
    <div>
      <h1>{heading}</h1>
      <h2>{callToAction}</h2>
    </div>
  );
};

export default PromoHeading;
