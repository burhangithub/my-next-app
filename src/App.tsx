import React from 'react';
import logo from './logo.svg';
import './App.css';

import "@fortawesome/fontawesome-free/css/all.min.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Home} from "./components/home/Home";
import { Services } from './components/home/Services';

function App() {
  return (

        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />

            </Routes>
        </Router>


  );
}

export default App;
