import styles from "@styles/home/home-page.module.scss";
import {useDrop} from "react-dnd";
import {useRef, useState} from "react";
import {GetNode, Node, NodeTypes} from "@constants/nodeTypes";

export default function ContentArea() {
  const ref = useRef<HTMLDivElement>(null);

  const [activeNodes, setActiveNodes] = useState<Node[]>([]);

  // eslint-disable-next-line no-unused-vars
  const [collectedData, drop] = useDrop(() => ({
    accept: "node",
    drop(item: {id: keyof typeof NodeTypes}, monitor) {
      const data = {
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop(),
        result: monitor.getDropResult(),
        offset: monitor.getSourceClientOffset(),
      };

      if (!data.isOver || !data.canDrop) {
        return false;
      }

      setActiveNodes((prev) => {
        const defaultPos = 0;
        return [
          ...prev,
          {
            node: item.id,
            posX: data.offset?.x || defaultPos,
            posY: data.offset?.y || defaultPos,
          },
        ];
      });
    },
  }));

  drop(ref);

  return (
    <div
      className={styles["content-container"]}
      ref={ref}
      style={{
        position: "relative",
      }}
    >
      {activeNodes.map((item) => {
        return GetNode(item);
      })}
    </div>
  );
}
