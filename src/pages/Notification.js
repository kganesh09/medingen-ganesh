import React from 'react';
import "../components/css/notification.css";

const Notification = () => {
  // Static notification data
  const notifications = [
   
    {
      id: 3,
      type: 'info',
      message: 'You have 3 new notifications.',
    }
    
  ];

  return (
    <div className="notification-container">
      <h2>Notifications</h2>
      <div className="notification-list">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`notification-item ${notification.type}`}
          >
            <p>{notification.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notification;
