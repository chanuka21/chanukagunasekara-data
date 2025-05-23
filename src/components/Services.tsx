
import { BarChart3, Brain, Code, Database, TrendingUp, Zap } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Brain className="text-white" size={32} />,
      title: "Machine Learning Consulting",
      description: "Custom ML solutions and predictive modeling to help businesses make data-driven decisions and automate processes.",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      icon: <BarChart3 className="text-white" size={32} />,
      title: "Data Visualization",
      description: "Transform complex data into clear, interactive dashboards and visualizations using Power BI, Tableau, and custom solutions.",
      gradient: "from-blue-500 to-purple-500"
    },
    {
      icon: <Database className="text-white" size={32} />,
      title: "Data Analysis",
      description: "Comprehensive data analysis services to uncover insights, trends, and patterns that drive business growth.",
      gradient: "from-green-500 to-blue-500"
    },
    {
      icon: <TrendingUp className="text-white" size={32} />,
      title: "Predictive Modeling",
      description: "Build sophisticated models to forecast trends, predict outcomes, and optimize business operations.",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: <Code className="text-white" size={32} />,
      title: "Full-Stack Development",
      description: "End-to-end web application development with modern technologies and data integration capabilities.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <Zap className="text-white" size={32} />,
      title: "Process Automation",
      description: "Streamline workflows and automate repetitive tasks using Python, R, and modern automation tools.",
      gradient: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expertise Services! Let's check it out
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
              
              <button className="text-purple-600 hover:text-purple-700 font-semibold flex items-center space-x-2 group-hover:translate-x-2 transition-transform duration-300">
                <span>Learn More</span>
                <span>→</span>
              </button>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-purple-600 to-orange-500 rounded-2xl p-8 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h3>
          <p className="text-lg mb-6 opacity-90">
            Let's collaborate to transform your data into actionable insights and build innovative solutions.
          </p>
          <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300">
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
