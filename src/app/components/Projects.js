"use client"

import '../sass/_projects.scss'

import Topic from "./Topic";
import Project from "./Project";
import projectData from "../projectData";
import { LanguageContextConsumer } from '../context/langContext';

export default function Projects() {

    return (
        <LanguageContextConsumer>
            {
                ({language}) => {
                    return (
                        <section className="projects" id="projects">
                            <hr />
                            <Topic>{language === "EN" ? "Projects" : "Projetos"}</Topic>
                            <div className="projects__container">
                                <Project project={projectData.weightTracker} />
                                <Project project={projectData['2048Clone']} />
                            </div>
                            <hr />
                        </section>
                    )
                }
            }
        </LanguageContextConsumer>
    )
}