import React, { useState } from 'react';
import './../css/collapse.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';

const Collapse = ({ title, content, }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const renderContent = () => {
    if (Array.isArray(content)) {
      return <ul>{content.map((item, index) => <li key={index}>{item}</li>)}</ul>;
    }
    return <p>{content}</p>;
  };

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

export default Collapse;