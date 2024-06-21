import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";
import Slider from "react-slick";
import { useMediaQuery } from "react-responsive";

const Products = ({ onHoverBtn, onLeaveBtn, hoveredItem }) => {
  let ProductData = [
    {
      title: "Arqitel",
      desc: "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
      live: true,
      case: false,
      vidSrc: "/RefokusClone/ProductVideos/Arqitel.webm",
      Background: "#0F1196",
      PhoneImgSrc:
        "https://cdn.prod.website-files.com/6334198f239547f2fccd84c1/650c5f15978b05dc7f2ae554_14.webp",
    },
    {
      title: "Cula",
      desc: "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.",
      live: true,
      case: false,
      vidSrc: "/RefokusClone/ProductVideos/Cula.mp4",
      Background: "#3B4656",
      PhoneImgSrc:
        "https://cdn.prod.website-files.com/6334198f239547f2fccd84c1/65b41324914b470b20ec7d03_Frame%203.png",
    },
    {
      title: "Layout Land",
      desc: "An interactive learning game that can educate and entertain you on the basics of web layouts in Webflow.",
      live: true,
      case: false,
      vidSrc: "/RefokusClone/ProductVideos/Layout-Land.mp4",
      Background: "#0A17BC",
      PhoneImgSrc:
        "https://cdn.prod.website-files.com/6334198f239547f2fccd84c1/65f1160e50447ddfb490fb59_portfolioCard_cc-02%20(1).webp",
    },
    {
      title: "TTR",
      desc: "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
      live: true,
      case: false,
      vidSrc: "/RefokusClone/ProductVideos/TTR.webm",
      Background: "#323651",
      PhoneImgSrc:
        "https://cdn.prod.website-files.com/6334198f239547f2fccd84c1/64cd6ecc885579ba1b4ffc97_10.jpg",
    },
    {
      title: "Maniv",
      desc: "A global early-stage venture fund partnering with founders to advance cleaner, safer, and more sustainable movement of people and goods.",
      live: true,
      case: false,
      vidSrc: "/RefokusClone/ProductVideos/Maniv-Compressed.mp4",
      Background: "#24A25E",
      PhoneImgSrc:
        "https://cdn.prod.website-files.com/6334198f239547f2fccd84c1/65b2cab86e8df24e528c4441_Frame%201.png",
    },
    {
      title: "Singularity",
      desc: "A new site for Singularity that supports their growth and showcases their true identity as industry innovators.",
      live: true,
      case: false,
      vidSrc: "/RefokusClone/ProductVideos/Singularity.webm",
      Background: "#3D1AA6",
      PhoneImgSrc: "",
    },
    {
      title: "Like Magic",
      desc: "We designed and developed a magical gaming experience made in Webflow to promote the translation service and their sponsorship of the 2022 Webflow Conference",
      live: true,
      case: true,
      vidSrc: "/RefokusClone/ProductVideos/like-Magic.webm",
      Background: "#39269E",
      PhoneImgSrc:
        "https://cdn.prod.website-files.com/6334198f239547f2fccd84c1/65b41bfccf2d0e77e130b210_Like%20Magic%20-%20mobile.png",
    },
    {
      title: "Silvr",
      desc: "We teamed up with financing solutions provider Silvr to audit, refine and evolve their brand.",
      live: true,
      case: false,
      vidSrc: "/RefokusClone/ProductVideos/Silvr.webm",
      Background: "#A12800",
      PhoneImgSrc:
        "https://cdn.prod.website-files.com/6334198f239547f2fccd84c1/64cc29f66c6594c072ba1a38_02.jpg",
    },
    {
      title: "Rainfall",
      desc: "We crafted a website for Rainfall Ventures, developing prototypes and custom code that ultimately allows their team to update content regularly and with ease.",
      live: true,
      case: true,
      vidSrc: "/RefokusClone/ProductVideos/rainfall.webm",
      Background: "#0C13A2",
      PhoneImgSrc:
        "https://cdn.prod.website-files.com/6334198f239547f2fccd84c1/64cc2f1683a983fb66bd96c4_8.jpg",
    },
    {
      title: "Intenseye",
      desc: "A brand new website for Intenseye just before their $64M Series.",
      live: true,
      case: false,
      vidSrc: "/RefokusClone/ProductVideos/Intenseye.webm",
      Background: "#BC2C00",
      PhoneImgSrc: "",
    },
    {
      title: "Remind",
      desc: "Remind got a new website that is designed and developed to be easy to maintain and ready to learn, reflecting their mission to connect students and families.",
      live: true,
      case: true,
      vidSrc: "/RefokusClone/ProductVideos/remind.webm",
      Background: "#1243A2",
      PhoneImgSrc:
        "https://cdn.prod.website-files.com/6334198f239547f2fccd84c1/64cc2cad43eeaaaf5d87b274_4.jpg",
    },
    {
      title: "Summon",
      desc: "We created a website for Summon that showcases their innovative technology through animated and captivating UI components and emerging technologies.",
      live: true,
      case: true,
      vidSrc: "/RefokusClone/ProductVideos/summon.webm",
      Background: "#355560",
      PhoneImgSrc:
        "https://cdn.prod.website-files.com/6334198f239547f2fccd84c1/65b41c585b32416434291359_Summon%20-%20mobile.png",
    },
    {
      title: "Jungle",
      desc: "We crafted a timeless visual system for Jungle Ventures, covering all aspects of web design, and empowered their marketing team to scale organically using Webflow.",
      live: true,
      case: true,
      vidSrc: "/RefokusClone/ProductVideos/jungle.webm",
      Background: "#111192",
      PhoneImgSrc:
        "https://cdn.prod.website-files.com/6334198f239547f2fccd84c1/64cc2e2943eeaaaf5d8961a7_6.jpg",
    },
    {
      title: "Candid Health",
      desc: "A complete redesign of a health-startup website, followed by cutting edge development.",
      live: true,
      case: false,
      vidSrc: "/RefokusClone/ProductVideos/CandidHealth.webm",
      Background: "#170C91",
      PhoneImgSrc:
        "https://cdn.prod.website-files.com/6334198f239547f2fccd84c1/65b41bdade9c8246abbd29c1_Candidhealth%20-%20mobile.png",
    },
    {
      title: "Yahoo!",
      desc: "We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop.",
      live: true,
      case: true,
      vidSrc: "/RefokusClone/ProductVideos/yahoo.webm",
      Background: "#1D013F",
      PhoneImgSrc:
        "https://cdn.prod.website-files.com/6334198f239547f2fccd84c1/65b41cd5ec5fbe7d560d053f_Yahoo%20-%20mobile.png",
    },
    {
      title: "YIR 2022",
      desc: "Our second year was filled with great events, exciting projects, awards and amazing people - so we made another showcase to celebrate.",
      live: true,
      case: false,
      vidSrc: "/RefokusClone/ProductVideos/Yir-2022.webm",
      Background: "#0D009D",
      PhoneImgSrc:
        "https://cdn.prod.website-files.com/6334198f239547f2fccd84c1/65b41cfab581d98facecc35d_YIR2022%20-%20mobile.png",
    },
    {
      title: "YIR 2021",
      desc: "We celebrated our first year with a Showcase Website that reflects on a year of growth, building an awesome team & culture, defining our brand, and more.",
      live: true,
      case: false,
      vidSrc: "/RefokusClone/ProductVideos/Yir-2021.webm",
      Background: "#2D2051",
      PhoneImgSrc:
        "https://cdn.prod.website-files.com/6334198f239547f2fccd84c1/65b41ceaa9425c61aaa0a1c5_YIR2021%20-%20mobile.png",
    },
    {
      title: "Showcase",
      desc: "Our OMR22 Masterclass teaches how to create a showcase website, and we made a showcase website about showcase websites to promote the art of showcasing.",
      live: true,
      case: false,
      vidSrc: "/RefokusClone/ProductVideos/showcase.mp4",
      Background: "#B06001",
      PhoneImgSrc:
        "https://cdn.prod.website-files.com/6334198f239547f2fccd84c1/65b41c36a9425c61aaa03cfc_Showcase%20-%20mobile.png",
    },
    {
      title: "Weglot",
      desc: "We made a fun and engaging showcase website for our friends from Weglot to promote their no-code translation solution in Germany.",
      live: true,
      case: false,
      vidSrc: "/RefokusClone/ProductVideos/weglot.webm",
      Background: "#1D3426",
      PhoneImgSrc:
        "https://cdn.prod.website-files.com/6334198f239547f2fccd84c1/65b41c8e39cb2ad4a60bfb4a_Weglot%20-%20mobile.png",
    },
    {
      title: "RocketChat",
      desc: "We built a beautiful, clean website in Webflow for RocketChat that is scalable, easy to maintain and built in a modular manner for future changes.",
      live: true,
      case: false,
      vidSrc: "/RefokusClone/ProductVideos/rocketchat.webm",
      Background: "#A10000",
      PhoneImgSrc:
        "https://cdn.prod.website-files.com/6334198f239547f2fccd84c1/65b41c24277ead62ff9b0d1f_Rocketchat%20-%20mobile.png",
    },
  ];
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleHover = (index) => {
    setHoveredIndex(index);
  };

  const handleLeave = () => {
    setHoveredIndex(null);
  };

  const [position, setposition] = useState(0);
  const [vidPos, setvidPos] = useState(0);

  function changePos(val) {
    setposition(val * 15);
    setvidPos(val * 18); // setvidPos(val * 20);
  }

  const isLargeScreen = useMediaQuery({ query: "(min-width: 1024px)" });

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (index) => setCurrentSlide(index),
  };

  return (
    <div className="w-full h-full text-white py-28 pt-0 mt-32 relative">
      {isLargeScreen ? (
        ProductData.map((val, index) => (
          <Product
            onHoverBtn={onHoverBtn}
            onLeaveBtn={onLeaveBtn}
            hoveredItem={hoveredItem}
            val={val}
            key={index}
            index={index}
            isHovered={hoveredIndex === index}
            onHover={handleHover}
            onLeave={handleLeave}
            changePos={changePos}
          />
        ))
      ) : (
        <>
          <Slider {...settings}>
            {ProductData.map((val, index) => (
              <div key={index}>
                <Product
                  onHoverBtn={onHoverBtn}
                  onLeaveBtn={onLeaveBtn}
                  hoveredItem={hoveredItem}
                  val={val}
                  key={index}
                  index={index}
                  isHovered={hoveredIndex === index}
                  onHover={handleHover}
                  onLeave={handleLeave}
                  changePos={changePos}
                />
              </div>
            ))}
          </Slider>
          <div className="Indicator-wrap w-full py-4">
            <div className="main-wrap flex justify-center gap-1 items-center w-fit mx-auto h-full">
              {ProductData.map((val, index) => {
                return (
                  <motion.div
                    animate={{
                      paddingTop: index === currentSlide ? "0.5rem" : 0,
                      paddingBottom: index === currentSlide ? "0.5rem" : 0,
                      backgroundColor:
                        index === currentSlide ? "#7443FF" : "#523AA9",
                      opacity: index === currentSlide ? "1" : "0.4",
                    }}
                    key={index}
                    className="circle h-2 w-2 rounded-full bg-blue-500"
                  ></motion.div>
                );
              })}
            </div>
          </div>
        </>
      )}
      {hoveredIndex !== null && isLargeScreen && (
        <div className="wraper-window hidden lg:block w-full h-full absolute top-0 pointer-events-none">
          <motion.div
            initial={{ y: position, x: "-2%" }}
            animate={{ y: position + "rem", top: "-1.5rem" }} // top: "-2.5rem"
            transition={{
              ease: [0.76, 0, 0.24, 1],
              duration: 0.5,
            }}
            className="absolute window h-72 w-[26rem] left-[30%] -translate-y-[25rem] bg-white overflow-hidden rounded-lg"
          >
            {ProductData.map((val, index) => (
              <motion.div
                key={index}
                animate={{ y: -vidPos + "rem" }}
                transition={{
                  ease: [0.76, 0, 0.24, 1],
                  duration: 0.2,
                }}
                style={{
                  transform: "translate(-50%, -50%)",
                }}
                className="window-content h-full w-full"
              >
                <video
                  src={val.vidSrc}
                  autoPlay
                  loop
                  muted
                  className="h-full w-full object-cover object-center"
                ></video>
              </motion.div>
            ))}
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Products;
