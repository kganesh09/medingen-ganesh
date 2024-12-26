import React, { useEffect, useState } from "react";

const ProductDetails = ({ productId }) => {
  const [productDetails, setProductDetails] = useState(null); // State for API data
  const [isLoading, setIsLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    if (productId==null) { productId=1}
    const fetchProductDetails = async () => {
    const token = sessionStorage.getItem("token");
      

      if (!token) {
        setError("No token found, please log in.");
        setIsLoading(false);
        return;
      }

      try {
        const response = await fetch(`http://127.0.0.1:5000/description/${productId}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`, // Send token in Authorization header
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch product details");
        }
        if(response.status==401){
          sessionStorage.clear();
        }

        const data = await response.json();
        setProductDetails(data); // Set the fetched data
        setIsLoading(false);
      } catch (err) {
        setError(err.message); // Handle error
        setIsLoading(false);
      }
    };

    fetchProductDetails();
  }, [productId]);

  if (isLoading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-danger">Error: {error}</div>;
  }

  return (
    <div className="bg-white">
      <div className="w-100 p-2 bg-light rounded text-center mb-2">
        Medicine Details
      </div>

      <div className="product-details p-4 bg-light rounded">
        <h4 className="mb-3">About {productDetails.productname}</h4>
        <p>{productDetails.content}</p>

        <h5 className="mt-4">How to Use</h5>
        <p>{productDetails.howtouse}</p>

        <h5 className="mt-4">Uses</h5>
        <ul>
          {JSON.parse(productDetails.uses).map((use, index) => (
            <li key={index}>{use}</li>
          ))}
        </ul>

        <h5 className="mt-4">Side Effects</h5>
        <ul>
          {JSON.parse(productDetails.sideeffects).map((effect, index) => (
            <li key={index}>{effect}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductDetails;
