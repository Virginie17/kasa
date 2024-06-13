import React from "react";
import Banner from "../components/banner";
import About from "../components/about";
import bannerImage2 from './../images/banner2-small.png';

const Aboutpage = () => {
    return (
        <>
            <Banner image={bannerImage2} altText="Banner2" />
            <About />
        </>
    );
};

export default Aboutpage;
