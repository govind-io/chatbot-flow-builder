import {toast} from "react-toastify";

interface ToastHandlerProps {
  type: string;
  messages: string;
}

export default function ToastHandler({type, messages}: ToastHandlerProps) {
  /*capitalizing first letter of first word of the message*/
  const str = messages.toLowerCase();
  const indexZero = 0;
  const indexOne = 1;
  const message = str.charAt(indexZero).toUpperCase() + str.slice(indexOne);

  if (type === "warn") {
    toast.warn(message);
  } else if (type === "sus") {
    toast.success(message);
  } else if (type === "dan") {
    toast.error(message);
  } else if (type === "info") {
    toast.info(message);
  } else {
    toast.info(message);
  }

  return true;
}
