import { Github, Linkedin, FileText } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center animate-fade-up">
          <h1 className="text-4xl md:text-6xl font-bold text-secondary mb-6">
            AI Engineer & Data Scientist
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Building scalable AI solutions and transforming data into impactful insights
          </p>
          
          <div className="flex items-center justify-center space-x-4">
            <a
              href="https://github.com/PraveenKumarVk"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-600 hover:text-primary transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/praveenvarkala"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-600 hover:text-primary transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="/Praveen-Kumar-Varkala-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
            >
              <FileText size={20} className="mr-2" />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
