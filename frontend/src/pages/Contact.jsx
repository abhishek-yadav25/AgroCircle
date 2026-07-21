import "./Contact.css";
import Footer from "../components/Footer";
import farmerImg from "../assets/images/farmer.png";

function Contact() {
  return (
    <>
      <div className="contact-page">

                            {/* Contact Information */}

        <div className="contact-info">
          <h1>📞 Contact AgroCircle</h1>

          <p>
            We'd love to hear from you! Whether you're a buyer, farmer, or
            partner, our team is always ready to assist you.
          </p>

          <div className="info-box">
            <h3>📍 Address</h3>
            <p>Navi Mumbai, Maharashtra, India</p>
          </div>

          <div className="info-box">
            <h3>📞 Phone</h3>
            <p>+91 9876543210</p>
          </div>

          <div className="info-box">
            <h3>📧 Email</h3>
            <p>support@agrocircle.com</p>
          </div>
        </div>

                                {/* Farmer Section */}

        <div className="farmer-message">
          <div className="farmer-content">

            <h2>🌾 The Hands That Feed Our Nation</h2>

            <p>
              Behind every fresh harvest is a hardworking farmer who wakes
              before sunrise, nurtures every crop with dedication, and works
              tirelessly so that healthy food reaches our homes.
            </p>

            <p>
              At AgroCircle, we believe every farmer deserves recognition,
              respect, and fair value for their efforts. Every purchase you make
              directly supports farming families and strengthens rural
              communities across India.
            </p>

            <div className="quote-section">
  <img
    src={farmerImg}
    alt="Farmer"
    className="farmer-image"
  />

  <blockquote>
    "Every meal tells the story of a farmer's dedication. When you buy
    directly from farmers, you're not just purchasing food—you're
    investing in dreams, families, and a better future."
  </blockquote>
</div>

            <div className="farmer-points">
              <div>🌱 Fresh produce directly from trusted farmers.</div>
              <div>🤝 Fair prices that truly benefit farming families.</div>
              <div>🚜 Supporting sustainable agriculture and rural communities.</div>
              <div>❤️ Together we can build a stronger farming future.</div>
            </div>

          </div>
        </div>

      </div>

      <Footer />
    </>
  );
}

export default Contact;