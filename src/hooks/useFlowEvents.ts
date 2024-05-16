import {NodeData} from "@constants/nodeTypes";
import {Store} from "@store/context";
import {useCallback, useContext} from "react";
import {
  Connection,
  Edge,
  EdgeChange,
  NodeChange,
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
} from "reactflow";

const isValidConnection = (
  connection: Connection,
  existingEdges: Edge<any>[],
) => {
  const {source} = connection;
  return !existingEdges.some((edge) => edge.source === source);
};

export default function useFlowEvents() {
  const context = useContext(Store);

  const setStore = context?.setStore;

  const onNodesChange = useCallback(
    (changes: NodeChange[]) => {
      if (!setStore) {
        return;
      }

      setStore((prev) => {
        return {
          ...prev,
          nodesData: applyNodeChanges(changes, prev.nodesData) as NodeData[],
        };
      });
    },
    [setStore],
  );
  const onEdgesChange = useCallback(
    (changes: EdgeChange[]) => {
      if (!setStore) {
        return;
      }

      setStore((prev) => {
        return {
          ...prev,
          edgesData: applyEdgeChanges(changes, prev.edgesData),
        };
      });
    },
    [setStore],
  );

  const onConnect = useCallback(
    (connection: Connection) => {
      if (!setStore) {
        return;
      }

      setStore((prev) => {
        //if any of the edges are creating duplicate connection at the source handle then don't update connection
        if (!isValidConnection(connection, prev.edgesData)) {
          return prev;
        }

        return {
          ...prev,
          edgesData: addEdge({...connection}, prev.edgesData),
        };
      });
    },
    [setStore],
  );

  return {onConnect, onNodesChange, onEdgesChange};
}
