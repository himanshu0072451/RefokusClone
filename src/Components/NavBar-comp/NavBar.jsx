import React from "react";
import Button from "../Button-comp/Button";
import { motion } from "framer-motion";

const NavBar = ({ onHover, onLeave, hoveredItem, setSideOpen, SideOpen }) => {
  return (
    <div className="Nav-Wrap fixed top-0 z-[9999] w-full bg-[#000000] px-5 xl:px-0">
      <div className="max-w-screen-xl mx-auto py-4 flex items-center justify-between">
        <div className="left-nav flex items-center w-full lg:w-fit justify-between lg:justify-center">
          <img
            className="w-[5.25em] lg:w-fit"
            src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
            alt="LOGO"
          />
          <div
            onClick={() => {
              setSideOpen(!SideOpen);
            }}
            className="menu-phone overflow-hidden"
          >
            <div className="circle h-5 w-5 p-1 bg-white rounded-full block lg:hidden">
              <motion.img
                animate={{
                  display: SideOpen ? "block" : "none",
                }}
                transition={{
                  ease: [0.76, 0, 0.24, 1],
                  duration: 0.5,
                }}
                className="h-full w-full object-cover object-center"
                src="https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/63497383cbeed54a2111e5a6_close.svg"
                alt=""
              />
            </div>
          </div>
          <div className="links ml-16 hidden gap-10 items-center min-w-fit px-6 shrink-0 lg:flex">
            {["Home", "Work", "About", "News", "Careers"].map((val, index) => (
              <motion.a
                href="#"
                key={index}
                className="text-sm font-thin  font-regular flex justify-center items-center  cursor-none shrink-0 "
                style={{ position: "relative", zIndex: 1 }}
                initial={{ fontWeight: "100" }}
                animate={{
                  fontWeight: hoveredItem === index ? "400" : "100",
                }}
                onMouseEnter={() => onHover(index)}
                onMouseLeave={onLeave}
              >
                {index === 1 && (
                  <span
                    style={{ boxShadow: "0 0 0.25em #00FF19" }}
                    className="h-1 w-1 bg-[#00FF19] rounded-full inline-block"
                  ></span>
                )}
                {val}
              </motion.a>
            ))}
          </div>
        </div>
        <div
          className="button-wrap lg:block hidden"
          style={{ position: "relative", zIndex: 1 }}
          onMouseEnter={() => onHover()}
          onMouseLeave={onLeave}
        >
          <Button hoveredItem={hoveredItem} />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
