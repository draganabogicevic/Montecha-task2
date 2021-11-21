import React from "react";

import style from "./Footer.module.css"

import { Container } from "react-bootstrap"


const Footer = () => {
  return (
    <footer className={`bg-dark text-light ${style.footer}`}>
      <Container>
        <p className="text-center p-4">Copyright &copy; GitHub 2021.</p>
      </Container>
    </footer>  
  )
}

export default Footer;