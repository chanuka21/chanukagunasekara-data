
import { ExternalLink, Github } from 'lucide-react';
import { useState } from 'react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const projects = [
    {
      title: "Adidas Shoes Sales Analysis",
      description: "Interactive sales dashboard using Excel and Power BI for comprehensive sales insights and trend analysis.",
      tools: ["Excel", "Power BI", "Data Visualization"],
      category: "Data Analysis",
      image: "bg-indigo-500"
    },
    {
      title: "BlinkIt Grocery Sales Analysis",
      description: "Comprehensive sales and customer insight dashboards with detailed market analysis and performance metrics.",
      tools: ["Power BI", "Data Analysis", "Dashboard Design"],
      category: "Business Intelligence",
      image: "bg-indigo-600"
    },
    {
      title: "Pizza Sales Analysis Report",
      description: "In-depth analysis focusing on sales trends, best-selling products, and customer behavior patterns.",
      tools: ["Excel", "Statistical Analysis", "Data Visualization"],
      category: "Market Research",
      image: "bg-indigo-700"
    },
    {
      title: "Laptop Price Prediction Model",
      description: "Machine learning model using Python and scikit-learn Random Forest regression with high predictive accuracy.",
      tools: ["Python", "Scikit-learn", "Random Forest", "Data Science"],
      category: "Machine Learning",
      image: "bg-indigo-800"
    },
    {
      title: "Movie Recommender System",
      description: "Intelligent recommendation system utilizing NLP, machine learning, and cosine similarity for personalized suggestions.",
      tools: ["Python", "NLP", "Machine Learning", "Cosine Similarity"],
      category: "AI/ML",
      image: "bg-indigo-900"
    }
  ];

  const filters = ['All', 'Data Analysis', 'Business Intelligence', 'Machine Learning', 'AI/ML'];
  
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Digital Product Showcases
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === filter
                  ? 'bg-indigo-700 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
            >
              {/* Project Image/Preview */}
              <div className={`h-48 ${project.image} flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-indigo-500 opacity-30"></div>
                <div className="text-white text-center z-10">
                  <div className="text-2xl font-bold mb-2">{project.title}</div>
                  <div className="text-sm opacity-90">{project.category}</div>
                </div>
                <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4 z-20">
                  <button className="bg-white/20 backdrop-blur-sm rounded-full p-3 hover:bg-white/30 transition-colors">
                    <ExternalLink className="text-white" size={20} />
                  </button>
                  <button className="bg-white/20 backdrop-blur-sm rounded-full p-3 hover:bg-white/30 transition-colors">
                    <Github className="text-white" size={20} />
                  </button>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tools.map((tool, toolIndex) => (
                    <span
                      key={toolIndex}
                      className="bg-indigo-100 text-indigo-700 px-2 py-1 rounded text-xs font-medium"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-500">{project.category}</span>
                  <button className="text-indigo-600 hover:text-indigo-700 font-medium text-sm flex items-center space-x-1">
                    <span>View Details</span>
                    <ExternalLink size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-12">
          <button className="bg-indigo-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-indigo-600 transition-all duration-300">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
