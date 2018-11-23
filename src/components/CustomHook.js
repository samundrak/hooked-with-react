import React, { useState, useEffect } from 'react';
import GithubLink from './GithubLink';

function useLotteryFormula(salt) {
  const [lotteryNumber, setLotteryNumber] = useState(null);

  useEffect(() => {
    setLotteryNumber(`${Date.now()}-${salt}`);
  }, []);
  return lotteryNumber;
}
const Component1 = () => {
  const lottery = useLotteryFormula('Day 1');
  return (
    <div>
      Winner lottery number of say 1 is <strong>{lottery}</strong>
    </div>
  );
};
const Component2 = () => {
  const lottery = useLotteryFormula('Day 2');
  return (
    <div>
      Winner lottery number of day 2 is <strong>{lottery}</strong>
    </div>
  );
};

const CustomHookContainer = () => {
  return (
    <div>
      <GithubLink
        file="src/components/CustomHook.js"
        label="Edit in github"
        target="_blank"
      />
      <Component1 />
      <Component2 />
    </div>
  );
};
export default CustomHookContainer;
