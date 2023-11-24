import React, { useContext } from 'react';
import { BudgetContext } from './BudgetContext';

const BudgetForm = () => {
  const { totalBudget } = useContext(BudgetContext);

  
  return (
    <div className="max-w-sm rounded overflow-hidden m-4">
      <div className="px-6 py-4">
        <p className="text-lg font-bold mb-4 text-gray-100">Preu pressupostat: {totalBudget} €</p>
      </div>
    </div>
  );
};

export default BudgetForm;
