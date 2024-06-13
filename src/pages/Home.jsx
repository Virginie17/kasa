import React from "react";
import Banner from '../components/banner'; 
import HousingMenu from '../components/housingmenu';
import bannerImage1 from './../images/banner1-small.png';

const Home = () => {
    return (
        <>
            <Banner image={bannerImage1} altText="Banner1" text="Chez vous, partout et ailleurs" />
            <HousingMenu />
        </>
    );
};

export default Home;   
