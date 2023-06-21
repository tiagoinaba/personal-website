"use client"

import '../sass/_about.scss'

import Image from "next/image"

import { Montserrat } from "next/font/google"

import Topic from "./Topic"
import html from '../../assets/img/logos/html5.png'
import css from '../../assets/img/logos/css.png'
import js from '../../assets/img/logos/js.png'
import sass from '../../assets/img/logos/sass.png'
import react from '../../assets/img/logos/react.png'
import next from '../../assets/img/logos/next.png'
import java from '../../assets/img/logos/java.png'
import figma from '../../assets/img/logos/figma.png'
import tailwind from '../../assets/img/logos/tailwind.svg'
import spring from '../../assets/img/logos/spring.svg'
import flutter from '../../assets/img/logos/flutter.svg'
import { LanguageContextConsumer } from '../context/langContext'

const montserrat = Montserrat({ subsets: ['latin'] })


export default function About() {
    const enAbout = (
        <p className="bio">
            I’m a Front-end developer from Brazil. Although only recently have I decided to work as a developer, my journey in coding started pretty early.<br />
            <br />
            I started off with Java when I was around 13, because I wanted to make my own Minecraft plugins.<br />
            <br />
            Building on that, towards the end of 2022 - when I decided to work in this area - I learned a little bit of Spring but quickly saw it wasn’t for me. So I switched to front-end and that’s where I really found myself.<br />
            <br />
            Of course I went back and picked Spring back up, which I used on a Flutter app I made for employee management that connects to a SolrCloud server. The source code for it can be seen <a href="https://github.com/tiagoinaba/cruddemo" target='_blank'>here</a>.<br />
            <br />
            I feel particularly very passionate about good looking interfaces and CSS animations.<br />
            <br />
            I am also a guitarist who unluckily had to fill in as a bassist.<br />
        </p>
    )

    const ptAbout = (
        <p className="bio">
            Eu sou um desenvolvedor front-end. Apesar de ter decidido trabalhar como desenvolvedor, minha jornada em programação começou muito antes.<br />
            <br />
            Eu comecei com Java por volta dos 13 anos de idade, porque queria aprender a fazer plugins de Minecraft.<br />
            <br />
            Tendo isso como base, no final de 2022 - quando decidi trabalhar nessa área - comecei a aprender Spring, mas logo vi que não era para mim. Então decidi mudar meu foco para front-end, e foi aí que realmente encontrei meu caminho.<br />
            <br />
            É claro que eventualmente retornei ao meu aprendizado em Spring, tanto que o utilizei como o back-end de um aplicativo Flutter para gestão de funcionários que se conecta a um servidor SolrCloud. O código deste projeto pode ser encontrado <a href="https://github.com/tiagoinaba/cruddemo" target='_blank'>aqui</a>.<br />
            <br />
            Eu sou particularmente apaixonado por interfaces bonitas e animações de CSS.<br />
            <br />
            Sou também um guitarrista azarado que teve que substituir o baixista.<br />
        </p>
    )

    return (
        <LanguageContextConsumer>
            {
                ({language}) => {
                    return (
                        <section className="about" id="about">
                            <div className="about__text">
                                <Topic>{language === "EN" ? "About me" : "Sobre mim"}</Topic>
                                {language === "EN" ? enAbout : ptAbout}
                            </div>
                            <hr />
                            <div className="knowledge">
                                <Topic>{language === "EN" ? "Knowledge" : "Conhecimentos"}</Topic>
                                <div className="knowledge__logos">
                                    <Image
                                        src={html}
                                        width={102}
                                        height={102}
                                        alt="HTML5"
                                    />
                                    <Image
                                        src={css}
                                        width={102}
                                        height={102}
                                        alt="CSS"
                                    />
                                    <Image
                                        src={js}
                                        width={102}
                                        height={102}
                                        alt="JavaScript"
                                    />
                                    <Image
                                        src={sass}
                                        width={102}
                                        height={102}
                                        alt="Sass"
                                    />
                                    <Image
                                        src={tailwind}
                                        width={102}
                                        height={102}
                                        alt="Tailwind"
                                    />
                                    <Image
                                        src={react}
                                        width={102}
                                        height={102}
                                        alt="React"
                                    />
                                    <Image
                                        src={next}
                                        width={102}
                                        height={102}
                                        alt="Next.js"
                                    />
                                    <Image
                                        src={java}
                                        width={102}
                                        height={102}
                                        alt="Java"
                                    />
                                    <Image
                                        src={spring}
                                        width={102}
                                        height={102}
                                        alt="Spring"
                                    />
                                    <Image
                                        src={flutter}
                                        width={102}
                                        height={102}
                                        alt="Flutter"
                                    />
                                    <Image
                                        src={figma}
                                        width={102}
                                        height={102}
                                        alt="Figma"
                                    />
                                </div>
                            </div>
                        </section>
                    )
                }
            }
            
        </LanguageContextConsumer>
    )
}