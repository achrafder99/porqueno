import React from 'react';
import ReactDOM from 'react-dom/client';
import './app.css';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Menu from "./Componenets/Menu"
import Navbar from './Componenets/Navbar';
import Hero from './Componenets/Hero';
import Footer from './Componenets/Footer';
import SmallNav from './Componenets/SmallNav';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>

        <Router>
            <Navbar />
            <Hero />
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/menu" element={<Menu />} />
            </Routes>
        </Router>
        <Footer />

    </>

);