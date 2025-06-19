
import { BarChart3, Brain, Code, Database, TrendingUp, Zap } from 'lucide-react';

const SkillsExpertise = () => {
  const skills = [
    {
      icon: <Brain className="text-indigo-600" size={32} />,
      title: "Machine Learning Consulting",
      description: "Custom ML solutions and predictive modeling to help businesses make data-driven decisions and automate processes.",
      gradient: "bg-indigo-100"
    },
    {
      icon: <BarChart3 className="text-indigo-600" size={32} />,
      title: "Data Visualization",
      description: "Transform complex data into clear, interactive dashboards and visualizations using Power BI, Tableau, and custom solutions.",
      gradient: "bg-indigo-100"
    },
    {
      icon: <Database className="text-indigo-600" size={32} />,
      title: "Data Analysis",
      description: "Comprehensive data analysis services to uncover insights, trends, and patterns that drive business growth.",
      gradient: "bg-indigo-100"
    },
    {
      icon: <TrendingUp className="text-indigo-600" size={32} />,
      title: "Predictive Modeling",
      description: "Build sophisticated models to forecast trends, predict outcomes, and optimize business operations.",
      gradient: "bg-indigo-100"
    },
    {
      icon: <Code className="text-indigo-600" size={32} />,
      title: "Data Engineering Solutions",
      description: "Design and implement robust data pipelines, ETL processes, and scalable data infrastructure to support analytics.",
      gradient: "bg-indigo-100"
    },
    {
      icon: <Zap className="text-indigo-600" size={32} />,
      title: "Process Automation",
      description: "Streamline workflows and automate repetitive tasks using Python, R, and modern automation tools.",
      gradient: "bg-indigo-100"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Skills & Expertise</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Let's check it out
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`${skill.gradient} rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2`}
            >
              <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm">
                {skill.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-4">{skill.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-6">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsExpertise;
