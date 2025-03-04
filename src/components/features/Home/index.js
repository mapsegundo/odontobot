import React from "react";
import Navbar from "../../layout/Navbar";
import Footer from "../../layout/Footer";
import Chat from "../Chat";
import DownloadButton from "../Export/DownloadButton";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useChatContext } from "../../../context/ChatContext";
import { generatePDF } from "../../../utils/pdfUtils";
import { toast } from "react-toastify";

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

          <Chat />

          {currentResponse && <DownloadButton downloadPDF={downloadPDF} />}
        </div>
      </main>
      <Footer />
      <ToastContainer />
    </>
  );
};

export default Home;
