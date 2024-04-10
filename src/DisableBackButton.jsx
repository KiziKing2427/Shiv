/*import React, { useState, useEffect } from 'react';

const DisableBackButton = () => {
  useEffect(() => {
    const disableBackButton = () => {
      window.history.replaceState(null, "", window.location.href); // Replace the current URL
      window.onpopstate = function (event) {
        window.history.go(1); // Go forward if back button is pressed
      };
    };

    const handleBeforeUnload = (event) => {
      const confirmationMessage = "Are you sure you want to leave this page?";
      (event || window.event).returnValue = confirmationMessage; // Standard method for most browsers
      return confirmationMessage; // For older browsers
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    disableBackButton();

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return (
    <div>
      
    </div>
  );
};

export default DisableBackButton;
*/