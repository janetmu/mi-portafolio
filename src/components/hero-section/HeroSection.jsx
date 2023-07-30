import React, { useRef, useEffect } from "react";
import "./hero-section.css";

import { init } from "ityped";
import heroImg from "../../assests/images/hero-img.png";

const HeroSection = () => {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      backDelay: 1500,
      showCursor: true,
      strings: [
        "Janet Marulanda Usma",
        "Front-End Developer",
        "de Medellín, Colombia",
      ],
    });
  }, []);

  return (
    <section className="hero_section" id="inicio">
      
          
            <div className="home_social">
              <span className="home_contact">Conectemos</span>
              <div className="home_social">
                <br></br>
                <a
                  href="http://www.linkedin.com/in/janet-marulanda-usma-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="ri-linkedin-fill"></i>
                </a>
                <a
                  href="https://github.com/janetmu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="ri-github-fill"></i>
                </a>
                <a
                  href="https://api.whatsapp.com/send?phone=+573015723929&text=Hola%20Janet,%20vi%20tu%20CV%20Dev"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="ri-whatsapp-line"></i>
                </a>
              </div>
            </div>
          
            <div className="hero_img">
              <img src={heroImg} alt="mi foto" className="w-100" />
            </div>
          
            <div className="hero_content">
              <span>
                <h4>¡Hola... Bienvenido a mi espacio!</h4>
              </span>

              <h2>
                Soy <span ref={textRef}></span>
              </h2>

              <p>
                Soy una profesional muy competente, orientada al logro de
                resultados y al servicio al cliente. Me apasionan los retos, la mejora
                continua y sentir que aporto valor con mis acciones tanto a
                nivel personal como profesional.
              </p>

              <div className="hero_btns">
                <button className="btn1">
                  <a href="./cv_janet_marulanda_usma_dev_2023.pdf" download={""}>
                    <i className="ri-file-download-line"></i>
                    CV
                  </a>
                </button>
                <button className="hire_btn">
                  <a
                    href="https://api.whatsapp.com/send?phone=+573015723929&text=Hola%20Janet,%20vi%20tu%20CV%20Dev"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="ri-whatsapp-line"></i>
                    Contáctame
                  </a>
                </button>
              </div>
            </div>
          
    </section>
  );
};

export default HeroSection;
