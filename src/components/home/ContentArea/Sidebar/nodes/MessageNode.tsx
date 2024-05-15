import styles from "@styles/home/node.module.scss";
import Image from "next/image";

export default function MessageNode() {
  return (
    <button className={styles.button}>
      <span>
        <Image
          src={"/assets/icons/message.png"}
          width={40}
          height={40}
          alt="message icon"
        />
      </span>
      <span className={styles.text}>Message</span>
    </button>
  );
}
