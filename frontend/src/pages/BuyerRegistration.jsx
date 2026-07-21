import { useState } from "react";
import axios from "axios";
import Footer from "../components/Footer";
import "./BuyerRegistration.css";

function BuyerRegistration() {
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    email: "",
    company: "",
    businessType: "",
    state: "",
    district: "",
    address: "",
    pincode: "",
    crop: "",
    quantity: "",
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

  const buyerData = {
    name: form.name,
    mobile: form.mobile,
    email: form.email,
    company: form.company,
    business_type: form.businessType,
    state: form.state,
    district: form.district,
    address: form.address,
    pincode: form.pincode,
    crop: form.crop,
    quantity: form.quantity,
  };

  try {

    console.log("Sending Data:", buyerData);

    const response = await axios.post(
      "http://127.0.0.1:8000/api/buyers/",
      buyerData
    );


    console.log("Success:", response.data);

    setMessage("✅ Buyer Registered Successfully!");


    setForm({
      name: "",
      mobile: "",
      email: "",
      company: "",
      businessType: "",
      state: "",
      district: "",
      address: "",
      pincode: "",
      crop: "",
      quantity: "",
    });


  } catch (error) {

    console.log("Backend Error:", error.response?.data);

    alert(
      JSON.stringify(
        error.response?.data || "Server not connected",
        null,
        2
      )
    );

  } finally {

    setLoading(false);

  }
};
  
  return (
    <>
      <div className="buyer-page">
        <div className="buyer-form">

          <h1>Buyer Registration</h1>
          <p>Register to purchase crops directly from verified farmers.</p>

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

            <input
              name="company"
              placeholder="Company Name"
              value={form.company}
              onChange={handleChange}
              required
            />

            <input
              name="businessType"
              placeholder="Business Type"
              value={form.businessType}
              onChange={handleChange}
              required
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

            <textarea
              name="address"
              placeholder="Address"
              value={form.address}
              onChange={handleChange}
            />

            <input
              name="pincode"
              placeholder="PIN Code"
              value={form.pincode}
              onChange={handleChange}
            />

            <input
              name="crop"
              placeholder="Crop Required"
              value={form.crop}
              onChange={handleChange}
              required
            />

            <input
              name="quantity"
              placeholder="Quantity Required (Kg/Ton)"
              value={form.quantity}
              onChange={handleChange}
              required
            />

            <button type="submit" disabled={loading}>
              {loading ? "Registering..." : "Register Now"}
            </button>

          </form>

        </div>
      </div>

      <Footer />
    </>
  );
}

export default BuyerRegistration;