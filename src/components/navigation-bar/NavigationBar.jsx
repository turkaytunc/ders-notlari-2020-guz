import './navigation-bar.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import siteart from '../../site-icon.png';

export const NavigationBar = () => {
  return (
    <nav className="navigation-bar-container">
      <div className="site-art">
        <img src={siteart} alt="siteart" />
      </div>
      <ul className="navigation-menu">
        <li className="navigation-menu-item"></li>
      </ul>
    </nav>
  );
};
