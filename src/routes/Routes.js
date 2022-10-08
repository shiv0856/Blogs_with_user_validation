import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from '../container/Home';
import Add from '../container/Add';
import Update from '../container/Update';
import View from '../container/View';
import SignIn from '../container/SignIn';
import SignUp from '../container/SignUp';
import Menu from '../container/Menu';
import MyBlog from '../container/MyBlog';
import AllBlog from '../container/AllBlog';

function WebRoutes() {
  const user = localStorage.getItem('user') !== null ? JSON.parse(localStorage.getItem('user')) : false
  const isAdmin = user ? user.email === process.env.REACT_APP_ADMIN_EMAIL ? true : false : false;
  return (
    <>
      <Router>
        
        <Routes>
          <Route path="/" element={<><Menu /><Home /></>} />
          <Route path="/add" element={<><Menu /> {user ? <Add /> :  <Navigate to="/" replace /> }</>} />
          <Route path="/update/:id" element={<><Menu /> {user ? <Update /> :  <Navigate to="/" replace />}</>} />
          <Route path="/view/:id" element={<><Menu /><View /></>} />
          <Route path="/signIn" element={<><Menu /><SignIn /></>} />
          <Route path="/signUp" element={<><Menu /><SignUp /></>} />
          <Route path="/myblog" element={<><Menu /> {user ? <MyBlog /> :  <Navigate to="/" replace /> }</>} />
          <Route path="/allblog" element={<><Menu /> {isAdmin ? <AllBlog /> :  <Navigate to="/" replace /> }</>} />

        </Routes>
      </Router>
    </>
  );
}

export default WebRoutes;
