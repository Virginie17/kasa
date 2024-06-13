import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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
                <Route path="/logement/:id" element={<Housing />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App