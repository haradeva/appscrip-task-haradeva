import Head from "next/head";
import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import Filters from "../components/Filters";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home({ products: initialProducts }) {
  const [products, setProducts] = useState(initialProducts);
  const [sortOrder, setSortOrder] = useState("featured");
  const [showFilters, setShowFilters] = useState(false);
  const [displayCount, setDisplayCount] = useState(products.length);
  const [mobileSortOpen, setMobileSortOpen] = useState(false);

  const handleApplyFilters = ({ selections, priceRange }) => {
    let filtered = [...initialProducts];

    filtered = filtered.filter((p) => p.price * 80 <= priceRange);

    setProducts(filtered);
    setDisplayCount(filtered.length);
    setShowFilters(false);
  };

  const handleClearFilters = () => {
    setProducts(initialProducts);
    setDisplayCount(initialProducts.length);
  };

  const handleSort = (event) => {
    const order = event.target.value;
    setSortOrder(order);

    let sorted = [...products];
    if (order === "price-low") {
      sorted.sort((a, b) => a.price - b.price);
    } else if (order === "price-high") {
      sorted.sort((a, b) => b.price - a.price);
    }

    setProducts(sorted);
  };

  // Set filters visible by default on wider screens (desktop). Run only on client.
  useEffect(() => {
    if (typeof window !== "undefined") {
      setShowFilters(window.innerWidth >= 768);
    }
  }, []);

  return (
    <>
      <Head>
        <title>
          Discover Our Products — Premium Essentials & Lifestyle Items
        </title>
        <meta
          name="description"
          content="Discover our curated collection of premium products — backpacks, accessories, and lifestyle items. Filter & shop with responsive design. Built with Next.js (SSR)."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Discover Our Products" />
        <meta
          property="og:description"
          content="Premium products handpicked for you. Filter and explore our collection."
        />
        <meta property="og:type" content="website" />
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
                image: p.image,
                description: p.category,
                offers: {
                  "@type": "Offer",
                  price: p.price,
                  priceCurrency: "USD",
                },
              })),
            }),
          }}
        />
      </Head>

      <Header />

      <main className="container plp-header">
        <h1>Discover Our Products</h1>
        <p className="lead">
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
          scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
          dolor.
        </p>

        <div className="tools-row">
          <div className="tools-left">
            <span className="count">{displayCount} ITEMS</span>
            <button
              className="filter-toggle-desktop"
              onClick={() => setShowFilters(!showFilters)}
              aria-label={showFilters ? "Hide filters" : "Show filters"}
            >
              {showFilters ? "HIDE FILTER" : "SHOW FILTER"}
            </button>

            <button
              className="show-filter-btn"
              onClick={() => setShowFilters(!showFilters)}
              aria-label={showFilters ? "Hide filters" : "Show filters"}
            >
              {showFilters ? "Hide Filters" : "Filter"}
            </button>
          </div>
          <div className="tools-right">
            <div className="sort">
              <select
                id="sort-select"
                value={sortOrder}
                onChange={handleSort}
                aria-label="Sort products"
                title="Sort products"
              >
                <option value="featured">RECOMMENDED</option>
                <option value="price-low">PRICE: LOW TO HIGH</option>
                <option value="price-high">PRICE: HIGH TO LOW</option>
              </select>
            </div>
          </div>
        </div>

        {/* Mobile tools bar: big FILTER and RECOMMENDED buttons */}
        <div className="mobile-tools" role="toolbar" aria-label="Mobile tools">
          <button
            className="mobile-filter-btn"
            onClick={() => setShowFilters(!showFilters)}
            aria-pressed={showFilters}
          >
            FILTER
          </button>

          <div style={{ position: "relative" }}>
            <button
              className="mobile-recommended-btn"
              aria-haspopup="listbox"
              aria-expanded={mobileSortOpen}
              onClick={() => setMobileSortOpen((s) => !s)}
            >
              RECOMMENDED ▾
            </button>

            {mobileSortOpen && (
              <div
                className="mobile-sort-popover"
                role="listbox"
                aria-label="Sort options"
              >
                <button
                  className={`mobile-sort-item ${
                    sortOrder === "featured" ? "active" : ""
                  }`}
                  onClick={() => {
                    setSortOrder("featured");
                    setMobileSortOpen(false);
                  }}
                >
                  ✓ RECOMMENDED
                </button>
                <button
                  className={`mobile-sort-item ${
                    sortOrder === "price-low" ? "active" : ""
                  }`}
                  onClick={() => {
                    setSortOrder("price-low");
                    setProducts((p) =>
                      [...p].sort((a, b) => a.price - b.price)
                    );
                    setMobileSortOpen(false);
                  }}
                >
                  PRICE: LOW TO HIGH
                </button>
                <button
                  className={`mobile-sort-item ${
                    sortOrder === "price-high" ? "active" : ""
                  }`}
                  onClick={() => {
                    setSortOrder("price-high");
                    setProducts((p) =>
                      [...p].sort((a, b) => b.price - a.price)
                    );
                    setMobileSortOpen(false);
                  }}
                >
                  PRICE: HIGH TO LOW
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="layout">
          <aside className={`filters ${showFilters ? "open" : "hidden"}`}>
            <Filters
              onApplyFilters={handleApplyFilters}
              onClearFilters={handleClearFilters}
              onCancel={() => setShowFilters(false)}
            />
          </aside>

          <section className="product-area">
            <ul className="product-grid" aria-label="Product list">
              {products.length > 0 ? (
                products.map((product) => (
                  <li key={product.id}>
                    <ProductCard product={product} />
                  </li>
                ))
              ) : (
                <li
                  style={{
                    gridColumn: "1 / -1",
                    textAlign: "center",
                    padding: "40px",
                  }}
                >
                  <p>No products found. Try adjusting your filters.</p>
                </li>
              )}
            </ul>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}

export async function getServerSideProps(context) {
  const req = context.req;

  // Reliable base URL for local, preview, production
  const protocol = req.headers["x-forwarded-proto"] || "http";
  const host = req.headers.host;

  const baseUrl = `${protocol}://${host}`;

  try {
    const res = await fetch(`${baseUrl}/api/products`);

    if (!res.ok) {
      console.error("Failed response:", await res.text());
      throw new Error("API error");
    }

    const products = await res.json();

    return {
      props: {
        products,
      },
    };
  } catch (err) {
    console.error("SSR fetch failed", err);
    return {
      props: {
        products: [],
      },
    };
  }
}
