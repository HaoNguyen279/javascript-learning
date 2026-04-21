import { Link } from "react-router-dom";
import "./Footer.css";

// Đổi tên file logo cho đúng trong assets của bạn
import logoWhite from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__container">
        <div className="site-footer__top">
          <section className="footer-col footer-about">
            <h4>About Us</h4>
            <p>
              Welcome to our website, a wonderful place to explore and learn how to cook like a pro.
            </p>

            <div className="footer-subscribe">
              <input type="email" placeholder="Enter your email" />
              <button>Send</button>
            </div>
          </section>

          <section className="footer-col">
            <h4>Learn More</h4>
            <ul>
              <li><Link to="#">Our Cooks</Link></li>
              <li><Link to="#">See Our Features</Link></li>
              <li><Link to="#">FAQ</Link></li>
            </ul>

            <h4 className="mt">Shop</h4>
            <ul>
              <li><Link to="#">Gift Subscription</Link></li>
              <li><Link to="#">Send Us Feedback</Link></li>
            </ul>
          </section>

          <section className="footer-col">
            <h4>Recipes</h4>
            <ul>
              <li><Link to="#">What to Cook This Week</Link></li>
              <li><Link to="#">Pasta</Link></li>
              <li><Link to="#">Dinner</Link></li>
              <li><Link to="#">Healthy</Link></li>
              <li><Link to="#">Vegetarian</Link></li>
              <li><Link to="#">Vegan</Link></li>
              <li><Link to="#">Christmas</Link></li>
            </ul>
          </section>
        </div>

        <div className="site-footer__bottom">
          <div className="footer-brand">
            <img src={logoWhite} alt="Chefify" />
            <span>Chefify</span>
          </div>

          <p className="footer-copy">2023 Chefify Company</p>

          <div className="footer-legal">
            <Link to="#">Terms of Service</Link>
            <Link to="#">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}