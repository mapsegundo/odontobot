import React, { useState } from "react";
import Navbar from "./Navbar";
import parse from "html-react-parser";
import "./Home.css";
import Footer from "./Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { jsPDF } from "jspdf";
import odontoLogo from "../img/odonto.png";
const { Configuration, OpenAIApi } = require("openai");

const Home = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [entrada, setEntrada] = useState("");
  const [saida, setSaida] = useState("");

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

    if (isProcessing || !isValidInput(entrada)) {
      toast.error("Entrada inválida. Por favor, revise sua dúvida.");
      return;
    }

    setSaida("");
    setIsProcessing(true);

    try {
      const response = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: `
                Você é um assistente odontológico altamente qualificado. Responda as dúvidas de forma clara, detalhada e educacional, apresentando a resposta em uma estrutura HTML válida e bem formatada. Sua resposta deve incluir:
                - Uma introdução clara e concisa sobre o tema.
                - Explicações detalhadas divididas em seções com subtítulos (<h2>).
                - Listas de tópicos importantes em listas não ordenadas (<ul>).
                - Explicações ou detalhes em parágrafos (<p>).
                - Exemplos práticos ou situações do dia a dia relevantes para a dúvida.
                - Links para fontes confiáveis (<a>), com indicação de abertura em uma nova aba (target="_blank").
                - Uma conclusão que resuma a informação e sugira os próximos passos.
                Formate o conteúdo dentro de uma <div> com a classe "odonto".
            `,
          },
          {
            role: "user",
            content: `
                Tenho uma dúvida odontológica: ${entrada}. Por favor, organize sua resposta como um conteúdo HTML bem formatado, rico em detalhes e exemplos.
            `,
          },
        ],
        temperature: 0.7,
        max_tokens: 1000, // Aumentado para permitir respostas mais detalhadas
        top_p: 1.0,
        frequency_penalty: 0.2,
        presence_penalty: 0.0,
      });

      setSaida(response.data.choices[0].message.content);
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

  const downloadPDF = () => {
    const element = document.querySelector(".odonto");
    if (!element) {
      toast.error("Nenhuma resposta disponível para exportar.");
      return;
    }
    const pdf = new jsPDF();

    // Adicionar logotipo
    const logoWidth = 50;
    const logoHeight = 50;
    const logoX = (pdf.internal.pageSize.getWidth() - logoWidth) / 2;
    const logoY = 10; // Posiciona o logotipo mais próximo do topo
    pdf.addImage(odontoLogo, "PNG", logoX, logoY, logoWidth, logoHeight);

    // Extrair o título da resposta
    const titleElement = element.querySelector("h1");
    const title = titleElement ? titleElement.textContent : "resposta";

    // Adicionar título principal
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(18);
    const titleY = logoY + logoHeight + 10; // Ajusta a posição do título logo abaixo do logotipo
    pdf.text("OdontoBot", pdf.internal.pageSize.getWidth() / 2, titleY, {
      align: "center",
    });

    // Adicionar conteúdo formatado
    let cursorY = titleY + 20; // Reduz o espaço entre o título e o conteúdo
    const marginLeft = 10;
    const maxWidth = pdf.internal.pageSize.getWidth() - 20; // 10 de cada lado
    const lineHeight = 10;

    const paragraphs = element.querySelectorAll("p, h1, h2, ul, li, a");
    const links = []; // Armazena links encontrados no conteúdo

    paragraphs.forEach((paragraph) => {
      if (cursorY > 270) {
        pdf.addPage(); // Adiciona nova página se atingir o limite
        cursorY = 20;
      }

      if (paragraph.tagName === "H1" || paragraph.tagName === "H2") {
        cursorY += lineHeight; // Adiciona espaço antes do título
        pdf.setFont("helvetica", "bold");
        pdf.setFontSize(16);
        pdf.text(paragraph.textContent, marginLeft, cursorY);
        cursorY += lineHeight;
      } else if (paragraph.tagName === "UL") {
        pdf.setFont("helvetica", "normal");
        pdf.setFontSize(12);
        paragraph.querySelectorAll("li").forEach((item) => {
          const textLines = pdf.splitTextToSize(
            `- ${item.textContent}`,
            maxWidth - 10
          );
          textLines.forEach((line) => {
            pdf.text(line, marginLeft + 5, cursorY); // Adiciona recuo para listas
            cursorY += 7;
          });
        });
      } else if (paragraph.tagName === "A") {
        const linkText = paragraph.textContent;
        const href = paragraph.href;
        links.push({ text: linkText, url: href }); // Armazena o link para a seção de links
      } else if (paragraph.tagName === "P") {
        pdf.setFont("helvetica", "normal");
        pdf.setFontSize(12);
        const textLines = pdf.splitTextToSize(paragraph.textContent, maxWidth);
        textLines.forEach((line) => {
          pdf.text(line, marginLeft, cursorY);
          cursorY += 7;
        });
      }
    });

    // Adicionar seção de links no final, somente se houver links
    if (links.length > 0) {
      if (cursorY > 250) {
        pdf.addPage();
        cursorY = 20;
      }
      cursorY += 20; // Adiciona espaço antes do título da seção
      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(16);
      pdf.text("Links Úteis", marginLeft, cursorY);
      cursorY += lineHeight;

      links.forEach((link) => {
        pdf.setFont("helvetica", "normal");
        pdf.setFontSize(12);
        const formattedText = `${link.text} (${link.url})`;
        const splitText = pdf.splitTextToSize(formattedText, maxWidth);
        splitText.forEach((line) => {
          pdf.textWithLink(line, marginLeft, cursorY, { url: link.url });
          cursorY += 7;
        });
      });
    }

    // Salvar o PDF
    pdf.save(`${title}.pdf`);
    toast.success("PDF gerado com sucesso!");
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
              Digite sua dúvida sobre Odontologia e o <b>OdontoBot</b> vai te
              ajudar!
            </p>
          </section>

          <section className="m-4">
            <form className="text-center" onSubmit={getDuvida}>
              <textarea
                className="shadow-none form-control w-75 mx-auto rounded textareaInput"
                placeholder="Digite aqui"
                style={{ height: "100px" }}
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
            {saida && <div className="odonto">{parse(saida)}</div>}
            {saida && (
              <div className="text-center">
                <button
                  className="btn vw-50 btn-lg text-center m-3 saidaButton"
                  onClick={downloadPDF}
                >
                  Baixar em PDF
                </button>
              </div>
            )}
          </section>
        </div>
      </main>
      <Footer />
      <ToastContainer />
    </>
  );
};

export default Home;
