"use client"

import { Montserrat } from "next/font/google";
import '../sass/_header.scss'
import { useState } from "react";
import { LanguageContextConsumer } from "../context/langContext";
import { HiTranslate } from 'react-icons/hi'

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
            <LanguageContextConsumer>
                {
                    ({language, setLanguage}) => {
                        return (
                            <header className={`header ${montserrat.className}`}>
                                <h1 className="header__first-name">TIAGO<span className="header__last-name">INABA</span></h1>
                                <div className="btn" onClick={toggleNav} ><button className={`mobile-nav-toggle ${navOpen && "close-btn"}`}></button></div>
                                <nav className={`nav ${navOpen ? "showNav" : ""}`}>
                                    <a href="#about" className="nav__link" onClick={turnNavOff}>{language === "EN" ? "ABOUT" : "BIO"}</a>
                                    <a href="#projects" className="nav__link" onClick={turnNavOff}>{language === "EN" ? "PROJECTS" : "PROJETOS"}</a>
                                    <a href="#contact" className="nav__link" onClick={turnNavOff}>{language === "EN" ? "CONTACT" : "CONTATO"}</a>
                                </nav>
                                <div className={`header__translate--container ${language === "EN" ? "" : "header__translate--container-active"}`}><button className={`header__translate ${language === "EN" ? "" : "toggle-active"}`} onClick={() => setLanguage(prev => prev === "EN" ? "PT" : "EN")}><HiTranslate /></button></div>
                            </header>
                        )
                    }
                }
            </LanguageContextConsumer>
    )
}