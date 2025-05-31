import { FaGithub } from "react-icons/fa";
import medibotImg from './images/medibot.jpg';
import zomatoImg from './images/zomato.png';
import nikeImg from './images/nike.jpg';
import revenueImg from './images/revenue.jpg';
import { Link } from "react-router-dom";


const projects = [
  {
    path:"/projects/1",
    title: "Zomato Restaurant Ratings Analysis",
    description:
      "Analyzed how location, price, and online delivery influence Zomato restaurant ratings using Python and Power BI.",
    techStack: ["Python", "Pandas", "Seaborn", "Power BI"],
    image: zomatoImg,
    github: "https://github.com/ajnmoljain/AnmolJain/blob/main/zomato_updated.pbix",
  },
  {
    path:"/projects/2",
    title: "Customer Churn Prediction",
    description:
      "Built a machine learning model to identify customers likely to leave a telecom service with 83% accuracy.",
    techStack: ["Python", "Scikit-learn", "Logistic Regression"],
    image: revenueImg,
    github: "https://github.com/ajnmoljain/AnmolJain/blob/main/Churn%20prediction%20model.ipynb",
  },
  {
    path:"/projects/3",
    title: "Fake News Detection using NLP",
    description:
      "Used Natural Language Processing and Logistic Regression to classify news as fake or real, deployed with Flask.",
    techStack: ["Python", "NLP", "Logistic Regression", "Flask"],
    image: revenueImg,
    github: "https://github.com/ajnmoljain/AnmolJain/blob/main/fakenews.ipynb",
  },
  {
    path:"/projects/4",
    title: "Sales Forecasting using Time Series",
    description:
      "Predicted future retail sales using ARIMA and Prophet models, capturing seasonal trends and holiday effects.",
    techStack: ["Python", "Prophet", "ARIMA", "Statsmodels"],
    image: revenueImg,
    github: "https://github.com/ajnmoljain/AnmolJain/blob/main/sales.pbix",
  },
  {
    path:"/projects/5",
    title: "Customer Segmentation with K-Means",
    description:
      "Clustered customers into behavioral groups using K-Means for targeted marketing and better engagement.",
    techStack: ["Python", "Sklearn", "Matplotlib"],
    image: revenueImg,
    github: "https://github.com/your-username/customer-segmentation",
  },
  {
    path:"/projects/6",
    title: "Product Review Sentiment Analysis",
    description:
      "Performed sentiment analysis on e-commerce reviews using NLP to classify customer satisfaction levels.",
    techStack: ["Python", "TextBlob", "TF-IDF", "NLTK"],
    image: revenueImg,
    github: "https://github.com/ajnmoljain/AnmolJain/blob/main/restaurant%20sentiment%20analysis.ipynb",
  },
  {
    path:"/projects/7",
    title: "Real Estate Price Prediction",
    description:
      "Predicted house prices based on location and amenities using XGBoost, improving RMSE by 12%.",
    techStack: ["Python", "XGBoost", "Scikit-learn", "Pandas"],
    image: revenueImg,
    github: "https://github.com/ajnmoljain/AnmolJain/blob/main/laon.ipynb",
  },
  {
    path:"/projects/8",
    title: "MediBot",
    description:
      "Disease prediction chatbot using Python and ML with 85% accuracy.",
    techStack: ["Python", "Scikit-learn", "NLP"],
    image: medibotImg,
    github:
      "https://github.com/ajnmoljain/AnmolJain/blob/main/chatbot_model%20(1).ipynb",
  }
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 mb-10">Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            
            <Link to ={project.path} >
            <div
              key={idx}
              className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-80 w-full object-cover"
              />
              <div className="p-6 space-y-3">
                <h3 className="text-2xl font-semibold text-indigo-700">
                  {project.title}
                </h3>
                <p className="text-gray-600">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="bg-indigo-100 text-indigo-700 text-sm font-medium px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4 mt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 hover:text-black transition"
                  >
                    <FaGithub className="mr-1" /> GitHub
                  </a>
                  
                </div>
              </div>
            </div>
            </Link>
            
          ))}
        </div>
      </div>
    </div>
  );
}
