import React from 'react'
import './HeroSection.css'


function HeroSection(props) {

    const { title, subtitle, image } = props;

    return (<div className="hero-container">
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <img src={image} alt={title} />
    </div>);
}
export default HeroSection