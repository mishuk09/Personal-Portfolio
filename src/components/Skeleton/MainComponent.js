// MainComponent.js
import React, { useState, useEffect } from 'react';
import LoadingComponent from './Skeleton';
import facebook from '../Home/img/facebook.svg';


const MainComponent = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating a delay to represent your website's actual loading time
    const timeout = setTimeout(() => {
      setIsLoading(false); // Set isLoading to false after the delay
    }, 3000); // Change the duration to match your expected loading time

    // Clear the timeout to prevent memory leaks
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div>
      {isLoading ? (
        <LoadingComponent />
      ) : (
        <div>
          <img src= {facebook} alt="Your Image"/>
        </div>
      )}
    </div>
  );
};

export default MainComponent;
