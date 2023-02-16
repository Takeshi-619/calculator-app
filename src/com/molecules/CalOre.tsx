import Opertor from "../atoms/Operator";

const CalOpe = () => {
  const opeData: string[] = ["÷", "×", "-", "＋"];
  return (
    <div className="flex flex-col w-1/3 justify-around">
      {opeData &&
        opeData.map((i, index) => <Opertor opertor={i} key={index} />)}
    </div>
  );
};

export default CalOpe;
