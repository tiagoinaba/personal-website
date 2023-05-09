import Topic from "./Topic";
import Project from "./Project";
import projectData from "../projectData";

export default function Projects() {
    return (
        <section className="projects">
            <hr />
            <Topic>Projects</Topic>
            <Project project={projectData.weightTracker} />
            <hr />
        </section>
    )
}