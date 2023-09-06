"use client";

import "../sass/_about.scss";

import Image from "next/image";

import { Montserrat } from "next/font/google";

import Topic from "./Topic";
import html from "../../assets/img/logos/html5.png";
import css from "../../assets/img/logos/css.png";
import js from "../../assets/img/logos/js.png";
import sass from "../../assets/img/logos/sass.png";
import react from "../../assets/img/logos/react.png";
import next from "../../assets/img/logos/next.png";
import java from "../../assets/img/logos/java.png";
import figma from "../../assets/img/logos/figma.png";
import tailwind from "../../assets/img/logos/tailwind.svg";
import spring from "../../assets/img/logos/spring.svg";
import flutter from "../../assets/img/logos/flutter.svg";
import { LanguageContextConsumer } from "../context/langContext";
import PtAbout from "./portuguese/PtAbout";
import EnAbout from "./english/EnAbout";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function About() {
  return (
    <LanguageContextConsumer>
      {({ language }) => {
        return (
          <section className="about" id="about">
            <div className="about__text">
              <Topic>{language === "EN" ? "About me" : "Sobre mim"}</Topic>
              {language === "EN" ? <EnAbout /> : <PtAbout />}
            </div>
            <hr />
            <div className="knowledge">
              <Topic>{language === "EN" ? "Knowledge" : "Conhecimentos"}</Topic>
              <div className="knowledge__logos">
                <Image src={html} width={102} height={102} alt="HTML5" />
                <Image src={css} width={102} height={102} alt="CSS" />
                <Image src={js} width={102} height={102} alt="JavaScript" />
                <Image src={sass} width={102} height={102} alt="Sass" />
                <Image src={tailwind} width={102} height={102} alt="Tailwind" />
                <Image src={react} width={102} height={102} alt="React" />
                <Image src={next} width={102} height={102} alt="Next.js" />
                <Image src={java} width={102} height={102} alt="Java" />
                <Image src={spring} width={102} height={102} alt="Spring" />
                <Image src={flutter} width={102} height={102} alt="Flutter" />
                <Image src={figma} width={102} height={102} alt="Figma" />
              </div>
            </div>
          </section>
        );
      }}
    </LanguageContextConsumer>
  );
}
