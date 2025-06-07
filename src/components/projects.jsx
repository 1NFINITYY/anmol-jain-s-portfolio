import { Link } from "react-router-dom";

import { FaGithub } from "react-icons/fa";
import medibotImg from './images/image8.jpg';
import churnImg from './images/churn.jpg';
import zomatoImg from './images/zomato.png';
import fakenewsImg from './images/fake-news.jpg';
import Img4 from './images/sales4.jpg';
import Img5 from './images/customer5.png';
import Img6 from './images/product6.png';
import Img7 from './images/real7.jpg';
import Img9 from './images/dynamic9.png';
import Img10 from './images/sales10.webp';
import Img11 from './images/sales11.png';
import Img12 from './images/myntra12.jpg';
import Img13 from './images/nike.jpg';
import Img14 from './images/speech14.jpg';
import Img15 from './images/airline15.png';
import Img16 from './images/face16.png';


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
    image: churnImg,
    github: "https://github.com/ajnmoljain/AnmolJain/blob/main/Churn%20prediction%20model.ipynb",
  },
  {
    path:"/projects/3",
    title: "Fake News Detection using NLP",
    description:
      "Used Natural Language Processing and Logistic Regression to classify news as fake or real, deployed with Flask.",
    techStack: ["Python", "NLP", "Logistic Regression", "Flask"],
    image: fakenewsImg,
    github: "https://github.com/ajnmoljain/AnmolJain/blob/main/fakenews.ipynb",
  },
  {
    path:"/projects/4",
    title: "Sales Forecasting using Time Series",
    description:
      "Predicted future retail sales using ARIMA and Prophet models, capturing seasonal trends and holiday effects.",
    techStack: ["Python", "Prophet", "ARIMA", "Statsmodels"],
    image: Img4,
    github: "https://github.com/ajnmoljain/AnmolJain/blob/main/sales.pbix",
  },
  {
    path:"/projects/5",
    title: "Customer Segmentation with K-Means",
    description:
      "Clustered customers into behavioral groups using K-Means for targeted marketing and better engagement.",
    techStack: ["Python", "Sklearn", "Matplotlib"],
    image: Img5,
    github: "https://github.com/ajnmoljain/customer-segmentation-with-K-means-",
  },
  {
    path:"/projects/6",
    title: "Product Review Sentiment Analysis",
    description:
      "Performed sentiment analysis on e-commerce reviews using NLP to classify customer satisfaction levels.",
    techStack: ["Python", "TextBlob", "TF-IDF", "NLTK"],
    image: Img6,
    github: "https://github.com/ajnmoljain/AnmolJain/blob/main/restaurant%20sentiment%20analysis.ipynb",
  },
  {
    path:"/projects/7",
    title: "Real Estate Price Prediction",
    description:
      "Predicted house prices based on location and amenities using XGBoost, improving RMSE by 12%.",
    techStack: ["Python", "XGBoost", "Scikit-learn", "Pandas"],
    image: Img7,
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
  },
  {
  path: "/projects/9",
  title: "Dynamic Discount Calculation Using Excel",
  description:
    "Interactive Excel tool using INDEX, MATCH, VLOOKUP & structured references to automate retail price adjustments.",
  techStack: ["Excel", "INDEX", "MATCH", "VLOOKUP"],
  image: Img9,
  github: "https://github.com/ajnmoljain/AnmolJain/blob/main/Excel%20-%20LOOKUP%2C%20INDEX%2C%20MATCH%2C%20SUMIFS.xlsx"
  },
  {
  path: "/projects/10",
  title: "Excel Sales Dashboard & Account Performance Analysis",
  description:
    "Built a detailed Excel dashboard analyzing individual account managers, regional trends, and customer types using pivot tables, charts, and data logic.",
  techStack: ["Excel", "Pivot Tables", "Data Visualization", "Charts"],
  image: Img10,
  github: "https://github.com/ajnmoljain/AnmolJain/blob/main/Excel%20-%20Pivot%20Tables%2C%20Pivot%20Chart%2C%20Slicers.xlsx"
  },
  {
  path: "/projects/11",
  title: "Interactive Excel Sales Dashboard (2015–2018)",
  description:
    "Created a multi-filter Excel dashboard using pivot charts to analyze regional, product, and segment-wise sales trends from 2015 to 2018.",
  techStack: ["Excel", "Pivot Charts", "Dashboard Filters", "Data Visualization"],
  image: Img11,
  github: "https://github.com/ajnmoljain/AnmolJain/blob/main/Excel_Sales_Dashboard_2015_2018.xlsx"
  },
  {
  path: "/projects/12",
  title: "Myntra Product Classification Model (Machine Learning)",
  description:
    "Built a ML model to predict product categories using e-commerce data with algorithms like Logistic Regression, Random Forest, and XGBoost.",
  techStack: ["Python", "Scikit-learn", "XGBoost", "Pandas", "Seaborn"],
  image: Img12,
  github: "https://github.com/ajnmoljain/Myntra-sales-analysis"
  },
  {
  path: "/projects/13",
  title: "Nike Nexus (Power BI)",
  description:
    "Built a Power BI dashboard to analyze sales, regional performance, and customer sentiment for Nike Air Jordan 10 Retro, using DAX, Power Query, and visual storytelling techniques.",
  techStack: ["Power BI", "DAX", "Power Query", "Data Modeling", "Visualization"],
  image: Img13,
  github: "https://github.com/ajnmoljain/AnmolJain/blob/main/nike23.pbix"
  },
  {
  path: "/projects/14",
  title: "Speech to Text with Python – Audio Recognition",
  description:
    "Developed a speech-to-text system using Python and Google Speech API to transcribe audio files (.wav/.mp3) with noise reduction and error handling.",
  techStack: ["Python", "SpeechRecognition", "pydub", "librosa", "Google API"],
  image: Img14,
  github: "https://github.com/ajnmoljain/Speech-to-Text-Recognition-Model"
  },
  {
  path: "/projects/15",
  title: "Airline Customer Satisfaction Analysis",
  description:
    "Analyzed airline passenger data to understand satisfaction drivers using Python, Excel data, and visualization tools like Seaborn and Matplotlib.",
  techStack: ["Python", "Pandas", "Seaborn", "Matplotlib", "Excel"],
  image: Img15,
  github: "https://github.com/ajnmoljain/Flight-Delay-Pricing-Prediction-Analysis-using-Python-ML"
  },
  {
  path: "/projects/16",
  title: "Real-Time Face Detection with OpenCV",
  description:
    "Built a real-time face detection system using OpenCV and Haar cascades to identify faces through webcam input and display bounding boxes.",
  techStack: ["Python", "OpenCV", "Haar Cascades"],
  image: Img16,
  github: "https://github.com/ajnmoljain/Real-Time-Face-Detection-with-OpenCV"
  }
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 mb-10">Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            
            
            <div
              key={idx}
              className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-60 w-full object-cover"
              />
              <div className="p-6 space-y-3">
                <Link to ={project.path} >
                <h3 className="text-2xl font-semibold text-indigo-700">
                  {project.title}
                </h3>
                </Link>
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
            
            
          ))}
        </div>
      </div>
    </div>
  );
}
