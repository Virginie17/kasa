import React from 'react';
import './../css/tags.css'
import propTypes from 'prop-types';

const Tags = ({ tags }) => {
    return (
        <ul className="housing-tags-list">
            {tags.map((tag, index) => (//map permet d iterer sur chaque element et retourner a une liste
                <li key={index} className="housing-tags">{tag}</li>
            ))}
        </ul>
    );
};
//validation des props
Tags.propTypes = {
    tags: propTypes.array.isRequired
};

export default Tags;