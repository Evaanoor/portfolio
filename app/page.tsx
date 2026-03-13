import Hero from "../components/Hero";
import Marquee from "../components/Marquee";
import About from "../components/About";
import Experience from "../components/Experience";
import Work from "../components/Work"; 
import Skills from "../components/Skills";
import Certificates from "../components/Certificates";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <main className="px-6 md:px-24 overflow-hidden">
      <Hero />
      <Marquee />
      <About />
      <Experience />
      <Work /> 
      <Skills />
      <Certificates />
      <Projects />
      <Contact />
    </main>
  );
}