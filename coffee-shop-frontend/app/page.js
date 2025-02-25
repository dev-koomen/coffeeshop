import Navbar from './components/Navbar';
import Link from 'next/link';
import Image from 'next/image';
import Footer from './components/footer';
import './globals.css'; // Ensure you import the global CSS

export default function Home() {
  return (
    <main>
      <Navbar />
      
      {/* Hero section */}
      <section className="hero-section">
        <div className="section-content">
          <div className="hero-details">
            <h2 className="title">Best Coffee</h2>
            <h3 className="subtitle">Make your day great with our special coffee!</h3>
            <p className="description">Welcome to our coffee paradise, where every bean tells a story and every cup sparks joy.</p>
            
            <div className="buttons">
              <Link href="/order" className="button order-now">Order now</Link>
              <Link href="/#contact" className="button contact-us">Contact us</Link>
            </div>
          </div>
          <div className="hero-image-wrapper">
            <Image 
              src="/coffee-hero-section.png" 
              alt="coffee" 
              className="hero-image"
              width={500}
              height={500}
            />
          </div>
        </div>
      </section>

      {/* About section */}
      <section className="about-section" id="about">
        <div className="section-content">
          <div className="about-details">
            <h2 className="section-title">About us</h2>
            <p className="text"> 
              At Best Coffee, we are passionate about great coffee and creating a warm, welcoming space for our community. We source the finest beans, craft every cup with care, and offer delicious locally made treats. Whether you are here to relax, work, or connect, we are excited to share our love of coffee with you.  
              Stop by and make yourself at home!
            </p>
            <div className="social-link-list">
              <a href="#" className="social-link"><i className="fab fa-facebook"></i></a>
              <a href="#" className="social-link"><i className="fab fa-instagram"></i></a>
              <a href="#" className="social-link"><i className="fab fa-twitter"></i></a>
            </div>
          </div>
        </div>
      </section>

      {/* Menu section */}
      <section className="menu-section" id="menu">
        <h2 className="section-title">Our Menu</h2>
        <div className="section-content">
          <ul className="menu-list">
            <li className="menu-item">
              <h3 className="name">Espresso</h3>
              <p className="text">A classic, rich shot of coffee that forms the base for many drinks.
                Perfect for those who love bold flavors.
              </p>
            </li>
            <li className="menu-item">
              <h3 className="name">Cappuccino</h3>
              <p className="text">A balanced blend of espresso, steamed milk, and a thick layer of foam.
                Great for a creamy yet strong coffee experience</p>
            </li>
            <li className="menu-item">
              <h3 className="name">Latte</h3>
              <p className="text">A smooth combination of espresso and steamed milk with a thin layer of foam. 
                Ideal for customers who enjoy a milder coffee flavor.</p>
            </li>
          </ul>
        </div>
      </section>

      {/* Contact section */}
      <section className="contact-section" id="contact">
        <h2 className="section-title">Contact Us</h2>
        <div className="section-content">
          <ul className="contact-info-list">
            <li className="contact-info">
              <i className="fa-solid fa-location-crosshairs">
                <p>baraton center, Mosoriot Nandi Hills</p>
              </i>
            </li>
            <li className="contact-info">
              <i className="fa-solid fa-envelope">
                <p>@coffeepalacewebsite.com</p>
              </i>
            </li>
            <li className="contact-info">
              <i className="fa-solid fa-phone">
                <p>0112369881</p>
              </i>
            </li>
            <li className="contact-info">
              <i className="fa-solid fa-clock">
                <p>Monday-Saturday: 7:00am - 5:00pm<br />closes on Sundays</p>
              </i>
            </li>
            <li className="contact-info">
              <i className="fa-solid fa-globe">
                <p>www.coffeepalace.com</p>
              </i>
            </li>                   
          </ul>
          <form className="contact-form">
            <input type="text" placeholder="Name" className="form-input" required />
            <input type="email" placeholder="Email" className="form-input" required />
            <input type="tel" placeholder="Phone" className="form-input" required />
            <textarea placeholder="Message" className="form-input" required></textarea>
            <button type="submit" className="submit-button">Submit</button>
          </form>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}