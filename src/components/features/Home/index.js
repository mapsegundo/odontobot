import React from "react";
import Chat from "../Chat";
import DownloadButton from "../Export/DownloadButton";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useChatContext } from "../../../context/ChatContext";
import { generatePDF } from "../../../utils/pdfUtils";
import { toast } from "react-toastify";
import "./styles.css";

const Home = () => {
  const { currentResponse } = useChatContext();

  const downloadPDF = () => {
    const element = document.querySelector(".odonto");
    if (!element) {
      toast.error("Nenhuma resposta disponível para exportar.");
      return;
    }
    const titleElement = element.querySelector("h1");
    const title = titleElement ? titleElement.textContent : "resposta";
    generatePDF(element, title);
    toast.success("PDF gerado com sucesso!");
  };

  return (
    <div className="home-container">
      <section className="text-center intro-section">
        <h1 className="mb-4">Precisa de ajuda?</h1>
        <p className="pt-4">
          Digite sua dúvida sobre Odontologia e o <b>OdontoBot</b> vai te
          ajudar!
        </p>
      </section>

      <Chat />

      {currentResponse && <DownloadButton downloadPDF={downloadPDF} />}
      <ToastContainer />
    </div>
  );
};

export default Home;
