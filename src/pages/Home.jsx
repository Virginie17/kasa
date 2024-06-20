import React from "react";
import Banner from '../components/banner'; 
import HousingMenu from '../components/housingmenu';
import bannerImage1 from './../images/banner1-small.png';

//creation du composant home qui contient le composant banner(banner page home) et le composant housingmenu(logements)
const Home = () => {
    return (
        <>
            <Banner image={bannerImage1} altText="Banner1" text="Chez vous, partout et ailleurs" />
            <HousingMenu />
        </>
    );
};

//export le composant home pour etre utiliser dans d autres parties de l application
export default Home; 