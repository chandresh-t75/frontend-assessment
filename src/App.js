
import React from "react";
import Home from "./pages/Home";
import Favourite from "./pages/Favourite";
import Navbar from "./components/Navbar";

import { Route,Routes } from "react-router-dom";


function App() {
  return (
    <div className="App mb-10 ">
      <div>
      <Navbar/>
      
      </div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/favourite" element={<Favourite/>}/>
        
      </Routes>
        
    </div>
  );
}

export default App;
