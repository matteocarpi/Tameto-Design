import React from 'react';
import {
  Link
} from 'react-router-dom';

function Header() {
  return (
    <div className="header" >
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </div>
  )
}

export default Header;