
import { Award, ExternalLink } from 'lucide-react';

const Certificates = () => {
  const certificates = [
    {
      title: "Preparing Data for Analysis with Microsoft Excel",
      issuer: "Coursera",
      date: "2023",
      description: "Skills in Excel data preparation, cleaning, and organization techniques for effective analysis.",
      link: "https://coursera.org/share/204b1b452b0b92357aceef24f205fd14"
    },
    {
      title: "Harnessing the Power of Data with Power BI",
      issuer: "Coursera",
      date: "2023",
      description: "Advanced dashboard creation, data modeling, and visualization techniques using Microsoft Power BI.",
      link: "https://coursera.org/share/72c0cad1981fb203bf25cf7177e86d4c"
    },
    {
      title: "Extract, Transform and Load Data in Power BI",
      issuer: "Coursera",
      date: "2023",
      description: "Comprehensive training in ETL processes using Power BI's Power Query for data transformation and loading.",
      link: "https://coursera.org/share/3aefe537a962f609e83867c09184a4ed"
    },
    {
      title: "Python for Data Science, AI & Development",
      issuer: "Coursera",
      date: "2024",
      description: "Comprehensive Python programming course covering data science, artificial intelligence, and development practices.",
      link: "https://coursera.org/share/0628ab23ec5c47da3927ed9cbcd90054"
    },
    {
      title: "Data Modeling in Power BI",
      issuer: "Coursera",
      date: "2024",
      description: "Advanced data modeling techniques and best practices for creating efficient and scalable Power BI solutions.",
      link: "https://coursera.org/share/7b237c95902c848e1df034ef08a46511"
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
              <div className="flex items-center gap-3 mb-4">
                <Award className="text-indigo-600" size={24} />
                <h3 className="text-xl font-bold text-gray-800">{cert.title}</h3>
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
