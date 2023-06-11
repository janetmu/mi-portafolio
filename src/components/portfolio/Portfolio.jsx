import React from "react";
import "./portfolio.css";
import tienda_virtual from "../../assests/images/tienda_virtual.jpeg";
import sistema_de_gestion from "../../assests/images/sistema_de_gestion.jpeg";
import organizacion from "../../assests/images/organizacion.jpeg";
import portafolio_personal from "../../assests/images/portafolio_personal.jpeg";

/*const portfolioData = [
  {
    imgUrl: tienda_virtual,
    title: "Tienda Virtual",
    url: "https://github.com/ScrumTech-Agency/PostresLowCarbs",
  },

  {
    imgUrl: sistema_de_gestion,
    title: "Sistema de Gestión de Ingresos y Gastos",
    url: "https://github.com/janetmu/Sistema-de-Gestion-de-Ingresos-y-Gastos",
  },

  {
    imgUrl: portafolio_personal,
    title: "Portafolio Personal",
    url: "https://github.com/janetmu/Personal-Portfolio",
  },
];*/

const Portfolio = () => {
  return (
    <section id="proyectos">
      <h3 className="title">Proyectos</h3>

      <div className="work_card">
        <img src={tienda_virtual} alt="tienda virtual" className="work_img" />
        <h5 className="work_title">Tienda Virtual</h5>

        <div className="portfolio_item_details">
          <ul className="details_info">
            <li>
              Lenguaje: <span> JavaScript</span>
            </li>
            <li>
              Frontend: <span> Html - Css - React</span>
            </li>
            <li>
              Backend: <span> Node - Express - MongoDB</span>
            </li>
            <li>
              Otros: <span> Postman - Git</span>
            </li>

            <li>
              <i className="ri-video-fill work_button-icon"></i>
              <a
                href="https://youtu.be/7MG2gOEZmHI?autoplay=1"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver Video
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="work_card">
        <img
          src={sistema_de_gestion}
          alt="Sistema de Gestión de Ingresos y Gastos"
          className="work_img"
        />
        <h5 className="work_title">Sistema de Gestión de Ingresos y Gastos</h5>

        <div className="portfolio_item_details">
          <ul className="details_info">
            <li>
              Lenguaje: <span> Java</span>
            </li>
            <li>
              Frontend: <span> Html - Bootstrap</span>
            </li>
            <li>
              Backend: <span> Spring Boot - Postgres</span>
            </li>
            <li>
              Otros: <span> Postman - Git </span>
            </li>
            <li>
              <i className="ri-video-fill work_button-icon"></i>
              <a
                href="https://youtu.be/n4saBrxfiOE?autoplay=1"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver Video
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="work_card">
        <img src={organizacion} alt="organizacion" className="work_img" />
        <h5 className="work_title">Organización de Equipo y Colaboradores</h5>

        <div className="portfolio_item_details">
          <ul className="details_info">
            <li>
              Lenguaje: <span> JavaScript</span>
            </li>
            <li>
              Frontend: <span> Html - Css - React</span>
            </li>
            <li>
              <i className="ri-video-fill work_button-icon"></i>
              <a
                href="https://youtu.be/_vjD_cAWkH4?autoplay=1"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver Video
              </a>
            </li>
            <li>
              <i className="ri-arrow-right-line work_button-icon flecha"></i>
              <a
                href="https://organizacion-beta.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                App
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="work_card">
        <img src={portafolio_personal} alt="portafolio" className="work_img" />
        <h5 className="work_title">Portafolio Personal</h5>

        <div className="portfolio_item_details">
          <ul className="details_info">
            <li>
              Lenguaje: <span> JavaScript</span>
            </li>
            <li>
              Frontend: <span> Html - Css - React</span>
            </li>
            <li>
              <i className="ri-video-fill work_button-icon"></i>
              <a
                href="https://youtu.be/_vjD_cAWkH4?autoplay=1"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver Video
              </a>
            </li>
            
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
