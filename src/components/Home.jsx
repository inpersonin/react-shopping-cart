import Marquee from "react-fast-marquee";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaRocket, FaLaptop, FaGamepad, FaBolt, FaGem, FaShieldAlt } from "react-icons/fa";
import { useRef } from "react";
import "./Home.css";

// Animated Medusa Logo Component
const AnimatedMedusa = ({ opacity }) => {
  return (
    <motion.div
      className="medusa-logo-container"
      style={{ opacity }}
    >
      <svg
        viewBox="0 0 400 400"
        className="medusa-svg"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Medusa Head - Main Circle */}
        <motion.circle
          cx="200"
          cy="200"
          r="120"
          fill="none"
          stroke="#00ff88"
          strokeWidth="3"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />

        {/* Snakes - Animated */}
        {[...Array(8)].map((_, i) => {
          const angle = (i * 45) * (Math.PI / 180);
          const x = 200 + Math.cos(angle) * 120;
          const y = 200 + Math.sin(angle) * 120;
          return (
            <motion.g key={i}>
              <motion.path
                d={`M ${x} ${y} Q ${200 + Math.cos(angle) * 80} ${200 + Math.sin(angle) * 80} ${200 + Math.cos(angle) * 150} ${200 + Math.sin(angle) * 150}`}
                fill="none"
                stroke="#00ff88"
                strokeWidth="2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{
                  pathLength: 1,
                  opacity: [0.3, 1, 0.3],
                  pathOffset: [0, 0.5, 1]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut"
                }}
              />
              <motion.circle
                cx={x}
                cy={y}
                r="8"
                fill="#00ff88"
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.15,
                  ease: "easeInOut"
                }}
              />
            </motion.g>
          );
        })}


        {/* Glow Effect */}
        <motion.circle
          cx="200"
          cy="200"
          r="140"
          fill="none"
          stroke="#00ff88"
          strokeWidth="1"
          opacity="0.3"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.4, 0.1]
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </svg>

      {/* Particle Effects */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="particle"
          initial={{
            x: "50%",
            y: "50%",
            opacity: 0
          }}
          animate={{
            x: `${50 + (Math.random() - 0.5) * 100}%`,
            y: `${50 + (Math.random() - 0.5) * 100}%`,
            opacity: [0, 1, 0],
            scale: [0, 1, 0]
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut"
          }}
        />
      ))}
    </motion.div>
  );
};

export default function Home({ goTo }) {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const heroY = useTransform(scrollYProgress, [0, 0.5], ["0%", "-20%"]);

  const features = [
    { icon: <FaRocket />, title: "EXTREME PERFORMANCE", desc: "Latest RTX GPUs", color: "#00ff88" },
    { icon: <FaLaptop />, title: "PREMIUM BUILD", desc: "Alien-grade quality", color: "#00ff88" },
    { icon: <FaGamepad />, title: "GAMING READY", desc: "240Hz displays", color: "#00ff88" },
    { icon: <FaBolt />, title: "LIGHTNING FAST", desc: "SSD storage", color: "#00ff88" }
  ];

  const stats = [
    { number: "30+", label: "LAPTOPS", icon: "💻" },
    { number: "500+", label: "CUSTOMERS", icon: "👥" },
    { number: "24/7", label: "SUPPORT", icon: "🛡️" },
    { number: "100%", label: "SATISFACTION", icon: "⭐" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <div className="home-container">
      {/* Moving Sale Ticker */}
      <motion.div
        className="ticker-wrapper"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Marquee gradient={false} speed={70} style={{ background: '#00ff88', color: '#000', fontWeight: 'bold', padding: '14px 0' }}>
          🐍 MEDUSA'S BASEMENT SALE • 20% OFF ALL RTX 4090 RIGS • FREE SHIPPING TO THE UNDERWORLD • STONE COLD DEALS •
          🐍 MEDUSA'S BASEMENT SALE • 20% OFF ALL RTX 4090 RIGS • FREE SHIPPING TO THE UNDERWORLD • STONE COLD DEALS •
        </Marquee>
      </motion.div>

      {/* Hero Section with Animated Medusa */}
      <section ref={heroRef} className="hero-section">
        {/* Animated Medusa Background */}
        <motion.div
          style={{
            opacity: heroOpacity,
            scale: heroScale,
            y: heroY
          }}
          className="hero-medusa-wrapper"
        >
          <AnimatedMedusa opacity={heroOpacity} />
        </motion.div>

        {/* Overlay Content */}
        <motion.div
          style={{ opacity: heroOpacity }}
          className="hero-content-overlay"
        >
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5 }}
          >
            <motion.div
              className="hero-badge"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
            >
              FROM THE DEPTHS
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="hero-title"
            >
              TURN YOUR SETUP <br />
              <span className="text-gradient-stone">
                TO STONE
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="hero-subtitle"
            >
              Unearth the most powerful gaming laptops from the depths of Medusa's Basement.
              <br />
              <span className="highlight-text">Where legends are forged in darkness.</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.8 }}
              className="hero-buttons"
            >
              <motion.button
                className="btn-medusa btn-primary"
                onClick={() => goTo("shop")}
                whileHover={{
                  scale: 1.08,
                  boxShadow: "0 0 40px var(--medusa-green-glow)",
                  rotateY: 5
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                DESCEND INTO BASEMENT
              </motion.button>
              <motion.button
                className="btn-medusa btn-secondary"
                whileHover={{
                  scale: 1.05,
                  rotateY: -5
                }}
                whileTap={{ scale: 0.95 }}
              >
                EXPLORE COLLECTION
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>

      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <motion.div
          className="stats-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="stat-card"
              variants={itemVariants}
              whileHover={{
                y: -10,
                scale: 1.05,
                transition: { type: "spring", stiffness: 400 }
              }}
            >
              <div className="stat-icon">
                {stat.icon}
              </div>
              <motion.div
                className="stat-number"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: i * 0.1 + 0.3,
                  type: "spring",
                  stiffness: 200
                }}
              >
                {stat.number}
              </motion.div>
              <div className="stat-label">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="section-title"
        >
          LEGENDARY <span className="highlight">FEATURES</span>
        </motion.h2>
        <motion.div
          className="features-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, i) => (
            <motion.div
              key={i}
              className="feature-card-wrapper"
              variants={itemVariants}
            >
              <motion.div
                className="feature-card"
                whileHover={{
                  y: -15,
                  rotateY: 5,
                  rotateX: 5,
                  transition: { type: "spring", stiffness: 300 }
                }}
                style={{ perspective: 1000 }}
              >
                <motion.div
                  className="feature-icon"
                  whileHover={{
                    rotate: 360,
                    scale: 1.3,
                    filter: "drop-shadow(0 0 30px var(--medusa-green-glow))"
                  }}
                  transition={{ duration: 0.6 }}
                >
                  {feature.icon}
                </motion.div>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
                <motion.div
                  className="feature-glow"
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.2
                  }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <motion.div
          className="cta-content"
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          <motion.div
            className="cta-badge"
            animate={{
              rotate: [0, 5, -5, 0],
              scale: [1, 1.05, 1]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            ⚡ LIMITED TIME
          </motion.div>
          <h2>READY TO DOMINATE?</h2>
          <p>Join thousands of gamers who descended into Medusa's Basement</p>
          <motion.button
            className="btn-medusa btn-cta"
            onClick={() => goTo("shop")}
            whileHover={{
              scale: 1.1,
              boxShadow: "0 0 50px var(--medusa-green-glow)",
              rotateY: 5
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            ENTER THE BASEMENT
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
}
