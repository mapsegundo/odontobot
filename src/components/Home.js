import React, { useState } from "react";
import Navbar from "./Navbar";
import parse from "html-react-parser";
import "./Home.css";
import Footer from "./Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const { Configuration, OpenAIApi } = require("openai");

const Home = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [odonto, setOdonto] = useState("");
  const [duvida, setDuvida] = useState("");

  const configuration = new Configuration({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);

  const isValidInput = (input) => {
    const forbiddenChars = /[<>]/g;
    return (
      input.length > 0 && input.length <= 200 && !forbiddenChars.test(input)
    );
  };

  const getDuvida = async (e) => {
    e.preventDefault();

    if (isProcessing || !isValidInput(odonto)) {
      toast.error("Entrada inválida. Por favor, revise sua dúvida.");
      return;
    }

    setDuvida("");
    setIsProcessing(true);

    try {
      const response = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: `
                Você é um assistente odontológico. Responda as dúvidas de forma clara, precisa e educacional, apresentando a resposta em uma estrutura HTML válida.
                Sua resposta deve sempre ser formatada da seguinte maneira:
                - Envolva toda a resposta dentro de uma div com a classe "odonto".
                - Inclua um <h1> para o título da dúvida ou resposta.
                - Utilize um <h2> para subtítulos quando necessário.
                - Liste tópicos importantes em uma lista não ordenada (<ul>) com itens (<li>).
                - Adicione explicações ou detalhes em parágrafos (<p>).
                - Inclua links para referências externas (<a>). Certifique-se de que os links sejam abertos em uma nova aba.
                Não inclua exemplos desnecessários ou redundantes de tags HTML fora do contexto solicitado.
                `,
          },
          {
            role: "user",
            content: `
                Tenho uma dúvida odontológica: ${odonto}. Por favor, organize sua resposta como um conteúdo HTML bem formatado.
                `,
          },
        ],
        temperature: 0.7,
        max_tokens: 600,
        top_p: 1.0,
        frequency_penalty: 0.2,
        presence_penalty: 0.0,
      });

      setDuvida(response.data.choices[0].message.content);
      toast.success("Resposta gerada com sucesso!");
    } catch (error) {
      if (error.response) {
        toast.error(
          `Erro da API: ${error.response.status} - ${error.response.data.error.message}`
        );
      } else {
        toast.error("Erro de conexão. Tente novamente mais tarde.");
      }
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main style={{ paddingTop: "150px", height: "100%" }}>
        <div className="container">
          <section className="text-center">
            <h1 className="m-4">Precisa de ajuda?</h1>
            <p className="pt-5">
              Digite sua dúvida e o <b>OdontoBot</b> vai te ajudar!
            </p>
          </section>

          <section className="m-4">
            <form className="text-center" onSubmit={getDuvida}>
              <textarea
                className="shadow-none form-control w-75 mx-auto rounded textareaInput"
                placeholder="Digite aqui"
                style={{ height: "100px" }}
                onChange={(e) => setOdonto(e.target.value)}
              ></textarea>
              <button
                type="submit"
                className="btn vw-50 btn-lg text-center m-3 duvidaButton"
                disabled={isProcessing}
              >
                {isProcessing ? "Processando..." : "Enviar"}
              </button>
            </form>
          </section>

          {isProcessing && (
            <div className="text-center">
              <div className="spinner-grow text-info" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          )}

          {/* Resposta Gerada */}
          <section>
            {duvida && <div className="odonto">{parse(duvida)}</div>}
          </section>
        </div>
      </main>
      <Footer />
      <ToastContainer />
    </>
  );
};

export default Home;
