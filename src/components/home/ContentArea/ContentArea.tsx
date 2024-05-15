import styles from "@styles/home/home-page.module.scss";
import MessageNodeTile from "./sidebar/nodes/MessageNodeTile";

export default function ContentArea() {
  return (
    <div className={styles["content-container"]}>
      <MessageNodeTile />
    </div>
  );
}
