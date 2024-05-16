export const NodeTypes = {
  message: {
    //type is always same as the keyname
    type: "message",
    image: "/assets/icons/message.png",
    text: "Message",
  },
} as const;

export type NodeData = {
  type: keyof typeof NodeTypes;
  position: {x: number; y: number};
  id: string;
  data: {text: string};
};
