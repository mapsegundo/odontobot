import { useState } from "react";
import { getOpenAIResponse } from "../services/openaiService";
import { toast } from "react-toastify";

const useOpenAI = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [saida, setSaida] = useState("");

  const fetchResponse = async (entrada) => {
    if (isProcessing) return;

    setIsProcessing(true);
    setSaida("");

    try {
      const response = await getOpenAIResponse(entrada);
      setSaida(response);
      toast.success("Resposta gerada com sucesso!");
    } catch (error) {
      toast.error(
        "Erro ao chamar a API da OpenAI. Tente novamente mais tarde."
      );
    } finally {
      setIsProcessing(false);
    }
  };

  return { isProcessing, saida, fetchResponse };
};

export default useOpenAI;
