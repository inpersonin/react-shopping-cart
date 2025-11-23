import { motion } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa";
import "./Checkout.css";

export default function Checkout({ goTo }) {
    return (
        <div className="checkout-page">
            <motion.div
                className="checkout-container"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
            >
                {/* Meme image will be added here */}
                <div className="meme-container">
                    {/* Placeholder for meme image */}
                </div>

                <motion.h1
                    className="checkout-message"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                >
                    You ain't got money blud, get a job
                </motion.h1>

                <motion.button
                    className="back-to-cart-btn"
                    onClick={() => goTo("cart")}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    whileHover={{ scale: 1.05, boxShadow: "0 0 30px var(--medusa-green-glow)" }}
                    whileTap={{ scale: 0.95 }}
                >
                    <FaArrowLeft style={{ marginRight: '8px' }} />
                    BACK TO CART
                </motion.button>
            </motion.div>
        </div>
    );
}


