import { useBudget } from "./BudgetContext";


const BudgetPrice = () => {
  const { totalBudget } = useBudget();
  
  return (
    <div className="m-5">
        <p className="text-lg font-bold mb-4 text-gray-100">Preu pressupostat: {totalBudget()} €</p>
    </div>
  );
};

export default BudgetPrice;
