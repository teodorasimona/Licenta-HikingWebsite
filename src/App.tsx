import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Layout from './pages/layout';
import HomePage from './pages/home/page';
import ContactPage from './pages/contact/page';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
        
          <Route path="contact" element={<ContactPage />} />
       
        </Route>
      </Routes>
    </BrowserRouter>

   
  );
}

export default App;
