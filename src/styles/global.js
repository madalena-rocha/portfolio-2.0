import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;
    --swiper-pagination-color: ${({ theme }) => theme.COLORS.WHITE};
  }

  html {
    scroll-behavior: smooth;
  }
  
  body {
    font-family: 'Inter', sans-serif;
	  font-size: 1.6rem;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    color: ${({ theme }) => theme.COLORS.WHITE};
		-webkit-font-smoothing: antialiased;
  }

  ::-webkit-scrollbar {
    width: 0.8rem;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 0.8rem;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.COLORS.GRAY_200};
  }

  li {
    list-style: none;
  }

  a, li {
    cursor: pointer;
    transition: filter 0.2s, transform 0.5s;
  }
  
  a:hover, li:hover {
    filter: brightness(0.9);
    transform: scale(1.1);
  }
`;
