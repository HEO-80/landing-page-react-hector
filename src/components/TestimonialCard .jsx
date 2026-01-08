import React from 'react'
import './TestimonialCard.css'

function TestimonialCard ({avatar, name, rating, comment}) {

  return (
    <div className="testimonial-card">
      <img src={avatar} alt={name} />
      <h3>{name}</h3>
      <p>{rating}</p>
      <p>{comment}</p>
    </div>
  )
}

export default TestimonialCard 