import Button from "./Button";
import "./ProductCard.css";

export default function ProductCard({ product, onAddToCart }) {
  return (
    <div className="card">
      <div className="image-container">
        <img src={product.thumbnail} alt={product.title} />
      </div>
      <div className="info">
        <h3>{product.title}</h3>
        <p className="desc">{product.description.substring(0, 60)}...</p>
        <div className="footer">
          <span className="price">${product.price}</span>
          <Button onClick={() => onAddToCart(product)}>Add to Cart</Button>
        </div>
      </div>
    </div>
  );
}