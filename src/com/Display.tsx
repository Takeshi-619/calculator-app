import React from "react";

function Display({ result }: { result: number | string }) {
  return <div className="font-resultFont text-white">{result}</div>;
}

export default Display;
