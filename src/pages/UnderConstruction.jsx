import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import ScrollToTop from '../components/ScrollToTop';

function UnderConstruction() {
  useEffect(() => {
    document.title = '404 Not Found - Glasses Eyewear Online Store';
  }, []);

  return (
    <div className="tbd">
      <span className="tbd__404">404 - ERROR</span>
      <h1 className="tbd__title">OOPS!</h1>
      <p className="tbd__text">
        Future Implementation
      </p>
      <p className="tbd__text">Try the links below!</p>
      <div className="tbd__btn-container">
        <Link
          to="/"
          className="tbd__btn
        "
        >
          HOME
        </Link>
        <Link
          to="/products"
          className="tbd__btn
        "
        >
          SHOP ALL
        </Link>
        <Link
          to="/products/eyeglasses"
          className="tbd__btn
        "
        >
          SHOP EYEGLASSES
        </Link>
        <Link
          to="/products/sunglasses"
          className="tbd__btn
        "
        >
          SHOP SUNGLASSES
        </Link>
      </div>
      <ScrollToTop />
    </div>
  );
}
export default UnderConstruction;
