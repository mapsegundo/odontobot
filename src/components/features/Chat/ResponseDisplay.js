import React from "react";
import parse from "html-react-parser";

const ResponseDisplay = ({ saida }) => {
  // Verifica se a resposta já contém uma div com classe odonto
  const hasOdontoClass = saida.includes('class="odonto"');

  // Se não contém, envolve com a div odonto
  return <div className="odonto">{parse(saida)}</div>;
};

export default ResponseDisplay;
