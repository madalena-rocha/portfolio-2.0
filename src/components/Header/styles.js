import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;

  height: 11.6rem;
  width: 100%;
  
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.2rem;
  
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.GRAY_200};
  padding: 0 2.8rem;

  > h2 {
    font-size: 2.4rem;
    color: ${({ theme }) => theme.COLORS.PINK};

    span {
      white-space: nowrap;
    }
  }

  > svg {
    flex-shrink: 0;
  }

  > nav ul {
    display: flex;
    gap: 3.2rem;
  }

  @media (min-width: 1024px) {
    padding: 0 12.3rem;
  }
`;
