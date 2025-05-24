
import { ExternalLink, Github } from 'lucide-react';
import { useState, useContext } from 'react';
import { ProjectsContext } from '../contexts/ProjectsContext';
import ProjectDetail from './ProjectDetail';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const { projects } = useContext(ProjectsContext);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  const filters = ['All', 'Data Analysis', 'Business Intelligence', 'Machine Learning', 'AI/ML'];
  const filteredProjects = activeFilter === 'All' ? projects : projects.filter(project => project.category === activeFilter);

  const handleViewDetails = (project) => {
    setSelectedProject(project);
    setIsDetailOpen(true);
  };

  return <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Digital Product Showcases
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map(filter => <button 
              key={filter} 
              onClick={() => setActiveFilter(filter)} 
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${activeFilter === filter ? 'bg-indigo-700 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            >
              {filter}
            </button>)}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => <div 
              key={index} 
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
            >
              {/* Project Image/Preview */}
              <div className={`h-48 relative overflow-hidden ${!project.fullImage ? project.image : ''}`}>
                {project.fullImage ? (
                  <img 
                    src={project.fullImage} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 bg-indigo-500 opacity-30"></div>
                )}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-center z-10">
                    <div className="text-2xl font-bold mb-2">{project.title}</div>
                    <div className="text-sm opacity-90">{project.category}</div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4 z-20">
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-white/20 backdrop-blur-sm rounded-full p-3 hover:bg-white/30 transition-colors"
                    >
                      <Github className="text-white" size={20} />
                    </a>
                  )}
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tools.map((tool, toolIndex) => <span 
                      key={toolIndex} 
                      className="bg-indigo-100 text-indigo-700 px-2 py-1 rounded text-xs font-medium"
                    >
                      {tool}
                    </span>)}
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-500">{project.category}</span>
                  <button 
                    onClick={() => handleViewDetails(project)} 
                    className="text-indigo-600 hover:text-indigo-700 font-medium text-sm flex items-center space-x-1"
                  >
                    <span>View Details</span>
                    <ExternalLink size={14} className="" />
                  </button>
                </div>
              </div>
            </div>)}
        </div>

        {/* Project Detail Modal */}
        {selectedProject && (
          <ProjectDetail 
            project={selectedProject} 
            open={isDetailOpen} 
            onOpenChange={setIsDetailOpen} 
          />
        )}

        {/* View All Projects Button */}
        <div className="text-center mt-12">
          <button className="bg-indigo-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-indigo-600 transition-all duration-300">
            View All Projects
          </button>
        </div>
      </div>
    </section>;
};

export default Projects;
