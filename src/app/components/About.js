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

const montserrat = Montserrat({ subsets: ['latin'] })


export default function About() {
    return (
        <section className="about" id="about">
            <div className="about__text">
                <Topic>About me</Topic>
                <p className="bio">
                    I’m a Front-end developer from Brazil. Although only recently have I decided to work as a developer, my journey in coding started pretty early.<br />
                    <br />
                    I started off with Java when I was around 13, because I wanted to make my own Minecraft plugins.<br />
                    <br />
                    Building on that, towards the end of 2022 when I decided to work in this area, I learned a little bit of Spring but quickly saw it wasn’t for me. So I switched to front-end and that’s where I really found myself.<br />
                    <br />
                    I feel particularly very passionate about good looking interfaces and CSS animations.<br />
                    <br />
                    I am also a guitarist who unluckily had to fill in as a bassist.<br />
                </p>
            </div>

            <hr />

            <div className="knowledge">
                <Topic>Knowledge</Topic>
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