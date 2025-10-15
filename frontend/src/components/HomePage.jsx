import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <section className="text-center">
      <h1 className="display-4 mb-3">Powering a Brighter Future</h1>
      <p className="lead mb-4">
        NakipSolar designs and installs solar energy systems that help homes and businesses cut costs and reduce their carbon footprint.
      </p>
      <Link to="/products" className="btn btn-success btn-lg">
        Explore Products
      </Link>
    </section>
  );
}

export default HomePage;
