
import React, { createContext, useReducer, useState } from 'react';

const BudgetContext = createContext();

const initialState = {
  checkboxes: {
    SEO: false,
    ADS: false,
    WEB: false,
  },
  totalBudget: 0,
  webConfig: {
    pages: 1,
    languages: 1,
  },
  
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_CHECKBOX':
      if (action.id === 'WEB' && state.checkboxes.WEB) {
        
        return {
          ...state,
          checkboxes: {
            ...state.checkboxes,
            [action.id]: !state.checkboxes[action.id],
          },
          totalBudget: state.totalBudget - action.price - ((state.webConfig.pages-1) + (state.webConfig.languages-1)) * 30,
          webConfig: { pages: 1, languages: 1 },
        };
      } else {
        
        return {
          ...state,
          checkboxes: {
            ...state.checkboxes,
            [action.id]: !state.checkboxes[action.id],
          },
          totalBudget: state.totalBudget + (state.checkboxes[action.id] ? -action.price : action.price),
        };
      }
    case 'UPDATE_WEB_CONFIG':
      return {
        ...state,
        webConfig: {
          ...state.webConfig,
          ...action.webConfig,
        },
        totalBudget:
          state.totalBudget - (state.webConfig.pages + state.webConfig.languages) * 30 + (action.webConfig.pages + action.webConfig.languages) * 30,
      };
    default:
      return state;
  }
};

const BudgetProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { checkboxes, webConfig } = state;

  const handleCheckboxChange = (id, price) => {
    if (id === 'WEB') {
      dispatch({ type: 'TOGGLE_CHECKBOX', id, price, webConfig });
    } else {
      dispatch({ type: 'TOGGLE_CHECKBOX', id, price });
    }
  };

  return (
    <BudgetContext.Provider value={{ ...state, dispatch, handleCheckboxChange }}>
      {children}
    </BudgetContext.Provider>
  );
};

export { BudgetContext, BudgetProvider };

