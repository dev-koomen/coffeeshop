import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="section-content">
        <p className="copyright-text">© 2025 Coffee Shop</p>
        <div className="social-link-list">
          <a href="#" className="social-link"><i className="fa-brands fa-facebook"></i></a>
          <a href="#" className="social-link"><i className="fa-brands fa-instagram"></i></a>
          <a href="#" className="social-link"><i className="fa-brands fa-twitter"></i></a>
        </div>
        <p className="policy-text">
          <Link href="/privacy" className="policy-link">Privacy policy</Link>
          <span className="separator">•</span>
          <Link href="/refund" className="policy-link">Refund policy</Link>
        </p>
      </div>
    </footer>
  );
}