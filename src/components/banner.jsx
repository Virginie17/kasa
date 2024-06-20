// Importer React et les ressources nécessaires
import React from 'react';
import PropTypes from 'prop-types'; // Pour la validation des props
import './../css/banner.css'; 

// Définir le composant Banner avec 3 props (image, altText, text)
const Banner = ({ image, altText, text }) => (
  <div className={`banner `}>
    <img src={image} alt={altText} className="banner-image" />
    {text && <div className="banner-text">{text}</div>}
  </div>
);

// Valider les types des props
Banner.propTypes = {
  image: PropTypes.string.isRequired,//image est requis
  altText: PropTypes.string.isRequired,//altText est requis
  text: PropTypes.string,//text est optionnel
};

// Définir une valeur par defaut pour text si elle n est pas fournie
Banner.defaultProps = {
  text: '',
};

// Exporter le composant
export default Banner;