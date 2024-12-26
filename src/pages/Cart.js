import React, { useEffect, useState } from "react";
import "../components/css/Cart.css"; // Add custom styles if needed

const Cart = () => {
  const [cartItems, setCartItems] = useState([]); // State for cart data
  const [isLoading, setIsLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    const fetchCartItems = async () => {
      const token = sessionStorage.getItem("token");

      if (!token) {
        setError("No token found, please log in.");
        setIsLoading(false);
        return;
      }

      try {
        const response = await fetch("http://127.0.0.1:5000/cart", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // Include token in Authorization header
          },
        });

        if (!response.ok) {
          if (response.status === 401) {
            sessionStorage.clear(); // Clear session if unauthorized
            setError("Unauthorized. Please log in again.");
          } else {
            throw new Error("Failed to fetch cart items");
          }
          setIsLoading(false);
          return;
        }

        const data = await response.json();
        setCartItems(data.cart || []); // Set cart items or empty array
        setIsLoading(false);
      } catch (err) {
        setError(err.message); // Handle error
        setIsLoading(false);
      }
    };

    fetchCartItems();
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
        throw new Error("Failed to update cart");
      }

      // Update UI after successful increment
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.product_id === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } catch (err) {
      setError(err.message); // Handle error
    }
  };

  if (isLoading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-danger">Error: {error}</div>;
  }

  if (cartItems.length === 0) {
    return <div className="text-center">Your cart is empty</div>;
  }

  return (
    <div className="cart-container mt-4">
      <h3>Your Cart</h3>
      <div className="cart-table-container">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Image</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.product_id}>
                <td>
                  <img
                    src={item.product_img}
                    alt={item.product_name}
                    style={{ width: "50px", height: "50px", objectFit: "cover" }}
                  />
                </td>
                <td>{item.product_name}</td>
                <td>${item.product_price}</td>
                <td>{item.quantity}</td>
                <td>${item.product_price * item.quantity}</td>
                <td>
                  <button
                    className="btn btn-sm btn-success"
                    onClick={() => handleIncrement(item.product_id)}
                  >
                    +
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="text-end mt-3">
        <h4>
          Total Amount: $
          {cartItems.reduce(
            (total, item) => total + item.product_price * item.quantity,
            0
          )}
        </h4>
        <button className=" badge btn btn-sm btn-success p-2"> pay </button>
      </div>
    </div>
  );
};

export default Cart;
