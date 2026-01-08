import React from 'react'
import './Footer.css'

function Footer(props) {

    const {  year, socialLinks } = props;
    
  return (
        <footer>
            <p>© {year} My Landing Super Page. All rights reserved.</p>
            <div className="social-links">
                {socialLinks.map((link, index) => (
                    <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
                        {link.name}
                    </a>
                ))}
            </div>
        </footer>
  )
}

export default Footer