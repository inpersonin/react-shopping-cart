export default function Shop({ goTo, addToCart }) {
    const products = [
      { id: 1, name: "Apple", price: 100 },
      { id: 2, name: "Banana", price: 40 },
      { id: 3, name: "Mango", price: 120 }
    ];
  
    return (
      <div className="page">
        <h1>🛍️ Shop Page</h1>
  
        {products.map((p) => (
          <div key={p.id} className="item">
            <p>{p.name} — ₹{p.price}</p>
            <button className="btn" onClick={() => addToCart(p)}>Add to Cart</button>
          </div>
        ))}
  
        <button className="btn" onClick={() => goTo("home")}>Home</button>
        <button className="btn" onClick={() => goTo("cart")}>Cart</button>
      </div>
    );
  }
  