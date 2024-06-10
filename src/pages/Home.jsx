import React from "react";
import { Banner1 } from '../components/banner';
import Layout from '../components/layout';
import HousingMenu from '../components/housingmenu';

const Home = () => {
    return (
        <>
            <Layout>
                <Banner1 />
                <HousingMenu />
            </Layout>
        </>
    );
};

export default Home;