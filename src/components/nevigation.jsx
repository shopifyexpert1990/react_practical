import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from '../pages/Home';
import About from '../pages/About';
import Services from '../pages/Services';
import Portfolio from '../pages/Portfolio';
import Contact from '../pages/Contact';

export default function nevigation() {
    return (
        <Router>
            <nav className="navbar">
                <div className="navbar__logo"><img src="./src/assets/logo_header.png" alt="" /></div>
                <Link className="navbar__link" to="/">Home</Link>
                <Link className="navbar__link" to="/about">About</Link>
                <Link className="navbar__link" to="/Services">Services</Link>
                <Link className="navbar__link" to="/Portfolio">Portfolio</Link>
                <Link className="navbar__link" to="/contact">Contact</Link>
            </nav>
            <div className="main">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>
        </Router>
    )
}
