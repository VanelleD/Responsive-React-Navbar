import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import { About } from "./components/Pages/About";
import { Services } from "./components/Pages/Services";
import { Contact } from "./components/Pages/Contact";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/about" exact element={<About />} />
            <Route path="/services" exact element={<Services />} />
            <Route path="/contact" exact element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
