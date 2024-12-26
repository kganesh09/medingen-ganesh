import React, { useEffect, useState } from "react";
import "../css/Reviews.css"

const Review = ({ productId }) => {
      const [productReview, setproductReview] = useState([]); // State for API data
      const [isLoading, setIsLoading] = useState(true); // Loading state
      const [error, setError] = useState(null); // Error state
    
      useEffect(() => {
        if (productId==null) { productId=1}
        const fetchReview = async () => {
        const token = sessionStorage.getItem("token");
          
    
          if (!token) {
            setError("No token found, please log in.");
            setIsLoading(false);
            return;
          }
    
          try {
            const response = await fetch(`http://127.0.0.1:5000/reviews/${productId}`, {
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
            setproductReview(data.reviews || []);
            setIsLoading(false);
          } catch (err) {
            setError(err.message); // Handle error
            setIsLoading(false);
          }
        };
    
        fetchReview();
      }, [productId]);
    
      if (isLoading) {
        return <div className="text-center">Loading...</div>;
      }
    
      if (error) {
        return <div className="text-center text-danger">Error: {error}</div>;
      }
    return(
        <div className="mt-4">
      <h3>Ratings & Reviews</h3>
      <div className="product-rating">
        {productReview.length > 0 ? (
          productReview.map((review, index) => (
            <div key={index}>
               <div className="stars">
               <span className="filled-stars">
                    {"★".repeat(Math.floor(review.rating)).split("").map((star, index) => (
                      <span key={`filled-${index}`} className="star">
                       {star}
                      </span>
                    ))}
               </span>
               <span className="empty-stars">
                    {"★".repeat(5 - Math.floor(review.rating)).split("").map((star, index) => (
                     <span key={`empty-${index}`} className="star">
                      {star}
                    </span>
                    ))}
               </span>
                  <span className="span-rating badge">{review.rating}</span>
                </div>

              <p className="comments">" {review.comment} "</p>
            </div>
          ))
        ) : (
          <p>No reviews available</p>
        )}
      </div>
    </div>
    )
}

export default Review;