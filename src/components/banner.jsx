// Importer React et les ressources nécessaires
import React from 'react';
import PropTypes from 'prop-types'; // Pour la validation des props
import './../css/banner.css'; 

// Définir le composant Banner
const Banner = ({ image, altText, text }) => (
  <div className={`banner `}>
    <img src={image} alt={altText} className="banner-image" />
    {text && <div className="banner-text">{text}</div>}
  </div>
);

// Valider les types des props
Banner.propTypes = {
  image: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  text: PropTypes.string,
};

// Définir les props par défaut
Banner.defaultProps = {
  text: '',
};

// Exporter le composant
export default Banner;