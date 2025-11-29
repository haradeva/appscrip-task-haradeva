import Head from "next/head";
import ProductCard from "../components/ProductCard";
import Filters from "../components/Filters";

export default function Home({ products }) {
  return (
    <>
      <Head>
        <title>Discover Our Products — PLP</title>
        <meta
          name="description"
          content="Discover curated products — filter & shop. Responsive Product Listing Page built with Next.js (SSR)."
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              itemListElement: products.map((p, i) => ({
                "@type": "ListItem",
                position: i + 1,
                url: `https://your-domain.com/products/${p.id}`,
                name: p.title,
              })),
            }),
          }}
        />
      </Head>

      <header className="site-header">
        <div className="container header-inner">
          <div className="logo">LOGO</div>
          <nav className="main-nav">Shop • Stories • About • Contact</nav>
        </div>
      </header>

      <main className="container plp">
        <h1>Discover Our Products</h1>
        <p className="lead">
          Curated products for everyday use. Filter and sort to find what you
          need.
        </p>

        <div className="layout">
          <aside className="filters">
            <Filters />
          </aside>

          <section className="product-area">
            <div className="product-tools">
              <div className="count">Showing products</div>
              <div className="sort">
                <label htmlFor="sort">Sort</label>
                <select id="sort" aria-label="Sort products">
                  <option>Featured</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                </select>
              </div>
            </div>

            <ul className="product-grid" aria-label="Product list">
              {products.map((product) => (
                <li key={product.id}>
                  <ProductCard product={product} />
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>

      <footer className="site-footer">
        <div className="container">
          <div>© 2025 Store — All rights reserved</div>
        </div>
      </footer>
    </>
  );
}

export async function getServerSideProps() {
  try {
    const res = await fetch("https://fakestoreapi.com/products", {
      timeout: 5000,
    });
    if (!res.ok) throw new Error("API error");
    const products = await res.json();
    return { props: { products } };
  } catch (err) {
    console.error("SSR fetch failed", err);
    return { props: { products: [] } };
  }
}
