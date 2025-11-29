export default function ProductCard({ product }) {
  const altText = `${product.title} - ${product.category}`;
  return (
    <article className="product-card" aria-labelledby={`p-${product.id}`}>
      <div className="thumb">
        <img src={product.image} alt={altText} />
      </div>
      <div className="meta">
        <div id={`p-${product.id}`} className="title">
          {product.title}
        </div>
        <div className="price">₹{Math.round(product.price * 80)}</div>
      </div>
    </article>
  );
}
