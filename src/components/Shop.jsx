import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCartPlus, FaFilter, FaSearch, FaTimes } from "react-icons/fa";
import { fetchLaptops } from "../services/api";
import "./Shop.css";

export default function Shop({ goTo, addToCart }) {
  const [laptops, setLaptops] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [priceRange, setPriceRange] = useState([500, 6000]);
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    const loadLaptops = async () => {
      setLoading(true);
      const data = await fetchLaptops();
      setLaptops(data);
      setLoading(false);
    };
    loadLaptops();
  }, []);

  const categories = ["All", "Gaming", "Premium", "Budget"];

  const filteredLaptops = laptops.filter(laptop => {
    const matchesSearch = laptop.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      laptop.specs.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || laptop.category === selectedCategory;
    const matchesPrice = laptop.price >= priceRange[0] && laptop.price <= priceRange[1];
    return matchesSearch && matchesCategory && matchesPrice;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
      rotateX: -15
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.2 }
    }
  };

  return (
    <div className="shop-page">
      {/* Header Section */}
      <motion.div
        className="shop-header"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="shop-title-section">
          <motion.h1
            className="shop-title"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            THE <span className="text-gradient">BASEMENT</span>
          </motion.h1>
          <motion.p
            className="shop-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            ⚡ Hidden treasures await below ⚡
          </motion.p>
        </div>
        <motion.button
          className="back-btn"
          onClick={() => goTo("home")}
          whileHover={{ scale: 1.05, x: -5 }}
          whileTap={{ scale: 0.95 }}
        >
          ← BACK
        </motion.button>
      </motion.div>

      {/* Search and Filter Bar */}
      <motion.div
        className="shop-controls"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <div className="search-wrapper">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="🔍 Search the depths..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          {searchTerm && (
            <motion.button
              className="clear-search"
              onClick={() => setSearchTerm("")}
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaTimes />
            </motion.button>
          )}
        </div>

        <div className="filter-buttons">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              className={`category-btn ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {cat}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Results Count */}
      <motion.div
        className="results-count"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        {filteredLaptops.length} {filteredLaptops.length === 1 ? 'laptop' : 'laptops'} found
      </motion.div>

      {/* Products Grid */}
      {loading ? (
        <div className="loading-container">
          <motion.div
            className="loading-spinner"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
          <p>Descending into the basement...</p>
        </div>
      ) : (
        <motion.div
          className="products-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <AnimatePresence mode="popLayout">
            {filteredLaptops.map((laptop) => (
              <motion.div
                key={laptop.id}
                variants={itemVariants}
                layout
                exit="exit"
                className="product-card-wrapper"
              >
                <motion.div
                  className="product-card"
                  whileHover={{
                    y: -10,
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className="product-image-container">
                    <motion.img
                      src={laptop.img}
                      alt={laptop.name}
                      className="product-image"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                    />
                    <div className="product-badge">{laptop.category}</div>
                    <motion.div
                      className="product-overlay"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    >
                      <motion.button
                        className="quick-view-btn"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        Quick View
                      </motion.button>
                    </motion.div>
                  </div>

                  <div className="product-info">
                    <h3 className="product-name">{laptop.name}</h3>
                    <p className="product-specs">{laptop.specs}</p>

                    <div className="product-footer">
                      <div className="price-section">
                        <span className="product-price">${laptop.price.toLocaleString()}</span>
                        {laptop.inStock && (
                          <span className="stock-badge">In Stock</span>
                        )}
                      </div>
                      <motion.button
                        className="add-cart-btn"
                        onClick={() => addToCart(laptop)}
                        whileHover={{
                          scale: 1.1,
                          boxShadow: "0 0 25px var(--medusa-green-glow)"
                        }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FaCartPlus />
                        <span>Add</span>
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      )}

      {filteredLaptops.length === 0 && !loading && (
        <motion.div
          className="no-results"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <div className="no-results-icon">🐍</div>
          <h3>The basement is empty...</h3>
          <p>No treasures found. Try different search terms or filters.</p>
        </motion.div>
      )}
    </div>
  );
}
