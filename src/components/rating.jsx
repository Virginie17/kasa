import React from 'react';
import star_active from './../images/star_active.png';
import star_inactive from './../images/star_inactive.png';


//composant rating qui recoit une prop rating qui indique le nombre d etoiles actives a afficher
const Rating = ({ rating }) => {
    const renderStars = () => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            if (i < rating) {
                stars.push(<img key={i} src={star_active} alt="star" />);
            } else {
                stars.push(<img key={i} src={star_inactive} alt="star" />);
            }
        }
        return stars;
    };
    return <div className="rating">{renderStars()}</div>;
};
export default Rating;