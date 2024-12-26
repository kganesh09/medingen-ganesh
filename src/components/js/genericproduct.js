import React, { useEffect, useState } from "react";
import "../css/genericproduct.css"

const GenericAlternatives = ({ onProductSelect }) => {
  const [productDetails, setProductDetails] = useState(null); 
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
    const token = sessionStorage.getItem("token");
      

      if (!token) {
        setError("No token found, please log in.");
        setIsLoading(false);
        return;
      }

      try {
        const response = await fetch("http://127.0.0.1:5000/product", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`, 
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch product details");
        }
        if(response.status==401){
          sessionStorage.clear();
        }

        const data = await response.json();
        setProductDetails(data); 
        setIsLoading(false);
      } catch (err) {
        setError(err.message); 
        setIsLoading(false);
      }
    };

    fetchProductDetails();
  }, []);


  const handleIncrement = async (productId) => {
    const token = sessionStorage.getItem("token");

    try {
      const response = await fetch("http://127.0.0.1:5000/add-to-cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Include token in Authorization header
        },
        body: JSON.stringify({
          product_id: productId,
          quantity: 1, // Increment by 1
        }),
      });

      if (!response.ok) {
        alert ("does not add the product to cart")
      }else{
        alert("product successfully added")
      }

     
    } catch (err) {
      alert("problem to add cart")
    }
  };

  if (isLoading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-danger">Error: {error}</div>;
  }

  return (
    <div className="generic-alternatives container">
      <h5 className="mb-4">Generic Medicine Alternative</h5>
      {productDetails.map((product) => (
  <div key={product.id}>
    {/* Large Screen View */}
    <div
      className="d-none d-lg-flex justify-content-between align-items-center border bg-white shadow-sm p-3 rounded mb-3"
      onClick={() => onProductSelect(product.id)}
      style={{ cursor: "pointer" }}
    >
      {/* Product Image */}
      <div className="product-image">
        <img
          src={product.productImageUrl}
          alt={product.productname}
          className="rounded"
          width="80"
          height="80"
        />
      </div>

      {/* Product Details */}
      <div className="product-details flex-grow-1 mx-3">
        <h6 className="mb-1">{product.productname}</h6>
        <p className="text-muted small">{product.productlab}</p>
        <p className="text-muted small salt mb-1">{product.productsaltname}</p>
        <div className="d-flex align-items-center">
          <p className="salt me-1 fw-bold"><del>Rs {product.productavgprice}.00</del></p>
          <p className="mb-0 fw-bold me-2">Rs. {product.productprice}</p>
          <span className="badge bg-success text-white">
            {Math.round(((product.productavgprice - product.productprice) / product.productavgprice) * 100)}% less Price
          </span>
        </div>
      </div>

      {/* Add Button */}
      <div className="product-action">
        <button className="btn btn-outline-dark rounded-pill btn-sm px-3" onClick={() => handleIncrement(product.id)}>
          + Add
        </button>
      </div>
    </div>

    {/* Small and Medium Screen View */}
    <div
      className="d-lg-none border bg-white shadow-sm p-3 rounded mb-3"
      onClick={() => onProductSelect(product.id)}
      style={{ cursor: "pointer" }}
    >
      <div className="d-flex flex-column">
        {/* Product Image */}
        <div className="product-image">
          <img
            src={product.productImageUrl}
            alt={product.productname}
            className="rounded"
            width="100%"
            height="50%"
          />
        </div>

        {/* Product Details */}
        <div className="product-details flex-grow-1">
          <h6 className="mb-1">{product.productname}</h6>
          <p className="text-muted small mb-1">{product.productlab}</p>
          <p className="text-muted small salt mb-1">{product.productsaltname}</p>
          <div>
            <p className="fw-bold mb-1"><del className="salt">Rs {product.productavgprice}.00</del> Rs. {product.productprice}</p>
            <span className="badge bg-success text-white">
              {Math.round(((product.productavgprice - product.productprice) / product.productavgprice) * 100)}% less Price
            </span>
          </div>
        </div>
      </div>

      {/* Add Button */}
      <div className="product-action mt-2 text-end">
        <button className="btn btn-outline-dark rounded-pill btn-sm">
          + Add
        </button>
      </div>
    </div>
  </div>
))}

    </div>
  );
};

export default GenericAlternatives;
