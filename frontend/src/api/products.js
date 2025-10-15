const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:8000';

export async function fetchProducts() {
  const response = await fetch(`${API_BASE_URL}/api/products/`);

  if (!response.ok) {
    const error = await response.text();
    throw new Error(error || 'Failed to fetch products');
  }

  const data = await response.json();

  return data.map((product) => ({
    ...product,
    image: product.image ? new URL(product.image, API_BASE_URL).href : null,
  }));
}
