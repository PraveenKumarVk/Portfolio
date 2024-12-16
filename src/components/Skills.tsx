const skills = [
  {
    category: 'Programming',
    items: ['Python', 'JavaScript', 'TypeScript', 'SQL'],
  },
  {
    category: 'AI & ML',
    items: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'LangChain'],
  },
  {
    category: 'Cloud & DevOps',
    items: ['AWS', 'Docker', 'Git', 'CI/CD'],
  },
  {
    category: 'Tools & Frameworks',
    items: ['FastAPI', 'React', 'PostgreSQL', 'Redis'],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Skills & Technologies</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {skills.map((skillGroup) => (
            <div key={skillGroup.category} className="card">
              <h3 className="text-lg font-semibold mb-4">{skillGroup.category}</h3>
              <div className="space-y-2">
                {skillGroup.items.map((skill) => (
                  <div
                    key={skill}
                    className="px-3 py-2 bg-gray-100 rounded-lg text-gray-700"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;