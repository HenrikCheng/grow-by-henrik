import React from "react";
import "./App.css";
import { HashRouter as Router, Route, Link, Routes } from "react-router-dom";
import { Home, Foo, Bar } from "../src/Pages";
import Login from "./Login";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/foo">Foo</Link>
          <Link to="/bar">Bar</Link>
          <Link to="/Login">Login</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/foo" element={<Foo />} />
          <Route path="/bar" element={<Bar />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
