import { useState } from "react";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
  const [page, setPage] = useState("home");
  const [cart, setCart] = useState([]);

  const goTo = (p) => setPage(p);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  return (
    <div>
      <Navbar goTo={goTo} cartCount={cart.length} />
      {page === "home" && <Home goTo={goTo} />}
      {page === "shop" && <Shop goTo={goTo} addToCart={addToCart} />}
      {page === "cart" && <Cart goTo={goTo} cart={cart} removeFromCart={removeFromCart} />}
      {page === "checkout" && <Checkout goTo={goTo} />}
      {(page === "home" || page === "shop") && <Footer />}
    </div>
  );
}
