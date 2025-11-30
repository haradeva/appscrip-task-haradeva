import Image from "next/image";

export default function Footer() {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="footer-inner">
        <div className="footer-col">
          <div className="footer-title">BE THE FIRST TO KNOW</div>
          <div style={{ marginBottom: 10, color: "#cfcfcf" }}>
            Sign up for updates from metta muse.
          </div>
          <div className="newsletter">
            <input
              className="news-input"
              placeholder="Enter your e-mail..."
              aria-label="Email for newsletter"
            />
            <button className="news-btn">SUBSCRIBE</button>
          </div>
        </div>

        <div className="footer-col">
          <div className="footer-title">CONTACT US</div>
          <div className="footer-links">
            <div>+44 221 133 5360</div>
            <div>customercare@mettamuse.com</div>
            <div style={{ marginTop: 8 }}>CURRENCY • USD</div>
          </div>
        </div>

        <div className="footer-col">
          <div className="footer-title">QUICK LINKS</div>
          <div className="footer-links">
            <a href="#" style={{ color: "#dedede" }}>
              Orders & Shipping
            </a>
            <a href="#" style={{ color: "#dedede" }}>
              Join/Login as a Seller
            </a>
            <a href="#" style={{ color: "#dedede" }}>
              Payment & Pricing
            </a>
            <a href="#" style={{ color: "#dedede" }}>
              Return & Refunds
            </a>
          </div>
        </div>

        <div className="footer-col">
          <div className="footer-title">FOLLOW US</div>
          <div style={{ display: "flex", gap: 10, marginBottom: 8 }}>
            <Image
              src="/images/Instagram.png"
              alt="Instagram"
              width={34}
              height={34}
              style={{ borderRadius: "50%" }}
            />

            <Image
              src="/images/Linkedin.png"
              alt="LinkedIn"
              width={34}
              height={34}
              style={{ borderRadius: "50%" }}
            />
          </div>
          <div className="footer-title" style={{ marginTop: 8 }}>
            ACCEPTS
          </div>
          <div className="payments" aria-hidden="true">
            <img src="/images/payment-paypal.png" alt="Paypal" />
            <img src="/images/payment-mastercard.png" alt="Mastercard" />
            <img src="/images/payment-amex.png" alt="Amex" />
            <img src="/images/payment-applepay.png" alt="Apple Pay" />
            <img src="/images/payment-googlepay.png" alt="Google Pay" />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="footer-bottom">
          <div>© 2025 mettamuse. All rights reserved.</div>
          <div>Privacy Policy • Terms & Conditions</div>
        </div>
      </div>
    </footer>
  );
}
