// LoadingComponent.js
import React from 'react';
import Skeleton from 'react-loading-skeleton';

const LoadingComponent = () => {
  return (
    <div>
      <Skeleton height={200} width={200} /> {/* Adjust height and width as needed */}
    </div>
  );
};

export default LoadingComponent;
