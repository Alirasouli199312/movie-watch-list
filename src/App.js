import React from "react";

import HomePage from "./components/HomePage";
import { Route, Routes } from "react-router-dom";
import DetailsPage from "./components/DetailsPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movie/:id" element={<DetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
