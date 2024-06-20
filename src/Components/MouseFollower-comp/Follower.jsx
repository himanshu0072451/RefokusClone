import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const Follower = ({ onHover }) => {
  const [pos, setPos] = useState({ X: 0, Y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPos({
        X: event.clientX,
        Y: event.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <motion.div
      style={{
        top: pos.Y,
        left: pos.X,
        pointerEvents: "none", 
        zIndex: 9999999, 
      }}
      initial={{
        height: "1.25rem",
        width: "1.25rem",
      }}
      animate={{
        height: onHover ? "0.5rem" : "1.25rem",
        width: onHover ? "0.5rem" : "1.25rem",
      }}
      transition={{
        ease: [0.76, 0, 0.24, 1],
        duration: 0.5,
      }}
      className="follower mix-blend-difference pointer-events-none fixed bg-white flex justify-center items-center rounded-full overflow-hidden"
    ></motion.div>
  );
};

export default Follower;
