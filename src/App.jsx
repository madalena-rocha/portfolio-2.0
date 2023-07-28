import { useState } from "react";
import { useMediaQuery } from "react-responsive";

import { Container } from "./App.js";

import { Header } from "./components/Header";
import { Menu } from "./components/Menu";
import { Section } from "./components/Section";
import { Skill } from "./components/Skill";

import { LinkedinLogo, GithubLogo } from "@phosphor-icons/react";
import { Link } from "./components/Link/index.jsx";

function App() {
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const skillsData = [
    { icon: "html", title: "HTML" },
    { icon: "css", title: "CSS" },
    { icon: "javascript", title: "JavaScript" },
    { icon: "git", title: "Git" },
    { icon: "react", title: "ReactJS" },
    { icon: "styledcomponents", title: "Styled Components" },
    { icon: "figma", title: "Figma" },
    { icon: "nodejs", title: "Node.js" },
    { icon: "sqlite", title: "SQLite" },
    { icon: "express", title: "Express" },
  ];  

  return (
    <Container>
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      {!isDesktop && (
        <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      )}

      <main>
        <section id="home">
          <div className="profile">
            <img
              src="https://github.com/madalena-rocha.png"
              alt="Mulher de pele parda e cabelos castanhos lisos, usando uma camiseta preta e sorrindo."
            />
          </div>

          <div>
            <h1>
              Olá! Sou <span>Madalena</span>, <br></br> Desenvolvedora
              Front-end.
            </h1>

            <div className="links">
              <Link
                href="https://www.linkedin.com/in/madalena-machado-rocha/"
                title="LinkedIn"
              >
                <LinkedinLogo size={24} />
              </Link>

              <Link href="https://github.com/madalena-rocha" title="GitHub">
                <GithubLogo size={24} />
              </Link>
            </div>
          </div>
        </section>

        <Section id="about" title="Sobre">
          <p>
            Sou uma Engenheira Mecânica que se apaixonou pelo mundo do
            Desenvolvimento Front-end.
          </p>
          <p>
            Com habilidades em <span>JavaScript</span> e <span>ReactJS</span>,
            tenho trabalhado incansavelmente para me aprimorar, inclusive
            através de cursos na Rocketseat e na Digital House, onde tive a
            oportunidade de aprender com mentores incríveis e construir projetos
            desafiadores.
          </p>
          <p>
            Agora, estou em busca de uma oportunidade como Desenvolvedora
            Front-end, onde possa contribuir com minhas habilidades e
            conhecimentos para projetos que possam impactar positivamente as
            pessoas.
          </p>

          <div className="skills">
            {skillsData.map((skill, index) => (
              <Skill key={index} icon={skill.icon} title={skill.title} />
            ))}
          </div>
        </Section>
      </main>
    </Container>
  );
}

export default App;
