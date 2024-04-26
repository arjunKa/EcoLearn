import React, { useEffect } from "react";
import { useArt, useUpdate } from "@bigfan/art";

export default function Logo() {
  const { width, height } = useArt(); // get the width & height of the canvas
  const controls = useUpdate({ rotate: 0 });

  useEffect(() => {
    controls.start(({ time }) => {
      return { rotate: Math.PI * time * 0.0002 };
    });
  }, [controls]);

  return (
    <img
      src="/ecoLearn.png"
      x={0}
      y={0}
      update={controls}
      transform={{ x: width / 2, y: height / 2 }}
      alt=""
    />
  );
}
