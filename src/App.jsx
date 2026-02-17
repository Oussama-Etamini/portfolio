import React, { useEffect } from 'react';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import Services from './components/services/Services';
import MyWork from './components/mywork/MyWork';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import WorkDetail from './components/workdetail/WorkDetail';

// add theme styles
import './styles/theme.css';

function Home() {
    const location = useLocation();

    useEffect(() => {
        if (location.hash === '#mywork') {
            const el = document.getElementById('mywork');
            if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
                return;
            }
        }
        // default: scroll to top on route change
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [location]);

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
                <Route path="/mywork" element={<MyWork />} />
            </Routes>
        </Router>
    );
}

export default App;