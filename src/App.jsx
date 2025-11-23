import { useState } from "react";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Cart from "./components/Cart";

export default function App() {
  const [page, setPage] = useState("home");
  const [cart, setCart] = useState([]);

  const goTo = (p) => setPage(p);

  const addToCart = (item) => {
    setCart([...cart, item]);
    goTo("cart");
  };

  return (
    <div>
      {page === "home" && <Home goTo={goTo} />}
      {page === "shop" && <Shop goTo={goTo} addToCart={addToCart} />}
      {page === "cart" && <Cart goTo={goTo} cart={cart} />}
    </div>
  );
}
