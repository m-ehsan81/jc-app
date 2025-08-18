"use client";

import { useState } from "react";

const CounterBtn: React.FC = () => {
  const [count, setCount] = useState(0);

  const clickHandler = () => {
    setCount((prev) => ++prev);
  };

  return (
    <div
      className="w-[12.5rem] h-[12.5rem] cursor-pointer rounded-full flex justify-center items-center border-[.1875rem] border-[#5CF8FD] shadow-[0px_10px_23px_0px_rgba(92,248,253,0.75)]"
      onClick={clickHandler}
    >
      <span className="text-[3.125rem] select-none">{count}</span>
    </div>
  );
};

export default CounterBtn;
