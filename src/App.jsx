import React, { useState } from "react";
import NavBar from "./Components/NavBar-comp/NavBar";
import Work from "./Components/Work-comp/Work";
import Stripes from "./Components/Stripes-comp/Stripes";
import Products from "./Components/Products-comp/Products";
import Marquees from "./Components/Marquee-comp/Marquees";
import Cards from "./Components/Cards-comp/Cards";
import Footer from "./Components/Footer-comp/Footer";
import LocomotiveScroll from "locomotive-scroll";
import Follower from "./Components/MouseFollower-comp/Follower";
import Loader from "./Components/Loader-comp/Loader";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SideBar from "./Components/PhoneSidebar-comp/SideBar";
import { useMediaQuery } from "react-responsive";

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();

  const [hoveredItem, setHoveredItem] = useState(null);

  const handleHover = (index) => {
    setHoveredItem(index);
  };

  const handleLeave = () => {
    setHoveredItem(null);
  };

  // SideBar Controls!
  const [SideOpen, setSideOpen] = useState(false);

  // Responsive Follower!
  const isLargeScreen = useMediaQuery({ query: "(min-width: 1024px)" });
  return (
    <div className="relative cursor-none bg-[#000000] min-h-screen w-full text-white font-custom overflow-x-hidden">
      <Loader />
      {isLargeScreen === true ? (
        <Follower onHover={hoveredItem !== null} />
      ) : null}

      <SideBar SideOpen={SideOpen} />
      <NavBar
        SideOpen={SideOpen}
        setSideOpen={setSideOpen}
        onHover={handleHover}
        onLeave={handleLeave}
        hoveredItem={hoveredItem}
      />
      <Work />
      <Stripes />
      <Products
        onHoverBtn={handleHover}
        onLeaveBtn={handleLeave}
        hoveredItem={hoveredItem}
      />
      <Marquees />
      <Cards
        onHoverBtn={handleHover}
        onLeaveBtn={handleLeave}
        hoveredItem={hoveredItem}
      />
      <Footer
        onHoverBtn={handleHover}
        onLeaveBtn={handleLeave}
        hoveredItem={hoveredItem}
      />
    </div>
  );
};

export default App;
