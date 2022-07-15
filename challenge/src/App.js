import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/Products";
import Contact from "./components/Contact";
import About from "./components/About";

function App() {
  return (
    <Router>
      {/* <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/contact">About</Link>
        <Link to="/about">Contact</Link>
      </nav> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />

        {/* <div className="App"></div> */}
      </Routes>
    </Router>
  );
}

export default App;
