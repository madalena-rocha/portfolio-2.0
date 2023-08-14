import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

import {
  LinkedinLogo,
  GithubLogo,
  Envelope,
  DiscordLogo,
} from "@phosphor-icons/react";

import {
  Container,
  Home,
  Profile,
  Presentation,
  Links,
  Skills,
} from "./App.js";

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
    { icon: "html", title: "HTML" },
    { icon: "css", title: "CSS" },
    { icon: "javascript", title: "JavaScript" },
    { icon: "git", title: "Git" },
    { icon: "react", title: "ReactJS" },
    { icon: "styledcomponents", title: "Styled Components" },
    { icon: "figma", title: "Figma" },
    { icon: "nodejs", title: "Node.js" },
    { icon: "sqlite", title: "SQLite" },
    { icon: "express", title: "Express.js" },
  ];

  const projectsData = [
    {
      title: "Food Explorer",
      repo: "food-explorer-frontend",
      demo: "https://food-explorer-frontend-80e47f.netlify.app/",
      description: "Cardápio digital para um restaurante fictício.",
      path: "https://imgur.com/SBK6HAH.png",
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
      title: "Rocket Movies",
      repo: "rocket-movies",
      demo: "https://rocket-movies-app.netlify.app/",
      description: "Aplicação para acompanhar tudo que assistir.",
      path: "https://imgur.com/gh3zApk.png",
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
      title: "Rocket Notes",
      repo: "rocket-notes",
      demo: "https://rocket-notes-app.netlify.app/",
      description: "Aplicação para salvar e gerenciar links úteis.",
      path: "https://imgur.com/E2SLeUr.png",
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
      title: "Minicactus Games",
      repo: "minicactus-games",
      demo: "https://www.minicactusgames.com/",
      description: "Site da Minicactus Games, um estúdio brasileiro de jogos.",
      path: "https://imgur.com/q4puBF7.png",
      tags: ["HTML", "CSS", "JavaScript"],
    },
  ];

  const certificatesData = [
    {
      src: "https://imgur.com/a7vUE7h.png",
      alt: "Certificado do programa Explorer da Rocketseat.",
    },
    {
      src: "https://imgur.com/C5JAJyX.png",
      alt: "Certificado da Codecon Digital 2023.",
    },
    {
      src: "https://imgur.com/Pmjinm4.png",
      alt: "Certificado da capacitação Adas da SCM (Se Candidate, Mulher!) Academy.",
    },
    {
      src: "https://imgur.com/o4LEUTB.png",
      alt: "Certificado do Hackathon #01 da Orange Juice.",
    },
    {
      src: "https://imgur.com/3TrfYSP.png",
      alt: "Certificado da Masterclass Foco React da Rocketseat.",
    },
    {
      src: "https://imgur.com/vVoOYgO.png",
      alt: "Certificado do curso Desenvolvimento Web Front End Node da Digital House.",
    },
    {
      src: "https://imgur.com/1YmADpf.png",
      alt: "Certificado da Trilha Especializar do Discover da Rocketseat.",
    },
    {
      src: "https://imgur.com/HwCfb8y.png",
      alt: "Certificado da Trilha Fundamentar do Discover da Rocketseat.",
    },
    {
      src: "https://imgur.com/5IUY5BG.png",
      alt: "Certificado da Trilha Conectar do Discover da Rocketseat.",
    },
  ];

  return (
    <Container id="home">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      {!isDesktop && (
        <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      )}

      <main>
        <Home>
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
        </Home>

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

          <Skills>
            {skillsData.map((skill, index) => (
              <Skill key={index} icon={skill.icon} title={skill.title} />
            ))}
          </Skills>
        </Section>

        <Section id="projects" title="Projetos">
          <swiper-container
            space-between="32"
            slides-per-view="auto"
            autoplay="true"
            loop="true"
            grab-cursor="true"
            pagination="true"
          >
            {projectsData.map((project, index) => (
              <swiper-slide key={index}>
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

        <Section id="certificates" title="Certificados">
          <swiper-container
            space-between="32"
            slides-per-view="auto"
            autoplay="true"
            loop="true"
            grab-cursor="true"
          >
            {certificatesData.map((certificate, index) => (
              <swiper-slide key={index}>
                <Certificate src={certificate.src} alt={certificate.alt} />
              </swiper-slide>
            ))}
          </swiper-container>
        </Section>

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
      </main>

      {showBackToTop && <BackToTop />}

      <Footer />
    </Container>
  );
}

export default App;
