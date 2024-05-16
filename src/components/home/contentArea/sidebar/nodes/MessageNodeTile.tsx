import {NodeTypes} from "@constants/nodeTypes";
import {Store} from "@store/context";
import styles from "@styles/home/node.module.scss";
import Image from "next/image";
import {memo, useContext} from "react";
import {Handle, Position} from "reactflow";

interface MessageNodeTileProps {
  posX: number;
  posY: number;
  data: {text: string};
  id: string;
}

function MessageNodeTile({posX, posY, data, id}: MessageNodeTileProps) {
  const context = useContext(Store);

  const store = context?.store;

  const setStore = context?.setStore;

  const openEditMode = () => {
    if (!setStore) {
      return;
    }

    setStore((prev) => {
      return {
        ...prev,
        clickedNode: {
          id,
          position: {x: posX, y: posY},
          data: {text: data.text},
          type: NodeTypes.message.type,
        },
      };
    });
  };

  return (
    <>
      <div
        className={styles["msg-node-tile-container"]}
        onClick={openEditMode}
        style={{
          borderColor: store?.clickedNode?.id === id ? "#8384a5" : "#dfdfdf",
        }}
      >
        <div className={styles["msg-node-title"]}>
          <span className={styles["msg-node-title-left"]}>
            <Image
              width={15}
              height={15}
              alt="send message icon"
              src={"/assets/icons/message.png"}
            />
            Send Message
          </span>
          <span className={styles["msg-node-title-right"]}>
            <Image
              width={25}
              height={25}
              alt="whatsapp icon"
              src={"/assets/icons/whatsapp.png"}
            />
          </span>
        </div>
        <div className={styles["msg-node-content"]}>{data.text}</div>
      </div>
      <Handle
        type="target"
        position={Position.Left}
      />
      <Handle
        type="source"
        position={Position.Right}
      />
    </>
  );
}

export default memo(MessageNodeTile);
