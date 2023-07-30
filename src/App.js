import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: 11.6rem auto 9.7rem;
  grid-template-areas:
    "header"
    "content"
    "footer";

  > main {
    grid-area: content;

    width: 100vw;
    padding: 0 2.8rem;
  }

  #about p + p {
    margin-top: 1.6rem;
  }

  #about p span {
    color: ${({ theme }) => theme.COLORS.GRAY_200};
  }

  swiper-slide {
    max-width: 40rem;
  }

  swiper-slide img {
    transition: transform 0.5s;

    &:hover {
      transform: scale(1.1);
    }
  }

  #projects swiper-slide img {
    max-height: 19.291rem;
  }

  #certificates swiper-slide img {
    max-height: 28.298rem;
  }
  
  #contact > div {
    text-align: center;
  }

  #contact > div p {
    font-size: 1.8rem;
  }

  #contact > div > div {
    justify-content: center;
  }

  @media (min-width: 1024px) {
    > main {
      padding: 0 12.3rem;
    }
  }
`;

export const Home = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3.2rem;

  text-align: center;
  margin-top: 6.4rem;

  @media (min-width: 1024px) {
    flex-direction: row;
    text-align: left;
  }
`;

export const Profile = styled.div`
  width: 20rem;
  height: 20rem;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    
    padding: 3.7px;
    border: 4px solid ${({ theme }) => theme.COLORS.PINK};
    border-radius: 50%;
  }
`;

export const Presentation = styled.div`
  > h1 {
    font-size: 3.4rem;

    span {
      color: ${({ theme }) => theme.COLORS.PINK};
    }
  }
`;

export const Links = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3.2rem;
  gap: 2.4rem;

  @media (min-width: 1024px) {
    justify-content: left;
  }
`;

export const Skills = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.6rem;
  margin-top: 3.2rem;
`;

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.6rem;
`;