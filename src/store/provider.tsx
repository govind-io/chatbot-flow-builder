import React, {ReactNode, useEffect, useState} from "react";
import {Store, defaultStore, storeType} from "./context";
import ToastHandler from "@utils/toastHandler";

const StoreProvider = ({children}: {children: ReactNode}) => {
  const [store, setStore] = useState<storeType>(defaultStore);

  useEffect(() => {
    const prevStore = localStorage.getItem("store");

    if (prevStore) {
      try {
        const parsedStore = JSON.parse(prevStore);
        setStore(parsedStore);
      } catch (e) {
        ToastHandler({
          type: "dan",
          messages: "Could not load previously saved data",
        });
      }
    }
  }, []);

  return <Store.Provider value={{store, setStore}}>{children}</Store.Provider>;
};

export default StoreProvider;
