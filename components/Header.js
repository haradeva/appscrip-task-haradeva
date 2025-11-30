import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <div className="top-ticker" aria-hidden="true">
        Lorem ipsum dolor — free shipping over ₹1999
      </div>

      <header className="site-header" role="banner">
        <div className="container header-inner">
          <div className="header-left">
            <div
              style={{
                width: 36,
                height: 36,
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                src="/images/logo.svg"
                alt="Logo"
                width={110}
                height={36}
              />
            </div>
            {/* small inline nav for mobile/spacing */}
            <nav
              className="main-nav small-inline-nav"
              aria-label="Main navigation"
            >
              <a href="#">Shop</a>
              <a href="#">Skills</a>
              <a href="#">Stories</a>
              <a href="#">About</a>
              <a href="#">Contact us</a>
            </nav>
          </div>

          <div className="logo" aria-label="Site logo">
            LOGO
          </div>

          <div className="header-right" aria-hidden="false">
            <button className="icon-btn" aria-label="Search" title="Search">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M21 21l-4.35-4.35"
                  stroke="#111"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="11" cy="11" r="6" stroke="#111" strokeWidth="1.6" />
              </svg>
            </button>

            <button className="icon-btn" aria-label="Wishlist" title="Wishlist">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M20.8 8.6a4.9 4.9 0 0 0-7-6l-.8.8-.8-.8a4.9 4.9 0 0 0-7 6L12 21.2 20.8 8.6z"
                  stroke="#111"
                  strokeWidth="0.9"
                  fill="none"
                />
              </svg>
            </button>

            <button className="icon-btn" aria-label="Account" title="Account">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="8" r="3" stroke="#111" strokeWidth="1.2" />
                <path
                  d="M4 20c0-4 4-6 8-6s8 2 8 6"
                  stroke="#111"
                  strokeWidth="1.2"
                />
              </svg>
            </button>

            <div className="lang-select" aria-hidden="false">
              ENG ▾
            </div>
          </div>
        </div>

        {/* desktop nav row under the logo (matches mock) */}
        <div className="container nav-row">
          <nav className="main-nav desktop-nav" aria-label="Main navigation">
            <a href="#">Shop</a>
            <a href="#">Skills</a>
            <a href="#">Stories</a>
            <a href="#">About</a>
            <a href="#">Contact us</a>
          </nav>
        </div>

        {/* mobile header */}
        <div className="container mobile-header">
          <button
            className="mobile-menu-btn"
            aria-label="Open menu"
            onClick={() => setMobileOpen(true)}
          >
            ☰
          </button>
          <div className="logo">LOGO</div>
          <div style={{ display: "flex", gap: 8 }}>
            <button className="icon-btn" aria-label="Search">
              🔍
            </button>
            <button className="icon-btn" aria-label="Bag">
              🛍️
            </button>
          </div>
        </div>

        {/* mobile slide-in nav */}
        <div
          className={`mobile-nav ${mobileOpen ? "open" : ""}`}
          role="dialog"
          aria-hidden={!mobileOpen}
        >
          <div className="mobile-nav-inner">
            <button
              className="mobile-nav-close"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              ✕
            </button>
            <nav className="mobile-nav-list">
              <a href="#">Shop</a>
              <a href="#">Skills</a>
              <a href="#">Stories</a>
              <a href="#">About</a>
              <a href="#">Contact us</a>
            </nav>
          </div>
          <div
            className="mobile-nav-backdrop"
            onClick={() => setMobileOpen(false)}
          />
        </div>
      </header>
    </>
  );
}
