import React from "react";
import Button from "../Button-comp/Button";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

const Product = ({
  val,
  index,
  changePos,
  isHovered,
  onHover,
  onLeave,
  onHoverBtn,
  onLeaveBtn,
  hoveredItem,
}) => {
  const isLargeScreen = useMediaQuery({ query: "(min-width: 1024px)" });
  return (
    <motion.div
      className="wrap lg:w-full w-[96%] min-h-60 rounded-lg lg:rounded-none lg:bg-none bg-[#242424] mx-3 xl:mx-0"
      style={{
        backgroundColor: isLargeScreen ? "#000000" : "#242424",
      }}
      animate={{
        // backgroundColor: isHovered ? val.Background : "#000000",
        backgroundColor: isLargeScreen && isHovered && val.Background,
        paddingTop: isLargeScreen && isHovered ? "2.5rem" : "1.5rem",
        paddingBottom: isLargeScreen && isHovered ? "2.5rem" : "1.5rem",
      }}
      transition={{
        ease: [0.76, 0, 0.24, 1],
        duration: 0.5,
      }}
      onMouseEnter={() => {
        onHover(index);
        changePos(index);
      }}
      onMouseLeave={onLeave}
    >
      <div className="main lg:max-w-screen-xl lg:mx-auto w-full flex justify-between items-center h-full flex-col lg:flex-row lg:p-0 px-5 py-2 gap-4 lg:gap-0">
        <div className="left h-full w-full lg:w-1/2 flex lg:justify-between items-center justify-center">
          <h1 className="text-4xl lg:text-5xl font-medium">{val.title}</h1>
        </div>
        {/* Phone Img Box! */}
        {val.PhoneImgSrc === "" ? null : (
          <div className="img-box h-[18rem] my-5 w-full rounded-xl overflow-hidden block lg:hidden">
            <img
              src={val.PhoneImgSrc}
              className="h-full w-full object-cover object-center"
              alt=""
            />
          </div>
        )}

        <div className="Right h-full w-full lg:w-[32.5%] flex lg:gap-4 gap-8 flex-col justify-center lg:items-start items-center">
          <p className="text-lg font-light w-full lg:w-3/4">{val.desc}</p>
          <div className="btns flex gap-4">
            {val.live && (
              <Button
                title="Live Website"
                onHoverBtn={onHoverBtn}
                onLeaveBtn={onLeaveBtn}
                hoveredItem={hoveredItem}
                index={index}
              />
            )}
            {val.case && (
              <Button
                title="Case Study"
                onHoverBtn={onHoverBtn}
                onLeaveBtn={onLeaveBtn}
                hoveredItem={hoveredItem}
                index={index}
              />
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Product;
