export default function Filters() {
  return (
    <>
      <h2>Filters</h2>
      <div className="filter-block">
        <label htmlFor="category">Category</label>
        <select id="category" name="category">
          <option value="">All</option>
          <option value="men's clothing">Men's Clothing</option>
          <option value="women's clothing">Women's Clothing</option>
          <option value="jewelery">Jewelery</option>
          <option value="electronics">Electronics</option>
        </select>
      </div>

      <div className="filter-block">
        <label htmlFor="price-range">Max Price</label>
        <input id="price-range" type="range" min="0" max="500" />
      </div>
    </>
  );
}
