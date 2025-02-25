import Navbar from '../components/Navbar';
import Footer from '../components/footer';
import Link from 'next/link';

export default function MenuPage() {
  return (
    <main>
      <Navbar />
      <div className="page-container">
        <h1 className="page-title">Our Full Menu</h1>
        <div className="menu-content">
          <h2>Coffee Drinks</h2>
          <ul className="full-menu-list">
            <li>
              <h3>Espresso</h3>
              <p>A classic, rich shot of coffee that forms the base for many drinks.</p>
              <span className="price">$2.50</span>
            </li>
            <li>
              <h3>Cappuccino</h3>
              <p>A balanced blend of espresso, steamed milk, and a thick layer of foam.</p>
              <span className="price">$3.80</span>
            </li>
            <li>
              <h3>Latte</h3>
              <p>A smooth combination of espresso and steamed milk with a thin layer of foam.</p>
              <span className="price">$3.50</span>
            </li>
            <li>
              <h3>Mocha</h3>
              <p>Espresso with chocolate and steamed milk, topped with whipped cream.</p>
              <span className="price">$4.20</span>
            </li>
          </ul>
          
          <Link href="/order" className="button order-now">Order Now</Link>
        </div>
      </div>
      <Footer />
    </main>
  );
}