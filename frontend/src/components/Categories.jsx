import "./Categories.css";

function Categories() {
  const categories = [
    { icon: "🌾", title: "Wheat" },
    { icon: "🌽", title: "Corn" },
    { icon: "🍚", title: "Rice" },
    { icon: "🥔", title: "Vegetables" },
    { icon: "🥭", title: "Fruits" },
    { icon: "🌶️", title: "Spices" },
    { icon: "🥛", title: "Dairy" },
    { icon: "🌱", title: "Organic" },
  ];

  return (
    <section className="categories">
      <h2>Browse Categories</h2>

      <div className="category-grid">
        {categories.map((item, index) => (
          <div className="category-card" key={index}>
            <h1>{item.icon}</h1>
            <h3>{item.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categories;