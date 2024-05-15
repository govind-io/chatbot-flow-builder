import Image from "next/image";
import styles from "@styles/home/settings.module.scss";
import MessageNodeEditor from "./settings/MessageNodeEditor";

export default function SettingsPanel() {
  return (
    <div>
      <div className={styles["setting-panel-header"]}>
        <button className={styles["setting-back-btn"]}>
          <Image
            width={20}
            height={20}
            src={"/assets/icons/back-arrow.png"}
            alt="back-arrow"
          />
        </button>
        <h6 className={styles["setting-heading"]}>Messages</h6>
      </div>
      <MessageNodeEditor />
    </div>
  );
}
