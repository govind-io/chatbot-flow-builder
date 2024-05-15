import styles from "@styles/home/node.module.scss";
import Image from "next/image";

interface MessageNodeTileProps {
  posX: number;
  posY: number;
}

export default function MessageNodeTile({posX, posY}: MessageNodeTileProps) {
  return (
    <div
      className={styles["msg-node-tile-container"]}
      style={{
        position: "absolute",
        top: posY,
        left: posX,
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
      <div className={styles["msg-node-content"]}>Text content here</div>
    </div>
  );
}
