import React from "react";
import { FC } from "react";

const NumberBtn: FC<{
  num: number | string;
}> = ({ num }) => {
  const clickHandle = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log(num);
  };
  return (
    <button
      value={num}
      onClick={(e) => clickHandle(e)}
      className="bg-numbersColor rounded-full text-white">
      {num}
    </button>
  );
};

export default NumberBtn;
