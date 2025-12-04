
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { ThemeProvider } from './context/ThemeContext'


const App = () => {
return (
<ThemeProvider>
<div className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
<Navbar />
<main>
<Hero />
<About />
<Skills />
<Projects />
<Services />
<Testimonials />
<Contact />
</main>
<Footer />
</div>
</ThemeProvider>
)
}


export default App