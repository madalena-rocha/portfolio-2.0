import styled from "styled-components";

export const Container = styled.footer`
  grid-area: footer;

  height: 11.6rem;
  padding: 0 2.8rem;
  
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.2rem;
  
  border-top: 1px solid ${({ theme }) => theme.COLORS.GRAY_200};

  @media (min-width: 1024px) {
    padding-inline: 12.3rem;
  }
`;

export const Copyright = styled.div``;

export const SocialMedia = styled.div`
  display: flex;
  gap: 0.8rem;

  a {
    display: flex;
  }
`;