import { GraduationCap } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Education</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="card hover:shadow-lg transition-all duration-300 border-l-4 border-primary">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-primary/10 rounded-full">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-secondary">
                  University of North Carolina at Charlotte
                </h3>
                <p className="text-primary font-medium">
                  Master of Science in Computer Science
                </p>
                <p className="text-gray-600">
                  Concentration in Data Science
                </p>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-gray-600">Charlotte, NC</span>
                  <span className="text-gray-600">May 2024</span>
                </div>
              </div>
            </div>
            
            <div className="mt-4">
              <h4 className="font-semibold mb-2">Academic Projects</h4>
              <div className="space-y-2">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h5 className="font-medium">End to End LLM Training and Optimization</h5>
                  <ul className="list-disc list-inside text-sm text-gray-700 mt-2">
                    <li>Built data pipeline for language model training, trained on 110M tokens with custom tokenizer and DeepSpeed.</li>
                    <li>Enhanced performance through Supervised Fine-Tuning (SFT), DPO, and RLHF with PPO.</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h5 className="font-medium">Collaborative Multi ReAct Agent System with Langgraph</h5>
                  <ul className="list-disc list-inside text-sm text-gray-700 mt-2">
                    <li>Developed multi-agent system with LangGraph and PythonREPL, reducing task completion by 40%</li>
                    <li>Integrated Tavily Search and GPT-4 via LangChain for real-time economic data and automated reporting.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;