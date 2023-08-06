import React from "react";
import { Routes, Route, Link } from 'react-router-dom'
import "../src/App.css"
import Home from './components/Home'
import Pizza from './components/Pizza'

const App = () => {
      
    return (
  <div className="App">
   <nav>
        <h1 className="App-header"> Gold Dust Pizza </h1>
      <div className="nav-links">
          <Link to="/"> Home</Link> 
          <Link to="/pizza"> Order Pizza </Link>
      </div>
   </nav>
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pizza" element={<Pizza />} />
    </Routes>
    

  </div>
  );
};
export default App;
