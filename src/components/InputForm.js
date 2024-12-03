import React from "react";

const InputForm = ({ entrada, setEntrada, getDuvida, isProcessing }) => {
  return (
    <form className="text-center" onSubmit={getDuvida}>
      <textarea
        className="shadow-none form-control w-75 mx-auto rounded textareaInput"
        placeholder="Digite aqui"
        style={{ height: "100px" }}
        value={entrada}
        onChange={(e) => setEntrada(e.target.value)}
      ></textarea>
      <button
        type="submit"
        className="btn vw-50 btn-lg text-center m-3 saidaButton"
        disabled={isProcessing}
      >
        {isProcessing ? "Processando..." : "Enviar"}
      </button>
    </form>
  );
};

export default InputForm;
