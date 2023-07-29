import { Container } from "./styles";

export function Certificate({ src, alt }) {
  return (
    <Container>
      <img src={src} alt={alt} />
    </Container>
  );
}