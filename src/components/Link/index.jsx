import { Container } from "./styles";

export function Link({ href, title, children }) {
  return (
    <Container href={href} target="_blank">
      {children}
      {title}
    </Container>
  );
}