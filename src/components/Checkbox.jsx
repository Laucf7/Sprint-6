import WebConfig from "./WebConfig";
import BudgetPrice from "./BudgetPrice";
import { useBudget } from "./BudgetContext";

function Checkbox() {
    const {
        arrayServices,
        services,
        handleCheckboxChange
    } = useBudget();

    return (
        <div className="container max-w-[50%] mx-auto">
            {arrayServices.map((service, index) => (
                <div
                    key={index}
                >
                    <label className="flex flex-row space-x-4 rounded overflow-hidden shadow-lg m-4 p-4 border-2 border-lime-50">
                        <div className='font-bold'> {service.title} </div>
                        <div> {service.description}  </div>
                        <div className='font-bold'> {service.price}€ </div>
                        <input
                            type="checkbox"
                            chcecked = {service.checked}
                            onChange={() => handleCheckboxChange(service.title)}
                        />
                        {service.title === 'WEB' && services.WEB && <WebConfig />}
                    </label>
                </div>
            ))}
        <p className="text-end"> <BudgetPrice /> </p>
        </div>
    );
}

export default Checkbox;