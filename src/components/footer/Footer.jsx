import React from "react";
import { AiFillHeart } from "react-icons/ai";
import { Container } from "reactstrap";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <Container className="footer">
        <p>
          &copy; 2023 Diseñado y Desarrollado con <AiFillHeart color="red"/>  por Janet Marulanda Usma - Todos los derechos reservados
        </p>
      </Container>
    </footer>
  );
};

export default Footer;