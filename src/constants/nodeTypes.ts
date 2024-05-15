export const NodeTypes = {
  message: {
    //type is always same as the keyname
    type: "message",
    image: "/assets/icons/message.png",
    text: "Message",
  },
} as const;

export type NodeData = {
  node: keyof typeof NodeTypes;
  posX: number;
  posY: number;
  id: string;
  text: string;
};
