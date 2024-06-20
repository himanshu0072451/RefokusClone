import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const Loader = () => {
  const [GlowTime, setGlowTime] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setGlowTime(true);
            console.log(`setGlowTime: true`);
    }, 2000);

    return () => {
      clearTimeout(timer);
      setGlowTime(false);
            console.log(`setGlowTime: false ------ from return!`);
    };
  }, []);
  return (
    <motion.div
      initial={{
        top: 0,
        left: 0,
      }}
      animate={{
        top: GlowTime ? "-100%" : 0,
      }}
      transition={{
        ease: [0.76, 0, 0.24, 1],
        duration: 1.5,
      }}
      className="h-screen w-full bg-[#000000] text-white fixed z-[9999999] py-16"
    >
      <div className="main-load h-full max-w-screen-xl mx-auto flex justify-center items-center border-y-[1px] border-zinc-700">
        <h1 className="text-9xl relative font-medium tracking-tight leading-none">
          <span className="text-9xl font-medium tracking-tight leading-none">
            work.
          </span>
          <motion.span
            animate={{
              backgroundColor: GlowTime ? "#00FF19" : "white",
              boxShadow: GlowTime ? "0 0 0.10em #00FF19" : "0",
            }}
            className="h-3 w-3 bg-white rounded-full absolute top-[-10%] left-[100%]"
          ></motion.span>
        </h1>
      </div>
    </motion.div>
  );
};

export default Loader;
