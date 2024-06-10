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
        {/*utilisation du composant header dans toute les pages de l application*/}
            <Header />
            <Routes>
                {/*utilisation du composant home pour afficher tous les elemets de la page home*/}
                <Route path="/" element={<Home />} />
                 {/*utilisation du composant housing pour afficher tous les elemets de la page housing*/}
                <Route path="/logement/:id" element={<Housing />} />
                 {/*utilisation du composant about pour afficher tous les elemets de la page about*/}
                <Route path="/about" element={<About />} />
                 {/*utilisation du composant error pour afficher tous les elemets de la page error*/}
                <Route path="*" element={<Error />} />
            </Routes>
             {/*utilisation du composant footer dans toute les pages de l application*/}
            <Footer />
        </BrowserRouter>
    );
}

export default App