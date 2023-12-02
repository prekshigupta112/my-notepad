import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/:id" element={<App />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
