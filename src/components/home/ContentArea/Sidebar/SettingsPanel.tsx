import Image from "next/image";
import styles from "@styles/home/settings.module.scss";
import {useContext} from "react";
import {Store} from "@store/context";
import {GetNodeEditor} from "@utils/nodeUtils";

export default function SettingsPanel() {
  const context = useContext(Store);

  const nodeData = context?.store.clickedNode;

  const setStore = context?.setStore;

  const backToNodesPanel = () => {
    if (!setStore) {
      return;
    }

    setStore((prev) => {
      return {...prev, clickedNode: null};
    });
  };

  return (
    <div>
      <div className={styles["setting-panel-header"]}>
        <button
          className={styles["setting-back-btn"]}
          onClick={backToNodesPanel}
        >
          <Image
            width={20}
            height={20}
            src={"/assets/icons/back-arrow.png"}
            alt="back-arrow"
          />
        </button>
        <h6 className={styles["setting-heading"]}>Messages</h6>
      </div>

      {nodeData ? GetNodeEditor({type: nodeData.type, id: nodeData.id}) : <></>}
    </div>
  );
}
