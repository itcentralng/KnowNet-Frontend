import "./App.css";
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Contact from "./pages/ContactUs/Contact";
import CompanyDashboard from "./pages/CompanyDashboard/CompanyDashboard";
import AdvertDashboard from "./pages/AdvertDashboard/AdvertDashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/company-dashboard" element={<CompanyDashboard />} />
      <Route path="/advert-dashboard" element={<AdvertDashboard />} />
    </Routes>
  );
}

export default App;
