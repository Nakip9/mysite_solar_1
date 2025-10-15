import { useEffect, useState } from 'react';
import { fetchProducts } from '../api/products';

function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [status, setStatus] = useState('loading');
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadProducts() {
      try {
        const data = await fetchProducts();
        setProducts(data);
        setStatus('ready');
      } catch (err) {
        setStatus('error');
        setError(err.message || 'Unable to load products');
      }
    }

    loadProducts();
  }, []);

  if (status === 'loading') {
    return <p>Loading products…</p>;
  }

  if (status === 'error') {
    return <p className="text-danger">{error}</p>;
  }

  if (products.length === 0) {
    return (
      <section>
        <h1 className="display-5 mb-3">Our Solar Products</h1>
        <p className="lead">Our catalog is being curated. Check back soon for panels, batteries, and smart inverters tailored for clean energy projects.</p>
      </section>
    );
  }

  return (
    <section>
      <h1 className="display-5 mb-4">Our Solar Products</h1>
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-4 mb-4">
            <div className="card h-100">
              {product.image ? (
                <img src={product.image} alt={product.name} className="card-img-top" />
              ) : (
                <div className="bg-light border rounded d-flex align-items-center justify-content-center" style={{ height: '180px' }}>
                  <span className="text-muted">Image coming soon</span>
                </div>
              )}
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <p className="font-weight-bold">${product.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductsPage;
