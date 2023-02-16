import { FC } from "react";

const Opertor: FC<{ opertor: string }> = ({ opertor }) => {
  return (
    <button className="bg-opeColor rounded-full text-white p-2 m-1">
      {opertor}
    </button>
  );
};

export default Opertor;
