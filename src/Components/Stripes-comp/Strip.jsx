import React from "react";

const Strip = ({ val }) => {
  return (
    <div className="px-5 py-6 h-full w-48 flex-shrink-0 flex justify-between items-center border-[1px] text-white border-zinc-500">
      <img src={val.url} alt="" />
      <span>{val.num}</span>
    </div>
  );
};

export default Strip;
