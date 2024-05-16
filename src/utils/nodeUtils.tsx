import MessageNodeEditor from "@components/home/contentArea/sidebar/settings/MessageNodeEditor";
import {NodeTypes} from "@constants/nodeTypes";

import {ReactNode} from "react";

type GetNodeEditorParam = {
  type: keyof typeof NodeTypes;
  id: string;
};

export const GetNodeEditor = ({type, id}: GetNodeEditorParam): ReactNode => {
  if (type === NodeTypes.message.type) {
    return <MessageNodeEditor id={id} />;
  }
};
