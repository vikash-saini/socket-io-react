import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter,Route } from "react-router-dom";
import Home from "./component/Home";
import Room from "./component/Room";

function App() {


  return (
    <div className="App">      
    <Route path="/" exact component={Home}/>
    <Route path="/room" component={Room}/>
    </div>
  );
}

export default App;
