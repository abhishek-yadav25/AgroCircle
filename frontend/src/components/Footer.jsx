import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Company */}

        <div className="footer-section">
          <h2>🌾 AgroCircle</h2>

          <p>
            Connecting Farmers, Buyers and Agricultural Service
            Providers through a modern digital agriculture platform.
          </p>
        </div>

        {/* Quick Links */}

        <div className="footer-section">

          <h3>Quick Links</h3>

          <ul>

            <li><a href="/">Home</a></li>

            <li><a href="/about">About</a></li>

            <li><a href="/services">Services</a></li>

            <li><a href="/marketplace">Marketplace</a></li>

            <li><a href="/contact">Contact</a></li>

          </ul>

        </div>

        {/* Contact */}

        <div className="footer-section">

          <h3>Contact Us</h3>

          <p>📍 Navi Mumbai, Maharashtra</p>

          <p>📞 +91 9876543210</p>

          <p>📧 info@agrocircle.com</p>

        </div>

        {/* Social */}

        <div className="footer-section">

          <h3>Follow Us</h3>

          <div className="social-icons">

            <a href="#">🌐</a>

            <a href="#">📘</a>

            <a href="#">📸</a>

            <a href="#">🐦</a>

            <a href="#">▶️</a>

          </div>

        </div>

      </div>

      <hr />

      <div className="footer-bottom">

        © 2026 AgroCircle | All Rights Reserved | Designed with ❤️

      </div>

    </footer>
  );
}

export default Footer;