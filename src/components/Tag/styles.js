import styled from "styled-components";

export const Container = styled.span`
  font-size: 1.4rem;
  padding: 0.6rem 1.6rem;
  border-radius: 0.8rem;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
`;