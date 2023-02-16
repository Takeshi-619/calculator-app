import { FC } from "react";

const NumberBtn: FC<{
  num: number | string;
}> = ({ num }) => {
  const clickHandle = () => {
    console.log(num);
  };
  return (
    <button
      value={num}
      onClick={() => clickHandle()}
      className="bg-numbersColor rounded-full text-white  last-of-type:col-span-2 p-2 m-1">
      {num}
    </button>
  );
};

export default NumberBtn;
