import React from "react";

const Contact: React.FC = () => {
  return (
    <section id="contact">
      <h2>Contacto</h2>
      <p>Puedes contactarme en:</p>
      <br></br>
      <div className="email-container">
        {/* Ícono de correo */}
        <a href="https://mail.google.com/mail/u/0/#inbox">
          <img src="/image.jpg" alt="Email Icon" className="email-icon" />
        </a>
        giulianobatistela@gmail.com
      </div>
      <br></br>
      <br></br>

      <div className="whatsapp-container">
        {/* Ícono de wp */}
        <a href="https://wa.me/message/VOD76U3TLIVNK1">
          <img
            src="public/icons/logowhatsapp.png"
            alt="Email Icon"
            className="email-icon"
          />
        </a>
        +54 342 5543999
      </div>
    </section>
  );
};

export default Contact;
