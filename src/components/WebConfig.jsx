import { useContext } from "react";
import { BudgetContext } from "./BudgetContext";

const WebConfig = () => {
    const { checkboxes, webConfig, dispatch } = useContext(BudgetContext);
    if (!checkboxes.WEB) {
        return null;
    }

    const handlePagesChange = (event) => {
        const newPages = parseInt(event.target.value, 10);
        const pages = Math.max(1, newPages);
        dispatch({ type: 'UPDATE_WEB_CONFIG', webConfig: { ...webConfig, pages } });

    }

    const handleLanguagesChange = (event) => {
        const newLanguages = parseInt(event.target.value, 10);
        const languages = Math.max(1, newLanguages); // Establecer un mínimo de 1 para idiomas
        dispatch({ type: 'UPDATE_WEB_CONFIG', webConfig: { ...webConfig, languages } });

    }

    return (
        <div className="mt-4">
            <label className="block mb-2">
                Pages:
                <input
                    type="number"
                    value={webConfig.pages}
                    onChange={handlePagesChange}
                    className="form-input mt-1 block w-full"
                />
            </label>
            <label className="block mb-2">
                Languages:
                <input
                    type="number"
                    value={webConfig.languages}
                    onChange={handleLanguagesChange}
                    className="form-input mt-1 block w-full"
                />
            </label>
        </div>
    );

};

export default WebConfig;

