import { useState, useEffect } from "react";
import axios from "axios";

import "./Marketplace.css";
import Footer from "../components/Footer";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";

function Marketplace() {
  const [products, setProducts] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/products/")
      .then((response) => {
        console.log("Products:", response.data);
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  const handleOpen = (product) => {
    setSelectedProduct(product);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedProduct(null);
  };

  return (
    <>
                               {/* Header */}


      <section className="marketplace">
        <div className="market-header">
          <h1>🌾 AgroCircle Marketplace</h1>

          <p>
            Buy fresh agricultural products directly from verified farmers
            across India.
          </p>
        </div>

                              {/* Products */}


        <div className="product-grid">
          {products.map((product) => (
            <div className="product-card" key={product.id}>
              <div className="product-image">
                <img
                  src={
                    product.image
                      ? `http://127.0.0.1:8000${product.image}`
                      : "https://via.placeholder.com/250x180?text=No+Image"
                  }
                  alt={product.name}
                  className="product-img"
                />
              </div>

              <h2>{product.name}</h2>

              <p className="rating">{product.rating}</p>

              <p>
                <strong>Category:</strong> {product.category}
              </p>

              <p>
                <strong>Seller:</strong> {product.seller}
              </p>

              <p>
                <strong>Location:</strong> {product.location}
              </p>

              <h3>₹{product.price}</h3>

              <p className="stock">
                Available: {product.stock}
              </p>

              <button onClick={() => handleOpen(product)}>
                View Details
              </button>
            </div>
          ))}
        </div>


                                  {/* Statistics */}


        <section className="market-stats">
          <div>
            <h2>500+</h2>
            <p>Products</p>
          </div>

          <div>
            <h2>1200+</h2>
            <p>Farmers</p>
          </div>

          <div>
            <h2>20+</h2>
            <p>States</p>
          </div>

          <div>
            <h2>24×7</h2>
            <p>Support</p>
          </div>
        </section>

                                  {/* Why Choose */}


        <section className="why-market">
          <h2>Why Buy From AgroCircle?</h2>

          <div className="why-grid">
            <div>
              <h3>🌾 Fresh Produce</h3>
              <p>Products are sourced directly from farmers.</p>
            </div>

            <div>
              <h3>✔ Verified Sellers</h3>
              <p>Only trusted and verified farmers are listed.</p>
            </div>

            <div>
              <h3>💳 Secure Payments</h3>
              <p>Safe and transparent transactions.</p>
            </div>

            <div>
              <h3>🚚 Fast Delivery</h3>
              <p>Reliable logistics support across India.</p>
            </div>
          </div>
        </section>

                                   {/* CTA */}


        <section className="cta">
          <h2>Want to Sell Your Products?</h2>

          <p>
            Join thousands of farmers using AgroCircle to reach buyers across
            India.
          </p>

          <button>Register as Farmer</button>
        </section>
      </section>

                           {/* Product Details Dialog */}

      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth
        maxWidth="sm"
        
      >
        {selectedProduct && (
          <>
            <DialogTitle
              sx={{
                textAlign: "center",
                color: "#2E7D32",
                fontWeight: "bold",
              }}
            >
              {selectedProduct.name}
            </DialogTitle>

            <DialogContent sx={{ p: 2 }}>
              <div
                style={{
                  display: "flex",
                  gap: "25px",
                  alignItems: "flex-start",
                }}
              >
                <img
                  src={`http://127.0.0.1:8000${selectedProduct.image}`}
                  alt={selectedProduct.name}
                  style={{
                    width: "280px",
                    height: "280px",
                    objectFit: "cover",
                    borderRadius: "10px",
                  }}
                />

                <div style={{ flex: 1 }}>
                  <h2 style={{ color: "#2E7D32", marginBottom: "10px" }}>
                    {selectedProduct.name}
                  </h2>

                  <h3>{selectedProduct.rating}</h3>

                  <p>
                    <strong>Category:</strong> {selectedProduct.category}
                  </p>

                  <p>
                    <strong>Seller:</strong> {selectedProduct.seller}
                  </p>

                  <p>
                    <strong>Location:</strong> {selectedProduct.location}
                  </p>

                  <p>
                    <strong>Price:</strong> ₹{selectedProduct.price}
                  </p>

                  <p>
                    <strong>Available Stock:</strong> {selectedProduct.stock}
                  </p>

                  <p style={{ marginTop: "15px" }}>
                    {selectedProduct.description}
                  </p>
                </div>
              </div>
            </DialogContent>

            <DialogActions
              sx={{
                px: 3,
                py: 2,
                justifyContent: "space-between",
              }}
            >
              <Button
                variant="contained"
                color="success"
                onClick={() =>
                  alert(
                    "Contact feature will be added with backend integration."
                  )
                }
              >
                Contact Farmer
              </Button>

              <Button
                variant="outlined"
                color="error"
                onClick={handleClose}
              >
                Close
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>

      <Footer />
    </>
  );
}

export default Marketplace;