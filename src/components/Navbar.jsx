import { motion } from "framer-motion";
import { FaShoppingCart, FaLaptop, FaHome } from "react-icons/fa";
import "./Navbar.css";

export default function Navbar({ goTo, cartCount }) {
  return (
    <motion.nav
      className="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="logo" onClick={() => goTo("home")}>
        <div className="medusa-logo-circle">
          <img
            src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200&h=200&fit=crop&q=80"
            alt="Medusa"
            className="medusa-logo-img"
          />
        </div>
        <span className="logo-text">
          MEDUSA'S <span className="highlight">BASEMENT</span>
        </span>
      </div>

      <div className="nav-items">
        <motion.button
          className="nav-btn"
          onClick={() => goTo("home")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaHome style={{ marginRight: '8px' }} />
          HOME
        </motion.button>
        <motion.button
          className="nav-btn"
          onClick={() => goTo("shop")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaLaptop style={{ marginRight: '8px' }} />
          SHOP
        </motion.button>
        <motion.button
          className="nav-btn cart-btn"
          onClick={() => goTo("cart")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaShoppingCart />
          <span className="count">{cartCount}</span>
        </motion.button>
      </div>
    </motion.nav>
  );
}
