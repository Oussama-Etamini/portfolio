import React from 'react';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import Services from './components/services/Services';
import MyWork from './components/mywork/MyWork';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WorkDetail from './components/workdetail/WorkDetail';

// add theme styles
import './styles/theme.css';

function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <About />
            <Services />
            <MyWork />
            <Contact />
            <Footer />
        </>
    );
}

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/work/:slug" element={<WorkDetail />} />
            </Routes>
        </Router>
    );
}

export default App;