import React from 'react'
import './PricingSection.css'
import PricingCard from './PricingCard '

function PricingSection({ dataPricing }) {

    return (
        <div className="pricing-section">
            <h2>Pricing Plans</h2>
            <div className="pricing-cards-container"> {dataPricing.map((item, index) => (
                <PricingCard key={index}
                    plan={item.plan} price={item.price}
                    isRecommended={item.isRecommended} />
            ))}
            </div>
        </div>
    )
}

export default PricingSection