import React, { useEffect, useState,useContext } from "react";
import "./ProductGrid.css";
import fashionJewellery from "../prodData/products";
import { CartContext } from "../context/CartContext.jsx";

const categories = [
  "beauty",
  "fragrances",
  "womens-bags",
  "womens-dresses",
  "womens-jewellery",
  "womens-watches"
];

const ProductGrid = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const { addToCart } = useContext(CartContext);


  useEffect(() => {
    setProducts(fashionJewellery);
  }, []);

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((p) => p.category === selectedCategory);

      return (
        <div className="main-layout">
          <aside className="sidebar">
            <h3>Filter by Category</h3>
            <ul>
              <li
                onClick={() => setSelectedCategory("all")}
                className={selectedCategory === "all" ? "active" : ""}
              >
                All
              </li>
              {categories.map((cat) => (
                <li
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={selectedCategory === cat ? "active" : ""}
                >
                  {cat.replace(/-/g, " ")}
                </li>
              ))}
            </ul>
          </aside>
      
          <section className="product-grid">
            {filteredProducts.map((product) => (
              <div className="product-card" key={product.id}>
                <img src={product.thumbnail} alt={product.title} />
                <h3>{product.title}</h3>
                <p>₹{product.price}</p>
                <p>⭐ {product.rating}</p>
                <button onClick={() => addToCart(product)}>Add to Cart</button>
              </div>
            ))}
          </section>
        </div>
      );
      
};

export default ProductGrid;
