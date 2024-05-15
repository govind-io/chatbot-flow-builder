import styles from "@styles/home/home-page.module.scss";
import {useDrop} from "react-dnd";
import {useContext, useRef} from "react";
import {NodeTypes} from "@constants/nodeTypes";
import {GenerateRandomStringId} from "@utils/idGenerator";
import {GetNode} from "@utils/nodeUtils";
import {Store} from "@store/context";

export default function ContentArea() {
  const ref = useRef<HTMLDivElement>(null);

  const context = useContext(Store);

  const activeNodes = context?.store.nodesData || [];

  const setStore = context?.setStore;

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
        return {status: false};
      }

      if (!setStore) {
        return {status: false};
      }

      const defaultPos = 0;
      setStore((prev) => {
        return {
          ...prev,
          nodesData: [
            ...prev.nodesData,
            {
              node: item.id,
              posX: data.offset?.x || defaultPos,
              posY: data.offset?.y || defaultPos,
              id: GenerateRandomStringId(),
              text: "",
            },
          ],
        };
      });

      return {status: true};
    },
  }));

  drop(ref);

  console.log({activeNodes});

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
