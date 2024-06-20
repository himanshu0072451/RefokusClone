import { motion } from "framer-motion";
import React from "react";

const Marquee = ({ imgUrl, reverse }) => {
  return (
    <div className="warp-marquee relative flex w-full overflow-hidden">
      <motion.div
        initial={{ x: reverse ? "-100%" : "0" }}
        animate={{ x: reverse ? "0" : "-100%" }}
        transition={{
          ease: "linear",
          duration: 20,
          repeat: Infinity,
        }}
        className="Marquee pr-40 flex w-full gap-20 flex-nowrap flex-shrink-0 overflow-hidden"
      >
        {imgUrl.map((val, index) => (
          <img
            src={val}
            key={index}
            className="w-28 flex-shrink-0"
            alt={`Marquee image ${index}`}
          />
        ))}
      </motion.div>
      <motion.div
        initial={{ x: reverse ? "-100%" : "0" }}
        animate={{ x: reverse ? "0" : "-100%" }}
        transition={{
          ease: "linear",
          duration: 20,
          repeat: Infinity,
        }}
        className="Marquee pr-40 flex w-full gap-20 flex-nowrap flex-shrink-0 overflow-hidden"
      >
        {imgUrl.map((val, index) => (
          <img
            src={val}
            key={index}
            className="w-28 flex-shrink-0"
            alt={`Marquee image ${index}`}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;
