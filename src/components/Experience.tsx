import { Briefcase } from 'lucide-react';

const experiences = [
  {
    company: "Meta",
    role: "Software Engineer II",
    period: "Jun 2025 - Present",
    location: "Remote, USA",
    achievements: [
      "Led evaluation and productionization of a multi-task diffusion model enabling precise image edits via natural language instructions, enhancing user engagement and retention by 40%",
      "Built a web-based evaluation interface in Next.js, allowing research teams to run inference, annotate outputs, and submit feedback",
      "Engineered Hive storage pipelines for 10M+ inference results, enabling efficient retrieval, and model comparison across evaluation runs",
      "Collaborated across research and infra teams on multiple image and video generation models, contributing features for multimodal evaluation and scaling to 100K+ generations/day"
      ]
  },{
    company: "Global Atlantic Financial Group",
    role: "Senior Software Engineer",
    period: "Apr 2025 - Jun 2025",
    location: "Boston, USA",
    achievements: [
      "Deployed a RAG platform using Next.js, FastAPI, AWS Bedrock, and PostgreSQL, providing role-based access to internal databases and reducing employee query resolution time by 40%",
      "Implemented a text-to-SQL engine with LLMs fine-tuned for enterprise schemas, automatically generating SQL queries executed against internal data warehouses and feeding results into BI workflows",
      "Launched a dashboard builder module using Chart.js where users could combine multiple charts, edit, share, and export visualizations"
      ]
  },
  {
    company: "Probe Practice Solutions",
    role: "AI Engineer",
    period: "Jul 2024 - Mar 2025",
    location: "Remote, USA",
    achievements: [
      "Developed a claims explanation pipeline by fine-tuning LLMs such as GPT, BERT, LLaMA with LangChain and AI/ML technologies, achieving 95% accuracy in simplifying billing codes and reducing customer queries by 40%.",
      "Designed and deployed an AI-driven claims summarization tool using OpenAI APIs, Pinecone for vector retrieval, and AIOps, streamlining claim audits and improving operational efficiency.",
      "Implemented LoRA and QLoRA for parameter-efficient tuning and deployed AI models on AWS SageMaker, Kubernetes, and MLflow, ensuring scalability and cost optimization.",
      "Applied Computer Vision techniques to automate image analysis of claims documents, improving processing speed by 95%, integrating a Human-in-the-Loop (HITL) mechanism for quality control.",
      "Ensured compliance with HIPAA, integrating bias monitoring, model interpretability, and regulatory adherence using DeepChecks for fraud detection and claims validation."
    ]
  },
  {
    company: "Hexagon Capability Center India",
    role: "Software Engineer",
    period: "Aug 2022 - Dec 2022",
    location: "Hyderabad, India",
    achievements: [
      "Improved performance of a C# 3D visualization module by reducing model load times by ~30%, achieved through memory optimization and multithreading techniques",
      "Reduced defect backlog by ~20% by refactoring legacy code into reusable, modular components and object-oriented design patterns",
      "Increased system scalability by implementing efficient data-handling layers that integrated plant metadata with SQL databases, enabling faster retrieval and visualization of thousands of records"
    ]
  },
  {
    company: "Citi Bank",
    role: "Software Engineer",
    period: "Dec 2020 - May 2022",
    location: "Hyderabad, India",
    achievements: [
      "Developed a full-stack web application using Spring Boot, React and GraphQL, implementing microservices and real-time data processing with Apache Kafka, improving response times by 30% enabling live transaction updates.",
      "Architected a secure, cloud-native banking platform using React, Spring boot, and hibernate integrated with Apache Kafka for event-driven architecture, improving system scalability and reducing response times by 30%",
      "Integrated an NLP-powered chatbot using RASA and spaCy, automating loan eligibility check, achieving 95% intent recognition accuracy",
      "Optimized database queries and caching with PostgreSQL, Redis and automated CI/CD pipelines using Jenkins and Terraform, reducing deployment time by 50%"
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Experience</h2>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative pl-8 border-l-2 border-primary/30 animate-fade-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="absolute -left-3 top-0">
                <div className="bg-primary rounded-full p-2">
                  <Briefcase className="w-4 h-4 text-white" />
                </div>
              </div>
              
              <div className="card hover:shadow-lg transition-all duration-300">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-secondary">{exp.company}</h3>
                  <span className="text-sm text-gray-600">{exp.period}</span>
                </div>
                
                <div className="mb-2">
                  <span className="text-primary font-medium">{exp.role}</span>
                  <span className="mx-2">•</span>
                  <span className="text-gray-600">{exp.location}</span>
                </div>
                
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="text-sm">{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
