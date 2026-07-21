import "./ServicesSection.css";

function ServicesSection() {
  const services = [
    {
      icon: "🌾",
      title: "Farmer Registration",
      description:
        "Register as a farmer and connect directly with verified buyers across India.",
    },
    {
      icon: "🛒",
      title: "Marketplace",
      description:
        "Buy and sell fresh agricultural products at fair market prices.",
    },
    {
      icon: "🚜",
      title: "Equipment Rental",
      description:
        "Rent modern farming equipment quickly and at affordable prices.",
    },
    {
      icon: "🌱",
      title: "Crop Advisory",
      description:
        "Get expert farming guidance, weather updates, and crop recommendations.",
    },
    {
      icon: "📦",
      title: "Supply Chain",
      description:
        "Efficient logistics and delivery solutions from farm to market.",
    },
    {
      icon: "💳",
      title: "Secure Payments",
      description:
        "Safe, transparent, and hassle-free digital payment system.",
    },
  ];

  return (
    <section className="services">
      <div className="services-header">
        <h2>Our Services</h2>
        <p>
          Empowering farmers and buyers through innovative agricultural
          solutions.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>

            <h3>{service.title}</h3>

            <p>{service.description}</p>

            <button>Learn More</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ServicesSection;