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
  
  body {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    color: ${({ theme }) => theme.COLORS.WHITE};
		-webkit-font-smoothing: antialiased;
  }

  body, button {
	  font-family: 'Inter', sans-serif;
	  font-size: 1.6rem;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.COLORS.GRAY_200};
  }

  li {
    list-style: none;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2s;
  }
  
  button:hover, a:hover {
    filter: brightness(0.9);
  }
`;
