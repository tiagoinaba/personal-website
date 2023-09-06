"use client"

import { LanguageContextConsumer } from '../context/langContext'
import '../sass/_hero.scss'
const fileUrl = '../../assets/files/resume.docx'

export default function Hero() {
    return (
        <main className="hero">
            <LanguageContextConsumer>
                {
                    ({language}) => {
                        return (
                            <div className="hero__content">
                                {language === "EN" ? 
                                    (<h1 className="hero__content--text">
                                        Hi! I am Tiago,<br />
                                        a front-end developer<br />
                                        based in Brazil.
                                    </h1>) :
                                    (<h1 className="hero__content--text">
                                        Oi! Eu sou o Tiago,<br />
                                        desenvolvedor<br />
                                        front-end.
                                    </h1>)
                                }
                                <div className="hero__content--buttons">
                                    <a href={language === "EN" ? '/resume.docx' : "/resume PT.docx"} className="button" download={"tiagoinaba resume.docx"}>{language === "EN" ? "Download CV" : "Baixar CV"}</a>
                                    <a href="#contact" className="button">{language === "EN" ? "Let's talk!" : "Vamos conversar!"}</a>
                                </div>
                            </div>
                        )
                    }
                }
            </LanguageContextConsumer>
        </main>
    )
}