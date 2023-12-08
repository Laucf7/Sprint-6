import { createContext, useContext, useState } from "react";

const BudgetContext = createContext();

export const useBudget = () => {
  return useContext(BudgetContext);
};

export const BudgetProvider = ({ children }) => {

  const arrayServices = [
    {
      title: 'SEO',
      description: "Programació d'una web responsive completa",
      price: 300,
    },
    {
      title: 'ADS',
      description: "Programació d'una web responsive completa",
      price: 400,
    },
    {
      title: 'WEB',
      description: "Programació d'una web responsive completa",
      price: 500,
    },
  ];

  const [services, setServices] = useState({
    SEO: false,
    ADS: false,
    WEB: false,
  });

  const handleCheckboxChange = (service) => {
    setServices({
      ...services,
      [service.toUpperCase()]: !services[service.toUpperCase()],
    });
  }

  const [webConfig, setWebConfig] = useState({
    pages: 1,
    languages: 1,
  });

  const onPagesChange = (pages) => {
    setWebConfig({ ...webConfig, pages });
  };

  const onLanguagesChange = (languages) => {
    setWebConfig({ ...webConfig, languages });
  };

  const totalBudget = () => {
    let total = 0;
    arrayServices.forEach((service) => {
      if (services[service.title.toLocaleUpperCase()]) {
        total += service.price;
      }
    });
    if (services.WEB) {
      total += (webConfig.pages + webConfig.languages) * 30;
    }
    return total;
  }

  return (
    <BudgetContext.Provider value={
      {
        arrayServices,
        services,
        handleCheckboxChange,
        webConfig,
        onPagesChange,
        onLanguagesChange,
        totalBudget
      }}>
      {children}
    </BudgetContext.Provider>
  );
}
export default BudgetProvider;
