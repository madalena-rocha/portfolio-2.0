import { Container } from "./styles";

export function Menu({ isMenuOpen, activeSection }) {
  return (
    <Container isMenuOpen={isMenuOpen}>
      <ul>
        <li>
          <a href="#home" className={activeSection === "home" ? "active" : ""}>
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
    </Container>
  );
}
