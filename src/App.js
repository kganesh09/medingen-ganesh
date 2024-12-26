import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Header from "./components/js/header";
import Home from "./pages/Home";
import Offers from "./pages/Offers";
import Notification from "./pages/Notification";
import Profile from "./pages/Profile";
import Cart from "./pages/Cart";
import Login from "./components/js/login";
import Footer from "./components/js/footer"

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!sessionStorage.getItem("token"));

  useEffect(() => {
    setIsLoggedIn(!!sessionStorage.getItem("token"));
  }, []);

  return (
    <Router>
      <div>
        {/* Show Header only if logged in */}
        {isLoggedIn && <Header />}

        <Routes>
          {/* Login Route */}
          <Route
            path="/login"
            element={
              isLoggedIn ? (
                <Navigate to="/" replace />
              ) : (
                <Login setIsLoggedIn={setIsLoggedIn} />
              )
            }
          />

          {/* Protected Routes */}
          <Route
            path="/"
            element={
              isLoggedIn ? <Home /> : <Navigate to="/login" replace />
            }
          />
          <Route
            path="/offers"
            element={
              isLoggedIn ? <Offers /> : <Navigate to="/login" replace />
            }
          />
          <Route
            path="/notification"
            element={
              isLoggedIn ? <Notification /> : <Navigate to="/login" replace />
            }
          />
          <Route
            path="/profile"
            element={
              isLoggedIn ? <Profile /> : <Navigate to="/login" replace />
            }
          />
          <Route
            path="/cart"
            element={
              isLoggedIn ? <Cart /> : <Navigate to="/login" replace />
            }
          />

          {/* Catch-all route for invalid paths */}
          <Route
            path="*"
            element={<Navigate to={isLoggedIn ? "/" : "/login"} replace />}
          />
        </Routes>
        {isLoggedIn && <Footer />}
      </div>
    </Router>
  );
};

export default App;