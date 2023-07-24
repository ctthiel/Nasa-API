import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import NasaPhoto from "./components/NasaPhoto";
import NavBar from "./components/NasaPhoto";
import './App.css';

function App() {
  return (
      <div>
        <Routes>
          <Route exact path ="/" element={ <Home />}/>
          <Route path ="/nasaphoto" element={ <NasaPhoto />} />
        </Routes>
      </div>
  );
}

export default App;
