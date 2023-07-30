import { InstagramLogo, TwitterLogo, YoutubeLogo } from "@phosphor-icons/react";
import { Container, Copyright, SocialMedia } from "./styles";

export function Footer() {
  return (
    <Container>
      <Copyright>
        <p>© 2023 Madalena Rocha</p>
        <p>Todos os direitos reservados.</p>
      </Copyright>

      <SocialMedia>
        <a href="https://www.instagram.com/madalena.machado.rocha/">
          <InstagramLogo size={24} />
        </a>
        <a href="https://www.youtube.com/@madalenamachadorocha">
          <YoutubeLogo size={24} />
        </a>
        <a href="https://twitter.com/MadalenaMRocha">
          <TwitterLogo size={24} />
        </a>
      </SocialMedia>
    </Container>
  );
}
