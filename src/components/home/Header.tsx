import {Store} from "@store/context";
import styles from "@styles/home/home-page.module.scss";
import ToastHandler from "@utils/toastHandler";
import {useContext} from "react";

export default function HomeHeader() {
  const context = useContext(Store);

  const store = context?.store;

  const isValidFlow = () => {
    const nodesWithTarget = store?.edgesData.map((edge) => edge.target) || [];

    const nodesWithoutTarget =
      store?.nodesData.filter((node) => !nodesWithTarget.includes(node.id)) ||
      [];

    const maxEmptyTargetLimit = 1;

    if (nodesWithoutTarget.length > maxEmptyTargetLimit) {
      ToastHandler({
        type: "dan",
        messages: "Can not save flow with more than 1 empty target handle",
      });
      return false;
    }

    return true;
  };

  const saveChanges = () => {
    if (!store) {
      return;
    }

    if (!isValidFlow()) {
      return;
    }

    localStorage.setItem("store", JSON.stringify(store));

    ToastHandler({type: "sus", messages: "Flow saved succesfully"});
  };

  return (
    <div className={styles.container}>
      <button onClick={saveChanges}> Save changes</button>
    </div>
  );
}
