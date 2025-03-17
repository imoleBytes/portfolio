import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Profile from "./components/Profile";
import MainContent from "./components/MainContent";

function App() {
  const [count, setCount] = useState(0);

  return (

    <div className="font-raleway max-md:px-10 md:w-4/5 mx-auto my-5">
        <Header/>
        <div className="flex gap-10">
          <Profile/>
          <MainContent/>
        </div>
    </div>
  );
}

export default App;
