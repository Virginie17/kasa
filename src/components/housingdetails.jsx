import React from 'react';
import "./../css/housingdetails.css"
import Collapse from './collapse';
import Rating from './rating';
import Tags from './tags';
import HostImage from './../images/Host.png';//image de l hote

//composant housingdetails qui recoit une prop housing qui contient les informations du logement
const HousingDetails = ({ housing }) => {
  const { title, description, host, rating, location, equipments, tags } = housing;

  return (
    <div className="housing-details-container">
      <div className="housing-details">
        <div className="housing-infos"> 
          <h2 className="housing-title">{title}</h2>
          <p className="housing-location">{location}</p>
          <Tags tags={tags} />
        </div>
        <div className="housing-host-and-rating">
                    <div className="housing-host">
                        <p>{host.name}</p>
                        <img src={HostImage} alt="Host" />
                    </div>
                    <div className="housing-rating">
                        <Rating rating={rating} />
                    </div>
                </div>
      </div>
      <div className="housing-collapses">
        <Collapse title="Description" content={description} />
        <Collapse title="Equipments" content={equipments} />
      </div>
    </div>
  );
};

export default HousingDetails;