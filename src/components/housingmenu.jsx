import React from 'react'
import './../css/housingmenu.css'; 
import Housingcard from './housingcard'; // Import le composant housingcard
import HousingData from './../data/housing.json'; // Import le fichier json des logements

// Creation du composant LogementsMenu qui contient le composant LogementsCard
const LogementsMenu = () => {
  return (
    <div className="logements-menu">
      <div className="grid-container">
        {/* Parcours le tableau de logements et affiche le composant housingCard pour chaque logement avec les valeurs correspondantes */}
        {HousingData.map((logement) => (
          <Housingcard
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