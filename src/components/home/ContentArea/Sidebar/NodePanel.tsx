import MessageNode from "./nodes/MessageNode";
import styles from "@styles/home/home-page.module.scss";

const Nodes = [<MessageNode key={"1"} />];

export default function NodePanel() {
  return (
    <div className={styles["node-panel-container"]}>
      {Nodes.map((node) => node)}
    </div>
  );
}
