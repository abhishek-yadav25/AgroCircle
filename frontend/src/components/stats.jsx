import "./Stats.css";

function Stats() {
  const stats = [
    {
      number: "2,500+",
      title: "Farmers"
    },
    {
      number: "1,200+",
      title: "Buyers"
    },
    {
      number: "8,000+",
      title: "Products"
    },
    {
      number: "150+",
      title: "Villages"
    }
  ];

  return (
    <section className="stats">

      <h2>AgroCircle Community</h2>

      <div className="stats-container">

        {stats.map((item, index) => (

          <div className="stat-card" key={index}>

            <h1>{item.number}</h1>

            <p>{item.title}</p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Stats;