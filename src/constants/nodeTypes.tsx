import MessageNodeTile from "@components/home/contentArea/sidebar/nodes/MessageNodeTile";
import MessageNodeEditor from "@components/home/contentArea/sidebar/settings/MessageNodeEditor";
import {ReactNode} from "react";

export const NodeTypes = {
  message: {
    //type is always same as the keyname
    type: "message",
    image: "/assets/icons/message.png",
    text: "Message",
    tileComponent: MessageNodeTile,
    editorComponent: MessageNodeEditor,
  },
} as const;

export type Node = {node: keyof typeof NodeTypes; posX: number; posY: number};

export const GetNode = ({node, posX, posY}: Node): ReactNode => {
  if (NodeTypes.message.type === node) {
    return (
      <MessageNodeTile
        posX={posX}
        posY={posY}
        key={`${node}-${posX}-${posY}`}
      />
    );
  }
};
