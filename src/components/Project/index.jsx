import { GithubLogo, Rocket } from "@phosphor-icons/react";

import { Container } from "./styles";

export function Project({ title, repo, demo, description, path, children }) {
  return (
    <Container>
      <div className="header">
        <h3>{title}</h3>

        <div className="icons">
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
        </div>
      </div>
      
      <p>{description}</p>

      <div className="preview">
        <img src={`https://github.com/madalena-rocha/${repo}/${path}`} />
      </div>
      
      {children}
    </Container>
  );
}