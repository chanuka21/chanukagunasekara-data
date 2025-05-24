
import React from 'react';
import { ExternalLink, Github, X } from 'lucide-react';
import { Project } from '../contexts/ProjectsContext';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose
} from './ui/dialog';

interface ProjectDetailProps {
  project: Project;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ProjectDetail = ({ project, open, onOpenChange }: ProjectDetailProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl font-bold">{project.title}</DialogTitle>
            <DialogClose className="h-8 w-8 rounded-full hover:bg-gray-100 flex items-center justify-center">
              <X className="h-4 w-4" />
            </DialogClose>
          </div>
        </DialogHeader>
        
        {/* Project Image */}
        {project.fullImage && (
          <div className="mb-6 rounded-lg overflow-hidden">
            <img 
              src={project.fullImage} 
              alt={project.title} 
              className="w-full h-auto object-cover"
            />
          </div>
        )}
        
        {/* Project Banner (fallback if no image) */}
        {!project.fullImage && (
          <div className={`h-48 ${project.image} rounded-lg flex items-center justify-center relative overflow-hidden mb-6`}>
            <div className="absolute inset-0 bg-indigo-500 opacity-30"></div>
            <div className="text-white text-center z-10 text-3xl font-bold">{project.title}</div>
          </div>
        )}
        
        {/* Project Category & Tools */}
        <div className="mb-6">
          <div className="inline-block bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
            {project.category}
          </div>
          <div className="flex flex-wrap gap-2 mb-2">
            {project.tools.map((tool, index) => (
              <span 
                key={index} 
                className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
        
        {/* Project Description */}
        <div className="space-y-6">
          {project.purpose && (
            <div>
              <h3 className="font-semibold text-lg mb-2">Purpose</h3>
              <p className="text-gray-700 leading-relaxed">
                {project.purpose}
              </p>
            </div>
          )}
          
          {(project.fullDescription || project.description) && !project.purpose && (
            <div>
              <h3 className="font-semibold text-lg mb-2">Overview</h3>
              <p className="text-gray-700 leading-relaxed">
                {project.fullDescription || project.description}
              </p>
            </div>
          )}
          
          {project.role && (
            <div>
              <h3 className="font-semibold text-lg mb-2">My Role</h3>
              <p className="text-gray-700 leading-relaxed">{project.role}</p>
            </div>
          )}

          {project.challenges && (
            <div>
              <h3 className="font-semibold text-lg mb-2">Challenges</h3>
              <p className="text-gray-700 leading-relaxed">{project.challenges}</p>
            </div>
          )}
          
          {project.outcomes && (
            <div>
              <h3 className="font-semibold text-lg mb-2">Outcomes</h3>
              <p className="text-gray-700 leading-relaxed">{project.outcomes}</p>
            </div>
          )}
        </div>
        
        {/* Project Links */}
        <div className="flex flex-wrap gap-4 mt-6 pt-6 border-t border-gray-200">
          {project.githubUrl && (
            <a 
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-900 text-white rounded-md transition-colors"
            >
              <Github size={16} />
              <span>View Code</span>
            </a>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDetail;
