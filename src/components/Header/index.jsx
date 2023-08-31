import { List, X } from "@phosphor-icons/react";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-scroll";

import { Container, Brand, Icon, Navigation } from "./styles";

export function Header({ isMenuOpen, setIsMenuOpen }) {
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
              <Link
                to="home"
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
                spy={true}
                smooth={true}
                offset={-116}
                duration={500}
              >
                Contato
              </Link>
            </li>
          </ul>
        </Navigation>
      )}
    </Container>
  );
}
