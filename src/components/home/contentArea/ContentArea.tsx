import styles from "@styles/home/home-page.module.scss";
import {memo, useCallback, useContext, useMemo, useRef, useState} from "react";
import {Store} from "@store/context";
import ReactFlow, {
  Background,
  BackgroundVariant,
  MiniMap,
  Node,
  Panel,
} from "reactflow";
import "reactflow/dist/style.css";
import MessageNodeTile from "./sidebar/nodes/MessageNodeTile";
import useDropEnhanced from "@/hooks/useDropEnhanced";

import useFlowEvents from "@/hooks/useFlowEvents";
import {NodeTypes} from "@constants/nodeTypes";

function ContentArea() {
  const ref = useRef<HTMLDivElement>(null);

  const context = useContext(Store);

  const nodes = context?.store.nodesData || [];

  const edges = context?.store.edgesData || [];

  const {onConnect, onEdgesChange, onNodesChange} = useFlowEvents();

  const drop = useDropEnhanced();

  const [backgroundVariant, setBackgroundVariant] = useState(
    BackgroundVariant.Cross,
  );

  drop(ref);

  const customNodes = useMemo(() => {
    return {message: MessageNodeTile};
  }, []);

  const nodeColor = useCallback((node: Node) => {
    if (node.type === NodeTypes.message.type) {
      return "#6ede87";
    }

    return "#6865A5";
  }, []);

  return (
    <div
      className={styles["content-container"]}
      ref={ref}
    >
      <ReactFlow
        nodeTypes={customNodes as any}
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
      >
        <MiniMap
          nodeColor={nodeColor}
          zoomable
          pannable
        />
        <Background
          color="#ccc"
          variant={backgroundVariant}
        />
        <Panel position="top-left">
          <button
            className={`${styles["flow-panel"]} ${backgroundVariant === BackgroundVariant.Dots && styles.active}`}
            onClick={() => setBackgroundVariant(BackgroundVariant.Dots)}
          >
            Dot
          </button>
          <button
            className={`${styles["flow-panel"]} ${backgroundVariant === BackgroundVariant.Cross && styles.active}`}
            onClick={() => setBackgroundVariant(BackgroundVariant.Cross)}
          >
            Cross
          </button>
          <button
            className={`${styles["flow-panel"]} ${backgroundVariant === BackgroundVariant.Lines && styles.active}`}
            onClick={() => setBackgroundVariant(BackgroundVariant.Lines)}
          >
            Lines
          </button>
        </Panel>
      </ReactFlow>
    </div>
  );
}

export default memo(ContentArea);
