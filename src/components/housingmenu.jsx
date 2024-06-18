import React from 'react'
import './../css/housingmenu.css'; 
import Housingcard from './housingcard'; // Import le composant housingcard
import HousingData from './../data/housing.json'; // Import le fichier json des logements

// Creation du composant LogementsMenu qui contient le composant LogementsCard
const housingMenu = () => {
  return (
    <div className="housing-menu">
      <div className="grid-container">
        {/* Parcours le tableau de logements et affiche le composant housingCard pour chaque logement avec les valeurs correspondantes */}
        {HousingData.map((housing) => (
          <Housingcard
            key={housing.id}
            id={housing.id}
            title={housing.title}
            cover={housing.cover}
          />
        ))}
      </div>
    </div>
  );
}

export default housingMenu;