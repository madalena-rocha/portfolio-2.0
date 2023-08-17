import { List, X } from "@phosphor-icons/react";
import { useMediaQuery } from "react-responsive";

import { Container, Brand, Icon, Navigation } from "./styles";

export function Header({ isMenuOpen, setIsMenuOpen, activeSection }) {
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  return (
    <Container>
      <Brand>
        <h2>
          <span>&lt; Madalena</span> <span>Rocha /&gt;</span>
        </h2>
      </Brand>

      {!isDesktop ? (
        <Icon isMenuOpen={isMenuOpen}>
          <List size={24} onClick={() => setIsMenuOpen(true)} />
          <X size={24} onClick={() => setIsMenuOpen(false)} />
        </Icon>
      ) : (
        <Navigation>
          <ul>
            <li>
              <a
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({
                    top: 0,
                  });
                }}
                className={activeSection === "home" ? "active" : ""}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className={activeSection === "about" ? "active" : ""}
              >
                Sobre
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className={activeSection === "projects" ? "active" : ""}
              >
                Projetos
              </a>
            </li>
            <li>
              <a
                href="#certificates"
                className={activeSection === "certificates" ? "active" : ""}
              >
                Certificados
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className={activeSection === "contact" ? "active" : ""}
              >
                Contato
              </a>
            </li>
          </ul>
        </Navigation>
      )}
    </Container>
  );
}
