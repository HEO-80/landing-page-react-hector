import React from 'react'

function PricingCard({ plan, price, isRecommended }) {
  return (
    <div className={`pricing-card ${isRecommended ? "recommended" : ""}`}>
      <h3>{plan}</h3>
      <p>{price}</p>
      {isRecommended && <span>Recommended</span>}
    </div>
  );
}


export default PricingCard 