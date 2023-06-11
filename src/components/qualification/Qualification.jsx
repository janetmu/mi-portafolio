import React from "react";
import "./qualification.css";

const developmentQualificationData = [
  {
    title: "Certified Tech Developer",
    institution: "Digital House ( En curso )",
  },

  {
    title: "Especialización Front End",
    institution: "Oracle Next Education - Alura ( Mayo 2023 )",
  },

  {
    title: "Desarrollo de Aplicaciones Web",
    institution: "Universidad de Antioquia ( Noviembre 2022 )",
  },

  {
    title: "Desarrollo de Software",
    institution: "Universidad de Antioquia ( Septiembre 2022 )",
  },

  {
    title: "Programación Básica en Lenguaje Java",
    institution: "Universidad de Antioquia ( Julio 2022 )",
  },

  {
    title: "Fundamentos de Programación en Lenguaje Python",
    institution: "Universidad de Antioquia ( Mayo 2022 )",
  },

  {
    title: "Programa Global de Talento Digital - Transformación Digital",
    institution: "Ruta N - Alibaba Group ( Diciembre 2021 )",
  },

  {
    title: "Especialista en Finanzas, Preparación y Evaluación de Proyectos",
    institution: "Universidad de Antioquia ( Noviembre 2006 )",
  },

  {
    title: "Contaduría",
    institution: "Universidad de Antioquia ( Febrero 2000 )",
  },
];

const Qualification = () => {
  return (
    <section id="formación">
      <h3>Formación</h3>

      <div className="studies-container">
        {developmentQualificationData.map((item, index) => (
          <div className="single_studies" key={index}>
            <span className="studies-icon">
              <i className="ri-honour-line"></i>
            </span>
            <h5>{item.title}</h5>
            <h6>{item.institution}</h6>
          </div>
        ))}
      </div>

      <h3>Otros Cursos</h3>
      <div className="certifications-container">
        <div className="single_studies">
          <span className="studies-icon">
            <i className="ri-honour-line"></i>
          </span>
          <h5>Formación React</h5>
          <h6>Oracle Next Education - Alura</h6>
        </div>
        <div className="single_studies">
          <span className="studies-icon">
            <i className="ri-honour-line"></i>
          </span>
          <h5>Formación HTML & CSS</h5>
          <h6>Oracle Next Education - Alura</h6>
        </div>
        <div className="single_studies">
          <span className="studies-icon">
            <i className="ri-honour-line"></i>
          </span>
          <h5>Business Agility</h5>
          <h6>Oracle Next Education - Alura</h6>
        </div>
        <div className="single_studies">
          <span className="studies-icon">
            <i className="ri-honour-line"></i>
          </span>
          <h5>Git y GitHub</h5>
          <h6>Oracle Next Education - Alura</h6>
        </div>
      </div>

      <h3>Certificaciones</h3>
      <div className="certifications-container">
        <div className="single_studies">
          <span className="studies-icon">
            <i className="ri-honour-line"></i>
          </span>
          <h5>Scrum Foundation Profesional Certificate SFPC</h5>
          <h6>Vencimiento Octubre 2024</h6>
        </div>
      </div>

      <h3>Idiomas</h3>
      <div className="certifications-container">
        <div className="single_studies">
          <span className="studies-icon">
            <i className="ri-honour-line"></i>
          </span>
          <h5>Inglés</h5>
          <h6>B2: Intermedio Alto</h6>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
