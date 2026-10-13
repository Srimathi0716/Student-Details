import logo from './logo.svg';
import './App.css';

import { Routes, Route, Link } from "react-router";
import Homes from "./Homes";
import Logins from "./Logins";
import About from "./About";
import Skills from "./Skills";
import Accordians from "./Accordians";
import Contact from "./Contact";



function App() {
  return (
      <>
      <nav className="navbar">
        <h2>MyPortfolio</h2>
      <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/accordians">Accordian</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/logins">Login</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Homes />} />
        <Route path="/abouts" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/accordians" element={<Accordians />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/logins" element={<Logins />} />
      </Routes>
     
     
   </>
  );
}

export default App;
