import { List, X } from "@phosphor-icons/react";
import { useMediaQuery } from "react-responsive";

import { Container, Brand, Icon, Navigation } from "./styles";

export function Header({
  isMenuOpen,
  setIsMenuOpen,
  activeSection,
  handleSectionScroll,
}) {
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  return (
    <Container id="header">
      <Brand>
        <h2>
          <span>&lt; Madalena</span> <span>Rocha /&gt;</span>
        </h2>
      </Brand>

      {!isDesktop ? (
        <Icon>
          <List
            size={24}
            className={isMenuOpen ? "hidden" : "visible"}
            onClick={() => setIsMenuOpen(true)}
          />
          <X
            size={24}
            className={isMenuOpen ? "visible" : "hidden"}
            onClick={() => setIsMenuOpen(false)}
          />
        </Icon>
      ) : (
        <Navigation>
          <ul>
            <li>
              <a
                href="#home"
                className={activeSection === "home" ? "active" : ""}
                onClick={(e) => {
                  e.preventDefault();
                  handleSectionScroll("home");
                }}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className={activeSection === "about" ? "active" : ""}
                onClick={(e) => {
                  e.preventDefault();
                  handleSectionScroll("about");
                }}
              >
                Sobre
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className={activeSection === "projects" ? "active" : ""}
                onClick={(e) => {
                  e.preventDefault();
                  handleSectionScroll("projects");
                }}
              >
                Projetos
              </a>
            </li>
            <li>
              <a
                href="#certificates"
                className={activeSection === "certificates" ? "active" : ""}
                onClick={(e) => {
                  e.preventDefault();
                  handleSectionScroll("certificates");
                }}
              >
                Certificados
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className={activeSection === "contact" ? "active" : ""}
                onClick={(e) => {
                  e.preventDefault();
                  handleSectionScroll("contact");
                }}
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
