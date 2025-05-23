
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Portfolio';
import SkillsExpertise from '../components/Services';
import Certificates from '../components/Certificates';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { ProjectsProvider } from '../contexts/ProjectsContext';

const Index = () => {
  return (
    <ProjectsProvider>
      <div className="min-h-screen">
        <Header />
        <Hero />
        <About />
        <Projects />
        <SkillsExpertise />
        <Certificates />
        <Contact />
        <Footer />
      </div>
    </ProjectsProvider>
  );
};

export default Index;
