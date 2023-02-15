import { FC } from "react";

const Opertor: FC<{ opertor: string }> = ({ opertor }) => {
  return <button>{opertor}</button>;
};

export default Opertor;
