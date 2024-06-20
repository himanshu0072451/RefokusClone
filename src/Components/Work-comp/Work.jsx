import React, { useState } from "react";
import { useScroll } from "framer-motion";

const Work = () => {
  const [imgData, setImgData] = useState([
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png",
      top: "55.5%",
      left: "49.9%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png",
      top: "59.5%",
      left: "46.5%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png",
      top: "48.5%",
      left: "53.5%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png",
      top: "61.5%",
      left: "49.5%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png",
      top: "55%",
      left: "54%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png",
      top: "52%",
      left: "48%",
      isActive: false,
    },
  ]);

  const { scrollYProgress } = useScroll();

  scrollYProgress.on("change", (data) => {
    function imageShow(arr) {
      setImgData((prev) =>
        prev.map((val, index) => ({
          ...val,
          isActive: arr.indexOf(index) !== -1,
        }))
      );
    }

    switch (Math.floor(data * 100)) {
      case 0:
        imageShow([]);
        break;
      case 1:
        imageShow([1]);
        break;
      case 2:
        imageShow([1, 2]);
        break;
      case 3:
        imageShow([1, 2, 3]);
        break;
      case 4:
        imageShow([1, 2, 3, 4]);
        break;
      case 5:
        imageShow([1, 2, 3, 4, 5]);
        break;
    }
  });

  return (
    <div className="w-full relative px-5 h-screen">
      <div className="text mt-20 lg:mt-0 h-full w-full lg:max-w-screen-xl mx-auto flex justify-between lg:justify-center items-center flex-col lg:gap-0 gap-5">
        {/* Heading for Phone! */}
        <div className="txt-wrap relative flex justify-center items-center h-screen  w-full  pt-0 lg:hidden">
          <div className="h1-wrap h-full sm:w-[8.8rem] w-[6.5rem]  flex justify-center items-center">
            <h1
              className="text-[10rem] sm:text-[12rem] xl:text-[42vw] leading-none tracking-normal font-medium"
              style={{
                rotate: "-90deg",
              }}
            >
              work
            </h1>
          </div>
          <div className="h1-wrap h-full sm:w-[8.8rem] w-[6.5rem]  flex justify-center items-center">
            <h1
              className="text-[10rem] sm:text-[12rem] leading-none tracking-normal font-medium"
              style={{
                rotate: "-90deg",
              }}
            >
              work
            </h1>
          </div>
          <div className="h1-wrap h-full sm:w-[8.8rem] w-[6.5rem]  flex justify-center items-center">
            <h1
              className="text-[10rem] sm:text-[12rem] leading-none tracking-normal font-medium"
              style={{
                rotate: "-90deg",
              }}
            >
              work
            </h1>
          </div>
        </div>
        {/* Headin for BigScreens! */}
        <h1 className="text-[42vw] leading-none tracking-normal font-medium hidden lg:block">
          work
        </h1>
        <h1 className="text-lg text-center font-light leading-none opacity-55">
          Web Design, Webflow Development, Creative Development
        </h1>
      </div>
      <div className="images h-screen w-full absolute top-0">
        {imgData.map((elem, index) => {
          return (
            elem.isActive && (
              <img
                key={index}
                className="lg:h-72 h-48 rounded-xl absolute -translate-x-1/2 -translate-y-1/2"
                style={{ top: elem.top, left: elem.left }}
                src={elem.url}
                alt=""
              />
            )
          );
        })}
      </div>
    </div>
  );
};

export default Work;
