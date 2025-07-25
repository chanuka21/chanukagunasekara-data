
import { createContext, ReactNode, useState } from 'react';

export interface Project {
  title: string;
  description: string;
  tools: string[];
  category: string;
  image: string;
  fullImage?: string;
  fullDescription?: string;
  purpose?: string;
  role?: string;
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
    title: "Pizza Sales Analysis Report",
    description: "In-depth analysis focusing on sales trends, best-selling products, and customer behavior patterns.",
    tools: ["Excel", "Power BI", "Statistical Analysis", "Data Visualization", "DAX"],
    category: "Data Analysis",
    image: "bg-indigo-800",
    fullImage: "https://i.postimg.cc/9F3tGwbZ/Screenshot-109.png",
    purpose: "This project was developed to analyze pizza sales data, providing a comprehensive overview of sales performance. The main objectives were to identify popular pizza categories and sizes, understand daily and monthly sales trends, and highlight best-selling and worst-selling pizzas by revenue, quantity, and total orders. This analysis aims to support business decisions related to menu optimization, inventory management, and marketing strategies.",
    role: "In this project, I was responsible for the end-to-end development of the Pizza Sales Report. My key responsibilities included importing and cleaning the raw pizza sales data, developing a robust data model within Power BI to connect various sales attributes, designing and implementing interactive visualizations to display key metrics such as Total Revenue, Average Order Value, Total Pizza Sold, Total Orders, and Average Pizza Per Order, creating charts to show daily and monthly trends for total orders, and identifying and visualizing the top and bottom 5 pizzas by revenue, quantity, and total orders.",
    challenges: "Analyzing seasonal variations and special event impacts required developing custom analytical models to isolate factors affecting sales.",
    outcomes: "Created a comprehensive dashboard showcasing key metrics including $817.86K in total revenue, $38.31 average order value, 49,574 total pizzas sold, 21,350 total orders, and 2.32 average pizzas per order. The analysis identified optimal pricing strategies and menu combinations that increased average order value.",
    githubUrl: "https://github.com/chanuka21/Pizza_Sales_Analysis.git"
  },
  {
    title: "Electric Vehicle Data Analysis",
    description: "Interactive Tableau dashboard analyzing electric vehicle data with comprehensive KPIs and trend visualizations for EV market insights.",
    tools: ["Tableau", "MS Excel", "Data Visualization", "Dashboard Design", "Data Analysis"],
    category: "Data Analysis",
    image: "bg-indigo-700",
    fullImage: "/lovable-uploads/1b972874-dc51-4027-832d-395872123ac2.png",
    purpose: "This project aimed to analyze electric vehicle data and create an interactive dashboard to visualize key performance indicators (KPIs) and provide insights into various aspects of electric vehicle usage and trends. The dashboard allows users to explore data from different perspectives using filters and interactive elements.",
    role: "In this project, I was responsible for developing an interactive dashboard in Tableau to analyze electric vehicle data. I identified and visualized key performance indicators (KPIs) such as total vehicles, electric range, total BEVs, and PHEVs. I created various charts to provide granular insights, including the number of electric vehicles registered by different models, total vehicles by location, top 10 vehicles by make, eligibility by Clean Alternative Fuel Vehicle (CAF), and total vehicles by model. I also implemented interactive features, such as filter panels and quick filters, to allow users to drill down into specific data.",
    challenges: "Working with large datasets containing diverse vehicle specifications and geographical data required careful data preprocessing and optimization for dashboard performance.",
    outcomes: "Created a comprehensive dashboard showcasing electric vehicle trends with key metrics including 150,413 total vehicles, 67.83 miles average electric range, 116,745 BEV vehicles, and 33,668 PHEV vehicles. The interactive dashboard provides valuable insights for policy makers and industry stakeholders to understand EV adoption patterns.",
    githubUrl: "https://github.com/chanuka21/Electric-Vehicle-Data-Analysis-in-Tableau.git"
  },
  {
    title: "Laptop Price Prediction Model",
    description: "Machine learning model using Python and scikit-learn Random Forest regression with high predictive accuracy.",
    tools: ["Python", "Scikit-learn", "Random Forest", "Data Science", "Pandas", "NumPy"],
    category: "Machine Learning",
    image: "bg-indigo-900",
    fullImage: "https://i.postimg.cc/wTNNcY8T/Screenshot-130.png",
    purpose: "The primary purpose of this project was to develop a machine learning model capable of accurately predicting laptop prices based on various specifications. This involved identifying key features influencing laptop costs, performing data preprocessing, and training different regression models to build a robust predictive tool.",
    role: "In this project, I was responsible for the end-to-end development of the laptop price prediction model. My key responsibilities included Data Collection and Loading: Sourcing and loading the raw laptop price dataset (laptop_price.csv). Data Preprocessing and Cleaning: Handling missing values (though none were found in this dataset), cleaning and transforming categorical and numerical features (e.g., converting 'Ram' and 'Weight' to numerical types, extracting features like 'Touchscreen' and 'IPS' from 'ScreenResolution'). Feature Engineering: Creating new, more insightful features from existing ones (e.g., categorizing CPU names into broader types like 'Intel Core i7', 'AMD', 'Other'). Model Building and Training: Applying various regression algorithms, including Linear Regression, Lasso Regression, Decision Tree Regressor, and Random Forest Regressor, to find the best-performing model for price prediction. Model Evaluation: Assessing the performance of different models to identify the most accurate one (Random Forest Regressor showed the highest accuracy among tested models). Code Implementation: Writing and organizing the Python code within a Jupyter Notebook to ensure a clear and reproducible workflow.",
    challenges: "Feature engineering from unstructured product descriptions required NLP techniques to extract and standardize technical specifications.",
    outcomes: "Achieved 91% prediction accuracy on test data, creating a valuable tool for both consumers and retailers to evaluate fair market prices.",
    githubUrl: "https://github.com/chanuka21/Laptop_price_predictor_model.git"
  },
  {
    title: "Movie Recommender System",
    description: "Intelligent recommendation system utilizing NLP, machine learning, and cosine similarity for personalized movie suggestions based on content-based filtering techniques.",
    tools: ["Python", "Pandas", "NumPy", "NLTK", "Scikit-learn", "CountVectorizer", "Cosine Similarity", "Pickle"],
    category: "AI/ML",
    image: "bg-indigo-500",
    fullImage: "https://i.postimg.cc/Njh1Wf7H/Screenshot-129.png",
    purpose: "The primary purpose of this project was to develop a movie recommendation system that suggests similar movies to a user based on their input of a movie title. The system aims to enhance user experience by providing personalized movie suggestions, leveraging content-based filtering techniques.",
    role: "In this project, I was responsible for the end-to-end development of the movie recommender system. My key responsibilities included Data Acquisition and Merging: Loading and combining movie details and credits datasets from TMDB to create a unified dataset. Data Preprocessing: Cleaning and transforming raw text data, including parsing JSON-like strings for genres, keywords, and cast, and applying stemming to create a consistent set of tags for each movie. Feature Extraction: Converting the processed textual movie features into a numerical format using CountVectorizer suitable for machine learning algorithms. Similarity Calculation: Computing the cosine similarity between all movie pairs based on their vectorized features to quantify their resemblance. Recommendation Logic Development: Implementing a function to take a movie name as input and return the top similar movies based on the calculated similarity scores. Model Saving: Saving the processed data and the similarity matrix for efficient loading and prediction in a deployed environment. Web Integration (implied): Setting up the user interface to allow for interactive movie recommendations.",
    challenges: "Creating effective feature vectors from text data required balancing between specificity and generalization to avoid both overly narrow and irrelevant recommendations.",
    outcomes: "The system provides highly relevant movie suggestions based on content similarity rather than just popularity, enhancing user discovery of lesser-known but well-matched films.",
    githubUrl: "https://github.com/chanuka21/Movie_Recommendation_System.git"
  },
  {
    title: "BlinkIt Grocery Sales Analysis",
    description: "Comprehensive sales and customer insight dashboards with detailed market analysis and performance metrics.",
    tools: ["Power BI", "Excel", "Data Analysis", "Dashboard Design", "Power Query", "DAX"],
    category: "Business Intelligence",
    image: "bg-indigo-600",
    fullImage: "https://i.postimg.cc/0NmJ5Vg4/Screenshot-119.png",
    purpose: "This project was developed to analyze sales data from BlinkIt grocery outlets to gain insights into various aspects of their operations. The primary goals included understanding total sales performance, average sales, customer ratings, and the number of items sold. It also aimed to visualize sales trends across different outlet establishment years, outlet sizes, outlet locations, and item types, providing valuable insights for business optimization.",
    role: "In this project, I was responsible for the complete development cycle of the grocery sales analysis report. My key responsibilities included importing and cleaning the raw sales data to ensure accuracy and consistency, building a comprehensive data model in Power BI to facilitate robust analysis, designing and implementing interactive visualizations, calculating and displaying key metrics including Total Sales, Average Sales, Number of Items, and Average Rating, and developing filtering capabilities to allow for dynamic exploration of the data.",
    challenges: "Integrating data from multiple sources including POS systems, inventory management, and customer databases required complex data modeling.",
    outcomes: "Developed a comprehensive dashboard that revealed $1.2M in total sales, 141 in average sales, 8,523 total items, and an average customer rating of 3.9. The analysis provided actionable insights that led to improvements in stock management efficiency and increased customer retention through targeted promotions.",
    githubUrl: "https://github.com/chanuka21/BlinkIT_Grocery_Sales_Data.git"
  },
  {
    title: "Adidas Shoes Sales Analysis",
    description: "Interactive sales dashboard using Excel and Power BI for comprehensive sales insights and trend analysis.",
    tools: ["Excel", "Power BI", "Data Visualization", "DAX", "Power Query"],
    category: "Data Analysis",
    image: "bg-indigo-500",
    fullImage: "https://i.postimg.cc/Bbqk6PdW/Screenshot-107.png",
    purpose: "This project aimed to analyze Adidas shoe sales data to derive actionable insights into sales performance across different regions, states, products, and retailers. The goal was to visualize key metrics like total sales, operating profit, and units sold, and identify trends to support strategic business decisions.",
    role: "In this project, I was responsible for the end-to-end development of the sales analysis report. This involved extracting and transforming raw sales data into a suitable format, building a robust data model within Power BI, designing and implementing various interactive visualizations, including sales trends over time, sales by state (using a map), sales by region (using a donut chart), sales by product, and sales by retailer. I also calculated key performance indicators (KPIs) such as Total Sales, Operating Profit, Units Sold, Price per Unit, and Average Operating Margin, ensuring the accuracy and clarity of the insights presented in the dashboard.",
    challenges: "Working with fragmented sales data across multiple regions required careful data cleaning and normalization to ensure accurate analysis.",
    outcomes: "Created an interactive dashboard showcasing key metrics including $900M in total sales, $332M in operating profit, 2M units sold, $45 price per unit, and 42% average operating margin. The dashboard provided actionable insights for inventory management and marketing strategies.",
    githubUrl: "https://github.com/chanuka21/Adidas-shoes-sales-in-America_2020_2021.git"
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
