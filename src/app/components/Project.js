"use client"

import { LanguageContextConsumer } from '../context/langContext'
import '../sass/_project.scss'

import Image from "next/image"

export default function Project({ project }) {
    const { img, name, description, descriptionPT, link } = project
    return (
        <div className="project">
            <div className="card-front card-side">
                <div className="img">
                    <Image
                        src={img}
                        alt="project image"
                        fill={true}
                        className="img-element"
                    />
                </div>
                <h3 className="project-name">{name}</h3>
            </div>
            <LanguageContextConsumer>
                    {
                        ({language}) => {
                            return (
                                <div className="card-back card-side">
                                    <p>{language === "EN" ? description : descriptionPT}</p>
                                    <a href={link} target="_blank" className="button">{language === "EN" ? "Go to website" : "Visitar website"}</a>
                                </div>
                            )
                        }
                    }
            </LanguageContextConsumer>
        </div>
    )
}