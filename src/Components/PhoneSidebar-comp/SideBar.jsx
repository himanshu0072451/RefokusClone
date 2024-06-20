import React from "react";
import Button from "../Button-comp/Button";
import { motion } from "framer-motion";

const SideBar = ({ SideOpen }) => {
  return (
    <motion.div
      initial={{
        left: "-100%",
      }}
      animate={{
        left: SideOpen ? "0" : "-100%",
      }}
      transition={{
        ease: [0.76, 0, 0.24, 1],
        duration: 0.8,
      }}
      className="Sidebar h-full w-full absolute top-10 left-0 z-[999] px-3 py-6 bg-[#000000] text-white lg:hidden block"
    >
      <div className="wrap">
        {[".", "Home", "Work", "About", "News", "Careers"].map((val, index) => {
          return (
            <div
              style={{
                paddingBottom: index === 0 ? "0" : "1.5rem",
              }}
              key={index}
              className="main-wrap h-16 w-full  my-4 flex text-[1.8rem] font-medium border-b-[1px] border-zinc-600 lowercase items-end tracking-tighter leading-none"
            >
              {val}
            </div>
          );
        })}
      </div>
      <div className="btn-wrap w-full flex justify-center items-center mt-10">
        <Button />
      </div>
    </motion.div>
  );
};

export default SideBar;
