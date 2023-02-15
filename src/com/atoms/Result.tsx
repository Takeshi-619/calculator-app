import { FC } from "react";

const Result: FC<{ result: number | string }> = ({ result }) => {
  return <div>{result}</div>;
};

export default Result;
