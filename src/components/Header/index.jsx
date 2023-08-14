import { List, X } from "@phosphor-icons/react";
import { useMediaQuery } from "react-responsive";

import { Container, Brand, Icon, Navigation } from "./styles";

export function Header({ isMenuOpen, setIsMenuOpen }) {
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  return (
    <Container>
      <Brand>
        <h2><span>&lt; Madalena</span> <span>Rocha /&gt;</span></h2>
      </Brand>

      {!isDesktop ? (
        <Icon isMenuOpen={isMenuOpen}>
          <List size={24} onClick={() => setIsMenuOpen(true)} />
          <X size={24} onClick={() => setIsMenuOpen(false)} />
        </Icon>
      ) : (
        <Navigation>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">Sobre</a></li>
            <li><a href="#projects">Projetos</a></li>
            <li><a href="#certificates">Certificados</a></li>
            <li><a href="#contact">Contato</a></li>
          </ul>
        </Navigation>
      )}
    </Container>
  );
}
