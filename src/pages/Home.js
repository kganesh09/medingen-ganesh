import React, { useState } from "react";
import ProductDetails from "../components/js/productdetails";
import GenericAlternatives from "../components/js/genericproduct";
import ProductCarousel from "../components/js/ProductCarousel";
import FAQComponent from "../components/js/faqQuestion";
import Review from "../components/js/reviews";
import Declartion from "../components/js/declaration"

function Home() {
  const [selectedProductId, setSelectedProductId] = useState(null); // Shared state

  // Function to handle product selection
  const handleProductSelect = (productId) => {
    setSelectedProductId(productId);
  };

  return (
    <div className="container-fluid mt-3">
      <div className="row">
        <div className="col-md-8">
          {/* Pass the selectedProductId and the handler to ProductDetails */}
          <ProductDetails productId={selectedProductId} />
        </div>
        <div className="col-md-4">
          {/* Pass the handler to GenericAlternatives */}
          <GenericAlternatives onProductSelect={handleProductSelect} />
        </div>
      </div>
      {/* Pass the handler to ProductCarousel */}
      <ProductCarousel onProductSelect={handleProductSelect} />
      <FAQComponent productId={selectedProductId} />
      <Review productId={selectedProductId} />
      <Declartion></Declartion>
    </div>
  );
}

export default Home;
