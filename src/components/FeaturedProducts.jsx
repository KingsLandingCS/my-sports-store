// src/components/FeaturedProducts.js
import { useEffect, useState } from "react";
import axios from "axios";
import "./FeaturedProducts.css"; // Optional: For styling

const FeaturedProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch products from the backend API
        const fetchProducts = async () => {
            try {
                const response = await axios.get("http://localhost:5000/api/products");
                setProducts(response.data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="featured-products">
            <h2>Featured Products</h2>
            <div className="products-container">
                {products.map((product) => (
                    <div className="product-card" key={product._id}>
                        <img src={product.imageUrl} alt={product.name} />
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <span>${product.price.toFixed(2)}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeaturedProducts;
