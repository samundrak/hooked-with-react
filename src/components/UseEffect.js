import React, { useState, useEffect } from 'react';
import Message from './Message';

const UseEffect = ({ watchMe }) => {
  const [age, setAge] = useState(0);
  // This effect will run only once, when mounted
  useEffect(() => {
    console.log('i am rending after updatew');
  }, []);
  // This will run on mount and on every update
  useEffect(() => {
    console.log('I will be running on every update');
  });
  // This will be run whenever a props is changed
  useEffect(
    () => {
      console.log('I will run when  prop i depend is updated');
    },
    [watchMe],
  ); // we can pass as many value as needed
  function handleAddAgeClick() {
    setAge(prev => {
      return age + 1;
    });
  }
  return (
    <div>
      <Message>
        {` # useEffect
            - useEffect is effect which is equal to componentDidMount and ComponentDidUpdate.
            - which means useEffect will run on mount and update
            - will run only after the DOM is applied or DOM mutation is done.
            - every time whenever a local state is changed this effect will run.
            - we can make our effect run depending on other state by passing it in second argument as array
            - We can make effect run only once by passing empty array in second argument
    `}
      </Message>
      <button onClick={handleAddAgeClick}>Add Age</button>: My Age is {age}
    </div>
  );
};
const useEffectWrapper = () => {
  const [watchMe, setWatchMe] = useState(Date.now());

  return (
    <div>
      <button onClick={() => setWatchMe(Date.now())}>Update watch me!</button>
      <UseEffect watchMe={watchMe} />
    </div>
  );
};
export default useEffectWrapper;
