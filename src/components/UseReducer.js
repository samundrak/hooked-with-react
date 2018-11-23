import React, { useState, useReducer } from 'react';

const initialState = {
  name: {
    firstName: '',
    lastName: '',
  },
  age: 0,
  email: '',
  skills: [],
  address: '',
};
const ACTION = {
  ADD_NEW_SKILL: 'ADD_NEW_SKILL',
  REMOVE_SKILL: 'REMOVE_SKILL',
  UPDATE_FORM: 'UPDATE_FORM',
};
const UseReducer = () => {
  // useReducer takes a function as argument which it calls with current state and action whenever we call dispatch method
  const [state, dispatch] = useReducer((state, action) => {
    console.log(action);
    switch (action.type) {
      case ACTION.ADD_NEW_SKILL:
        return { ...state, skills: [''].concat(state.skills) };
      case ACTION.REMOVE_SKILL:
        const skills = (state.skills.splice(action.index, 1), state.skills);
        return { ...state, skills };
      case ACTION.UPDATE_FORM:
        return { ...state, ...action.payload };
      default:
        return state;
    }
  }, initialState);
  function handleInput(event) {
    const field = event.target.name;
    const value = event.target.value;
    const payload = {};
    if (field === 'firstName' || field === 'lastName') {
      payload.name = { ...state.name, [field]: value };
    } else {
      payload[field] = value;
    }
    console.log(payload);
    dispatch({
      type: ACTION.UPDATE_FORM,
      payload,
    });
  }
  function handleSkillChange(index) {
    return event => {
      const value = event.target.value;
      const skills = [].concat(state.skills);
      skills[index] = value;
      dispatch({
        type: ACTION.UPDATE_FORM,
        payload: {
          skills,
        },
      });
    };
  }
  function handleSubmit(e) {
    e.preventDefault();
    alert(`Form submitted`);
    console.log('payload', state);
  }
  return (
    <div>
      <form name="form" onSubmit={handleSubmit}>
        <table>
          <tbody>
            <tr>
              <td>FirstName:</td>
              <td>
                <input
                  type="text"
                  name="firstName"
                  value={state.name.firstName}
                  onChange={handleInput}
                />
                <span>{state.name.firstName}</span>
              </td>
            </tr>
            <tr>
              <td>LastName:</td>
              <td>
                <input
                  type="text"
                  name="lastName"
                  value={state.name.lastName}
                  onChange={handleInput}
                />
              </td>
            </tr>
            <tr>
              <td>Age</td>
              <td>
                <input
                  type="number"
                  value={state.age}
                  name="age"
                  onChange={handleInput}
                />
              </td>
            </tr>
            <tr>
              <td>Email</td>
              <td>
                <input
                  type="email"
                  value={state.email}
                  name="email"
                  onChange={handleInput}
                />
              </td>
            </tr>
            <tr>
              <td>skills</td>
              <td>
                <button
                  onClick={el => (
                    dispatch({ type: ACTION.ADD_NEW_SKILL }),
                    el.preventDefault()
                  )}
                >
                  Add Skill
                </button>
                <ol>
                  {state.skills.map((skill, index) => {
                    return (
                      <li key={index}>
                        <input
                          type="text"
                          value={skill}
                          onChange={handleSkillChange(index)}
                        />
                        <button
                          onClick={el => (
                            dispatch({ type: ACTION.REMOVE_SKILL, index }),
                            el.preventDefault()
                          )}
                        >
                          Remove
                        </button>
                      </li>
                    );
                  })}
                </ol>
              </td>
            </tr>
            <tr>
              <td>
                <input type="submit" value="submit" />
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};
export default UseReducer;
