import { List, X } from "@phosphor-icons/react";
import { useMediaQuery } from "react-responsive";

import { Container } from "./styles";

export function Header({ isMenuOpen, setIsMenuOpen }) {
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  return (
    <Container>
      <h2><span>&lt; Madalena</span> <span>Rocha /&gt;</span></h2>

      {!isDesktop ? (
        <>
          {!isMenuOpen ? (
            <List size={24} onClick={() => setIsMenuOpen(true)} />
          ) : (
            <X size={24} onClick={() => setIsMenuOpen(false)} />
          )}
        </>
      ) : (
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">Sobre</a></li>
            <li><a href="#projects">Projetos</a></li>
            <li><a href="#certificates">Certificados</a></li>
            <li><a href="#contact">Contato</a></li>
          </ul>
        </nav>
      )}
    </Container>
  );
}
