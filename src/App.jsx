// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import Projects from "./pages/Projects";

import NotFound from "./components/NotFound";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./pages/Contact";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {index: true, element: <Home/>},
        {path: "resume", element: <Resume/>},
        {path: "projects", element: <Projects/>},
        {path: "contact", element: <Contact/>},

        {path: "*", element: <NotFound/>},
      ],
    },    
  ]);
  


function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;