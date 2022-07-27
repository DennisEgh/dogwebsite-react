import React from "react";
import Home from "./pages/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/nav";
import Store from "./pages/store";
import Footer from "./components/footer"

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/store" element={<Store />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
