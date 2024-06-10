import React from "react";
import { Banner2 } from "../components/banner";
import About from "../components/about";
import Layout from "../components/layout";
import "../css/about.css";



const Aboutpage = () => {
    return (
        <>
            <Layout>
                <Banner2 />
                <About />
                </Layout>
                </>
    );
};

export default Aboutpage;
