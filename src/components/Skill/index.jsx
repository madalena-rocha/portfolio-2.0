import { Container } from "./styles";

export function Skill({ icon, title }) {
  return (
    <Container href="https://skillicons.dev" target="_blank">
      <img src={`https://skillicons.dev/icons?i=${icon}`} title={title} />
    </Container>
  );
}