export default function Cart({ cart, goTo }) {
    return (
      <div className="page">
        <h1>🛒 Cart Page</h1>
  
        {cart.length === 0 ? (
          <p>Cart is empty</p>
        ) : (
          cart.map((item) => (
            <div key={item.id} className="item">
              {item.name} — ₹{item.price}
            </div>
          ))
        )}
  
        <button className="btn" onClick={() => goTo("shop")}>Back to Shop</button>
        <button className="btn" onClick={() => goTo("home")}>Home</button>
      </div>
    );
  }
  