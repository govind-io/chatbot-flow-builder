import {NodeData} from "@constants/nodeTypes";
import {Dispatch, SetStateAction, createContext} from "react";
import {Edge} from "reactflow";

export interface storeType {
  nodesData: NodeData[];
  clickedNode: NodeData | null;
  edgesData: Edge<any>[];
}

export const defaultStore: storeType = {
  nodesData: [],
  clickedNode: null,
  edgesData: [],
};

interface contextValue {
  store: storeType;
  setStore: Dispatch<SetStateAction<storeType>>;
}

export const Store = createContext<contextValue | null>(null);
