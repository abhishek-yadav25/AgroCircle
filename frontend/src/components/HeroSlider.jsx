import { useEffect, useState } from "react";
import img1 from "../assets/images/img_1.jpg";
import img2 from "../assets/images/img_2.jpg";
import img3 from "../assets/images/img_3.jpg";
import "./HeroSlider.css";
import { useNavigate } from "react-router-dom";


function HeroSlider() {
  const navigate = useNavigate();
  const images = [img1, img2, img3];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
                                  {/* HERO SECTION */}

      <section className="hero">

        <img
          src={images[current]}
          alt="Farmer"
          className="hero-image"
        />

        <div className="overlay"></div>

        <div className="hero-content">

          <h1>
            Welcome to AgroCircle 🌾
          </h1>

          <h2>
            Empowering Farmers.
            Connecting Buyers.
            Growing Together.
          </h2>

          <p>
            AgroCircle is a digital agriculture platform connecting
            farmers, buyers and agricultural service providers
            across India.
          </p>

          <div className="hero-buttons">

    <button
        className="primary-btn"
        onClick={() => navigate("/farmer")}
>
        Register as Farmer
    </button>

    <button
       className="secondary-btn"
      onClick={() => navigate("/marketplace")}
>
       Explore Marketplace
    </button>   

          </div>

        </div>

      </section>


                                    {/* FEATURES */}

      <section className="feature-section">

        <div className="feature-card">
          <h1>🌾</h1>
          <h3>Verified Farmers</h3>
          <p>Trusted farmers across India.</p>
        </div>

        <div className="feature-card">
          <h1>🤝</h1>
          <h3>Trusted Buyers</h3>
          <p>Direct connection with buyers.</p>
        </div>

        <div className="feature-card">
          <h1>🚚</h1>
          <h3>Fast Delivery</h3>
          <p>Efficient logistics support.</p>
        </div>

        <div className="feature-card">
          <h1>💳</h1>
          <h3>Secure Payments</h3>
          <p>Safe and transparent transactions.</p>
        </div>

      </section>

                                      {/* STATS */}

      <section className="stats">

        <div>
          <h2>10,000+</h2>
          <p>Registered Farmers</p>
        </div>

        <div>
          <h2>2,500+</h2>
          <p>Verified Buyers</p>
        </div>

        <div>
          <h2>500+</h2>
          <p>Products Listed</p>
        </div>

        <div>
          <h2>24/7</h2>
          <p>Customer Support</p>
        </div>

      </section>
    </>
  );
}

export default HeroSlider;