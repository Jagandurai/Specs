import { Link } from 'react-router-dom';
import telIcon from '../assets/icons/icon-phone.avif';
import chatIcon from '../assets/icons/icon-chat.webp';
import emailIcon from '../assets/icons/icon-email.webp';

function Footer() {
  return (
    <footer className="footer">
      <section className="nletter">
        <div className="nletter--wrapper">
          <h3 className="nletter__title">Connect with Glasses Eyewear</h3>
          <span className="nletter__promo">
            Enjoy 10% off your first purchase when you sign up!
          </span>
          <form
            action=""
            className="nletter__form"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              name="email"
              id="nletter__email"
              className="nletter__email"
              placeholder="Enter your email here"
              minLength={1}
            />
            <button type="submit" className="nletter__submit">
              SUBSCRIBE
            </button>
          </form>
        </div>
      </section>

      <div className="footer-main">
        <div className="footer-sv">
          <section className="footer-sv__links--container">
            <ul className="footer-sv__links">
              <h5 className="footer-sv__link--header">Company</h5>
              <li className="footer-sv__link--wrapper">
                <Link to="/" className="footer-sv__link">
                  Our Story
                </Link>
              </li>
              <li className="footer-sv__link--wrapper">
                <Link to="/" className="footer-sv__link">
                  Shop Locations
                </Link>
              </li>
              <li className="footer-sv__link--wrapper">
                <Link to="/" className="footer-sv__link">
                  Virtual
                </Link>
              </li>
              <li className="footer-sv__link--wrapper">
                <Link to="/" className="footer-sv__link">
                  Eyecare
                </Link>
              </li>
              <li className="footer-sv__link--wrapper">
                <Link to="/" className="footer-sv__link">
                  3D Models
                </Link>
              </li>
            </ul>
            <ul className="footer-sv__links">
              <h5 className="footer-sv__link--header">Brand</h5>
              <li className="footer-sv__link--wrapper">
                <Link to="/" className="footer-sv__link">
                  Polo Ralph Lauren
                </Link>
              </li>
              <li className="footer-sv__link--wrapper">
                <Link to="/" className="footer-sv__link">
                  Dkny
                </Link>
              </li>
              <li className="footer-sv__link--wrapper">
                <Link to="/" className="footer-sv__link">
                  Ray-Ban
                </Link>
              </li>
              <li className="footer-sv__link--wrapper">
                <Link to="/" className="footer-sv__link">
                  Oakley
                </Link>
              </li>
              <li className="footer-sv__link--wrapper">
                <Link to="/" className="footer-sv__link">
                  Persol
                </Link>
              </li>
            </ul>
            <ul className="footer-sv__links">
              <h5 className="footer-sv__link--header">QUICK LINKS</h5>
              <li className="footer-sv__link--wrapper">
                <Link to="/" className="footer-sv__link">
                  Home
                </Link>
              </li>
              <li className="footer-sv__link--wrapper">
                <Link to="/products" className="footer-sv__link">
                  Collection
                </Link>
              </li>
              <li className="footer-sv__link--wrapper">
                <Link to="/products/eyeglasses" className="footer-sv__link">
                  Eyeglasses
                </Link>
              </li>
              <li className="footer-sv__link--wrapper">
                <Link to="/products/sunglasses" className="footer-sv__link">
                  Sunglasses
                </Link>
              </li>
              <li className="footer-sv__link--wrapper">
                <Link to="/about" className="footer-sv__link">
                  About Us
                </Link>
              </li>
            </ul>
          </section>
          <section className="footer-sv__contact">
            <h4 className="footer-sv__contact-title">
              Ask a your Queries
            </h4>
            <p className="footer-sv__contact-text">
              Whether you're a collector or visiting for the first time,
              were here to assist!
            </p>
            <ul className="footer-sv__contact-info">
              <li className="footer-sv__contact-tel">
                <img
                  src={telIcon}
                  alt="Telephone Icon"
                  className="footer-sv__contact-icon"
                />
                <span className="footer-sv__contact-label">9632587410</span>
              </li>
              <li className="footer-sv__contact-email">
                <img
                  src={emailIcon}
                  alt="Email Icon"
                  className="footer-sv__contact-icon"
                />
                <span className="footer-sv__contact-label">
                  support@glasses.eyewears
                </span>
              </li>
              <li className="footer-sv__contact-message">
                <img
                  src={chatIcon}
                  alt="Chat Icon"
                  className="footer-sv__contact-icon"
                />
                <span className="footer-sv__contact-label">Chat with Us</span>
              </li>
            </ul>
          </section>
        </div>
        <ul className="footer-bottom">
          <span className="footer-bottom__link">&copy; 2024 Glasses Eyewear</span>
          <Link to="/" className="footer-bottom__link">
            Privacy
          </Link>
          <Link to="/" className="footer-bottom__link">
            Accessibility
          </Link>
          <Link to="/" className="footer-bottom__link">
            Terms of Service
          </Link>
          <Link to="/" className="footer-bottom__link">
            Refund Policy
          </Link>
          <Link to="/" className="footer-bottom__link">
            Conformity
          </Link>
        </ul>
      </div>
      <div className="footer-gh">
        <small className="footer-gh__copyright">
          &copy; Copyright {new Date().getFullYear()} Glasses Eyewear. All
          rights reserved.{' '}
        </small>
      </div>
    </footer>
  );
}

export default Footer;
