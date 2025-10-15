import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Layout({ children }) {
  return (
    <div className="app-shell">
      <header className="shadow-sm bg-white">
        <div className="container d-flex align-items-center justify-content-between py-3">
          <Link to="/" className="h5 mb-0 text-decoration-none text-dark">
            NakipSolar
          </Link>
          <nav>
            <Link to="/about" className="mr-3 text-dark">About</Link>
            <Link to="/products" className="mr-3 text-dark">Products</Link>
            <Link to="/contact" className="text-dark">Contact</Link>
          </nav>
        </div>
      </header>

      <main className="app-main container">{children}</main>

      <footer className="app-footer">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/products">Products</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <small>&copy; {new Date().getFullYear()} NakipSolar. All rights reserved.</small>
      </footer>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
