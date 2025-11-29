import Head from "next/head";
import ProductCard from "../components/ProductCard";

export default function Home({ products }) {
  return (
    <>
      <Head>
        <title>Discover Our Products — PLP</title>
        <meta
          name="description"
          content="Discover curated products — filter & shop. Responsive Product Listing Page built with Next.js (SSR)."
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
            <h1>Filter</h1>
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

export async function getServerSideProps(context) {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();

  return {
    props: { products },
  };
}
