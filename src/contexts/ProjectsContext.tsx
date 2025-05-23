
import { createContext, ReactNode, useState } from 'react';

export interface Project {
  title: string;
  description: string;
  tools: string[];
  category: string;
  image: string;
}

interface ProjectsContextType {
  projects: Project[];
  setProjects: React.Dispatch<React.SetStateAction<Project[]>>;
}

const defaultProjects = [
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

export const ProjectsContext = createContext<ProjectsContextType>({
  projects: defaultProjects,
  setProjects: () => {}
});

export const ProjectsProvider = ({ children }: { children: ReactNode }) => {
  const [projects, setProjects] = useState<Project[]>(defaultProjects);

  return (
    <ProjectsContext.Provider value={{ projects, setProjects }}>
      {children}
    </ProjectsContext.Provider>
  );
};
