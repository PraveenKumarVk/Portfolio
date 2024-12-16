const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">About Me</h2>
        
        <div className="grid md:grid-cols-2 items-center gap-8 max-w-5xl mx-auto">
          {/* Text Section */}
          <div className="flex flex-col justify-center space-y-4">
            <p className="text-gray-600 text-lg leading-relaxed text-justify">
              I'm an <strong>AI Engineer</strong> and <strong>Data Scientist</strong> with a strong background in developing 
              scalable machine learning solutions and intelligent systems. With years of experience in both industry and research, 
              I specialize in building AI-powered applications that drive efficiency and solve real-world challenges.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed text-justify">
              I’m passionate about leveraging technologies like <strong>LangChain</strong>, <strong>Transformers</strong>, and 
              <strong> cloud solutions</strong> to build impactful AI systems. I hold a <strong>Master’s degree in Computer Science</strong> with a concentration in <strong>Data Science</strong> from the University of North Carolina at Charlotte.
            </p>
            <p className="text-lg font-medium text-gray-800 mt-4">
              Let’s create smarter solutions for a better tomorrow!
            </p>
          </div>

          {/* Image Section */}
          <div className="flex justify-center items-center">
            <div className="aspect-square rounded-full overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
              <img 
                src="src/components/praveen.jpg" 
                alt="Developer Icon" 
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;