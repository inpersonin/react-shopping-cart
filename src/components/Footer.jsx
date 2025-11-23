import { motion } from "framer-motion";
import { FaTwitter, FaDiscord, FaTwitch, FaInstagram, FaYoutube } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  const socialLinks = [
    { icon: <FaTwitter />, name: "Twitter" },
    { icon: <FaDiscord />, name: "Discord" },
    { icon: <FaTwitch />, name: "Twitch" },
    { icon: <FaInstagram />, name: "Instagram" },
    { icon: <FaYoutube />, name: "YouTube" }
  ];

  return (
    <footer className="footer">
      <div className="footer-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="footer-logo">
            🐍 MEDUSA'S <span className="highlight">BASEMENT</span>
          </h2>
          <p className="footer-tagline">Where Performance Meets Perfection</p>
        </motion.div>

        <motion.div
          className="footer-social"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {socialLinks.map((social, i) => (
            <motion.a
              key={i}
              href="#"
              className="social-icon"
              whileHover={{ scale: 1.2, rotate: 360 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
              aria-label={social.name}
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          className="footer-links"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a href="#">About</a>
          <a href="#">Support</a>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </motion.div>

        <motion.p
          className="footer-copyright"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          © 2024 MEDUSA'S BASEMENT. ALL RIGHTS RESERVED.
        </motion.p>
      </div>
    </footer>
  );
}
