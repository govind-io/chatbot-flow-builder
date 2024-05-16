import {NodeTypes} from "@/constants/nodeTypes";
import MessageNode from "./nodes/MessageNode";
import styles from "@styles/home/home-page.module.scss";

const Nodes = [
  <MessageNode
    key={"1"}
    type={NodeTypes.message.type}
    image={NodeTypes.message.image}
    text={NodeTypes.message.text}
  />,
];

export default function NodePanel() {
  return (
    <div className={styles["node-panel-container"]}>
      {Nodes.map((node) => node)}
    </div>
  );
}
