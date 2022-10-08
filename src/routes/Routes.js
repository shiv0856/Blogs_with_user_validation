import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from '../components/Home';
import Add from '../components/Add';
import Update from '../components/Update';
import View from '../components/View';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import Menu from '../components/Menu';

function WebRoutes() {
  
  return (
    <>
      <Router>
        
        <Routes>
          <Route path="/" element={<><Menu /><Home /></>} />
          <Route path="/add" element={<><Menu /><Add /></>} />
          <Route path="/update/:id" element={<><Menu /><Update /></>} />
          <Route path="/view/:id" element={<><Menu /><View /></>} />
          <Route path="/signIn" element={<><Menu /><SignIn /></>} />
          <Route path="/signUp" element={<><Menu /><SignUp /></>} />

        </Routes>
      </Router>
    </>
  );
}

export default WebRoutes;

