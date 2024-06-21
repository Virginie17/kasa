import './../css/housingcard.css'; 
import React from 'react';
import { useNavigate } from 'react-router-dom';//importe le hook usenavigate qui permet de naviguer vers une autre page
import propTypes from 'prop-types';

//creation du composant HousingCard qui prend en parametre  d entree 3 props l'id, le titre et la photo du logement
const HousingCard = ({ id, title, cover }) => {
  const navigate = useNavigate();//permet de naviguer vers d autres routes

  //fonction qui permet de declencher vers une  page detailler du logement en cliquant sur le logement
;

  return (
    <div className="housing-card" data-id={id} onClick={() => {
      navigate(`/housing/${id}`);
    }}>
      <div className="card-cover">
        <img src={cover} alt={title} />
        <div className="card-content">
          {title}
        </div>
      </div>
    </div>
  );
};
//validation des props
HousingCard.propTypes = {
  id: propTypes.number.isRequired,
  title: propTypes.string.isRequired,
  cover: propTypes.string.isRequired
};

export default HousingCard;