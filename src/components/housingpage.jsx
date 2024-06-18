import React, { useState, useEffect } from 'react';
import Slideshow from './slideshow'; 
import HousingData from '../data/housing.json';
import { useParams, useNavigate } from 'react-router-dom';
import ErrorPage from './error';
import Housingdetails from './housingdetails';


const HousingPage = () => {
  const { id } = useParams(); 
  const navigate = useNavigate(); 
  const [Housing, setHousing] = useState(null);
  

  useEffect(() => {
    const selectedLogement = HousingData.find(logement => logement.id === id);
    if (!selectedLogement) {
     
      navigate('/404');
    } else {
      setHousing(selectedLogement);
    }
  }, [id, navigate]);

  
  if (!Housing) {
    return <ErrorPage />;
  }


  const { pictures } = Housing;

  return (
    <div>
       <Slideshow images={pictures} />
      <Housingdetails housing={Housing} />
    </div>
  );
};
export default HousingPage;