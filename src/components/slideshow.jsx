import React, { useState, useEffect } from 'react';
import './../css/slideshow.css';
import arrowLeft from './../images/arrow_left.png';
import arrowRight from './../images/arrow_right.png';

const Slideshow = ({ images }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
                changeSlide(event.key === 'ArrowLeft' ? -1 : 1);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    },);

    const changeSlide = (direction) => {
        setCurrentSlide(prevSlide => {
            const newIndex = prevSlide + direction;
            if (newIndex < 0) return images.length - 1;
            if (newIndex >= images.length) return 0;
            return newIndex;
        });
    };

    return (
        <div className="slideshow">
            <div className="slide-container">
                {images.length > 1 && (
                    <>
                        <div onClick={() => changeSlide(-1)} className="prev">
                            <img src={arrowLeft} alt="fleche de gauche" />
                        </div>
                        <div onClick={() => changeSlide(1)} className="next">
                            <img src={arrowRight} alt="fleche de droite" />
                        </div>
                    </>
                )}
                <img src={images[currentSlide]} alt={`Slide ${currentSlide}`} className="slide-image" />
                <div className="slide-counter">{currentSlide + 1}/{images.length}</div>
            </div>
        </div>
    );
};

export default Slideshow;