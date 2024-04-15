import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./pages/layout";
import HomePage from "./pages/home/page";
import ContactPage from "./pages/contact/page";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-gray-900">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />

            <Route path="contact" element={<ContactPage />} />
            <Route path="login" element={<LoginPage />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
