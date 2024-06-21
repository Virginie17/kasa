import React, { useState } from 'react';//utilisation du hook usestate qui gere l etat des composants
import './../css/collapse.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';//importation de l icone provenant de fontawesome
import propTypes from 'prop-types';

//creation du composant collapse qui prend comme props title et content
const Collapse = ({ title, content, }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);//etat de la section si true ou false
  
 
  //fonction qui permet de changer l etat si c est un tableau (ul) ou paragraphe(p)
  const renderContent = () => {
    if (Array.isArray(content)) {
      return <ul>{content.map((item, index) => <li key={index}>{item}</li>)}</ul>;
    }
    return <p>{content}</p>;
  };

  //eventlistener onclick qui permet de basculer suivant l etat de iscollapsed
  return (
    <div className="collapse">
      <div className="collapse-header" onClick={() => setIsCollapsed(!isCollapsed)}>
        <div className="collapse-title">{title}</div>
        <div className={`collapse-icon ${isCollapsed ? 'closed' : 'open'}`}>
          <FontAwesomeIcon icon={faAngleUp} />
        </div>
      </div>
      {!isCollapsed && <div className="collapse-content">{renderContent()}</div>}
    </div>
  );
};
//validation des props
Collapse.propTypes = {
  title: propTypes.string.isRequired,
  content: propTypes.oneOfType([propTypes.string, propTypes.array]),
};

export default Collapse;