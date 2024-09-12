import React from "react";

const Contact: React.FC = () => {
  return (
    <section id="contact">
      <h2>Contacto</h2>
      <p>Puedes contactarme en:</p>
      <br></br>
      <div className="email-container">
        {/* Ícono de correo */}
        <a href="mailto:giulianobatistela@gmail.com">
          <img
            src="/icons/image.jpg" // Ruta desde la carpeta 'public'
            alt="Email Icon"
            className="email-icon"
          />
        </a>
        giulianobatist
      </div>
      <br></br>
      <br></br>

      <div className="whatsapp-container">
        {/* Ícono de WhatsApp */}
        <a href="https://wa.me/message/VOD76U3TLIVNK1">
          <img
            src="/icons/logowhatsapp.png" // Ruta desde la carpeta 'public'
            alt="WhatsApp Icon"
            className="whatsapp-icon"
          />
        </a>
        +54 342 5543999
      </div>
    </section>
  );
};

export default Contact;
