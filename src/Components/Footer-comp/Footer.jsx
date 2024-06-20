import { motion } from "framer-motion";
import React, { useState } from "react";

const Footer = ({ onHoverBtn, onLeaveBtn }) => {
  const [onHover, setonHover] = useState(null);
  return (
    <div className="Footer py-3 pt-8  w-full sm:max-w-screen-xl xl:mx-auto text-white flex lg:flex-row flex-col lg:gap-0 gap-2 justify-between items-center  mx-3">
      <div className="foot-left w-fit flex items-center gap-8">
        {[
          "Privacy Policy",
          "Cookie Policy",
          "Impressum",
          "Terms",
          "Webflow Agency",
        ].map((val, index) => {
          return (
            <motion.h1
              key={index}
              animate={{
                paddingLeft:
                  (index === 2 || index === 3 || index === 4) &&
                  onHover === index
                    ? "15px"
                    : 0,
              }}
              transition={{
                ease: [0.76, 0, 0.24, 1],
                duration: 0.8,
              }}
              onMouseEnter={() => {
                onHoverBtn(index);
                setonHover(index);
              }}
              onMouseLeave={() => {
                onLeaveBtn();
                setonHover(null);
              }}
              className="sm:text-sm text-[2.5vw] font-medium text-zinc-500 leading-none tracking-tighter hover:text-zinc-700 w-fit"
            >
              {val}
            </motion.h1>
          );
        })}
      </div>
      <motion.div
        className="foot-right w-fit"
        onMouseEnter={() => onHoverBtn(9999)}
        onMouseLeave={onLeaveBtn}
      >
        <img
          className="w-[10.5rem]"
          src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/6637ba0d8481b4339b1cda4f_Frame%2048097733.svg"
          alt="Foot-Img!"
        />
      </motion.div>
    </div>
  );
};

export default Footer;

// --------------------------------------------------------------

// import { motion, useMotionValue, useTransform } from "framer-motion";
// import React, { useState } from "react";

// const Footer = ({ onHoverBtn, onLeaveBtn }) => {
//   return (
//     <div className="Footer py-3 pt-8 w-full max-w-screen-xl mx-auto text-white flex justify-between items-center">
//       <div className="foot-left w-fit flex items-center gap-8">
//         {[
//           "Privacy Policy",
//           "Cookie Policy",
//           "Impressum",
//           "Terms",
//           "Webflow Agency",
//         ].map((val, index) => {
//           return (
//             <FooterItem
//               key={index}
//               text={val}
//               onHoverBtn={() => onHoverBtn(index)}
//               onLeaveBtn={onLeaveBtn}
//             />
//           );
//         })}
//       </div>
//       <motion.div
//         className="foot-right w-fit"
//         onMouseEnter={() => onHoverBtn(9999)}
//         onMouseLeave={onLeaveBtn}
//       >
//         <img
//           className="w-[10.5rem]"
//           src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/6637ba0d8481b4339b1cda4f_Frame%2048097733.svg"
//           alt="Foot-Img!"
//         />
//       </motion.div>
//     </div>
//   );
// };

// const FooterItem = ({ text, onHoverBtn, onLeaveBtn }) => {
//   const x = useMotionValue(0);
//   const y = useMotionValue(0);

//   const transformX = useTransform(x, [-50, 50], [-25, 25]);
//   const transformY = useTransform(y, [-50, 50], [-25, 25]);

//   const handleMouseMove = (e) => {
//     const rect = e.currentTarget.getBoundingClientRect();
//     const newX = e.clientX - rect.left - rect.width / 2;
//     const newY = e.clientY - rect.top - rect.height / 2;

//     x.set(newX);
//     y.set(newY);
//   };

//   const handleMouseLeave = () => {
//     x.set(0);
//     y.set(0);
//   };

//   return (
//     <motion.h1
//       style={{
//         x: transformX,
//         y: transformY,
//       }}
//       transition={{
//         ease: [0.76, 0, 0.24, 1],
//         duration: 1.2,
//       }}
//       onMouseMove={handleMouseMove}
//       onMouseLeave={() => {
//         handleMouseLeave();
//         onLeaveBtn();
//       }}
//       onMouseEnter={onHoverBtn}
//       className="text-sm font-medium text-zinc-500 leading-none tracking-tighter"
//     >
//       {text}
//     </motion.h1>
//   );
// };

// export default Footer;
