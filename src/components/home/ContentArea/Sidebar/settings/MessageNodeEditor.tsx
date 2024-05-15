import styles from "@styles/home/settings.module.scss";

export default function MessageNodeEditor() {
  return (
    <div className={styles["msg-node-editor-container"]}>
      <span className={styles["msg-node-editor-title"]}>Text</span>
      <textarea></textarea>
    </div>
  );
}
