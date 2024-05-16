import {NodeTypes} from "@constants/nodeTypes";
import {Store} from "@store/context";
import {GenerateRandomStringId} from "@utils/idGenerator";
import {useContext} from "react";
import {useDrop} from "react-dnd";

export default function useDropEnhanced() {
  const context = useContext(Store);

  const setStore = context?.setStore;

  // eslint-disable-next-line no-unused-vars
  const [collectedData, drop] = useDrop(() => ({
    accept: "node",
    drop(item: {type: keyof typeof NodeTypes}, monitor) {
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
              type: item.type,
              position: {
                x: data.offset?.x || defaultPos,
                y: data.offset?.y || defaultPos,
              },
              id: GenerateRandomStringId(),
              data: {text: ""},
            },
          ],
        };
      });

      return {status: true};
    },
  }));

  return drop;
}
