import React from "react";
import "./abilities.css";

const Abilities = () => {
  return (
    <section id="competencias">
      
            <h3 className="ability">
              Competencias
            </h3>
          
            <div className="abilities-container">
              <div className="single_abilities">
                <span className="abilities-icon">
                  <i className="ri-check-line"></i>
                </span>
                <h5>Autogestión</h5>
              </div>
              <div className="single_abilities">
                <span className="abilities-icon">
                  <i className="ri-check-line"></i>
                </span>
                <h5>Adaptabilidad y flexibilidad</h5>
              </div>
              <div className="single_abilities">
                <span className="abilities-icon">
                  <i className="ri-check-line"></i>
                </span>
                <h5>Orientación al resultado</h5>
              </div>
              <div className="single_abilities">
                <span className="abilities-icon">
                  <i className="ri-check-line"></i>
                </span>
                <h5>Orientación al cliente</h5>
              </div>
              <div className="single_abilities">
                <span className="abilities-icon">
                  <i className="ri-check-line"></i>
                </span>
                <h5>Resolución de problemas</h5>
              </div>
            </div>
         
            <div className="abilities-container">
              <div className="single_abilities">
                <span className="abilities-icon">
                  <i className="ri-check-line"></i>
                </span>
                <h5>Compromiso</h5>
              </div>
              <div className="single_abilities">
                <span className="abilities-icon">
                  <i className="ri-check-line"></i>
                </span>
                <h5>Trabajo en equipo</h5>
              </div>
              
              <div className="single_abilities">
                <span className="abilities-icon">
                  <i className="ri-check-line"></i>
                </span>
                <h5>Aprendizaje continuo</h5>
              </div>
            </div>
          
    </section>
  );
};

export default Abilities;
