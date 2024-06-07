import React from "react";
import Header from '../components/header';
import Footer from '../components/footer';
import { Banner1 } from '../components/banner';
import Layout from '../components/layout';
import HousingMenu from '../components/housingmenu';

const Home = () => {
    return (
        <>
            <Layout>
                <Header />
                <Banner1 />
                <HousingMenu />
            </Layout>
            <Footer />
        </>
    );
};

export default Home;