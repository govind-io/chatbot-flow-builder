import styles from "@styles/home/home-page.module.scss";
import NodePanel from "./NodePanel";
import SettingsPanel from "./SettingsPanel";
import {memo, useContext} from "react";
import {Store} from "@store/context";

function SideBar() {
  const context = useContext(Store);

  const clickedNode = context?.store.clickedNode;

  return (
    <div className={styles["sidebar-container"]}>
      {clickedNode ? <SettingsPanel /> : <NodePanel />}
    </div>
  );
}

export default memo(SideBar);
