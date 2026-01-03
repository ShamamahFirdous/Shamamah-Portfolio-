
import { Experience, Education, Project, SkillCategory, Certification, Publication } from './types';
import { Linkedin, Github, Mail, MapPin, Phone } from 'lucide-react';

export const PROFILE = {
  name: "Shamamah Firdous",
  role: "AI Engineer & Data Scientist",
  location: "Boston, MA",
  phone: "+1-(857)-230-8430",
  email: "firdous.s@northeastern.edu",
  linkedin: "www.linkedin.com/in/shamamah-firdous-867181386",
  github: "github.com/ShamamahFirdous",
  avatar: "public/profile1.jpg",
  summary: "AI Engineer and Data Scientist passionate about building intelligent systems that solve real-world problems. Currently pursuing my Master's in Information Systems at Northeastern University, with hands-on experience developing recommendation engines, predictive models, and production ML pipelines that deliver measurable impact."
};

export const EXPERIENCE: Experience[] = [
  {
    id: "1",
    role: "AI Engineering Intern",
    company: "Acmegrade",
    date: "Apr 2023 - May 2023",
    points: [
      "Built a hybrid Movie Recommendation System combining collaborative and content-based filtering to solve the cold-start problem for new users.",
      "Owned end-to-end development—from data preprocessing and feature engineering to model training and deployment—delivering a functional recommendation engine in Python."
    ]
  },
  {
    id: "2",
    role: "Machine Learning Intern",
    company: "Kitscart Innovations",
    date: "Dec 2022 - Jan 2023",
    points: [
      "Developed a Fake News Detection classifier leveraging NLP techniques (NLTK, TF-IDF) and ensemble methods (Random Forest, XGBoost), achieving 15% accuracy improvement over baseline through feature engineering and hyperparameter optimization.",
      "Deployed model to production, handling text preprocessing and classification pipeline end-to-end."
    ]

  }
  
];

export const EDUCATION: Education[] = [
  {
    id: "1",
    degree: "Master of Science in Information Systems",
    institution: "Northeastern University",
    location: "Boston, MA",
    date: "Sep 2024 - Expected May 2026",
    gpa: "3.6 GPA",
    coursework: "Data Science with R, Data Management & Database Design, Advanced SQL, Web Design, Advanced Business Process Engineering, Application Engineering Development"
  },
  {
    id: "2",
    degree: "Bachelor of Engineering in Artificial Intelligence & Data Science",
    institution: "Muffakham Jah College of Engineering and Technology",
    location: "Hyderabad, India",
    date: "Dec 2020 - Jun 2024",
    gpa: "3.5 GPA",
    coursework: "Artificial Intelligence, Data Science, Machine Learning, Deep Learning, Big Data Analytics, Data Visualization, Python, R, SQL"
  }
];

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Library Management System (LMS)",
    description: "Architected a transactional SQL database system with RBAC security implementing librarian, member, and admin roles. Developed normalized database schema, complex queries with joins and aggregations, and stored procedures to automate inventory tracking, fine calculations, and borrowing workflows while ensuring data consistency.",
    tech: ["SQL", "Database Design", "RBAC", "Stored Procedures"],
    category: "Database Engineering"
  },
  {
    id: "2",
    title: "Custom Store - Full-Stack E-Commerce Platform",
    description: "Engineered full-stack e-commerce platform using MERN stack with role-based access for Admin, Customer, Seller, and Delivery Agent workflows. Implemented secure JWT authentication, RESTful APIs, and responsive React UI with Bootstrap. Designed MongoDB database schema managing user accounts, product inventory, orders, and delivery logistics.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "RESTful APIs"],
    category: "Full Stack"
  },
  {
    id: "3",
    title: "Med-Ease: ML-Driven Healthcare Recommendation System",
    description: "Built ML-driven healthcare system using multi-label classification to predict diseases from symptoms and recommend medications. Trained and evaluated classification models, integrated user-facing web interface for real-time predictions, and published research in peer-reviewed journal.",
    tech: ["Machine Learning", "Multi-label Classification", "Web Interface"],
    category: "ML/AI"
  },
  {
    id: "4",
    title: "Cab Fare Prediction using Time Series Analysis",
    description: "Implemented time series forecasting and regression models to predict cab fares based on temporal patterns, distance, and demand metrics. Performed feature engineering on datetime and location data, achieving accurate fare predictions and improving pricing transparency.",
    tech: ["Time Series Analysis", "Regression", "Feature Engineering"],
    category: "ML/AI"
  },
  {
    id: "5",
    title: "Boston House Rent Prediction",
    description: "Developed end-to-end ML system for Boston housing rent prediction using CatBoost and ensemble regression models. Built complete pipeline with data preprocessing, feature engineering, and model training. Deployed containerized Flask application with Docker and MLflow for experiment tracking.",
    tech: ["CatBoost", "Flask", "Docker", "MLflow", "Ensemble Methods"],
    category: "ML/AI"
  },
  {
    id: "6",
    title: "Statistical Analysis of Startup Success Factors",
    description: "Analyzed 923 tech startups using Multiple Linear Regression and ANOVA to identify success predictors. Discovered that funding rounds and investor participation outweigh total capital as success indicators, providing actionable insights for founders and investors. Conducted rigorous statistical analysis in R with significance testing, post-hoc comparisons, and comprehensive data visualization.",
    tech: ["R Programming", "Multiple Linear Regression", "ANOVA", "ggplot2", "dplyr", "Statistical Analysis"],
    category: "Data Science"
  }
];

export const SKILLS: SkillCategory[] = [
  {
    category: "Technical Skills",
    skills: ["Python", "R", "SQL", "Java", "C", "HTML/CSS", "JavaScript", "MySQL", "MongoDB", "MERN Stack"]
  },
  {
    category: "Machine Learning & AI",
    skills: ["Machine Learning", "Deep Learning", "NLP", "Unsupervised Learning", "Supervised Learning", "Time Series Analysis", "Model Training", "Ensemble Methods", "Hyperparameter Tuning", "Random Forest", "XGBoost", "CatBoost"]
  },
  {
    category: "Tools & Frameworks",
    skills: ["Scikit-learn", "TensorFlow", "Keras", "NLTK", "NumPy", "Pandas", "Matplotlib", "Seaborn", "Power BI", "Docker", "Git/GitHub", "MLflow"]
  },
  {
    category: "Data Science",
    skills: ["Feature Engineering", "Data Preprocessing", "Statistical Analysis", "Data Visualization", "Predictive Modeling", "Exploratory Data Analysis"]
  },
  {
    category: "Professional Skills",
    skills: ["Problem-Solving", "Technical Communication", "Cross-Functional Collaboration", "Project Management", "Requirements Analysis"]
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    name: "AWS Foundations of Prompt Engineering",
    issuer: "AWS Training & Certification",
    date: "Oct 2025"
  },
  {
    name: "Oracle Cloud Infrastructure 2025 Certified Data Science Professional",
    issuer: "Oracle",
    date: "Oct 2025 - Oct 2027"
  },
  {
    name: "AI Agent Fundamentals",
    issuer: "Databricks Academy",
    date: "Dec 2025"
  }

];

export const PUBLICATIONS: Publication[] = [
  {
    title: "Med-Ease - ML driven recommendation system",
    journal: "International Journal of Innovative Research in Technology",
    date: "July 2024",
    link: "https://ijirt.org/article?manuscript=166060"
  },
  {
    title: "Cab Fare Prediction Based On Time Series With ML Techniques",
    journal: "International Journal of Innovative Research in Technology",
    date: "July 2023",
    link: "https://ijirt.org/article?manuscript=161160"
  }
];
