import { useState } from "react";
import { useMediaQuery } from "react-responsive";

import { Container } from "./App.js";

import { Header } from "./components/Header";
import { Menu } from "./components/Menu";

import { LinkedinLogo, GithubLogo } from "@phosphor-icons/react";
import { Link } from "./components/Link/index.jsx";

function App() {
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      </main>
    </Container>
  );
}

export default App;
