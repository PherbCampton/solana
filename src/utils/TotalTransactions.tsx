import React, { useEffect } from 'react';

const CountingComponent = () => {
  useEffect(() => {
    const startingNumber = 197080341453;
    let count = startingNumber;

    const interval = setInterval(() => {
      count++;
      localStorage.setItem('count', count.toString());
    }, 1);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Component JSX */}
    </div>
  );
};

export default CountingComponent;
