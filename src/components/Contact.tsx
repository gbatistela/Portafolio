import React from "react";

const Contact: React.FC = () => {
  return (
    <section id="contact">
      <h2>Contacto</h2>
      <p>Puedes contactarme en:</p>
      <div className="email-container">
        {/* Ícono de correo */}
        <a href="gmail.png">
          <img src="/image.jpg" alt="Email Icon" className="email-icon" />
        </a>
        giulianobatistela@gmail.com
      </div>
      <br></br>
      <div className="whatsapp-container">
        {/* Ícono de WhatsApp */}
        <img
          src="src/assets/logowhatsapp.png"
          alt="WhatsApp Icon"
          className="whatsapp-icon"
        />
        <a
          href="https://wa.me/1234567890"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contáctame por WhatsApp
        </a>
      </div>
    </section>
  );
};

export default Contact;
