import React from 'react';

import './Header.css';

export default function Header({ title, logo }) {
  return (
    <header>
      <nav>
        <a href="http://google.com">
          <img src={logo} alt="" />
        </a>

        <ul className="links">
          <li><a href="http://">About</a></li>
          <li><a href="http://">Projects</a></li>
          <li><a href="http://">Contact</a></li>
          <li><a href="http://">Login</a></li>
        </ul>
      </nav>
    </header>
  );
}

