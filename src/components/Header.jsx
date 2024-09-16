import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { motion, AnimatePresence } from 'framer-motion';

import CartContext from '../context/CartContext';
import SearchPanel from './SearchPanel';
import NavBar from './NavBar';
import NavBarSticky from './NavBarSticky';

function Header() {
  const [cartItems] = useContext(CartContext);

  const [searchInView, setSearchInView] = useState(false);

  const [ref, inView] = useInView({
    threshold: 0,
  });

  const toggleSearchView = () => {
    setSearchInView(() => !searchInView);
  };

  const hideSearchView = () => {
    setSearchInView(false);
  };

  return (
    <header className="header">
    
      {inView ? (
        <NavBar toggleSearchView={toggleSearchView} />
      ) : (
        <NavBarSticky toggleSearchView={toggleSearchView} />
      )}

      <AnimatePresence>
        {searchInView && (
          <>
            <motion.div
              className="search__overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={hideSearchView}
            />
            <SearchPanel toggleSearchView={toggleSearchView} />
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
export default Header;