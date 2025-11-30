import { useState } from "react";

export default function ProductCard({ product }) {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const altText = `${product.title} - ${product.category}`;
  const isOutOfStock = product.outOfStock;

  return (
    <article className="product-card" aria-labelledby={`p-${product.id}`}>
      <div className={`thumb ${isOutOfStock ? "out-of-stock" : ""}`}>
        <img src={product.image} alt={altText} loading="lazy" />
        {isOutOfStock && <div className="stock-badge">OUT OF STOCK</div>}
      </div>
      <div className="meta">
        <div id={`p-${product.id}`} className="title">
          {product.title}
        </div>
        <div className="product-meta-bottom">
          <div className="price">₹{Math.round(product.price * 80)}</div>
          <button
            className="wishlist-btn"
            onClick={() => setIsWishlisted(!isWishlisted)}
            aria-label={
              isWishlisted ? "Remove from wishlist" : "Add to wishlist"
            }
            title={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
          >
            {isWishlisted ? "♥" : "♡"}
          </button>
        </div>
      </div>
    </article>
  );
}
