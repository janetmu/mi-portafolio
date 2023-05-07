import React, { useRef, useEffect } from "react";
import { Container } from "reactstrap";
import "./header.css";

const navLinks = [
  {
    display: "Inicio",
    url: "#inicio",
  },

  {
    display: "Formación",
    url: "#formación",
  },

  {
    display: "Conocimientos",
    url: "#conocimientos",
  },

  {
    display: "Competencias",
    url: "#competencias",
  },

  {
    display: "Proyectos",
    url: "#proyectos",
  },

  {
    display: "Contacto",
    url: "#contacto",
  },
];

const Header = () => {
  const headerRef = useRef(null);

  const menuRef = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("header_shrink");
      } else {
        headerRef.current.classList.remove("header_shrink");
      }
    });

    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  const menuToogle = () => menuRef.current.classList.toggle("menu_active");

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <div className="navigation">
          <div className="logo">
            <h5>Janet Marulanda Usma</h5>
          </div>

          <div className="nav_menu" ref={menuRef} onClick={menuToogle}>
            <ul className="nav_list">
              {navLinks.map((item, index) => (
                <li className="nav__item" key={index}>
                  <a href={item.url}>{item.display}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="nav_right">
            <span className="mobile_menu">
              <i className="ri-menu-add-fill" onClick={menuToogle}></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
