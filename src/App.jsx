import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./Components/Home";
import AboutPage from "./Components/AboutPage";
import ContactPage from "./Components/ContactPage";
import ServicesPage from "./Components/ServicesPage";
import CivilWorksPage from "./Components/Services/CivilWorksPage";
import Loader from "./Components/Loader";
import ElectricalWorks from "./Components/Services/ElectricalWorks";
import FireFittingWorks from "./Components/Services/FireFittingWorks";
import HVACWorks from "./Components/Services/HVACWorks";
import InteriorWorks from "./Components/Services/InteriorWorks";
import LandscapingWorks from "./Components/Services/Landscaping";
import PaintingWorks from "./Components/Services/Painting";
import PlumbingWorks from "./Components/Services/PlumbingWorks";
import WaterProofingWorks from "./Components/Services/WaterProofingWorks";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 800);
  }, []);

  return (
    <Router>
      {loading ? (
        <Loader />
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/civilworks" element={<CivilWorksPage />} />
          <Route path="/services/electrical-works" element={<ElectricalWorks />} />
          <Route path="/services/fire-fitting-works" element={<FireFittingWorks />} />
          <Route path="/services/hvac-works" element={<HVACWorks />} />
          <Route path="/services/interior-works" element={<InteriorWorks />} />
          <Route path="/services/landscaping-works" element={<LandscapingWorks />} />
          <Route path="/services/painting-works" element={<PaintingWorks />} />
          <Route path="/services/plumbing-works" element={<PlumbingWorks />} />
          <Route path="/services/water-proofing-works" element={<WaterProofingWorks />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      )}
    </Router>
  );
}

export default App;
