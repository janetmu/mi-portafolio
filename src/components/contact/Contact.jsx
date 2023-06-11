import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <section id="contacto">
      <h3 className="title">Contáctame</h3>
      <div className="contact_container">
        <div className="contact_card">
          <a
            href="mailto:janetmaru.jm@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="ri-mail-line contact-icon img-icon"></i>Email
          </a>
        </div>
      <div className="contact_card">
        

        <a href="tel:3193990912"> <i className="ri-phone-fill"></i>Phone</a>
      </div>
      </div>
    </section>
  );
};

export default Contact;
