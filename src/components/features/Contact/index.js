import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./styles.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulando envio de formulário
    setTimeout(() => {
      toast.success(
        "Mensagem enviada com sucesso! Entraremos em contato em breve."
      );
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="contact-container">
      <div className="contact-content">
        <h1>Entre em Contato (Em Construção)</h1>
        <p className="contact-intro">
          Tem alguma dúvida ou sugestão sobre o OdontoBot? Preencha o formulário
          abaixo e nossa equipe entrará em contato o mais breve possível.
        </p>

        <div className="contact-info-grid">
          <div className="contact-info-card">
            <div className="icon-wrapper">
              <i className="bi bi-envelope"></i>
            </div>
            <h3>E-mail</h3>
            <p>marshallpaiva@hotmail.com</p>
          </div>

          <div className="contact-info-card">
            <div className="icon-wrapper">
              <i className="bi bi-telephone"></i>
            </div>
            <h3>Telefone</h3>
            <p>(11) 9999-9999</p>
          </div>

          <div className="contact-info-card">
            <div className="icon-wrapper">
              <i className="bi bi-geo-alt"></i>
            </div>
            <h3>Localização</h3>
            <p>Fortaleza, CE - Brasil</p>
          </div>
        </div>

        <div className="contact-form-container">
          <h2>Formulário de Contato</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nome</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Seu nome completo"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="seu.email@exemplo.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Assunto</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Assunto da mensagem"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Mensagem</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Digite sua mensagem..."
                rows="5"
              ></textarea>
            </div>

            <button
              type="submit"
              className="submit-button"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
            </button>
          </form>
        </div>
      </div>
      <ToastContainer position="bottom-right" />
    </div>
  );
};

export default Contact;
