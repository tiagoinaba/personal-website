const fileUrl = '../../assets/files/resume.docx'

export default function Hero() {
    return (
        <main className="hero">
            <div className="hero__content">
                <h1 className="hero__content--text">
                    Hi! I am Tiago,<br />
                    a front-end developer<br />
                    based in Brazil.
                </h1>
                <div className="hero__content--buttons">
                    <a href='/resume.docx' className="button" download={"tiagoinaba resume.docx"}>Download CV</a>
                    <a href="#contact" className="button">Let&apos;s Talk!</a>
                </div>
            </div>
        </main>
    )
}