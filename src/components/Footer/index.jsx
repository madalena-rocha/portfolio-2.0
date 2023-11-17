import { InstagramLogo, TwitterLogo, YoutubeLogo } from "@phosphor-icons/react";
import { Container, Copyright, SocialMedia } from "./styles";

export function Footer() {
  return (
    <Container>
      <Copyright>
        <p>© {new Date().getFullYear()} Madalena Rocha</p>
        <p>Todos os direitos reservados.</p>
      </Copyright>

      <SocialMedia>
        <a
          href="https://www.instagram.com/madalena.machado.rocha/"
          target="_blank"
        >
          <InstagramLogo size={24} />
        </a>
        <a href="https://www.youtube.com/@madalenamachadorocha" target="_blank">
          <YoutubeLogo size={24} />
        </a>
        <a href="https://twitter.com/MadalenaMRocha" target="_blank">
          <TwitterLogo size={24} />
        </a>
      </SocialMedia>
    </Container>
  );
}
