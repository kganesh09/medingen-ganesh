import React from 'react';
import '../components/css/Offer.css'; // Add custom styles if needed

const Offer = () => {
  // Static offer data
  const offers = [
    {
      id: 1,
      title: '50% Off on First Order',
      description: 'Get 50% off your first purchase when you sign up today.',
      image: 'https://cdn.farmako.in/inventory/images/377cae24af8ce310bec7551fa6589e30d669ac9f/af3b5a930410780737589b77ff7f2ac0abb75b38.png', // Placeholder image
      validUntil: '2024-12-31',
    },
    {
      id: 2,
      title: 'Buy One Get One Free',
      description: 'Buy one item from our store and get another one for free.',
      image: 'https://cdn.britannica.com/23/130223-050-99065995/acetaminophen-suppositories.jpg', // Placeholder image
      validUntil: '2024-12-25',
    },
    {
      id: 3,
      title: 'Free Shipping on Orders Above $50',
      description: 'Enjoy free shipping on all orders over $50.',
      image: 'https://longislandinterventions.com/wp-content/uploads/2022/07/Hydrocodone.jpg', // Placeholder image
      validUntil: '2024-12-31',
    },
  ];

  return (
    <div className="offer-container">
      <h2>Special Offers</h2>
      <div className="offer-list">
        {offers.map((offer) => (
          <div key={offer.id} className="offer-item">
            <img src={offer.image} alt={offer.title} />
            <div className="offer-details">
              <h3>{offer.title}</h3>
              <p>{offer.description}</p>
              <p><strong>Valid Until:</strong> {offer.validUntil}</p>
              <button className="btn btn-primary">Claim Offer</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offer;
