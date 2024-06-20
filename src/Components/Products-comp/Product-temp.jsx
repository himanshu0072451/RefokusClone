import React, { useState } from "react";
import Button from "../Button";

const Product = ({ val, index, changePos }) => {
  const [mouseEnter, setmouseEnter] = useState(false);
  return (
    <div
      className="wrap w-full h-60"
      onMouseEnter={() => {
        
        changePos(index);
      }}
    >
      <div className="main max-w-screen-xl mx-auto flex justify-between items-center h-full">
        <div className="left h-full w-1/2 flex justify-between items-center">
          <h1 className="text-5xl font-medium">{val.title}</h1>
        </div>
        <div className="Right h-full w-[32.5%] flex gap-4 flex-col justify-center items-start">
          <p className="text-lg font-light w-3/4">{val.desc}</p>
          <div className="btns flex gap-4">
            {val.live && <Button title="Live Website" />}
            {val.case && <Button title="Case Study" />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
