import React, { createContext, useReducer } from 'react';

const BudgetContext = createContext();

const initialState = {
  checkboxes: {},
  totalBudget: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_CHECKBOX':
      return {
        ...state,
        checkboxes: {
          ...state.checkboxes,
          [action.id]: !state.checkboxes[action.id],
        },
        totalBudget: state.totalBudget + (state.checkboxes[action.id] ? -action.price : action.price),
      };
    default:
      return state;
  }
};

const BudgetProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleCheckboxChange = (id, price) => {
    dispatch({ type: 'TOGGLE_CHECKBOX', id, price });
  };

  return (
    <BudgetContext.Provider value={{ ...state, handleCheckboxChange }}>
      {children}
    </BudgetContext.Provider>
  );
};

export { BudgetContext, BudgetProvider };
