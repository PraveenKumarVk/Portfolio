import { Briefcase } from 'lucide-react';

const experiences = [
  {
    company: "Probe Practice Solutions LLC",
    role: "AI Engineer",
    period: "Jul 2024 - Present",
    location: "Round Rock, Texas",
    achievements: [
      "Developed a claims explanation pipeline using fine-tuned GPT models and LangGraph, simplifying billing codes into patient-friendly summaries, reducing customer support queries by 40%.",
      "Built an LLM-based document processing system using Hugging Face Transformers and LangGraph's advanced orchestration, improving claim resolution time by 30%.",
      "Implemented claims summarization tool with OpenAI APIs and LangGraph, reducing processing time by 25%."
    ]
  },
  {
    company: "Hexagon Capability Center India",
    role: "Software Developer",
    period: "Aug 2022 - Dec 2022",
    location: "Hyderabad, India",
    achievements: [
      "Optimized Oracle SQL databases processing 10TB+ data with Hive, integrating Docker for scalable workflows.",
      "Built ETL pipelines in Snowflake and HDFS, processing 500GB+ daily, with AWS Lambda for automation.",
      "Applied regression models for SLA breach predictions with Datadog, improving on-time delivery rates by 15%."
    ]
  },
  {
    company: "Citi Bank",
    role: "Software Engineer",
    period: "May 2019 - May 2022",
    location: "Hyderabad, India",
    achievements: [
      "Developed a full-stack web application using Spring Boot, React and GraphQL, implementing microservices and real-time data processing with Apache Kafka, improving response times by 30% enabling live transaction updates.",
      "Designed GraphQL and RESTful APIs with JWT authentication, role-based access control (RBAC), and OAuth 2.0, ensuring robust security, encrypted storage, and API gateway protection in compliance with Citi’s standards.",
      "Developed and integrated an AI-powered chatbot using RASA, automating customer inquiries, loan eligibility checks, and FAQs, achieving 95% intent recognition accuracy and reducing support workload by 40%.",
      "Deployed and managed containerized applications using Docker, Kubernetes, and Terraform, ensuring fault-tolerant, scalable, and cost-efficient cloud infrastructure on AWS.",
      "Automated CI/CD pipelines using Jenkins and GitHub Actions, enabling seamless code integration, automated testing, and efficient deployments, reducing deployment time by 50% and improving development agility.",
      "Contributed to system design and architecture by implementing scalable microservices, design patterns, and reliability improvements, ensuring high availability and efficient scaling of enterprise applications"
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
