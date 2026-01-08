import React from 'react'
import './Navbar.css'

function Navbar(props) {

    const { title, links } = props;
  return (
    <nav className="navbar">
      <h1>{title}</h1>
      <ul>
        <li>
            <a href="/">Home</a>
        </li>
         <li>
            <a href={`/${links[1].url}`}>{links[1].name}</a>
        </li>
         <li>
            <a href={`/${links[2].url}`}>{links[2].name}</a>
        </li>
         <li>
            <a href={`/${links[3].url}`}>{links[3].name}</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar