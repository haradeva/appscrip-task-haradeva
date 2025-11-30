export default async function handler(req, res) {
  try {
    const response = await fetch("https://dummyjson.com/products");

    if (!response.ok) {
      console.error("DummyJSON Fetch Error");
      return res.status(500).json({ error: "Failed to fetch products" });
    }

    const data = await response.json();

    const products = data.products.map((p) => ({
      id: p.id,
      title: p.title,
      price: p.price,
      image: p.thumbnail,
      category: p.category,
      outOfStock: Math.random() > 0.8,
    }));

    return res.status(200).json(products);
  } catch (err) {
    console.error("API Route Error:", err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
