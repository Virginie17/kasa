import React from "react";
import { Banner1 } from '../components/banner';
import HousingMenu from '../components/housingmenu';

//creation de la page home qui contient les composants banner et housingmenu//
const Home = () => {
    return (
        <>
                <Banner1 />
                <HousingMenu />
        </>
    );
};

export default Home;
