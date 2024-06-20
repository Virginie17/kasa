import React from "react";
import Banner from "../components/banner";
import About from "../components/about";
import bannerImage2 from './../images/banner2-small.png';

//creation du composant aboutpage qui contient le composant banner(banner page about) et le composant about(about et collapse)
const Aboutpage = () => {
    return (
        <>
            <Banner image={bannerImage2} altText="Banner2" />
            <About />
        </>
    );
};

export default Aboutpage;
