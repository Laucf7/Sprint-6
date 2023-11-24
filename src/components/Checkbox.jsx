import React, { useContext } from 'react';
import { BudgetContext } from './BudgetContext';

const Checkbox = ({ id, title, description, price }) => {

    const { handleCheckboxChange } = useContext(BudgetContext);

    return (
        <div className="max-w-[50%] rounded overflow-hidden shadow-lg m-4 p-4 border-2 border-lime-50">
            <label className="flex flex-row space-x-4">
                <div className='font-bold'> {title} </div>
                <div> {description}  </div>
                <div className='font-bold'> {price}€ </div>
                <input
                    type="checkbox"
                    onChange={() => handleCheckboxChange(id, price)}
                />

            </label>
        </div>
    );
};

export default Checkbox;