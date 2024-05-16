import styles from "@styles/home/home-page.module.scss";
import {useContext, useMemo, useRef} from "react";
import {Store} from "@store/context";
import ReactFlow, {Background, Controls, ReactFlowProvider} from "reactflow";
import "reactflow/dist/style.css";
import MessageNodeTile from "./sidebar/nodes/MessageNodeTile";
import useDropEnhanced from "@/hooks/useDropEnhanced";

import useFlowEvents from "@/hooks/useFlowEvents";

export default function ContentArea() {
  const ref = useRef<HTMLDivElement>(null);

  const context = useContext(Store);

  const nodes = context?.store.nodesData || [];

  const edges = context?.store.edgesData || [];

  const {onConnect, onEdgesChange, onNodesChange} = useFlowEvents();

  const drop = useDropEnhanced();

  drop(ref);

  const customNodes = useMemo(() => {
    return {message: MessageNodeTile};
  }, []);

  return (
    <div
      className={styles["content-container"]}
      ref={ref}
    >
      <ReactFlowProvider>
        <ReactFlow
          nodeTypes={customNodes as any}
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
        >
          <Background />
          <Controls />
        </ReactFlow>
      </ReactFlowProvider>
    </div>
  );
}