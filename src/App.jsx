import { useState } from 'react';
import { useMediaQuery } from 'react-responsive'

import { Header } from './components/Header'
import { Menu } from './components/Menu'

function App() {
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      
      {!isDesktop && isMenuOpen ? (
        <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      ) : (
        <h1>Olá! Sou Madalena, Desenvolvedora Front-end.</h1>
      )}
    </>
  )
}

export default App
