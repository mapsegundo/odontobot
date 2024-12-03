import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import InputForm from "./InputForm";
import ResponseDisplay from "./ResponseDisplay";
import DownloadButton from "./DownloadButton";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useOpenAI from "../hooks/useOpenAI";
import { generatePDF } from "../utils/pdfUtils";
import "../assets/styles/Home.css";
import { toast } from "react-toastify";

const Home = () => {
  const [entrada, setEntrada] = useState("");
  const { isProcessing, saida, fetchResponse } = useOpenAI();

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

          <section className="m-4">
            <InputForm
              entrada={entrada}
              setEntrada={setEntrada}
              getDuvida={getDuvida}
              isProcessing={isProcessing}
            />
          </section>

          {isProcessing && (
            <div className="text-center">
              <div className="spinner-grow text-info" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          )}

          <section>
            {saida && <ResponseDisplay saida={saida} />}
            {saida && <DownloadButton downloadPDF={downloadPDF} />}
          </section>
        </div>
      </main>
      <Footer />
      <ToastContainer />
    </>
  );
};

export default Home;
