import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from './pages/About';
import Error from './pages/Error';
import Home from './pages/Home';
import Housing from './pages/Housing';
import "./css/global.css"

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/logement/:id" element={<Housing />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App