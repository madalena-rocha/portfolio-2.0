import { Link } from "react-scroll";
import { ArrowCircleUp } from "@phosphor-icons/react";

import { Container } from "./styles";

export function BackToTop() {
  return (
    <Container>
      <Link to="home" spy={true} smooth={true} offset={-116} duration={500}>
        <ArrowCircleUp size={48} />
      </Link>
    </Container>
  );
}
