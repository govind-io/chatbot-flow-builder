import styles from "@styles/home/home-page.module.scss";
import NodePanel from "./NodePanel";

export default function SideBar() {
  return (
    <div className={styles["sidebar-container"]}>
      {/* <SettingsPanel /> */}
      <NodePanel />
    </div>
  );
}
