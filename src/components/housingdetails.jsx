import React from 'react';
import "./../css/housingdetails.css"
import Collapse from './collapse';
import Rating from './rating';
import Tags from './tags';
import  '../data/housing.json';
import propTypes from 'prop-types';

//composant housingdetails qui recoit une prop housing qui contient les informations du logement
const HousingDetails = ({ housing }) => {
  const { title, description, host, rating, location, equipements, tags } = housing;

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
                        <img src={host.picture} alt="Host"className='host-picture' />
                    </div>
                    <div className="housing-rating">
                        <Rating rating={rating} />
                    </div>
                </div>
      </div>
      <div className="housing-collapses">
        <Collapse title="Description" content={description} />
        <Collapse title="Equipements" content={equipements} />
      </div>
    </div>
  );
};

//validation des props
HousingDetails.propTypes = {
  housing: propTypes.shape({
    title: propTypes.string.isRequired,
    description: propTypes.string.isRequired,
    host: propTypes.shape({
      name: propTypes.string.isRequired
    }),
    rating: propTypes.number.isRequired,
    location: propTypes.string.isRequired,
    equipements: propTypes.array.isRequired,
    tags: propTypes.array.isRequired
  })
}

export default HousingDetails;