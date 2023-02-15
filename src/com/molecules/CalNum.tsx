import NumberBtn from "../atoms/NumberBtn";

const CalNum = () => {
  const numData = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div>
      {numData &&
        numData.map((number, index) => <NumberBtn num={number} key={index} />)}
    </div>
  );
};

export default CalNum;
