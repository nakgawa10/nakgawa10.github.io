import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  HashRouter,
  Route,
  Routes,
} from "react-router-dom";
import About from "./about/About";
import Contact from "./contact/Contact";
import Home from "./home/Home";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Resume from "./resume/Resume";
import Services from "./services/Services";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/resume",
    element: <Resume />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/services" element={<Services />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
reportWebVitals();
