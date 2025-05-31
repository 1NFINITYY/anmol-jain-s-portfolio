import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Navbar from "./components/navbar";
import ChurnPredictionCard from "./components/projects/churn";
import ZomatoCard from "./components/projects/zomato";
import FakeNewsCard from "./components/projects/fakenews";
import SalesForecastCard from "./components/projects/sales";
import CustomerSegmentationCard from "./components/projects/costumer";
import SentimentAnalysisCard from "./components/projects/sentiment";
import RealEstateCard from "./components/projects/realestate";

// Layout component wraps all pages
const Layout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/skills", element: <Skills /> },
      { path: "/projects", element: <Projects /> },
      { path: "/projects/1", element: <ZomatoCard/> },
      { path: "/projects/2", element: <ChurnPredictionCard/> },
      { path: "/projects/3", element: <FakeNewsCard/> },
      { path: "/projects/4", element: <SalesForecastCard/> },
      { path: "/projects/5", element: <CustomerSegmentationCard/> },
      { path: "/projects/6", element: <SentimentAnalysisCard/> },
      { path: "/projects/7", element: <RealEstateCard/> },
    ]
  }
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

