import { motion } from "framer-motion";
import { FaShoppingCart, FaLaptop, FaHome } from "react-icons/fa";
import "./Navbar.css";

const MedusaIcon = () => (
  <svg viewBox="0 0 100 100" className="medusa-icon-svg">
    <defs>
      <filter id="glow">
        <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    
    {/* Snakes Hair */}
    <path d="M50 20 C 30 10, 10 30, 20 50" stroke="#00ff88" strokeWidth="3" fill="none" filter="url(#glow)" />
    <path d="M50 20 C 70 10, 90 30, 80 50" stroke="#00ff88" strokeWidth="3" fill="none" filter="url(#glow)" />
    <path d="M50 20 C 40 5, 20 10, 15 25" stroke="#00ff88" strokeWidth="3" fill="none" filter="url(#glow)" />
    <path d="M50 20 C 60 5, 80 10, 85 25" stroke="#00ff88" strokeWidth="3" fill="none" filter="url(#glow)" />
    
    {/* Face Shape */}
    <path d="M30 40 Q 50 90 70 40" stroke="#00ff88" strokeWidth="2" fill="none" filter="url(#glow)" />
    <path d="M30 40 Q 50 10 70 40" stroke="#00ff88" strokeWidth="2" fill="none" filter="url(#glow)" />
    
    {/* Eyes */}
    <circle cx="42" cy="45" r="3" fill="#00ff88" filter="url(#glow)" />
    <circle cx="58" cy="45" r="3" fill="#00ff88" filter="url(#glow)" />
    
    {/* Mouth - Evil Smile */}
    <path d="M40 65 Q 50 75 60 65" stroke="#00ff88" strokeWidth="2" fill="none" filter="url(#glow)" />
  </svg>
);

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
          <MedusaIcon />
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