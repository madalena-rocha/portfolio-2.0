import { Container } from "./styles";

export function Certificate({ href, src, alt }) {
  return (
    <Container>
      <a
        href={href ? href : src}
        target="_blank"
        title="Visualizar"
      >
        <img src={src} alt={alt} />
      </a>
    </Container>
  );
}
