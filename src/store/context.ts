import {NodeData} from "@constants/nodeTypes";
import {Dispatch, SetStateAction, createContext} from "react";

export interface storeType {
  nodesData: NodeData[];
  clickedNode: NodeData | null;
}

export const defaultStore: storeType = {
  nodesData: [],
  clickedNode: null,
};

interface contextValue {
  store: storeType;
  setStore: Dispatch<SetStateAction<storeType>>;
}

export const Store = createContext<contextValue | null>(null);
