import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Contact from '../components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <Header />
      <main className="space-y-8">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50">
          <Hero />
        </div>
        
        <div className="bg-gradient-to-br from-gray-50 to-white animate-fade-up">
          <About />
        </div>
        
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 animate-fade-up" style={{ animationDelay: '200ms' }}>
          <Experience />
        </div>
        
        <div className="bg-gradient-to-br from-white to-blue-50 animate-fade-up" style={{ animationDelay: '400ms' }}>
          <Projects />
        </div>
        
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 animate-fade-up" style={{ animationDelay: '600ms' }}>
          <Skills />
        </div>
        
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 animate-fade-up" style={{ animationDelay: '800ms' }}>
          <Education />
        </div>
        
        <div className="bg-gradient-to-r from-gray-50 to-white animate-fade-up" style={{ animationDelay: '1000ms' }}>
          <Contact />
        </div>
      </main>
    </div>
  );
};

export default Index;