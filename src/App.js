import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PreferencePage from "./pages/PreferencePage";
import ResultPage from "./pages/ResultPage";
import DetailsPage from "./pages/DetailsPage";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/preferences" element={<PreferencePage />} />
          <Route path="/result" element={<ResultPage />} />
          <Route path="/details" element={<DetailsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;