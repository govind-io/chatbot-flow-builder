import useDownload from "@/hooks/useDownload";
import {Store, defaultStore, storeType} from "@store/context";
import styles from "@styles/home/home-page.module.scss";
import ToastHandler from "@utils/toastHandler";
import {memo, useContext} from "react";

function HomeHeader() {
  const context = useContext(Store);

  const store = context?.store;

  const setStore = context?.setStore;

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

  const download = useDownload(isValidFlow);

  const saveChanges = (
    customStore: storeType | undefined = store,
    message: string = "Flow saved succesfully",
  ) => {
    if (!customStore) {
      return;
    }

    if (!isValidFlow()) {
      return;
    }

    localStorage.setItem("store", JSON.stringify(customStore));

    ToastHandler({type: "sus", messages: message});
  };

  const reset = () => {
    if (!setStore) {
      return;
    }

    setStore(defaultStore);

    saveChanges(defaultStore, "Changes reset");
  };

  return (
    <div className={styles.container}>
      <button onClick={() => saveChanges()}> Save changes</button>
      <button onClick={download}> Download</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default memo(HomeHeader);
