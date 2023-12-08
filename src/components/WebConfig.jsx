import { useBudget } from "./BudgetContext";

function WebConfig() {
  const {
    webConfig,
    onPagesChange,
    onLanguagesChange,
  } = useBudget();

  return (
    <>
      <div className="mt-4">
        <label className="flex flex-row mb-2">
          <span>Número de pàgines:</span>
          <button 
          className="btn btn-circle btn-xs ms-2 border-lime-50" 
          onClick={()=> webConfig.pages > 1 ? onPagesChange(webConfig.pages -1) : null}>
            -
          </button>
          <input
            type="number"
            value={webConfig.pages}
            onChange={(e) => onPagesChange(parseInt(e.target.value, 10))}
            className="input input-sm w-14 mx-1 text-center border-lime-50"
          />
          <button 
          className="btn btn-circle btn-xs border-lime-50" 
          onClick={()=> onPagesChange(webConfig.pages + 1)}>
            +
          </button>
        </label>
        <label className="flex flex-row mb-2">
          <span>Número de llenguatges:</span>
          <button 
          className="btn btn-circle btn-xs ms-2 border-lime-50" 
          onClick={()=> webConfig.languages > 1? onLanguagesChange(webConfig.languages - 1): null}>
            -
          </button>
          <input
            type="number"
            value={webConfig.languages}
            onChange={(e) => onLanguagesChange(parseInt(e.target.value, 10))}
            className="input input-sm w-14 mx-1 text-center border-lime-50"
          />
          <button 
          className="btn btn-circle btn-xs border-lime-50" 
          onClick={()=> onLanguagesChange(webConfig.languages + 1)}>
            +
          </button>
        </label>
      </div>
    </>
  );
}

export default WebConfig;