import { animate, motion } from "framer-motion";
import React, { useState } from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const Card = ({ data, index, onHoverBtn, onLeaveBtn }) => {
  const [onHover, setOnHover] = useState(false);
  const [buttonHover, setbuttonHover] = useState(null);
  return (
    <motion.div
      className={`Card lg:${data.width} w-full transition-colors ease-in-out lg:h-full h-80 p-6  rounded-2xl flex flex-col justify-between`}
      style={{
        backgroundColor: onHover
          ? index === 0
            ? "#3E3E46"
            : "#7443FF"
          : data.backGround,
      }}
      // animate={{
      //   paddingRight: onHover ? "2rem" : "1.5rem",
      //   paddingLeft: onHover ? "2rem" : "1.5rem",
      // }}
      transition={{
        ease: [0.76, 0, 0.24, 1],
        duration: 0.5,
      }}
      onMouseEnter={() => {
        setOnHover(true);
        onHoverBtn(index);
      }}
      onMouseLeave={() => {
        setOnHover(false);
        onLeaveBtn();
      }}
    >
      <motion.div
        className="top-wrap w-full"
        animate={{
          paddingRight: onHover ? "0.4rem" : "0rem",
          paddingLeft: onHover ? "0.4rem" : "0rem",
        }}
        transition={{
          ease: [0.76, 0, 0.24, 1],
          duration: 0.5,
        }}
      >
        <div className="top w-full flex justify-between items-center">
          <h1 className="text-sm font-light">{data.heading}</h1>
          <HiOutlineArrowNarrowRight className="text-md font-semibold" />
        </div>
        <h1 className="lg:text-[2.1vw] text-[1.8rem] tracking-tight leading-none lg:font-light font-medium mt-8 lg:w-3/4 w-full">
          {data.title}
        </h1>
      </motion.div>
      <div className="bottom">
        {data.start && (
          <div className="right-content flex flex-col gap-4 w-fit">
            <h1 className="2xl:text-[7.8vw] sm:text-[3.9rem] text-[12vw] tracking-tight leading-none font-medium lg:mt-0 mt-14">
              Start a Project
            </h1>
            <button
              className="px-16 w-fit py-5 rounded-full border-[1px] border-zinc-400 text-md cursor-none overflow-hidden relative"
              onMouseEnter={() => setbuttonHover(true)}
              onMouseLeave={() => setbuttonHover(false)}
            >
              <motion.div
                className="wrap absolute w-full"
                initial={{
                  top: "50%",
                  left: "50%",
                }}
                animate={{
                  top: buttonHover ? "-100%" : "50%",
                }}
                transition={{
                  ease: [0.76, 0, 0.24, 1],
                  duration: 0.8,
                }}
                style={{
                  transform: "translate(-50%, -50%)",
                }}
              >
                <span className="text-lg font-semibold">Contact us</span>
              </motion.div>
              <motion.div
                className="wrap absolute w-full"
                initial={{
                  top: "-50%",
                  left: "50%",
                }}
                animate={{
                  top: buttonHover ? "50%" : "125%",
                }}
                transition={{
                  ease: [0.76, 0, 0.24, 1],
                  duration: 0.8,
                }}
                style={{
                  transform: "translate(-50%, -50%)",
                }}
              >
                <span className="text-lg font-semibold">Show more</span>
              </motion.div>
            </button>
          </div>
        )}
        {data.para && (
          <p className="text-sm font-medium text-zinc-300">
            Explore what drives our team.
          </p>
        )}
      </div>
    </motion.div>
  );
};

export default Card;
