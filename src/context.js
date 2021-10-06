import React, { useState, useContext } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [allTimers, setAllTimers] = useState([]);
  const [activeTimers, setActiveTimers] = useState([]);

  return (
    <AppContext.Provider
      value={{
        activeTimers,
        setActiveTimers,
        allTimers,
        setAllTimers,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
