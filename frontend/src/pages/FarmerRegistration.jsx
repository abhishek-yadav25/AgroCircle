import { useState } from "react";
import "./FarmerRegistration.css";
import Footer from "../components/Footer";
import axios from "axios";

function FarmerRegistration() {

  const [form, setForm] = useState({
    name: "",
    mobile: "",
    email: "",
    gender: "",
    dob: "",
    aadhaar: "",
    state: "",
    district: "",
    village: "",
    address: "",
    pincode: "",
    farmSize: "",
    farmingExperience: "",
    irrigation: "",
    crop: "",
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setMessage("");

    try {
      await axios.post("http://127.0.0.1:8000/api/farmers/", {
        name: form.name,
        mobile: form.mobile,
        email: form.email,
        gender: form.gender,
        dob: form.dob,
        aadhaar: form.aadhaar,
        state: form.state,
        district: form.district,
        village: form.village,
        address: form.address,
        pincode: form.pincode,
        farm_size: form.farmSize,
        farming_experience: form.farmingExperience,
        irrigation: form.irrigation,
        crop: form.crop,
      });

      setMessage("✅ Farmer Registered Successfully!");

      setForm({
        name: "",
        mobile: "",
        email: "",
        gender: "",
        dob: "",
        aadhaar: "",
        state: "",
        district: "",
        village: "",
        address: "",
        pincode: "",
        farmSize: "",
        farmingExperience: "",
        irrigation: "",
        crop: "",
      });

    } catch (error) {
      console.log(error.response?.data);

      if (error.response?.data) {
        alert(JSON.stringify(error.response.data, null, 2));
      } else {
        alert("Registration Failed!");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="farmer-page">
        <div style={{maxWidth:"900px",width:"100%"}}>
          <div className="farmer-hero">
            <h1>🌾 Join AgroCircle Today</h1>
            <p>Register your farm, connect with verified buyers, get better prices and grow your agricultural business.</p>
          </div>

          <div className="benefits-section">
            <h2>Why Register with AgroCircle?</h2>
            <div className="benefits-grid">
              <div className="benefit-card">🌱<h3>Direct Buyers</h3><p>Sell without middlemen.</p></div>
              <div className="benefit-card">💰<h3>Better Prices</h3><p>Fair market value.</p></div>
              <div className="benefit-card">🚜<h3>Services</h3><p>Access farming services.</p></div>
              <div className="benefit-card">🌦<h3>Updates</h3><p>Weather & market alerts.</p></div>
            </div>
          </div>

          <div className="farmer-form">
            <h1>Farmer Registration</h1>
            <p>Fill in your details below.</p>

            {message && (
              <div className="success-message">
                  {message}
              </div>
           )}

           <form onSubmit={handleSubmit}>
  <input
    name="name"
    placeholder="Full Name"
    value={form.name}
    onChange={handleChange}
    required
  />

  <input
    name="mobile"
    placeholder="Mobile Number"
    value={form.mobile}
    onChange={handleChange}
    required
  />

  <input
    type="email"
    name="email"
    placeholder="Email Address"
    value={form.email}
    onChange={handleChange}
    required
  />

  <select name="gender" value={form.gender} onChange={handleChange} required>
    <option value="">Select Gender</option>
    <option>Male</option>
    <option>Female</option>
    <option>Other</option>
  </select>

  <input
    type="date"
    name="dob"
    value={form.dob}
    onChange={handleChange}
    required
  />

  <input
    name="aadhaar"
    placeholder="Aadhaar Number"
    value={form.aadhaar}
    onChange={handleChange}
  />

  <input
    name="state"
    placeholder="State"
    value={form.state}
    onChange={handleChange}
    required
  />

  <input
    name="district"
    placeholder="District"
    value={form.district}
    onChange={handleChange}
    required
  />

  <input
    name="village"
    placeholder="Village"
    value={form.village}
    onChange={handleChange}
    required
  />

  <textarea
    name="address"
    placeholder="Full Address"
    value={form.address}
    onChange={handleChange}
    rows="3"
  />

  <input
    name="pincode"
    placeholder="PIN Code"
    value={form.pincode}
    onChange={handleChange}
  />

  <input
    type="number"
    name="farmSize"
    placeholder="Farm Size (Acres)"
    value={form.farmSize}
    onChange={handleChange}
  />

  <input
    type="number"
    name="farmingExperience"
    placeholder="Farming Experience (Years)"
    value={form.farmingExperience}
    onChange={handleChange}
  />

  <select
    name="irrigation"
    value={form.irrigation}
    onChange={handleChange}
  >
    <option value="">Irrigation Type</option>
    <option>Rainfed</option>
    <option>Canal</option>
    <option>Drip</option>
    <option>Sprinkler</option>
    <option>Borewell</option>
  </select>

  <select
    name="crop"
    value={form.crop}
    onChange={handleChange}
    required
  >
    <option value="">Select Crop</option>
    <option>Wheat</option>
    <option>Rice</option>
    <option>Corn</option>
    <option>Tomato</option>
    <option>Potato</option>
    <option>Onion</option>
    <option>Mango</option>
  </select>

  <button type="submit" disabled={loading}>
    {loading ? "Registering..." : "Register Now"}
  </button>
</form>

</div>

<div className="important-note">
  <h2>📢 Important Information</h2>
  <ul>
    <li>Registration is completely free.</li>
    <li>Provide accurate information for verification.</li>
    <li>Your data is kept secure.</li>
    <li>Verified farmers receive full platform access.</li>
  </ul>
</div>

</div>
</div>

<Footer />
</>
);
}

export default FarmerRegistration;
