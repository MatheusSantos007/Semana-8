import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Institutions from "./pages/Institutions";
import Sobre from "./pages/Sobre";
import NavbarComponent from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <NavbarComponent />
      <div className="main-content"> {}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/institutions" element={<Institutions />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;