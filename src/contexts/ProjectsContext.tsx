
import { createContext, ReactNode, useState } from 'react';

export interface Project {
  title: string;
  description: string;
  tools: string[];
  category: string;
  image: string;
  fullDescription?: string;
  challenges?: string;
  outcomes?: string;
  projectUrl?: string;
  githubUrl?: string;
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
    image: "bg-indigo-500",
    fullDescription: "This project involved analyzing Adidas shoe sales data across multiple regions and product categories. I developed interactive dashboards to visualize sales trends, regional performance, and product popularity. The analysis revealed key insights that helped inform inventory management and marketing strategies.",
    challenges: "Working with fragmented sales data across multiple regions required careful data cleaning and normalization to ensure accurate analysis.",
    outcomes: "Identified top-performing products and underperforming regions, leading to a 15% increase in targeted sales efforts and improved inventory management.",
    projectUrl: "https://example.com/adidas-dashboard",
    githubUrl: "https://github.com/cjgunasekera/adidas-sales"
  },
  {
    title: "BlinkIt Grocery Sales Analysis",
    description: "Comprehensive sales and customer insight dashboards with detailed market analysis and performance metrics.",
    tools: ["Power BI", "Data Analysis", "Dashboard Design"],
    category: "Business Intelligence",
    image: "bg-indigo-600",
    fullDescription: "Developed a comprehensive business intelligence solution for BlinkIt Grocery analyzing sales patterns, customer behavior, and market trends. The solution included interactive dashboards for real-time monitoring of key performance indicators and automated reporting systems.",
    challenges: "Integrating data from multiple sources including POS systems, inventory management, and customer databases required complex data modeling.",
    outcomes: "Provided actionable insights that led to a 20% improvement in stock management efficiency and a 12% increase in customer retention through targeted promotions.",
    projectUrl: "https://example.com/blinkit-dashboard",
    githubUrl: "https://github.com/cjgunasekera/blinkit-analysis"
  },
  {
    title: "Pizza Sales Analysis Report",
    description: "In-depth analysis focusing on sales trends, best-selling products, and customer behavior patterns.",
    tools: ["Excel", "Statistical Analysis", "Data Visualization"],
    category: "Market Research",
    image: "bg-indigo-700",
    fullDescription: "Conducted detailed market research on pizza sales patterns across different locations and customer segments. The analysis included factors such as peak ordering times, popular toppings, price sensitivity, and promotional impact on sales.",
    challenges: "Analyzing seasonal variations and special event impacts required developing custom analytical models to isolate factors affecting sales.",
    outcomes: "Identified optimal pricing strategies and menu combinations that increased average order value by 8% when implemented.",
    projectUrl: "https://example.com/pizza-analysis",
    githubUrl: "https://github.com/cjgunasekera/pizza-sales"
  },
  {
    title: "Laptop Price Prediction Model",
    description: "Machine learning model using Python and scikit-learn Random Forest regression with high predictive accuracy.",
    tools: ["Python", "Scikit-learn", "Random Forest", "Data Science"],
    category: "Machine Learning",
    image: "bg-indigo-800",
    fullDescription: "Developed a machine learning model to predict laptop prices based on specifications like processor type, RAM, storage, screen size, and brand. Used Random Forest Regression algorithm to achieve high prediction accuracy across different price ranges.",
    challenges: "Feature engineering from unstructured product descriptions required NLP techniques to extract and standardize technical specifications.",
    outcomes: "Achieved 91% prediction accuracy on test data, creating a valuable tool for both consumers and retailers to evaluate fair market prices.",
    projectUrl: "https://example.com/laptop-prediction",
    githubUrl: "https://github.com/cjgunasekera/laptop-price-prediction"
  },
  {
    title: "Movie Recommender System",
    description: "Intelligent recommendation system utilizing NLP, machine learning, and cosine similarity for personalized suggestions.",
    tools: ["Python", "NLP", "Machine Learning", "Cosine Similarity"],
    category: "AI/ML",
    image: "bg-indigo-900",
    fullDescription: "Built a content-based movie recommendation system that analyzes movie descriptions, genres, actors, and directors to suggest similar films. The system uses natural language processing to extract meaningful features from movie metadata and employs cosine similarity to find movies with similar characteristics.",
    challenges: "Creating effective feature vectors from text data required balancing between specificity and generalization to avoid both overly narrow and irrelevant recommendations.",
    outcomes: "The system provides highly relevant movie suggestions based on content similarity rather than just popularity, enhancing user discovery of lesser-known but well-matched films.",
    projectUrl: "https://example.com/movie-recommender",
    githubUrl: "https://github.com/cjgunasekera/movie-recommender"
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
