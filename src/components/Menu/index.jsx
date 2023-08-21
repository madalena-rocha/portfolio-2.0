import { Container } from "./styles";

export function Menu({
  isMenuOpen,
  setIsMenuOpen,
  activeSection,
  handleSectionScroll,
}) {
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <Container className={isMenuOpen ? 'visible' : 'hidden'}>
      <ul>
        <li>
          <a
            href="#home"
            className={activeSection === "home" ? "active" : ""}
            onClick={(e) => {
              e.preventDefault();
              handleSectionScroll("home");
              handleLinkClick();
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
              handleLinkClick();
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
              handleLinkClick();
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
              handleLinkClick();
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
              handleLinkClick();
            }}
          >
            Contato
          </a>
        </li>
      </ul>
    </Container>
  );
}
