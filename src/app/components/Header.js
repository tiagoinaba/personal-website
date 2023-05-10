"use client"

import { Montserrat } from "next/font/google";
import '../sass/_header.scss'
import { useState } from "react";

const montserrat = Montserrat({ subsets: ['latin']})

export default function Header() {
    const [navOpen, setNavOpen] = useState(false)

    function toggleNav() {
        setNavOpen(prev => !prev)
    }

    function turnNavOff() {
        setNavOpen(false)
    }

    return (
        <header className={`header ${montserrat.className}`}>
            <h1 className="header__first-name">TIAGO<span className="header__last-name">INABA</span></h1>
            <div className="btn" onClick={toggleNav} ><button className={`mobile-nav-toggle ${navOpen && "close-btn"}`}></button></div>
            <nav className={`nav ${navOpen ? "showNav" : ""}`}>
                <a href="#about" className="nav__link" onClick={turnNavOff}>ABOUT</a>
                <a href="#projects" className="nav__link" onClick={turnNavOff}>PROJECTS</a>
                <a href="#contact" className="nav__link" onClick={turnNavOff}>CONTACT</a>
            </nav>
        </header>
    )
}