import { motion, AnimatePresence } from "framer-motion";
import { FaTrash, FaShoppingBag, FaArrowLeft, FaMinus, FaPlus } from "react-icons/fa";
import { useState, useEffect } from "react";
import "./Cart.css";


export default function Cart({ cart, goTo, removeFromCart }) {
  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    const newQtyMap = {};
    cart.forEach((item, index) => {
      newQtyMap[index] = quantities[index] || 1;
    });
    setQuantities(newQtyMap);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cart.length]);

  const handleQuantityChange = (index, delta) => {
    setQuantities(prev => {
      const newQty = Math.max(1, (prev[index] || 1) + delta);
      return { ...prev, [index]: newQty };
    });
  };

  const getTotal = () => {
    return cart.reduce((sum, item, index) => {
      return sum + (item.price * (quantities[index] || 1));
    }, 0);
  };

  const getItemCount = () => {
    return Object.values(quantities).reduce((sum, qty) => sum + qty, 0);
  };

  return (
    <div className="cart-page">
      <div className="cart-container">
        <motion.div
          className="cart-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="cart-title-section">
            <FaShoppingBag className="cart-icon" />
            <h1>YOUR <span className="text-gradient">CART</span></h1>
          </div>
          <motion.button
            className="btn-medusa"
            onClick={() => goTo("shop")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaArrowLeft style={{ marginRight: '8px' }} />
            CONTINUE SHOPPING
          </motion.button>
        </motion.div>

        {cart.length === 0 ? (
          <motion.div
            className="empty-cart"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="empty-cart-icon">🛒</div>
            <h2>Your cart is empty</h2>
            <p>Add some powerful laptops to your collection</p>
            <motion.button
              className="btn-medusa"
              onClick={() => goTo("shop")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              EXPLORE ARMORY
            </motion.button>
          </motion.div>
        ) : (
          <div className="cart-content">
            <div className="cart-items">
              <AnimatePresence>
                {cart.map((item, index) => (
                  <motion.div
                    key={`${item.id}-${index}`}
                    className="cart-item"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50, scale: 0.8 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <div className="cart-item-image-wrapper">
                      <img src={item.img} alt={item.name} className="cart-item-image" />
                      <div className="cart-item-glow"></div>
                    </div>
                    <div className="cart-item-details">
                      <h3 className="cart-item-name">{item.name}</h3>
                      <p className="cart-item-specs">{item.specs}</p>
                      <div className="cart-item-controls">
                        <div className="quantity-control">
                          <motion.button
                            className="quantity-btn"
                            onClick={() => handleQuantityChange(index, -1)}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <FaMinus />
                          </motion.button>
                          <span className="quantity-value">{quantities[index] || 1}</span>
                          <motion.button
                            className="quantity-btn"
                            onClick={() => handleQuantityChange(index, 1)}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <FaPlus />
                          </motion.button>
                        </div>
                        <div className="cart-item-price">
                          ${((item.price * (quantities[index] || 1)).toLocaleString())}
                        </div>
                        <motion.button
                          className="remove-btn"
                          onClick={() => removeFromCart && removeFromCart(index)}
                          whileHover={{ scale: 1.1, rotate: 90 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <FaTrash />
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            <motion.div
              className="cart-summary"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="summary-card">
                <h2 className="summary-title">ORDER SUMMARY</h2>
                <div className="summary-line">
                  <span>Items ({getItemCount()})</span>
                  <span>${getTotal().toLocaleString()}</span>
                </div>
                <div className="summary-line">
                  <span>Shipping</span>
                  <span className="free-shipping">FREE</span>
                </div>
                <div className="summary-divider"></div>
                <div className="summary-total">
                  <span>TOTAL</span>
                  <span className="total-amount">${getTotal().toLocaleString()}</span>
                </div>
                <motion.button
                  className="checkout-btn"
                  onClick={() => goTo("checkout")}
                  whileHover={{ scale: 1.02, boxShadow: "0 0 40px var(--medusa-green-glow)" }}
                  whileTap={{ scale: 0.98 }}
                >
                  PROCEED TO CHECKOUT
                </motion.button>
                <motion.button
                  className="continue-shopping-btn"
                  onClick={() => goTo("shop")}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  CONTINUE SHOPPING
                </motion.button>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
}
