import React from 'react';
import Checkbox from './components/Checkbox';
import BudgetForm from './components/BudgetForm';
import { BudgetProvider } from './components/BudgetContext';


const Data = [
  {
    id: 'SEO',
    title: 'SEO',
    description: "Programació d'una web responsive completa",
    price: 300,
  },
  {
    id: 'ADS',
    title: 'ADS',
    description: "Programació d'una web responsive completa",
    price: 400,
  },
  {
    id: 'WEB',
    title: 'WEB',
    description: "Programació d'una web responsive completa",
    price: 500,
  },
];

const App = () => {
  return (
    <BudgetProvider>
      <div>
        <h1 className='text-2xl'>ACONSEGUEIX LA MILLOR QUALITAT</h1>
        {Data.map((item) => (
          <Checkbox key={item.id} id={item.id} title={item.title} description={item.description} price={item.price} />
        ))}
        <BudgetForm />
      </div>
    </BudgetProvider>
  );
};

export default App;


