import React, { useEffect, useState } from 'react';
import './Popup.css';

const Popup = () => {
  const [showPopup, setShowPopup] = useState(true);

  const closePopup = () => {
    setShowPopup(false);
  };

  const handleRead = () => {
    window.open('/pdfs/enquete ethnobotanique (plantes allergenes).pdf', '_blank'); 
    setShowPopup(false); // Hide popup after the button is clicked
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(false);
    }, 30000); // Hide after 5 seconds, if no action is taken

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showPopup && (
        <div className="popup">
          <p>Read the magazine of this month</p>
          <button onClick={handleRead}>Read</button>
          <button onClick={closePopup}>Close</button>
        </div>
      )}
    </>
  );
};

export default Popup;
