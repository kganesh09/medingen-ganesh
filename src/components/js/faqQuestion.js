import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp,faAngleDown } from '@fortawesome/free-solid-svg-icons';


const FAQComponent = ({ productId }) => {
  const [questions, setQuestions] = useState([]);
  const [name, setname]= useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false); // State to track toggle for all questions

  useEffect(() => {
    if (productId == null) {
      productId = 1; // Default productId if not provided
    }

    const fetchQuestions = async () => {
      const token = sessionStorage.getItem("token");
      

      if (!token) {
        setError("No token found, please log in.");
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(`http://127.0.0.1:5000/questions/${productId}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // Send token in Authorization header
          },
        });

        if (!response.ok) {
          if (response.status === 401) {
            sessionStorage.clear();
          }
          throw new Error("Failed to fetch product details");
        }

        const responseData = await response.json();
        setname(responseData.productname);
        

        // Check if questions exist and are in the correct format
        if (responseData.questions) {
          const questionsData = typeof responseData.questions === "string"
            ? JSON.parse(responseData.questions) // Parse if it's a string
            : responseData.questions;

          setQuestions(questionsData); // Set the fetched data
        } else {
          throw new Error("Questions data is missing in the API response.");
        }
        setLoading(false);
      } catch (err) {
        setError(err.message); // Handle error
        setLoading(false);
      }
    };

    fetchQuestions();
  }, [productId]);

  const toggleAll = () => {
    setIsExpanded(!isExpanded); // Toggle all questions and answers
  };

  if (loading) {
    return <p>Loading FAQs...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <div className="bg-white">
   <div className="w-100 p-2 bg-light rounded mt-3 mb-3 d-flex justify-content-between" onClick={toggleAll}>
      <h3>Frequently Asked Questions for {name} </h3>
      <FontAwesomeIcon className="m-3" icon={isExpanded ? faAngleUp : faAngleDown} />
   </div>
   {isExpanded && (
      <div className="product-details p-4 bg-light rounded">
         {questions.map((item, index) => (
            <div key={index}>
               <p className="">Q. {item.question}</p>
               <p className="">{item.answer}</p>
            </div>
         ))}
      </div>
   )}
</div>
      
    </div>

  );
};

export default FAQComponent;
