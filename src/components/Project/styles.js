import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  border-radius: 12px;
  
  max-width: 40rem;
  padding: 3.2rem;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1.6rem;

  > h3 {
    color: ${({ theme }) => theme.COLORS.GRAY_200};
  }
`;

export const Icons = styled.div`
  display: flex;
  gap: 0.8rem;
`;

export const Preview = styled.div`
  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;

    transition: transform 0.5s;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem 1.6rem;
`;