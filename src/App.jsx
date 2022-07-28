import React, { useEffect, useState } from "react";
import Home from "./pages/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/nav";
import Store from "./pages/store";
import Footer from "./components/footer";
import { dogfoods } from "./data.js";
import FoodInfo from "./pages/FoodInfo";
import Adopt from "./pages/adopt";
import axios from "axios";

function App() {
  const API_KEY = "4b496fbd-f54f-4f3d-bdf9-260da6028136";
  const [data, setData] = useState();
  useEffect(() => {
    async function fetchPosts() {
      const { data } = await axios.get(
        `https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`
      );
      setData(data);
      
    }

    fetchPosts();
  }, []);
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store dogfood={dogfoods} />} />
          <Route path="/store/:id" element={<FoodInfo dogfoods={dogfoods} />} />
          <Route path="/adopt" element={<Adopt data={data} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
