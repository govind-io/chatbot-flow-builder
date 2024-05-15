import MessageNodeTile from "@components/home/contentArea/sidebar/nodes/MessageNodeTile";
import MessageNodeEditor from "@components/home/contentArea/sidebar/settings/MessageNodeEditor";
import {NodeData, NodeTypes} from "@constants/nodeTypes";

import {ReactNode} from "react";

export const GetNode = ({node, posX, posY, id, text}: NodeData): ReactNode => {
  if (NodeTypes.message.type === node) {
    return (
      <MessageNodeTile
        posX={posX}
        posY={posY}
        key={`${node}-${posX}-${posY}`}
        id={id}
        text={text}
      />
    );
  }
};

type GetNodeEditorParam = {
  node: keyof typeof NodeTypes;
  id: string;
};

export const GetNodeEditor = ({node, id}: GetNodeEditorParam): ReactNode => {
  if (node === NodeTypes.message.type) {
    return <MessageNodeEditor id={id} />;
  }
};
