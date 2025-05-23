
import { Award, ExternalLink } from 'lucide-react';

const Certificates = () => {
  const certificates = [
    {
      title: "Data Science Professional Certificate",
      issuer: "IBM",
      date: "2023",
      description: "Comprehensive certification covering data analysis, visualization, machine learning, and Python programming.",
      link: "#"
    },
    {
      title: "Machine Learning Specialization",
      issuer: "Stanford University & Coursera",
      date: "2023",
      description: "Advanced machine learning algorithms, modeling techniques, and practical applications.",
      link: "#"
    },
    {
      title: "Business Intelligence Analyst",
      issuer: "DataCamp",
      date: "2022",
      description: "Business intelligence fundamentals, dashboard design, and data storytelling techniques.",
      link: "#"
    },
    {
      title: "SQL Advanced Certification",
      issuer: "HackerRank",
      date: "2022",
      description: "Advanced database querying, optimization, and management skills.",
      link: "#"
    }
  ];

  return (
    <section id="certificates" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Certificates</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional qualifications and achievements
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {certificates.map((cert, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-indigo-600"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <Award className="text-indigo-600" size={24} />
                  <h3 className="text-xl font-bold text-gray-800">{cert.title}</h3>
                </div>
                <span className="text-sm font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded">
                  {cert.date}
                </span>
              </div>
              
              <p className="text-gray-600 mb-3">{cert.description}</p>
              
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-indigo-600">{cert.issuer}</span>
                <a 
                  href={cert.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm font-medium text-indigo-700 hover:text-indigo-500 transition-colors"
                >
                  View Certificate
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-indigo-100 text-indigo-700 px-8 py-3 rounded-full font-semibold hover:bg-indigo-200 transition-colors duration-300">
            View All Certificates
          </button>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
