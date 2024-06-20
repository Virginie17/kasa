import React from 'react';
import './../css/tags.css'


const Tags = ({ tags }) => {
    return (
        <ul className="housing-tags-list">
            {tags.map((tag, index) => (//map permet d iterer sur chaque element et retourner a une liste
                <li key={index} className="housing-tags">{tag}</li>
            ))}
        </ul>
    );
};

export default Tags;