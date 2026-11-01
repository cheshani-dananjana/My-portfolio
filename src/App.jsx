import Navbar from './components/Navbar.jsx';
import About from './sections/About.jsx';
import Contact from './sections/Contact.jsx';
import Hero from './sections/Hero.jsx';
import RecentWorks from './sections/RecentWorks.jsx';
import Skills from './sections/Skills.jsx';

export default function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <RecentWorks />
      <Contact />
    </main>
  );
}
