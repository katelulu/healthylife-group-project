import './App.css';
import React from 'react'
//import Sidebar from './Components/Sidebar/Sidebar.js';
import Navbar from "./Components/Sidebar/Navbar.js"
import Footer from "./Footer"
import { Outlet } from "react-router-dom";

function App() {

  return (
    <div className="App" /*display flex*/>
      {/* <Sidebar />  */}
      <Navbar />
      <div className="containermaincontext">
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}

export default App
