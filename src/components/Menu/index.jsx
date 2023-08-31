import { Link } from "react-scroll";

import { Container } from "./styles";

export function Menu({ isMenuOpen, setIsMenuOpen }) {
  return (
    <Container className={isMenuOpen ? "visible" : "hidden"}>
      <ul>
        <li>
          <Link
            to="home"
            onClick={(e) => {
              setIsMenuOpen(false);
            }}
            spy={true}
            smooth={true}
            offset={-116}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="about"
            onClick={(e) => {
              setIsMenuOpen(false);
            }}
            spy={true}
            smooth={true}
            offset={-116}
            duration={500}
          >
            Sobre
          </Link>
        </li>
        <li>
          <Link
            to="projects"
            onClick={(e) => {
              setIsMenuOpen(false);
            }}
            spy={true}
            smooth={true}
            offset={-116}
            duration={500}
          >
            Projetos
          </Link>
        </li>
        <li>
          <Link
            to="certificates"
            onClick={(e) => {
              setIsMenuOpen(false);
            }}
            spy={true}
            smooth={true}
            offset={-116}
            duration={500}
          >
            Certificados
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            onClick={(e) => {
              setIsMenuOpen(false);
            }}
            spy={true}
            smooth={true}
            offset={-116}
            duration={500}
          >
            Contato
          </Link>
        </li>
      </ul>
    </Container>
  );
}
