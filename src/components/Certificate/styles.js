import styled from "styled-components";

export const Container = styled.div`
  max-width: 40rem;

  transition: transform 0.5s;

  &:hover {
    transform: scale(1.1);
  }

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;