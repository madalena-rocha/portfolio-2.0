import styled from "styled-components";

export const Container = styled.div`
  main {
    padding: 0 2.8rem;
  }

  #home {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3.2rem;

    text-align: center;
    margin-top: 6.4rem;
  }

  .profile {
    width: 20rem;
    height: 20rem;
  }

  .profile img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    
    padding: 3.7px;
    border: 4px solid ${({ theme }) => theme.COLORS.PINK};
    border-radius: 50%;
  }

  h1 {
    font-size: 3.4rem;
  }

  h1 span {
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  .links {
    display: flex;
    justify-content: center;
    margin-top: 3.2rem;
    gap: 2.4rem;
  }

  #about p + p {
    margin-top: 1.6rem;
  }

  #about p span {
    color: ${({ theme }) => theme.COLORS.GRAY_200};
  }

  .skills {
    display: flex;
    flex-wrap: wrap;
    gap: 1.6rem;
    margin-top: 3.2rem;
  }

  swiper-slide {
    max-width: 40rem;
  }

  #projects swiper-slide img {
    max-height: 19.291rem;
  }

  #certificates swiper-slide img {
    max-height: 28.298rem;
  }
  
  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.8rem;
  }
  
  #contact > div {
    text-align: center;
  }

  #contact p {
    font-size: 1.8rem;
  }

  #contact .links {
    justify-content: center;
  }

  @media (min-width: 1024px) {
    main {
      padding: 0 12.3rem;
    }
    
    #home {
      flex-direction: row;
      text-align: left;
    }

    .links {
      justify-content: left;
    }
  }
`;