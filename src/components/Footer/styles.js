import styled from "styled-components";

export const Container = styled.footer`
  grid-area: footer;
  width: 100%;
  
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.2rem;
  
  border-top: 1px solid ${({ theme }) => theme.COLORS.GRAY_200};
  padding: 2.8rem;

  .social-media {
    display: flex;
    gap: 0.8rem;

    a {
      display: flex;
    }
  }

  @media (min-width: 1024px) {
    padding-inline: 12.3rem;
  }
`;