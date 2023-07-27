import { Container } from "./styles";

export function Menu({ isMenuOpen }) {
  return (
    <Container isMenuOpen={isMenuOpen}>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">Sobre</a></li>
        <li><a href="#projects">Projetos</a></li>
        <li><a href="#certificates">Certificados</a></li>
        <li><a href="#contact">Contato</a></li>
      </ul>
    </Container>
  );
}