import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './pages/About';
import Error from './pages/Error';
import Home from './pages/Home';
import Housing from './pages/Housing';
import Header from './components/header';
import Footer from './components/footer';
import "./css/global.css"


//configuration du routage de l application avec declaration de la fonction qui cree le composant APP
function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/housing/:id" element={<Housing />} />
                <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App