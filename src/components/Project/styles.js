import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  border-radius: 12px;
  
  max-width: 40rem;
  height: 40rem;
  padding: 3.2rem;

  .header {
    display: flex;
    justify-content: space-between;
    gap: 1.6rem;
  }

  h3 {
    color: ${({ theme }) => theme.COLORS.GRAY_200};
  }

  .icons {
    display: flex;
    gap: 0.8rem;
  }

  .preview {
    max-height: 19.291rem;
  }

  .preview img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
  }
`;