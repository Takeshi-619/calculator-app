import React from "react";
import { FC } from "react";

const NumberBtn: FC<{ num: number }> = ({ num }) => {
  const clickHandle = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log(e.currentTarget.value);
  };
  return (
    <button value={num} onClick={(e) => clickHandle(e)}>
      {num}
    </button>
  );
};

export default NumberBtn;
