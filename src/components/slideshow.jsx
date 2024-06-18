import React, { useState, useEffect, useCallback } from 'react';
import './../css/slideshow.css';
import arrowLeft from './../images/arrow_left.png';
import arrowRight from './../images/arrow_right.png';


const Slideshow = ({ images }) => {
    const changeSlide = useCallback(direction => {
        setCurrentSlide((prevSlide) => (prevSlide + direction + images.length) % images.length);
    }, [images.length]); // images.length est une dépendance de changeSlide

    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const handleKeyDown = event => {
            if (['ArrowLeft', 'ArrowRight'].includes(event.key)) {
                changeSlide(event.key === 'ArrowLeft' ? -1 : 1);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [changeSlide]);

    
    const renderNavigationButton = (direction, imageSrc, altText) => (
        <div onClick={() => changeSlide(direction)} className={direction === -1 ? "prev" : "next"}>
            <img src={imageSrc} alt={altText} />
        </div>
    );

    return (
        <div className="slideshow">
            <div className="slide-container">
                {images.length > 1 && (
                    <>
                        {renderNavigationButton(-1, arrowLeft, "fleche de gauche")}
                        {renderNavigationButton(1, arrowRight, "fleche de droite")}
                    </>
                )}
                <img src={images[currentSlide]} alt={`Slide ${currentSlide}`} className="slide-image" />
                <div className="slide-counter">{currentSlide + 1}/{images.length}</div>
            </div>
        </div>
    );
};

export default Slideshow;