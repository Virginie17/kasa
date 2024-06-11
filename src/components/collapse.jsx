import React, { useState } from 'react';
import './../css/collapse.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';//import de fontawesome
import { faAngleUp,} from '@fortawesome/free-solid-svg-icons';//import de l icone angleup de fontawesome

//creation de la constante collapse en utilisant les props title et content
const Collapse = ({ title, content }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);//initialisation de l etat de la constante isCollapsed a true

  //creation de la fonction toggleCollapse qui permet d inverser l etat de isCollapsed
  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  //creation de la fonction renderContent qui permet d afficher un titre cliquable et de gerer le contenu en fonction de l etat de isCollapsed
    const renderContent = () => {
      if (Array.isArray(content)) {
        return (
          <ul>
            {content.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        );
      } else {
        return <p>{content}</p>;
      }
    };
  return (
    <div className="collapse">
      <div className="collapse-header" onClick={toggleCollapse}>
        <div className="collapse-title">{title}</div>
        <div className={`collapse-icon ${isCollapsed ? 'closed' : 'open'}`}>
          <FontAwesomeIcon icon={faAngleUp} /> 
        </div>
      </div>
      {!isCollapsed && <div className="collapse-content">{renderContent()}</div>}
    </div>
  );
};


export default Collapse;