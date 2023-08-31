import { Container } from "./styles";

export function Section({ id, title, children }) {
  return (
    <Container id={id}>
      <h2>{title}</h2>
      {children}
    </Container>
  );
}
