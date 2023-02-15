import NumberBtn from "../atoms/NumberBtn";

const CalNum = () => {
  const numData = [7, 8, 9, 4, 5, 6, 1, 2, 3];

  const propsHandle = (e: string) => <NumberBtn num={e} />;
  return (
    <div className="grid grid-cols-3 w-2/3">
      {numData &&
        numData.map((number, index) => <NumberBtn num={number} key={index} />)}
      <button
        value={0}
        className="col-span-2 bg-numbersColor rounded-full text-white"
        onClick={(e) => propsHandle(e.currentTarget.value)}>
        0
      </button>
      <button
        value={"."}
        className="bg-numbersColor rounded-full text-white"
        onClick={(e) => propsHandle(e.currentTarget.value)}>
        .
      </button>
    </div>
  );
};

export default CalNum;
