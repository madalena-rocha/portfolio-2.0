import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: 11.6rem auto 11.6rem;
  grid-template-areas:
    "header"
    "content"
    "footer";

  > main {
    grid-area: content;

    width: 100vw;
    padding: 0 2.8rem;

    @media (min-width: 1024px) {
      width: 100%;
      padding: 0 12.3rem;
    }
  }

  #home {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3.2rem;

    text-align: center;
    padding-top: 12.8rem;

    > h2 {
      display: none;
    }

    @media (min-width: 1024px) {
      flex-direction: row;
      text-align: left;
    }
  }

  #about {
    p + p {
      margin-top: 1.6rem;
    }

    p span {
      color: ${({ theme }) => theme.COLORS.GRAY_200};
    }
  }

  swiper-slide {
    display: flex;
    max-width: 40rem;
  }

  #projects swiper-slide > div {
    height: 53rem;
  }

  #certificates swiper-slide > div {
    height: 29rem;
  }

  #contact {
    padding-bottom: 12.8rem;

    > div {
      text-align: center;

      p {
        font-size: 1.8rem;
      }

      > div {
        justify-content: center;
      }
    }
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