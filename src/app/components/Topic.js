import '../sass/_topic.scss'

// Am lazy
import { Montserrat } from "next/font/google"

const montserrat = Montserrat({ subsets: ['latin'] })

export default function Topic({ children }) {
    return (
        <h1 className={`topic ${montserrat.className}`}>{children}</h1>
    )
}