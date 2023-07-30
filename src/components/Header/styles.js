import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;

  height: 11.6rem;
  width: 100%;
  
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.2rem;
  
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.GRAY_200};
  padding: 0 2.8rem;

  position: fixed;
  z-index: 9999;

  @media (min-width: 1024px) {
    padding: 0 12.3rem;
  }
`;

export const Brand = styled.div`
  > h2 {
    color: ${({ theme }) => theme.COLORS.PINK};

    span {
      white-space: nowrap;
    }
  }
`;

export const Icon = styled.div`
  display: flex;
`;

export const Navigation = styled.nav`
  > ul {
    display: flex;
    gap: 3.2rem;
  }
`;
