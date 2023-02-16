import NumberBtn from "../atoms/NumberBtn";
import Equal from "../atoms/Equal";

const CalNum = () => {
  const numData: number[] = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];

  return (
    <div className="grid grid-cols-3 w-2/3 ">
      {numData &&
        numData.map((number, index) => <NumberBtn num={number} key={index} />)}
      <div className="bg-opeColor rounded-full text-white p-2 m-1 text-center">
        <Equal />
      </div>
    </div>
  );
};

export default CalNum;
