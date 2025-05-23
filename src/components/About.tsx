
import { GraduationCap, Code, Brain, BarChart3 } from 'lucide-react';
import { useContext } from 'react';
import { ProjectsContext } from '../contexts/ProjectsContext';

const About = () => {
  const { projects } = useContext(ProjectsContext);
  
  // Calculate ML/AI project count
  const mlProjectsCount = projects?.filter(project => 
    project.category === 'Machine Learning' || project.category === 'AI/ML'
  ).length || 0;
  
  // Total projects count
  const totalProjectsCount = projects?.length || 0;
  
  const skills = [
    {
      category: "Programming",
      items: ["Python", "R", "SQL", "HTML/CSS"]
    },
    {
      category: "Data Science",
      items: ["Machine Learning", "Data Visualization", "Statistical Analysis", "Predictive Modeling"]
    },
    {
      category: "Tools & Platforms",
      items: ["Jupyter Notebook", "Google Colab", "VS Code", "Power BI", "Tableau", "R Studio"]
    },
    {
      category: "Soft Skills",
      items: ["Communication", "Problem Solving", "Project Management", "Teamwork", "Adaptability"]
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Designing Solutions, Not Just Visuals
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-start space-x-4 mb-6">
                <div className="bg-gradient-to-r from-purple-600 to-orange-500 rounded-full p-3">
                  <GraduationCap className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Education</h3>
                  <p className="text-gray-600">
                    Final-year undergraduate at University of Peradeniya, pursuing a degree in 
                    Statistics and Operational Research. Focused on data science, AI research, 
                    and full-stack development.
                  </p>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed">
                I'm passionate about transforming complex data into actionable insights and 
                building innovative solutions that make a real impact. Currently seeking 
                internship opportunities to apply my skills in real-world scenarios and 
                contribute to data-driven decision making.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 text-white text-center">
                <Code size={32} className="mx-auto mb-2" />
                <div className="text-2xl font-bold">{totalProjectsCount}+</div>
                <div className="text-sm opacity-90">Projects Completed</div>
              </div>
              <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-xl p-6 text-white text-center">
                <Brain size={32} className="mx-auto mb-2" />
                <div className="text-2xl font-bold">{mlProjectsCount}+</div>
                <div className="text-sm opacity-90">ML Models Built</div>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-8">Skills & Expertise</h3>
            
            {skills.map((skillGroup, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">{skillGroup.category}</h4>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="bg-gradient-to-r from-purple-100 to-orange-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
