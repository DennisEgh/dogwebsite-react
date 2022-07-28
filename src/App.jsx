import React from "react";
import Home from "./pages/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/nav";
import Store from "./pages/store";
import Footer from "./components/footer"
import { dogfoods } from "./data.js"

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store"  element={<Store dogfood={dogfoods}/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
