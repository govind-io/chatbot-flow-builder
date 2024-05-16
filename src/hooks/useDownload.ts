import {getRectOfNodes, getTransformForBounds, useReactFlow} from "reactflow";
import {toPng} from "html-to-image";
import ToastHandler from "@utils/toastHandler";

//needs reactflow provider
export default function useDownload(validator: () => boolean) {
  const {getNodes} = useReactFlow();

  const imageWidth = 1024;
  const imageHeight = 768;

  const minZoom = 0.5;
  const maxZoom = 2;

  function downloadFile(dataUrl: string) {
    const a = document.createElement("a");

    a.setAttribute("download", "chat-bot-flow.png");
    a.setAttribute("href", dataUrl);
    a.click();
  }

  const downloadImage = () => {
    const isValid = validator();

    if (!isValid) {
      return;
    }

    const nodesBounds = getRectOfNodes(getNodes());
    const transform = getTransformForBounds(
      nodesBounds,
      imageWidth,
      imageHeight,
      minZoom,
      maxZoom,
    );

    const flowViewPort = document.querySelector(
      ".react-flow__viewport",
    ) as HTMLElement;

    if (!flowViewPort) {
      return ToastHandler({type: "dan", messages: "Could not download image"});
    }

    const zeroIndex = 0;
    const oneIndex = 1;
    const twoIndex = 2;

    toPng(flowViewPort, {
      backgroundColor: "#1a365d",
      width: imageWidth,
      height: imageHeight,
      style: {
        width: `${imageWidth}`,
        height: `${imageHeight}`,
        transform: `translate(${transform[zeroIndex]}px, ${transform[oneIndex]}px) scale(${transform[twoIndex]})`,
      },
    }).then(downloadFile);
  };

  return downloadImage;
}
