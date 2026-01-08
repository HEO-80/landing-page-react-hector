import React from 'react'
import TestimonialCard from './TestimonialCard .jsx'
import './TestimonialsSection.css'

function TestimonialsSection({ dataTestimonials }) {
  return (
    <div className="testimonials-section">
      <h2>Testimonials</h2>
      <div className="testimonials-container">
        {dataTestimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            avatar={testimonial.avatar}
            name={testimonial.name}
            rating={testimonial.rating}
            comment={testimonial.comment}
          />
        ))}
      </div>
    </div>
  )
}


export default TestimonialsSection