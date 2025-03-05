import React, { useState } from "react";
import "./styles.css";

const Help = () => {
  // Estados para controlar a expansão de cada accordion
  const [accordion1Open, setAccordion1Open] = useState(false);
  const [accordion2Open, setAccordion2Open] = useState(false);
  const [accordion3Open, setAccordion3Open] = useState(false);

  // Funções para alternar cada accordion
  const toggleAccordion1 = () => setAccordion1Open(!accordion1Open);
  const toggleAccordion2 = () => setAccordion2Open(!accordion2Open);
  const toggleAccordion3 = () => setAccordion3Open(!accordion3Open);

  return (
    <div className="help-container">
      <div className="help-content">
        <section className="help-intro">
          <h1>Como usar o OdontoBot</h1>
          <p className="help-description">
            O OdontoBot foi projetado para auxiliá-lo com informações e
            orientações sobre odontologia de forma simples e educativa. Aqui
            você encontrará instruções sobre como utilizar o sistema.
          </p>
        </section>

        <section className="help-section">
          <h2>Fazendo perguntas</h2>
          <p>
            Digite sua dúvida sobre temas relacionados à odontologia na caixa de
            texto e clique em "Enviar". Para obter melhores resultados, seja
            específico em sua pergunta e inclua detalhes relevantes.
          </p>
          <div className="help-example">
            <h3>Exemplos de perguntas:</h3>
            <ul>
              <li>"Quais são os sintomas de pulpite?"</li>
              <li>"Como tratar sensibilidade dentária pós-clareamento?"</li>
              <li>"Diferenças entre coroas de porcelana e zircônia"</li>
              <li>"Protocolo para tratamento de canal em dentes necrosados"</li>
              <li>"Técnicas atuais de enxerto ósseo para implantes"</li>
            </ul>
          </div>
        </section>

        <section className="help-section">
          <h2>Exportando respostas</h2>
          <p>
            Após receber uma resposta, você pode baixá-la em formato PDF
            clicando no botão "Baixar PDF" que aparece abaixo da resposta. Isso
            é útil para estudos ou para compartilhar com colegas.
          </p>
        </section>

        <section className="help-section">
          <h2>Alternando entre tema claro e escuro</h2>
          <p>
            Você pode alternar entre os temas claro e escuro clicando no ícone
            de sol/lua localizado na barra de navegação superior. O tema escuro
            é ideal para uso noturno e reduz o cansaço visual.
          </p>
        </section>

        <section className="help-section">
          <h2>Limitações</h2>
          <p>
            O OdontoBot utiliza a API GPT-3.5 da OpenAI e, embora tenha vasto
            conhecimento sobre odontologia, não substitui o diagnóstico e
            tratamento feito por um profissional qualificado. Sempre consulte um
            dentista para questões relacionadas à sua saúde bucal.
          </p>
        </section>

        <section className="help-section">
          <h2>Problemas frequentes</h2>
          <div className="accordion" id="helpAccordion">
            <div className="accordion-item">
              <h3 className="accordion-header" id="headingOne">
                <button
                  className={`accordion-button ${
                    accordion1Open ? "" : "collapsed"
                  }`}
                  type="button"
                  onClick={toggleAccordion1}
                  aria-expanded={accordion1Open}
                  aria-controls="collapseOne"
                >
                  Não estou recebendo resposta
                </button>
              </h3>
              <div
                id="collapseOne"
                className={`accordion-collapse collapse ${
                  accordion1Open ? "show" : ""
                }`}
                aria-labelledby="headingOne"
              >
                <div className="accordion-body">
                  Verifique sua conexão com a internet. Se o problema persistir,
                  a API pode estar temporariamente indisponível. Tente novamente
                  mais tarde.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h3 className="accordion-header" id="headingTwo">
                <button
                  className={`accordion-button ${
                    accordion2Open ? "" : "collapsed"
                  }`}
                  type="button"
                  onClick={toggleAccordion2}
                  aria-expanded={accordion2Open}
                  aria-controls="collapseTwo"
                >
                  A resposta está incompleta ou incorreta
                </button>
              </h3>
              <div
                id="collapseTwo"
                className={`accordion-collapse collapse ${
                  accordion2Open ? "show" : ""
                }`}
                aria-labelledby="headingTwo"
              >
                <div className="accordion-body">
                  Tente reformular sua pergunta com mais detalhes. O OdontoBot
                  pode não ter entendido completamente o que você está
                  perguntando.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h3 className="accordion-header" id="headingThree">
                <button
                  className={`accordion-button ${
                    accordion3Open ? "" : "collapsed"
                  }`}
                  type="button"
                  onClick={toggleAccordion3}
                  aria-expanded={accordion3Open}
                  aria-controls="collapseThree"
                >
                  Não consigo baixar o PDF
                </button>
              </h3>
              <div
                id="collapseThree"
                className={`accordion-collapse collapse ${
                  accordion3Open ? "show" : ""
                }`}
                aria-labelledby="headingThree"
              >
                <div className="accordion-body">
                  Certifique-se de que seu navegador não está bloqueando pop-ups
                  e que você tem permissão para baixar arquivos. Se o problema
                  persistir, tente usar outro navegador.
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Help;
