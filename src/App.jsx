import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { Element } from "react-scroll";
import { v4 as uuidv4 } from "uuid";

import {
  LinkedinLogo,
  GithubLogo,
  Envelope,
  DiscordLogo,
} from "@phosphor-icons/react";

import { Container, Profile, Presentation, Links, Skills } from "./App.js";

import { Header } from "./components/Header";
import { Menu } from "./components/Menu";
import { Link } from "./components/Link/index.jsx";
import { Section } from "./components/Section";
import { Skill } from "./components/Skill";
import { Project } from "./components/Project";
import { Certificate } from "./components/Certificate";
import { BackToTop } from "./components/BackToTop";
import { Footer } from "./components/Footer";

import { register } from "swiper/element/bundle";
register();

function App() {
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const skillsData = [
    { id: uuidv4(), icon: "html", title: "HTML" },
    { id: uuidv4(), icon: "css", title: "CSS" },
    { id: uuidv4(), icon: "javascript", title: "JavaScript" },
    { id: uuidv4(), icon: "git", title: "Git" },
    { id: uuidv4(), icon: "react", title: "ReactJS" },
    { id: uuidv4(), icon: "styledcomponents", title: "Styled Components" },
    { id: uuidv4(), icon: "ts", title: "TypeScript" },
    { id: uuidv4(), icon: "figma", title: "Figma" },
    { id: uuidv4(), icon: "nodejs", title: "Node.js" },
    { id: uuidv4(), icon: "sqlite", title: "SQLite" },
    { id: uuidv4(), icon: "express", title: "Express.js" },
  ];

  const projectsData = [
    {
      id: uuidv4(),
      title: "Writer Portfolio",
      repo: "writer-portfolio",
      demo: "https://martamachadorocha.netlify.app/",
      description: "Portfólio da escritora Marta Machado Rocha.",
      path: "https://imgur.com/HrAc462.png",
      tags: ["ReactJS", "Styled Components"],
    },
    {
      id: uuidv4(),
      title: "Food Explorer",
      repo: "food-explorer-frontend",
      demo: "https://food-explorer-frontend-80e47f.netlify.app/",
      description: "Cardápio digital para um restaurante fictício.",
      path: "https://imgur.com/uG6oBsH.png",
      tags: [
        "Axios",
        "Express.js",
        "Knex.js",
        "Node.js",
        "ReactJS",
        "SQLite",
        "Styled Components",
      ],
    },
    {
      id: uuidv4(),
      title: "Rocket Movies",
      repo: "rocket-movies",
      demo: "https://rocket-movies-app.netlify.app/",
      description: "Aplicação para acompanhar tudo que assistir.",
      path: "https://imgur.com/peBkUYE.png",
      tags: [
        "Axios",
        "Express.js",
        "Knex.js",
        "Node.js",
        "ReactJS",
        "SQLite",
        "Styled Components",
      ],
    },
    {
      id: uuidv4(),
      title: "Rocket Notes",
      repo: "rocket-notes",
      demo: "https://rocket-notes-app.netlify.app/",
      description: "Aplicação para salvar e gerenciar links úteis.",
      path: "https://imgur.com/X5eRjMx.png",
      tags: [
        "Axios",
        "Express.js",
        "Knex.js",
        "Node.js",
        "ReactJS",
        "SQLite",
        "Styled Components",
      ],
    },
    {
      id: uuidv4(),
      title: "Minicactus Games",
      repo: "minicactus-games-2.0",
      demo: "https://www.minicactusgames.com/",
      description: "Site da Minicactus Games, um estúdio brasileiro de jogos.",
      path: "https://imgur.com/cPIUMx9.png",
      tags: ["HTML", "CSS", "JavaScript", "ReactJS"],
    },
  ];

  const certificatesData = [
    {
      id: uuidv4(),
      src: "https://imgur.com/GuHrvla.png",
      alt: "Certificado da NLW Unite da Rocketseat.",
    },
    {
      id: uuidv4(),
      src: "https://imgur.com/ZZmTtZr.png",
      alt: "Certificado do curso Acessibilidade com ReactJS da Rocketseat.",
    },
    {
      id: uuidv4(),
      src: "https://imgur.com/9u2hEVI.png",
      alt: "Certificado da NLW Expert da Rocketseat.",
    },
    {
      id: uuidv4(),
      src: "https://imgur.com/oXuBNke.png",
      alt: "Certificado da 3ª edição do Hackathon das Manas.",
    },
    {
      id: uuidv4(),
      src: "https://imgur.com/1XnUntx.png",
      alt: "Certificado do evento 'PrograMaria Summit 2023' da PrograMaria.",
    },
    {
      id: uuidv4(),
      src: "https://imgur.com/sQGhQ7W.png",
      alt: "Certificado da NLW IA da Rocketseat.",
    },
    {
      id: uuidv4(),
      src: "https://imgur.com/iPEIyv9.png",
      alt: "Certificado da Masterclass Foco Node.js da Rocketseat.",
    },
    {
      id: uuidv4(),
      src: "https://imgur.com/QHZO5Av.png",
      alt: "Certificado do evento 'PrograMaria encontros: por uma tecnologia anticapacitista' em parceria com o Grupo Boticário.",
    },
    {
      id: uuidv4(),
      src: "https://imgur.com/DhlTAG1.png",
      alt: "Certificado do evento IA para Devs da Rocketseat.",
    },
    {
      id: uuidv4(),
      src: "https://imgur.com/a7vUE7h.png",
      alt: "Certificado do programa Explorer da Rocketseat.",
    },
    {
      id: uuidv4(),
      src: "https://imgur.com/C5JAJyX.png",
      alt: "Certificado da Codecon Digital 2023.",
    },
    {
      id: uuidv4(),
      src: "https://imgur.com/Pmjinm4.png",
      alt: "Certificado da capacitação Adas da SCM (Se Candidate, Mulher!) Academy.",
    },
    {
      id: uuidv4(),
      src: "https://imgur.com/o4LEUTB.png",
      alt: "Certificado do Hackathon #01 da Orange Juice.",
    },
    {
      id: uuidv4(),
      src: "https://imgur.com/3TrfYSP.png",
      alt: "Certificado da Masterclass Foco React da Rocketseat.",
    },
    {
      id: uuidv4(),
      src: "https://imgur.com/vVoOYgO.png",
      alt: "Certificado do curso Desenvolvimento Web Front End Node da Digital House.",
    },
    {
      id: uuidv4(),
      src: "https://imgur.com/1YmADpf.png",
      alt: "Certificado da Trilha Especializar do Discover da Rocketseat.",
    },
    {
      id: uuidv4(),
      src: "https://imgur.com/HwCfb8y.png",
      alt: "Certificado da Trilha Fundamentar do Discover da Rocketseat.",
    },
    {
      id: uuidv4(),
      src: "https://imgur.com/5IUY5BG.png",
      alt: "Certificado da Trilha Conectar do Discover da Rocketseat.",
    },
  ];

  return (
    <Container>
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      {!isDesktop && (
        <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      )}

      <main>
        <Element name="home">
          <Section id="home" title="">
            <Profile>
              <img
                src="https://github.com/madalena-rocha.png"
                alt="Mulher de pele parda e cabelos castanhos lisos, usando uma camiseta preta e sorrindo."
              />
            </Profile>

            <Presentation>
              <h1>
                Olá! Sou <span>Madalena</span>, <br></br> Desenvolvedora
                Front-end.
              </h1>

              <Links>
                <Link
                  href="https://www.linkedin.com/in/madalena-machado-rocha/"
                  title="LinkedIn"
                >
                  <LinkedinLogo size={24} />
                </Link>

                <Link href="https://github.com/madalena-rocha" title="GitHub">
                  <GithubLogo size={24} />
                </Link>
              </Links>
            </Presentation>
          </Section>
        </Element>

        <Element name="about">
          <Section id="about" title="Sobre">
            <p>
              Sou uma Engenheira Mecânica com mestrado em Ciência dos Materiais
              e formação complementar em programação, atuando no{" "}
              <span>Desenvolvimento Front-end</span>.
            </p>
            <p>
              Tenho experiência como Desenvolvedora Front-end Freelancer na{" "}
              <span>Minicactus Games</span>, onde desenvolvi e mantenho o site
              da empresa. Também faço parte do <span>Space Squad</span>, uma
              comunidade de tecnologia da Rocketseat, onde compartilho
              conhecimentos e aprendo com outros desenvolvedores.
            </p>
            <p>
              Meu objetivo é trabalhar como{" "}
              <span>Desenvolvedora Front-end</span>, colaborando em projetos que
              façam a diferença na vida das pessoas.
            </p>

            <Skills>
              {skillsData.map((skill, id) => (
                <Skill key={id} icon={skill.icon} title={skill.title} />
              ))}
            </Skills>
          </Section>
        </Element>

        <Element name="projects">
          <Section id="projects" title="Projetos">
            <swiper-container
              space-between="32"
              slides-per-view="auto"
              autoplay="true"
              loop="true"
              grab-cursor="true"
            >
              {projectsData.map((project, id) => (
                <swiper-slide key={id}>
                  <Project
                    title={project.title}
                    repo={project.repo}
                    demo={project.demo}
                    description={project.description}
                    path={project.path}
                    tags={project.tags}
                  />
                </swiper-slide>
              ))}
            </swiper-container>
          </Section>
        </Element>

        <Element name="certificates">
          <Section id="certificates" title="Certificados">
            <swiper-container
              space-between="32"
              slides-per-view="auto"
              autoplay="true"
              loop="true"
              grab-cursor="true"
            >
              {certificatesData.map((certificate, id) => (
                <swiper-slide key={id}>
                  <Certificate src={certificate.src} alt={certificate.alt} />
                </swiper-slide>
              ))}
            </swiper-container>
          </Section>
        </Element>

        <Element name="contact">
          <Section id="contact" title="Contato">
            <div>
              <p>Vamos construir algo juntos?</p>

              <Links>
                <Link href="mailto:rochamada1997m@gmail.com" title="E-mail">
                  <Envelope size={24} />
                </Link>

                <Link
                  href="http://discordapp.com/users/827312692905377802"
                  title="Discord"
                >
                  <DiscordLogo size={24} />
                </Link>
              </Links>
            </div>
          </Section>
        </Element>
      </main>

      {showBackToTop && <BackToTop />}

      <Footer />
    </Container>
  );
}

export default App;
