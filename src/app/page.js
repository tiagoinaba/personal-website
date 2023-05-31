import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import { LanguageContextProvider } from './context/langContext'

export default function Home() {
  return (
    <>
      <LanguageContextProvider>
        <Header />
        <Hero />
        <About />
        <Projects />
        <Contact />
      </LanguageContextProvider>
    </>
  )
}
