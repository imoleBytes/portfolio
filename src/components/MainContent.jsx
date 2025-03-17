import React from 'react';
import NavBar from './NavBar';
import Services from './Services';
import Home from '../pages/Home';
import Resume from '../pages/Resume';

import { createBrowserRouter, RouterProvider } from "react-router-dom";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "resume",
      element: <Resume/>,
    },
  ]);
  

const MainContent = () => {
    return (
        <main className='4/5'>
            <NavBar/>

            <RouterProvider router={router} />
            
            {/* <Home/>
            <Resume/> */}
        </main>
    );
}

export default MainContent;
