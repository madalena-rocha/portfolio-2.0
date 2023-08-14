import { GithubLogo, Rocket } from "@phosphor-icons/react";

import { Container, Header, Icons, Preview, Tags } from "./styles";

import { Tag } from "../../components/Tag";

export function Project({ title, repo, demo, description, path, tags }) {
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
        <img src={path} />
      </Preview>
      
      <Tags>
        {tags.map((tag, tagIndex) => (
          <Tag key={tagIndex} title={tag} />
        ))}
      </Tags>
    </Container>
  );
}