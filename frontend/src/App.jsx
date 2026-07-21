import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Marketplace from "./pages/Marketplace";
import FarmerRegistration from "./pages/FarmerRegistration";
import BuyerRegistration from "./pages/BuyerRegistration";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <div style={{ marginTop: "90px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/farmer" element={<FarmerRegistration />} />
          <Route path="/buyer-registration" element={<BuyerRegistration />} />
          <Route path="/contact" element={<Contact />} />
          
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;