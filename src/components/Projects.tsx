import { ExternalLink, Github } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const projects = [
  {
    title: 'RepoWise',
    description: 'A Full-stack AI-powered SaaS platform that revolutionizes GitHub project collaboration by providing AI-driven insights, seamless integrations, and efficient tools for managing projects, summarizing changes, and enhancing team communication.',
    tech: ['Google Gemini AI', 'Next.js', 'Clerk', 'Stripe', 'Assembly AI','Octokit', 'Langchain'],
    github: 'https://github.com/PraveenKumarVk/RepoWise',
    demo: 'https://repo-wise.vercel.app/dashboard',
  },
  {
    title: 'AutoTagging RNN',
    description: 'Implemented an RNN-based Auto-Tagging system that automatically generates relevant tags for text data, enhancing content classification and retrieval.',
    tech: ['Python', 'Tensorflow', 'LSTM', 'RNN'],
    github: 'https://github.com/PraveenKumarVk/AutoTagging_RNN',
    demo: 'https://github.com/PraveenKumarVk/Training-LLM-from-scratch',
  },
  {
    title: 'Traning LLM from Scratch',
    description: 'Trained a Large Language Model (LLM) from scratch using PyTorch, DeepSpeed, and custom tokenizers, implementing Supervised Fine-Tuning (SFT) and Reinforcement Learning with PPO for optimization.',
    tech: ['Python', 'PyTorch', 'LLM', 'DeepSpeed'],
    github: 'https://github.com/PraveenKumarVk/Training-LLM-from-scratch',
    demo: 'https://github.com/PraveenKumarVk/Training-LLM-from-scratch',
  },
  {
    title: 'Exam study tool',
    description: 'Built a personalized exam study tool built with Python, leveraging Natural Language Processing (NLP), TF-IDF, and question-answer generation techniques to assist in efficient study material preparation.',
    tech: ['Node.js', 'Express.js', 'Embedded JavaScript', 'Git'],
    github: 'https://github.com/PraveenKumarVk/Exam-Study-Tool',
    demo: 'https://github.com/PraveenKumarVk/Exam-Study-Tool',
  },
  {
    title: 'Analysis of players in IPL using D3.js',
    description: 'An engaging web-based cricket strategy game built with D3.js, featuring dynamic gameplay and intuitive user interfaces.',
    tech: ['D3.js'],
    github: 'https://github.com/PraveenKumarVk/Cricket-Crossroads',
    demo: 'https://praveenkumarvk.github.io/Cricket-Crossroads/',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-gradient-to-br from-white to-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Featured Projects</h2>
        
        <div className="max-w-5xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {projects.map((project, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="card h-full">
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                      <p className="text-gray-600 mb-4">{project.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-primary/10 text-primary text-sm rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center space-x-4">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-primary transition-colors"
                        >
                          <Github size={20} />
                        </a>
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-primary transition-colors"
                        >
                          <ExternalLink size={20} />
                        </a>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Projects;
