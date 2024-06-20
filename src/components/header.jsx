import React from 'react';
import { Link, useLocation } from 'react-router-dom'; //importation des composants link et uselocation de react-router-dom
import './../css/header.css';
import logo from "./../images/logo-kasa.png";

//creation du composant header qui contient une barre de navigation dynamique ou le lien est actif et utilisation du hook uselocation pour obtenir l objet location
const Header = () => {
  const location = useLocation();//utilisation du hook uselocation pour obtenir l url actuelle 
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Kasa Logo" />
      </div>
      <nav className="nav">
        <ul>
          <li>
            <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Accueil</Link> 
          </li>
          <li>
            <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>A Propos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;