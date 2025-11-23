export default function Home({ goTo }) {
    return (
      <div className="page">
        <h1>🏠 Home Page</h1>
        <button className="btn" onClick={() => goTo("shop")}>Go to Shop</button>
        <button className="btn" onClick={() => goTo("cart")}>Go to Cart</button>
      </div>
    );
  }
  