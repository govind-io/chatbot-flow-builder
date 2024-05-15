import styles from "@styles/home/node.module.scss";
import Image from "next/image";
import {useRef} from "react";
import {useDrag} from "react-dnd";

interface NodeProps {
  type: string;
  image: string;
  text: string;
}

export default function Node({type, image, text}: NodeProps) {
  const ref = useRef<HTMLButtonElement>(null);

  const [{isDragging}, drag] = useDrag(() => ({
    // "type" is required. It is used by the "accept" specification of drop targets.
    type: "node",
    // The collect function utilizes a "monitor" instance (see the Overview for what this is)
    // to pull important pieces of state from the DnD system.
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
    item: {
      id: type,
    },
  }));

  const translucent = 0.5;
  const opaque = 1;

  drag(ref);

  return (
    <button
      className={styles.button}
      ref={ref}
      style={{opacity: isDragging ? translucent : opaque}}
    >
      <span>
        <Image
          src={image}
          width={40}
          height={40}
          alt="message icon"
        />
      </span>
      <span className={styles.text}>{text}</span>
    </button>
  );
}
