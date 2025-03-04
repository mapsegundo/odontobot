import { useCallback } from "react";
import { getOpenAIResponse } from "../services/openaiService";
import { toast } from "react-toastify";
import { useChatContext } from "../context/ChatContext";

const useOpenAI = () => {
  const {
    isProcessing,
    setIsProcessing,
    currentResponse,
    setCurrentResponse,
    addMessage,
  } = useChatContext();

  const fetchResponse = useCallback(
    async (entrada) => {
      if (isProcessing) return;

      setIsProcessing(true);
      setCurrentResponse("");

      // Adicionar a pergunta do usuário ao histórico
      addMessage({
        type: "question",
        content: entrada,
        timestamp: new Date().toISOString(),
      });

      try {
        const response = await getOpenAIResponse(entrada);
        setCurrentResponse(response);

        // Adicionar a resposta ao histórico
        addMessage({
          type: "answer",
          content: response,
          timestamp: new Date().toISOString(),
        });

        toast.success("Resposta gerada com sucesso!");
      } catch (error) {
        console.error("Erro na API:", error);
        toast.error(
          "Erro ao chamar a API da OpenAI. Tente novamente mais tarde."
        );
      } finally {
        setIsProcessing(false);
      }
    },
    [isProcessing, setIsProcessing, setCurrentResponse, addMessage]
  );

  return { isProcessing, saida: currentResponse, fetchResponse };
};

export default useOpenAI;
