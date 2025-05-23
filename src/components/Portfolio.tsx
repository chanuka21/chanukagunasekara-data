
import { ExternalLink, Github } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: "Adidas Shoes Sales Analysis",
      description: "Interactive sales dashboard using Excel and Power BI for comprehensive sales insights and trend analysis.",
      tools: ["Excel", "Power BI", "Data Visualization"],
      category: "Data Analysis",
      image: "bg-gradient-to-br from-blue-500 to-purple-600"
    },
    {
      title: "BlinkIt Grocery Sales Analysis",
      description: "Comprehensive sales and customer insight dashboards with detailed market analysis and performance metrics.",
      tools: ["Power BI", "Data Analysis", "Dashboard Design"],
      category: "Business Intelligence",
      image: "bg-gradient-to-br from-green-500 to-blue-500"
    },
    {
      title: "Pizza Sales Analysis Report",
      description: "In-depth analysis focusing on sales trends, best-selling products, and customer behavior patterns.",
      tools: ["Excel", "Statistical Analysis", "Data Visualization"],
      category: "Market Research",
      image: "bg-gradient-to-br from-orange-500 to-red-500"
    },
    {
      title: "Laptop Price Prediction Model",
      description: "Machine learning model using Python and scikit-learn Random Forest regression with high predictive accuracy.",
      tools: ["Python", "Scikit-learn", "Random Forest", "Data Science"],
      category: "Machine Learning",
      image: "bg-gradient-to-br from-purple-500 to-pink-500"
    },
    {
      title: "Movie Recommender System",
      description: "Intelligent recommendation system utilizing NLP, machine learning, and cosine similarity for personalized suggestions.",
      tools: ["Python", "NLP", "Machine Learning", "Cosine Similarity"],
      category: "AI/ML",
      image: "bg-gradient-to-br from-yellow-500 to-orange-500"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">My Portfolio</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Digital Product Showcases
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group"
            >
              {/* Project Image/Preview */}
              <div className={`h-48 ${project.image} flex items-center justify-center relative overflow-hidden`}>
                <div className="text-white text-center">
                  <div className="text-2xl font-bold mb-2">{project.title}</div>
                  <div className="text-sm opacity-90">{project.category}</div>
                </div>
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
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
                      className="bg-gradient-to-r from-purple-100 to-orange-100 text-purple-700 px-2 py-1 rounded text-xs font-medium"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-500">{project.category}</span>
                  <button className="text-purple-600 hover:text-purple-700 font-medium text-sm flex items-center space-x-1">
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
          <button className="bg-gradient-to-r from-purple-600 to-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
