import Footer from "../components/Footer";

function Services() {
  const services = [
    {
      icon: "🌾",
      title: "Farmer Registration",
      desc: "Farmers can create verified profiles, showcase crops, and connect directly with buyers without unnecessary middlemen.",
    },
    {
      icon: "🛒",
      title: "Online Marketplace",
      desc: "Buyers can browse fresh agricultural products, compare prices, and purchase directly from farmers.",
    },
    {
      icon: "🚜",
      title: "Equipment Rental",
      desc: "Access tractors, harvesters, irrigation systems, and modern farming equipment at affordable rental rates.",
    },
    {
      icon: "🌱",
      title: "Crop Advisory",
      desc: "Receive expert guidance on crop selection, fertilizers, pest control, irrigation, and best farming practices.",
    },
    {
      icon: "🌦️",
      title: "Weather Forecast",
      desc: "Stay updated with weather predictions and alerts to improve crop planning and reduce farming risks.",
    },
    {
      icon: "📈",
      title: "Market Price Updates",
      desc: "View the latest mandi and market prices to make informed selling decisions and maximize profits.",
    },
    {
      icon: "🏛️",
      title: "Government Schemes",
      desc: "Explore government subsidies, agricultural loans, insurance schemes, and farmer welfare programs.",
    },
    {
      icon: "🚚",
      title: "Logistics & Delivery",
      desc: "Reliable transportation services ensure fresh produce reaches buyers quickly and safely.",
    },
    {
      icon: "💳",
      title: "Secure Payments",
      desc: "Enjoy safe online transactions with transparent payment processing and secure financial records.",
    },
  ];

  return (
    <>
      <section
        style={{
          padding: "110px 8%",
          background: "#f8fbf7",
          minHeight: "100vh",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "auto",
          }}
        >
          <h1
            style={{
              textAlign: "center",
              color: "#2E7D32",
              fontSize: "42px",
              marginBottom: "20px",
            }}
          >
            Our Services
          </h1>

          <p
            style={{
              textAlign: "center",
              maxWidth: "850px",
              margin: "auto",
              color: "#555",
              lineHeight: "1.8",
              fontSize: "18px",
            }}
          >
            AgroCircle provides a complete digital ecosystem for farmers,
            buyers, and agricultural businesses. Our services simplify farming,
            improve productivity, and create transparent market opportunities.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
              gap: "30px",
              marginTop: "60px",
            }}
          >
            {services.map((service, index) => (
              <div
                key={index}
                style={{
                  background: "#fff",
                  borderRadius: "16px",
                  padding: "30px",
                  boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
                  transition: "0.3s",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <div
                  style={{
                    fontSize: "50px",
                    marginBottom: "15px",
                  }}
                >
                  {service.icon}
                </div>

                <h2
                  style={{
                    color: "#2E7D32",
                    marginBottom: "15px",
                    fontSize: "24px",
                  }}
                >
                  {service.title}
                </h2>

                <p
                  style={{
                    color: "#666",
                    lineHeight: "1.8",
                  }}
                >
                  {service.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Why Choose Our Services */}

          <div
            style={{
              marginTop: "90px",
              background: "#2E7D32",
              color: "#fff",
              padding: "50px",
              borderRadius: "20px",
              textAlign: "center",
            }}
          >
            <h2 style={{ fontSize: "34px", marginBottom: "20px" }}>
              Why Choose AgroCircle?
            </h2>

            <p
              style={{
                maxWidth: "900px",
                margin: "auto",
                lineHeight: "1.8",
                fontSize: "18px",
              }}
            >
              We combine technology, transparency, and innovation to empower
              farmers and simplify agricultural trade. Our goal is to create a
              trusted platform where farmers receive fair prices, buyers get
              quality products, and agricultural services are easily accessible
              across India.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Services;