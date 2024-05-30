import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./pages/layout";
import HomePage from "./pages/home/page";
import ContactPage from "./pages/contact/page";
import LoginPage from "./pages/login/page";
import ExplorePage from "./pages/explore/page";
import { getTrailsData } from "./api";

function App() {
  const [trails, setTrails] = useState([]);
  useEffect(() => {
    getTrailsData().then((data) => {
      console.log(data);
      setTrails(data);
    });
  }, []);
  return (
    <BrowserRouter>
      <div className="bg-lime-950">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="explore" element={<ExplorePage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="login" element={<LoginPage />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
