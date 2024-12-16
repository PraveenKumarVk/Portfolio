import { Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Get in Touch</h2>
        
        <div className="max-w-lg mx-auto text-center">
          <p className="text-gray-600 mb-8">
            I'm always open to discussing new projects, opportunities, and collaborations.
          </p>
          
          <a
            href="mailto:pvarkala33@gmail.com"
            className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
          >
            <Mail size={20} className="mr-2" />
            Send me an email
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;