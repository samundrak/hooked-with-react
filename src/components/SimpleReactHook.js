/**
 * A simple example of using hook
 */
import React, { useState } from 'react';
import Message from './Message';

const SimpleReactHook = () => {
  const [count, updateCount] = useState(0);
  const [dount] = useState(0);
  const [name, updateString] = useState('samundra');
  const [opject, updateOpject] = useState({ firstName: '', lastName: '' });

  function handleClick() {
    updateCount(count + 1);
  }
  function handleInput(e) {
    updateString(e.target.value);
  }
  function handleFormChange(e) {
    updateOpject({ ...opject, [e.target.name]: e.target.value });
  }
  return (
    <div>
      <Message>
        {`# Simple note 
      - we need to use useState function to have state
      - We can use String, Number, Array or Object in useState
      - useState return array which we destructure, which is also called array destructuring.
        const [state,setState] = useState('samundra') // ['samundra', function(state){ }]
      - Doesn't work with class
      - Doesn't work outside of component, on any vanilla javascript function description
      - uses Linked List data structure 
      - Placement of useState matters
      `}
      </Message>
      This is an simple React Hook example
      <br />
      It updates a number
      <button onClick={handleClick}>
        I am {count} -{dount}
      </button>
      <hr />
      It updates string
      <input type="text" value={name} onChange={handleInput} />
      <hr />
      It updates Object First Name:{' '}
      <input
        type="text"
        name="firstName"
        value={opject.firstName}
        onChange={handleFormChange}
      />
      : {opject.firstName}
      <br />
      First Name:{' '}
      <input
        type="text"
        name="lastName"
        value={opject.lastName}
        onChange={handleFormChange}
      />
      : {opject.lastName}
      <hr />
    </div>
  );
};
export default SimpleReactHook;
