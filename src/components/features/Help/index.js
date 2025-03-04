import React from "react";
import "./styles.css";

const Help = () => {
  return (
    <main style={{ paddingTop: "150px" }}>
      <div className="container">
        <div className="help-container">
          <h1 className="text-center mb-5">Como usar o OdontoBot</h1>

          <div className="help-section">
            <h2>Fazendo perguntas</h2>
            <p>
              Digite sua dúvida sobre temas relacionados à odontologia na caixa
              de texto e clique em "Enviar". Para obter melhores resultados,
              seja específico em sua pergunta e inclua detalhes relevantes.
            </p>
            <div className="help-example">
              <h4>Exemplos de perguntas:</h4>
              <ul>
                <li>"Quais são os sintomas de pulpite?"</li>
                <li>"Como tratar sensibilidade dentária pós-clareamento?"</li>
                <li>"Diferenças entre coroas de porcelana e zircônia"</li>
              </ul>
            </div>
          </div>

          <div className="help-section">
            <h2>Exportando respostas</h2>
            <p>
              Após receber uma resposta, você pode baixá-la em formato PDF
              clicando no botão "Baixar PDF" que aparece abaixo da resposta.
              Isso é útil para estudos ou para compartilhar com colegas.
            </p>
          </div>

          <div className="help-section">
            <h2>Alternando entre tema claro e escuro</h2>
            <p>
              Você pode alternar entre os temas claro e escuro clicando no ícone
              de sol/lua localizado na barra de navegação superior.
            </p>
          </div>

          <div className="help-section">
            <h2>Limitações</h2>
            <p>
              O OdontoBot utiliza a API GPT-3.5 da OpenAI e, embora tenha vasto
              conhecimento sobre odontologia, não substitui o diagnóstico e
              tratamento feito por um profissional qualificado. Sempre consulte
              um dentista para questões relacionadas à sua saúde bucal.
            </p>
          </div>

          <div className="help-section">
            <h2>Problemas frequentes</h2>
            <div className="accordion" id="helpAccordion">
              <div className="accordion-item">
                <h3 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="false"
                    aria-controls="collapseOne"
                  >
                    Não estou recebendo resposta
                  </button>
                </h3>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingOne"
                  data-bs-parent="#helpAccordion"
                >
                  <div className="accordion-body">
                    Verifique sua conexão com a internet. Se o problema
                    persistir, a API pode estar temporariamente indisponível.
                    Tente novamente mais tarde.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h3 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    A resposta está incompleta ou incorreta
                  </button>
                </h3>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#helpAccordion"
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
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Não consigo baixar o PDF
                  </button>
                </h3>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#helpAccordion"
                >
                  <div className="accordion-body">
                    Certifique-se de que seu navegador não está bloqueando
                    pop-ups e que você tem permissão para baixar arquivos. Se o
                    problema persistir, tente usar outro navegador.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Help;
