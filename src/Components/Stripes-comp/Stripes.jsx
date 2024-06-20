import React from "react";
import Strip from "./Strip";
import { motion } from "framer-motion";

const Stripes = () => {
  const Data = [
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63d6e83420934a94d642103b_NCC2021_LogoLockup%201.svg",
      num: 2,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd75d563689fd_Awwards-logotype-2018%201.svg",
      num: 15,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd7cf6b3689fb_css-design-awards-logos-id1L9L8Yvp%201.svg",
      num: 52,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63d6e83420934a94d642103b_NCC2021_LogoLockup%201.svg",
      num: 2,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd75d563689fd_Awwards-logotype-2018%201.svg",
      num: 15,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd7cf6b3689fb_css-design-awards-logos-id1L9L8Yvp%201.svg",
      num: 52,
    },
  ];
  return (
    <div className="wrap-stripes flex w-full h-[12vh] mt-16 overflow-hidden flex-shrink-0">
      <motion.div
        initial={{ x: "0%" }}
        animate={{ x: "-125%" }}
        transition={{
          ease: "linear",
          duration: 20,
          repeat: Infinity,
        }}
        className="flex w-full h-full flex-nowrap flex-shrink-0 "
      >
        {Data.map((elem, index) => (
          <Strip val={elem} key={`strip-1-${index}`} />
        ))}
        {Data.map((elem, index) => (
          <Strip val={elem} key={`strip-2-${index}`} />
        ))}
        {Data.map((elem, index) => (
          <Strip val={elem} key={`strip-2-${index}`} />
        ))}
      </motion.div>
    </div>
  );
};

export default Stripes;
