import React from 'react'
import FeatureCard from './FeatureCard'
import './FeaturesGrid.css'

function FeaturesGrid({ data }) {
    // const { data } = props;

  return (
    <section className="features-grid">

      {data.map((item, index) => (
        <FeatureCard
          key={index}
          icon={item.icon}
          title={item.title}
          desc={item.desc}
        />
      ))}
    </section>
  )
}

export default FeaturesGrid
