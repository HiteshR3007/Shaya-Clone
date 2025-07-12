import React, { useContext } from "react";
import { CartContext } from "../context/CartContext.jsx";
import "./CartPage.css";

const CartPage = () => {
  const { cartItems, removeFromCart, increaseQty, decreaseQty } = useContext(CartContext);


  const getTotal = () =>
    cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.thumbnail} alt={item.title} />
              <div className="details">
                <h3>{item.title}</h3>

                <div className="quantity-controls">
                  <button onClick={() => decreaseQty(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increaseQty(item.id)}>+</button>
                </div>

                <p>Subtotal: ₹{item.price * item.quantity}</p>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </div>
          ))}
          <h3>Total: ₹{getTotal()}</h3>
        </div>
      )}
    </div>
  );
};

export default CartPage;
