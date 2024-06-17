import React, { useState, useEffect } from 'react';
import Slideshow from './slideshow'; // Assuming you have a component for slideshow
import logementsData from '../data/housing.json'; // Import your logements data
import { useParams, useNavigate } from 'react-router-dom';
import ErrorPage from './error';

const LogementsPage = () => {
  const { id } = useParams(); // Get the id parameter from the URL
  const navigate = useNavigate(); // Initialize navigate function
  const [logement, setLogement] = useState(null);

  useEffect(() => {
    const selectedLogement = logementsData.find(logement => logement.id === id);
    if (!selectedLogement) {
      // If logement data is not found, navigate to the custom 404 page
      navigate('/404');
    } else {
      setLogement(selectedLogement);
    }
  }, [id, navigate]);

  
  if (!logement) {
    return <ErrorPage />;
  }


  const { pictures } = logement;

  return (
    <div>
      { <Slideshow images={pictures} />}
      
      
    </div>
  );
};
export default LogementsPage;