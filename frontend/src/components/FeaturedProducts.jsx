import "./FeaturedProducts.css";
import wheat from "../images/img_1.jpg";
import vegetables from "../images/img_2.jpg";
import fruits from "../images/img_3.jpg";

function FeaturedProducts() {
  const products = [
    {
      image: wheat,
      name: "Organic Wheat",
      price: "₹2,500 / Quintal",
      category: "Grains",
    },
    {
      image: vegetables,
      name: "Fresh Vegetables",
      price: "₹45 / Kg",
      category: "Vegetables",
    },
    {
      image: fruits,
      name: "Seasonal Fruits",
      price: "₹120 / Kg",
      category: "Fruits",
    },
  ];

  return (
    
    <section className="featured-products">
      <h2>Featured Products</h2>
      <p>Fresh products directly from farmers</p>

      <div className="product-grid">
        {products.map((product, index) => (
          <div className="product-card" key={index}>
            <img src={product.image} alt={product.name} />

            <div className="product-content">
              <span className="category">{product.category}</span>

              <h3>{product.name}</h3>

              <h4>{product.price}</h4>

              <button>View Details</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedProducts;