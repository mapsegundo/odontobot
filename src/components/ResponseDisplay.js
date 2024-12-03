import React from "react";
import parse from "html-react-parser";

const ResponseDisplay = ({ saida }) => {
  return <div className="odonto">{parse(saida)}</div>;
};

export default ResponseDisplay;
