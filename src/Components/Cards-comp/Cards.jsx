import React from "react";
import Card from "./Card";

const Cards = ({ onHoverBtn, onLeaveBtn, hoveredItem }) => {
  let CardData = [
    {
      title: "Insights and behind the scenes",
      heading: "Up Next: News",
      start: false,
      para: true,
      width: "basis-1/3",
      backGround: "#29292E",
    },
    {
      title: "Let's get to it, together.",
      heading: "Get In Touch",
      start: true,
      para: false,
      width: "basis-2/3",
      backGround: "#323238",
    },
  ];
  return (
    <div className="Cards lg:h-[72vh] sm:h-fit lg:p-0 px-3  max-w-screen-xl xl:mx-auto mx-3 flex justify-between items-center gap-1  lg:pt-14 pt-6 mt-14 flex-col-reverse lg:flex-row">
      {CardData.map((val, index) => {
        return (
          <Card
            data={val}
            index={index}
            key={index}
            onHoverBtn={onHoverBtn}
            onLeaveBtn={onLeaveBtn}
            hoveredItem={hoveredItem}
          />
        );
      })}
    </div>
  );
};

export default Cards;
