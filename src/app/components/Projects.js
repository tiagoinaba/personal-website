import '../sass/_projects.scss'

import Topic from "./Topic";
import Project from "./Project";
import projectData from "../projectData";

export default function Projects() {

    return (
        <section className="projects" id="projects">
            <hr />
            <Topic>Projects</Topic>
            <div className="projects__container">
                <Project project={projectData.weightTracker} />
                <Project project={projectData['2048Clone']} />
            </div>
            <hr />
        </section>
    )
}