import "./App.css";
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Contact from "./pages/ContactUs/Contact";
import CompanyDashboard from "./pages/CompanyDashboard/CompanyDashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/company-dashboard" element={<CompanyDashboard />} />
    </Routes>
  );
}

export default App;
