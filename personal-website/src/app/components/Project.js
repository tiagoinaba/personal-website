import Image from "next/image"

export default function Project({ img, name, description }) {
    return (
        <div className="project">
            <div className="img">
                <Image src={img} />
            </div>
        </div>
    )
}