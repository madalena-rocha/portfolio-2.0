import styled from "styled-components";

export const Container = styled.a`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  
  width: fit-content;
  padding: 0.8rem 1.6rem;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_200};
  border-radius: 0.8rem;
`;