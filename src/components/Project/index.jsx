import { GithubLogo, Rocket } from "@phosphor-icons/react";

import { Container, Header, Icons, Preview } from "./styles";

export function Project({ title, repo, demo, description, path, children }) {
  return (
    <Container>
      <Header>
        <h3>{title}</h3>

        <Icons>
          <a 
            href={`https://github.com/madalena-rocha/${repo}`} 
            target="_blank" 
            title="Repositório"
          >
            <GithubLogo size={24} />
          </a>
          <a href={demo} target="_blank" title="Deploy">
            <Rocket size={24} />
          </a>
        </Icons>
      </Header>
      
      <p>{description}</p>

      <Preview>
        <img src={`https://github.com/madalena-rocha/${repo}/${path}`} />
      </Preview>
      
      {children}
    </Container>
  );
}