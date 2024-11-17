import './App.css';
import React from "react";
import {BrowserRouter} from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import AppRouter from "./components/AppRouter";

function App() {
  return (
      <div className="App">
          <BrowserRouter>
              <AppRouter/>
              <Navbar/>
          </BrowserRouter>
      </div>
  );
}

export default App;
