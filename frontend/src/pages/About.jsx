import "./About.css";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <section className="about">
        <div className="about-container">
          <h1>About AgroCircle</h1>

          <p className="about-intro">
            AgroCircle is a smart digital agriculture platform designed to
            bridge the gap between farmers, buyers, and agricultural service
            providers. Our platform empowers farmers with modern technology,
            transparent pricing, and direct market access while helping buyers
            source fresh agricultural products efficiently.
          </p>

                        {/* Mission Vision Values */}

          <div className="about-grid">
            <div className="card">
              <h2>🌱 Our Mission</h2>
              <p>
                To empower every farmer through digital transformation by
                providing market access, expert guidance, government scheme
                awareness, and innovative farming solutions.
              </p>
            </div>

            <div className="card">
              <h2>🌍 Our Vision</h2>
              <p>
                To become India's most trusted agriculture ecosystem where
                farmers and buyers connect seamlessly through technology,
                ensuring fair prices and sustainable farming.
              </p>
            </div>

            <div className="card">
              <h2>🤝 Our Values</h2>
              <p>
                Transparency, Innovation, Sustainability, Farmer-First
                Approach, Trust, Collaboration and Continuous Growth.
              </p>
            </div>
          </div>

                              {/* Why AgroCircle */}

          <div className="why-section">
            <h2>Why Choose AgroCircle?</h2>

            <div className="features">
              <div className="feature">
                <h3>🌾 Direct Farmer to Buyer Connection</h3>
                <p>
                  Eliminate unnecessary middlemen and ensure better prices for
                  farmers while offering fresh produce to buyers.
                </p>
              </div>

              <div className="feature">
                <h3>📈 Market Price Updates</h3>
                <p>
                  Stay informed with real-time agricultural market prices to
                  make better selling and purchasing decisions.
                </p>
              </div>

              <div className="feature">
                <h3>🚜 Agricultural Services</h3>
                <p>
                  Access equipment rental, expert consultations, crop advisory,
                  and farming resources from one platform.
                </p>
              </div>

              <div className="feature">
                <h3>🌦 Weather Information</h3>
                <p>
                  Receive weather forecasts and farming alerts to improve crop
                  planning and productivity.
                </p>
              </div>
            </div>
          </div>

                                 {/* Objectives */}

          <div className="objectives">
            <h2>Our Objectives</h2>

            <ul>
              <li>✔ Connect farmers directly with verified buyers.</li>
              <li>✔ Promote digital agriculture across India.</li>
              <li>✔ Provide transparent pricing information.</li>
              <li>✔ Encourage sustainable farming practices.</li>
              <li>✔ Support rural economic development.</li>
              <li>✔ Improve farmers' income through technology.</li>
            </ul>
          </div>

                               {/* Statistics */}

          <div className="stats">
            <div>
              <h2>5000+</h2>
              <p>Registered Farmers</p>
            </div>

            <div>
              <h2>1200+</h2>
              <p>Verified Buyers</p>
            </div>

            <div>
              <h2>20+</h2>
              <p>States Connected</p>
            </div>

            <div>
              <h2>100%</h2>
              <p>Secure Platform</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default About;