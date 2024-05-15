import {NodeTypes} from "@constants/nodeTypes";
import {Store} from "@store/context";
import styles from "@styles/home/node.module.scss";
import Image from "next/image";
import {useContext} from "react";

interface MessageNodeTileProps {
  posX: number;
  posY: number;
  text: string;
  id: string;
}

export default function MessageNodeTile({
  posX,
  posY,
  text,
  id,
}: MessageNodeTileProps) {
  const context = useContext(Store);

  const setStore = context?.setStore;

  const openEditMode = () => {
    if (!setStore) {
      return;
    }

    setStore((prev) => {
      return {
        ...prev,
        clickedNode: {id, posX, posY, text, node: NodeTypes.message.type},
      };
    });
  };

  return (
    <div
      className={styles["msg-node-tile-container"]}
      style={{
        position: "absolute",
        top: posY,
        left: posX,
      }}
      onClick={openEditMode}
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
      <div className={styles["msg-node-content"]}>{text}</div>
    </div>
  );
}
