import { createContext, useContext, useState } from 'react';

const SupplierContext = createContext();

export const SupplierProvider = ({ children }) => {
  const [suppliers, setSuppliers] = useState([]);
  
  const addSupplier = (supplier) => {
    setSuppliers([...suppliers, supplier]);
  };

  return (
    <SupplierContext.Provider value={{ suppliers, addSupplier }}>
      {children}
    </SupplierContext.Provider>
  );
};

export const useSuppliers = () => useContext(SupplierContext);