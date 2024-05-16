import {NodeData} from "@constants/nodeTypes";
import {Store} from "@store/context";
import styles from "@styles/home/settings.module.scss";
import {ChangeEvent, useContext} from "react";

interface messageNodeEditorProp {
  id: string;
}

export default function MessageNodeEditor({id}: messageNodeEditorProp) {
  const context = useContext(Store);

  const setStore = context?.setStore;

  const store = context?.store;

  const text = store?.clickedNode?.data.text;

  const changeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    if (!setStore || !store) {
      return;
    }

    const newText = e.target.value;

    const updatedNodesData = store?.nodesData.map((node) => {
      //updating the node text if it's the one being edited, we can make nodes data as object instead of array to make it more performant on both, retrieval and updation sides
      if (node.id === id) {
        return {...node, data: {text: newText}};
      }

      return node;
    });

    //This is to update the value in text area, we could use internal state as well but that might create conflicts between the global and local state

    const updatedClickNodeData = {
      ...store.clickedNode,
      data: {text: newText},
    } as NodeData;

    setStore((prev) => {
      return {
        ...prev,
        nodesData: updatedNodesData,
        clickedNode: updatedClickNodeData,
      };
    });
  };

  return (
    <div className={styles["msg-node-editor-container"]}>
      <span className={styles["msg-node-editor-title"]}>Text</span>
      {/* Ideally we should do this on some button click or use debounce for performance, for now I am going with onChange */}
      <textarea
        value={text}
        onChange={changeHandler}
      ></textarea>
    </div>
  );
}
