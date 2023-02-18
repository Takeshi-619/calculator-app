import { useState } from "react";
import Display from "./Display";

function Btn() {
  const [data, setData] = useState("");
  const num = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0, "."];
  const result = (e: string) => {
    if (e === "C") {
      setData("");
    } else if (e === "=") {
      try {
        setData(eval(data).toString());
      } catch (error) {
        setData("Error");
      }
    } else {
      setData(data + e);
    }
  };

  return (
    <div className=" w-1/3 max-md:w-4/5">
      <div className="flex justify-between items-center">
        <button
          className="bg-acColor rounded-full text-white p-2 m-1"
          onClick={(e: { currentTarget: { value: any } }) =>
            result(e.currentTarget.value)
          }
          value="C">
          AC
        </button>
        <Display result={data} />
      </div>
      <div className="flex">
        <div className="grid grid-cols-3 w-2/3">
          {num.map((item, index) => (
            <button
              className="bg-numbersColor rounded-full text-white p-2 m-1"
              onClick={(e) => result(e.currentTarget.value)}
              value={item}
              key={index}>
              {item}
            </button>
          ))}
          <button
            className="bg-opeColor rounded-full text-white p-2 m-1"
            onClick={(e) => result(e.currentTarget.value)}
            value="=">
            =
          </button>
        </div>
        <div className="flex flex-col w-1/3 justify-around">
          <button
            className="bg-opeColor rounded-full text-white p-2 m-1"
            onClick={(e) => result(e.currentTarget.value)}
            value="+">
            +
          </button>
          <button
            className="bg-opeColor rounded-full text-white p-2 m-1"
            onClick={(e) => result(e.currentTarget.value)}
            value="-">
            -
          </button>
          <button
            className="bg-opeColor rounded-full text-white p-2 m-1"
            onClick={(e) => result(e.currentTarget.value)}
            value="*">
            *
          </button>
          <button
            className="bg-opeColor rounded-full text-white p-2 m-1"
            onClick={(e) => result(e.currentTarget.value)}
            value="/">
            /
          </button>
        </div>
      </div>
    </div>
  );
}

export default Btn;
