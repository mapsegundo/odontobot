import React, { useState } from "react";
import InputForm from "./InputForm";
import ResponseDisplay from "./ResponseDisplay";
import useOpenAI from "../../../hooks/useOpenAI";
import { useChatContext } from "../../../context/ChatContext";
import { toast } from "react-toastify";

const Chat = () => {
  const { isProcessing, saida, fetchResponse } = useOpenAI();
  const { currentResponse } = useChatContext();
  const [entrada, setEntrada] = useState("");

  const isValidInput = (input) => {
    const forbiddenChars = /[<>]/g;
    return (
      input.length > 0 && input.length <= 200 && !forbiddenChars.test(input)
    );
  };

  const getDuvida = (e) => {
    e.preventDefault();
    if (!isValidInput(entrada)) {
      toast.error("Entrada inválida. Por favor, revise sua dúvida.");
      return;
    }
    fetchResponse(entrada);
  };

  return (
    <div className="chat-container">
      <InputForm
        entrada={entrada}
        setEntrada={setEntrada}
        getDuvida={getDuvida}
        isProcessing={isProcessing}
      />

      {isProcessing && (
        <div className="text-center my-3">
          <div className="spinner-grow text-info" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}

      <div className="response-container">
        {saida && <ResponseDisplay saida={saida} />}
      </div>
    </div>
  );
};

export default Chat;
