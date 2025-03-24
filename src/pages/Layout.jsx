import React from "react";
import Header from "../components/Header";
import Profile from "../components/Profile";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <div className="font-raleway max-md:px-10 md:w-4/5 mx-auto my-5">
      <Header />
      <NavBar />
      <div className="md:flex gap-10 w-full">
        <Profile />
        <main className="md:w-4/6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
