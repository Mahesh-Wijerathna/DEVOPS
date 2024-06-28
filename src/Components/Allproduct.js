import React, { useState, useEffect } from 'react';
import "./Allproduct.css";



function ProductAll() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Function to make a GET request to fetch products from the backend
        const fetchProducts = async () => {
            try {
                const response = await fetch('http://localhost:8070/product/'); // Replace with the correct API route
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div >
            <h1 className='pab' style={{backgroundColor:"#81D4FA"}}>Product List</h1>
            
            <table  className="product-tableb">
            
                <thead>
                    <tr>
                        <th>Category</th>
                        <th>Product Name</th>
                        <th>Description</th>
                        <th>Image</th>

                    </tr>
                </thead>
                <tbody>
                {products.map((product, index) => (
    <tr key={index}>
        <td>{product.categories}</td>
        <td>{product.productname}</td>
        <td>{product.discription}</td>
        <td>{product.images && product.images.map((image, index) => (
            <img className='product_image'
              key={image.filename}
              src={`http://localhost:8070/uploads/${image.filename}`}
              alt={image.filename}
              
            />
          ))}
            </td>
    </tr>
))}

                </tbody>
                
            </table>
            
        </div>
    );
};

export default ProductAll;
