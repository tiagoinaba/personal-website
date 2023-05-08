import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ['latin']})

export default function Header() {
    return (
        <header className={`header ${montserrat.className}`}>
            <h1 className="header__first-name">TIAGO<span className="header__last-name">INABA</span></h1>
            <nav className="nav">
                <a href="#" className="nav__link">ABOUT</a>
                <a href="#" className="nav__link">PROJECTS</a>
                <a href="#" className="nav__link">CONTACT</a>
            </nav>
        </header>
    )
}