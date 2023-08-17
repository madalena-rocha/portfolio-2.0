import { ArrowCircleUp } from "@phosphor-icons/react";

import { Container } from "./styles";

export function BackToTop() {
  return (
    <Container
      href="#home"
      onClick={(e) => {
        e.preventDefault();
        window.scrollTo({
          top: 0,
        });
      }}
    >
      <ArrowCircleUp size={48} />
    </Container>
  );
}
