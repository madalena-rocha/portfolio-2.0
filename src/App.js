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
    object-position: top;
    
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
    gap: 1.6rem;
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