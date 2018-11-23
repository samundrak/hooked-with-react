import React, { useState, useEffect } from 'react';

let cleanupCount = 0;
const UseEffectCleanup = () => {
  const [count, setCount] = useState(0);

  // returned callback will not on first render
  useEffect(() => {
    console.log('i am updating');
    return () => {
      console.log('i am running on cleanup' + cleanupCount);
      cleanupCount++;
    };
  });
  useEffect(() => {
    console.log(' i am second effect');
    return () => {
      console.log('i am going to run only when this component will unmount ');
    };
  }, []);
  function handleButton() {
    setCount(count + 1);
  }
  return (
    <div>
      <button onClick={handleButton}>Please click me</button>
      Clicked me {count} times
    </div>
  );
};
export default UseEffectCleanup;
