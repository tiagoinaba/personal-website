"use client";

import { LanguageContextConsumer } from "../context/langContext";
import "../sass/_hero.scss";
import EnHero from "./english/EnHero";
const fileUrl = "../../assets/files/resume.docx";

export default function Hero() {
  return (
    <main className="hero">
      <LanguageContextConsumer>
        {({ language }) => {
          return (
            <div className="hero__content">
              {language === "EN" ? <EnHero /> : <PtHero />}
              <div className="hero__content--buttons">
                <a
                  href="/resume.docx"
                  className="button"
                  download={"tiagoinaba resume.docx"}
                >
                  {language === "EN" ? "Download CV" : "Baixar CV"}
                </a>
                <a href="#contact" className="button">
                  {language === "EN" ? "Let's talk!" : "Vamos conversar!"}
                </a>
              </div>
            </div>
          );
        }}
      </LanguageContextConsumer>
    </main>
  );
}
