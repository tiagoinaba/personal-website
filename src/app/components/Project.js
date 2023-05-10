import '../sass/_project.scss'

import Image from "next/image"

export default function Project({ project }) {
    const { img, name, description, link } = project
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
            <div className="card-back card-side">
                <p>{description}</p>
                <a href={link} target="_blank" className="button">Go to website</a>
            </div>
        </div>
    )
}