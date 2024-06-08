
import "./App.css";
import Navbar from"./components/Navbar"
import Footer from"./components/Footer"
import Layout from "./components/Layout"

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Probuctpage from "./components/Probuctpage";
import Blogespag from "./components/Blogespag";

function App() {
  return (
    <div className="bg-[#ECECEC]">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Layout />} />
          <Route path="/blogespag" element={<Blogespag />} />
        <Route path="/productpage" element={<Probuctpage/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
