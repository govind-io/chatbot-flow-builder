import React, {ReactNode, useState} from "react";
import {Store, defaultStore, storeType} from "./context";

const StoreProvider = ({children}: {children: ReactNode}) => {
  const [store, setStore] = useState<storeType>(defaultStore);

  return <Store.Provider value={{store, setStore}}>{children}</Store.Provider>;
};

export default StoreProvider;
