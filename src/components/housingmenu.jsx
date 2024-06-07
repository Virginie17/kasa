import React from 'react'


import './../css/housingmenu.css'; 
import LogementsCard from './housingcard'; // Import the LogementsCard component
import logementsData from './../data/logements.json'; // Import the logements data

const LogementsMenu = () => {
  return (
    <div className="logements-menu">
      <div className="grid-container">
        {logementsData.map((logement) => (
          <LogementsCard
            key={logement.id}
            id={logement.id}
            title={logement.title}
            cover={logement.cover}
          />
        ))}
      </div>
    </div>
  );
}

export default LogementsMenu;