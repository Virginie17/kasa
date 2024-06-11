import React from 'react'
import './../css/housingmenu.css'; 
import LogementsCard from './housingcard'; // Import le composant housingcard
import logementsData from './../data/logements.json'; // Import le fichier json des logements

// Creation du composant LogementsMenu qui contient le composant LogementsCard
const LogementsMenu = () => {
  return (
    <div className="logements-menu">
      <div className="grid-container">
        {/* Parcours le tableau de logements et affiche le composant LogementsCard pour chaque logement avec les valeurs correspondantes */}
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