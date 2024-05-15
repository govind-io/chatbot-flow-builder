import styles from "@styles/home/home-page.module.scss";
import SettingsPanel from "./SettingsPanel";

export default function SideBar() {
  return (
    <div className={styles["sidebar-container"]}>
      <SettingsPanel />
    </div>
  );
}
