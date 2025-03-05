import React from "react";
import "./styles.css";
import logoImg from "../../../assets/images/odonto.png";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <section className="about-intro">
          <div className="about-header">
            <img src={logoImg} alt="OdontoBot Logo" className="about-logo" />
            <h1>Sobre o OdontoBot</h1>
          </div>
          <p className="about-description">
            O OdontoBot é um assistente virtual especializado em fornecer
            informações e orientações sobre odontologia de forma acessível e
            educativa para todos.
          </p>
        </section>

        <section className="about-mission">
          <h2>Nossa Missão</h2>
          <p>
            Democratizar o acesso à informação odontológica de qualidade,
            auxiliando usuários a compreenderem melhor sua saúde bucal e a
            importância dos cuidados preventivos, complementando o atendimento
            profissional.
          </p>
        </section>

        <section className="about-features">
          <h2>Recursos Principais</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>Respostas Educativas</h3>
              <p>
                Conteúdo didático e bem estruturado para facilitar a compreensão
                de termos e procedimentos odontológicos.
              </p>
            </div>
            <div className="feature-card">
              <h3>Base de Conhecimento</h3>
              <p>
                Acesso a informações atualizadas e cientificamente embasadas
                sobre cuidados bucais e tratamentos odontológicos.
              </p>
            </div>
            <div className="feature-card">
              <h3>Disponibilidade 24/7</h3>
              <p>
                Assistência disponível a qualquer hora do dia, todos os dias da
                semana, para tirar suas dúvidas sobre saúde bucal.
              </p>
            </div>
            <div className="feature-card">
              <h3>Exportação de Informações</h3>
              <p>
                Possibilidade de salvar e compartilhar as orientações recebidas
                em formato PDF para consulta posterior.
              </p>
            </div>
          </div>
        </section>

        <section className="about-disclaimer">
          <h2>Importante</h2>
          <p>
            O OdontoBot não substitui a consulta com um cirurgião-dentista.
            Sempre consulte um profissional para diagnóstico, tratamento e
            acompanhamento odontológico.
          </p>
        </section>

        <section className="about-tech">
          <h2>Tecnologia</h2>
          <p>
            Desenvolvido com tecnologias modernas de Inteligência Artificial,
            especialmente treinado para compreender e responder dúvidas sobre
            odontologia com precisão e clareza.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
