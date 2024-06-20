// import { motion } from "framer-motion";
// import React, { useState } from "react";
// import { TbCornerDownRight } from "react-icons/tb";
// const Button = ({
//   title = "Start a Project",
//   onMouseEnter,
//   onMouseLeave,
//   onHover,
// }) => {
//   return (
//     <motion.div
//       // gap-4
//       className="w-fit h-8 px-[4.8rem]  py-[1.1rem] bg-zinc-100 text-black rounded-full flex justify-between items-center overflow-hidden relative cursor-none"
//       onMouseEnter={onMouseEnter}
//       onMouseLeave={onMouseLeave}
//     >
//       <motion.div
//         className="wrap-txt absolute text-black w-full  gap-4 h-full  flex justify-center items-center cursor-none"
//         initial={{
//           top: "50%",
//           left: "50%",
//         }}
//         animate={{
//           top: onHover ? "-100%" : "50%",
//         }}
//         transition={{
//           ease: [0.76, 0, 0.24, 1],
//           duration: 0.5,
//         }}
//         style={{
//           transform: "translate(-50%, -50%)",
//         }}
//       >
//         <span className="text-sm font-thin">{title}</span>
//         <TbCornerDownRight className="text-sm font-thin" />
//       </motion.div>
//     </motion.div>
//   );
// };

// export default Button;

// ChatGpt's Code:

import { motion } from "framer-motion";
import React from "react";
import { TbCornerDownRight } from "react-icons/tb";

const Button = ({
  title = "Start a Project",
  hoveredItem,
  index,
  onHoverBtn,
  onLeaveBtn,
}) => {
  return (
    <motion.div
      className="w-fit h-8 px-[4.8rem] py-[1.1rem] bg-zinc-100 text-black rounded-full flex justify-between items-center overflow-hidden relative"
      onMouseEnter={() => onHoverBtn(index)}
      onMouseLeave={onLeaveBtn}
    >
      <motion.div
        className="wrap-txt absolute text-black w-full gap-4 h-full flex justify-center items-center"
        initial={{
          top: "50%",
          left: "50%",
        }}
        animate={{
          top: hoveredItem === index ? "-100%" : "50%",
        }}
        transition={{
          ease: [0.76, 0, 0.24, 1],
          duration: 0.5,
        }}
        style={{
          transform: "translate(-50%, -50%)",
        }}
      >
        <span className="text-sm font-thin mr-10">{title}</span>
        <motion.span
          className="text-sm font-thin absolute right-0"
          initial={{
            top: "50%",
            right: "5%",
          }}
          animate={{
            top: hoveredItem === index ? "-100%" : "50%",
            right: hoveredItem === index && "5%",
          }}
          transition={{
            ease: [0.76, 0, 0.24, 1],
            duration: 0.8,
          }}
          style={{
            transform: "translate(-50%, -50%)",
          }}
        >
          <TbCornerDownRight />
        </motion.span>
      </motion.div>
      <motion.div
        className="wrap-txt absolute text-black w-full gap-4 h-full flex justify-center items-center"
        initial={{
          top: "-50%",
          left: "50%",
        }}
        animate={{
          top: hoveredItem === index ? "50%" : "125%",
        }}
        transition={{
          ease: [0.76, 0, 0.24, 1],
          duration: 0.5,
        }}
        style={{
          transform: "translate(-50%, -50%)",
        }}
      >
        <span className="text-sm font-thin mr-10">{title}</span>
        <motion.span
          className="text-sm font-thin absolute"
          initial={{
            top: "125%",
            right: "5%",
          }}
          animate={{
            top: hoveredItem === index ? "50%" : "125%",
            right: hoveredItem === index && "5%",
          }}
          transition={{
            ease: [0.76, 0, 0.24, 1],
            duration: 0.8,
          }}
          style={{
            transform: "translate(-50%, -50%)",
          }}
        >
          <TbCornerDownRight />
        </motion.span>
      </motion.div>
    </motion.div>
  );
};

export default Button;
