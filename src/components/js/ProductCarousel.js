import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/ProductCarousel.css"; // Import the external CSS

const ProductCarousel = ({ onProductSelect }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

    useEffect(() => {
      const ProductCarousel = async () => {
      const token = sessionStorage.getItem("token");
        
  
        if (!token) {
          setError("No token found, please log in.");
          setLoading(false);
          return;
        }
  
        try {
          const response = await fetch("http://127.0.0.1:5000/allproduct", {
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
          setProducts(data); // Set the fetched data
          setLoading(false);
        } catch (err) {
          setError(err.message); // Handle error
          setLoading(false);
        }
      };
  
      ProductCarousel();
    }, []);

  const settings = {
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 600, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  if (loading) {
    return <p>Loading products...</p>;
  }

  if (products.length === 0) {
    return <p>No products available.</p>;
  }

  const getAverageRating = (reviews) => {
    if (reviews.length === 0) return "N/A";
    const total = reviews.reduce((sum, review) => sum + parseFloat(review.rating), 0);
    return (total / reviews.length).toFixed(1);
  };

  return (
    <div>
      <div>
        <h3>Compare Medicine</h3>
        <p>compare Medicine price composition to make<br></br>your decision</p>
      </div>
          <Slider {...settings}>
      {products.map((product) => (
        <div class="product-carousel">
                    <div key={product.id} className="card" onClick={() => onProductSelect(product.id)} style={{ cursor: "pointer" }}>
          <img
            src={product.image_url}
            alt={product.productname || "Product Image"}
            className="product-image"
          />
          <h3 className="product-name">{product.productname || "Unknown Product"}</h3>
          <p className="lab-name">By {product.labname}</p>
          <p className="product-generic">
            <strong>Generic Name:</strong> {product.genericname || "N/A"}
          </p>
          <p className="product-avgprice">
            <strong>Average Price:</strong> Rs {product.avgprice}.00
          </p>
          <div className="product-price">
            <p className="discount-tag">
              {product.price === product.avgprice ? "Original Price" : "15% Off"}
            </p>
            <p className="final-price">Rs. {product.price}</p>
          </div>
          <p className="product-chemical">
            <strong>Chemical formulation:</strong> {product.chemical_names || "N/A"}
          </p>
          <p className="ratings-title">
            <strong>Ratings & Review:</strong>
          </p>
          <div className="product-rating">
            <div className="stars">
              {"★".repeat(Math.floor(getAverageRating(product.reviews)))}
              {"☆".repeat(5 - Math.floor(getAverageRating(product.reviews)))}
            </div>
            <span className="average-rating">{getAverageRating(product.reviews)}</span>
          </div>
          <div className="product-reviews">
            {product.reviews.slice(0, 2).map((review, index) => (
              <p key={index} className="review-text">
                “{review.review}”
              </p>
            ))}
          </div>
        </div>

    </div>

      ))}
    </Slider>
    </div>

  );
};

export default ProductCarousel;
