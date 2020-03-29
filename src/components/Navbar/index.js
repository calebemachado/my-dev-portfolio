import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { FaBars, FaTimes } from 'react-icons/fa';
import './styles.css';

export default function Navbar() {
  const [navActive, setNavActive] = useState('');
  const [links] = useState([
    {name: 'Home', ref: '#home'},
    {name: 'About', ref: '#about'},
    {name: 'Projects', ref: '#projects'}
  ]);

  function toggleNavActive() {
    if (navActive.length > 0) {
      setNavActive('');
    } else {
      setNavActive('nav-active');
    }
  }

  return (
    <nav>
      <div className="logo">
        <h4>Calebe M.</h4>
      </div>

      <ul className={`nav-links ${navActive}`}>
        {
          links.map(link => (
            <li key={link.name}><a href={`${link.ref}`}>{link.name}</a></li>
          ))
        }
        <li><Link to="/login">Sign in</Link></li>
      </ul>

      <div className="burger" onClick={toggleNavActive}>
        {
          navActive.length > 0
            ? <FaTimes size={24} color={`f0f0f5`}/>
            : <FaBars size={24} color={`f0f0f5`}/>
        }
      </div>
    </nav>
  )
}