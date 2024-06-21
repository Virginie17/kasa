import React, { useState, useEffect } from 'react';
import './../css/slideshow.css';
import arrowLeft from './../images/arrow_left.png';
import arrowRight from './../images/arrow_right.png';
import propTypes from 'prop-types';

//composant Slideshow qui recoit une prop images qui est un tableau conteant les chemins vers les images a afficher
const Slideshow = ({ images }) => {
    const [currentSlide, setCurrentSlide] = useState(0);//maintient l indice de l image actuellement affiche

    //fonction qui permet d avancer vers l image suivante
    const nextSlide = () => {
        setCurrentSlide((currentSlide + 1) % images.length);
    };
//fonction qui permet de reculer vers l image precedente
    const prevSlide = () => {
        setCurrentSlide((currentSlide - 1 + images.length) % images.length);//met a jour currentslide en focntion du nombre total d images
    };

    //use effect qui permet d ecouter les evenements clavier pour changer d image
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'ArrowLeft') {
                prevSlide();
            } else if (event.key === 'ArrowRight') {
                nextSlide();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    },); 
    return (
        <div className="slideshow">
            <div className="slide-container">
                {images.length > 1 && (
                    <>
                        <div onClick={prevSlide} className="prev" >
                            <img src={arrowLeft} alt="fleche de gauche" />
                        </div>
                        <div onClick={nextSlide} className="next">
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
//validation des props
Slideshow.propTypes = {
    images: propTypes.array.isRequired
};

export default Slideshow;