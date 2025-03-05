import React from "react";

const InputForm = ({ entrada, setEntrada, getDuvida, isProcessing }) => {
  return (
    <form className="chat-input-form" onSubmit={getDuvida}>
      <textarea
        className="chat-input"
        placeholder="Digite aqui"
        value={entrada}
        onChange={(e) => setEntrada(e.target.value)}
      ></textarea>
      <button type="submit" className="send-button" disabled={isProcessing}>
        {isProcessing ? "Processando..." : "Enviar"}
      </button>
    </form>
  );
};

export default InputForm;
