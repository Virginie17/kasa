import React, { useState, useEffect } from 'react';//importation du hook usestate et useEffect
import Slideshow from './slideshow'; 
import HousingData from '../data/housing.json';
import { useParams, useNavigate } from 'react-router-dom';//importation du hook useParams et useNavigate de react-router-dom
import ErrorPage from './error';
import Housingdetails from './housingdetails';


const HousingPage = () => {
  const { id } = useParams(); //recupere l'id du logement
  const navigate = useNavigate(); //permet de naviguer vers d'autres routes
  const [Housing, setHousing] = useState(null);//gere l etat du logement
  

  useEffect(() => {//excute un effet si changement de id et navigate
    const selectedLogement = HousingData.find(logement => logement.id === id);
    if (!selectedLogement) {
     
      navigate('/404');//redirection vers la page 404 si id inexistant
    } else {
      setHousing(selectedLogement);
    }
  }, [id, navigate]);

  
  if (!Housing) {//verifie si Housing est null alors return ErrorPage
    return <ErrorPage />;
  }


  const { pictures } = Housing;
//si id est correct alors utisation du composant slideshow et housingdetails
  return (
    <div>
       <Slideshow images={pictures} />
      <Housingdetails housing={Housing} />
    </div>
  );
};
export default HousingPage;