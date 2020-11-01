import './navigation-bar.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import siteart from '../../site-icon.png';

export const NavigationBar = () => {
  return (
    <nav className="navbar-container">
      <div className="site-art">
        <img src={siteart} alt="siteart" />
      </div>
      <ul className="navbar-menu">
        <li className="navbar-menu-item">
          <Link className="navbar-link" to="/">
            Ana Sayfa
          </Link>
        </li>
        <li className="navbar-menu-item">
          <Link className="navbar-link" to="/formel-diller">
            Formel Diller
          </Link>
        </li>
        <li className="navbar-menu-item">
          <Link className="navbar-link" to="/mobil-uygulama">
            Mobil Uygulama
          </Link>
        </li>
      </ul>
    </nav>
  );
};
