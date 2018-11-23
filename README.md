# Introducing Hooks

    Hooks are a new feature proposal that lets you use
    state and other React features without writing a class. They’re currently
    in React v16.7.0-alpha and being discussed in an open RFC

# Simple hook note

- we need to use useState function to have state
- We can use String, Number, Array or Object in useState
- useState return array which we destructure, which is also called array destructuring.
  const [state,setState] = useState('samundra') // ['samundra', function(state){ }]
- Doesn't work with class
- Doesn't work outside of component, on any vanilla javascript function description
- uses Linked List data structure
- Placement of useState matters

## useEffect

- useEffect is effect which is equal to componentDidMount and ComponentDidUpdate.
- which means useEffect will run on mount and update
- will run only after the DOM is applied or DOM mutation is done.
- every time whenever a local state is changed this effect will run.
- we can make our effect run depending on other state by passing it in second argument as array
- We can make effect run only once by passing empty array in second argument

## useReducer

- useReducer is an another hook provided by react
- when we want to manage state in single object we can use it
- Inspired by redux, we may not need redux if our app is small and we need some state management
