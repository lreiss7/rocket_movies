import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 3.5rem;
  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500 }; 
  color: ${({ theme }) => theme.COLORS.GRAY_300};

  border-radius: 10px;

  > input {
    width: 100%;

    font-size: 1rem;

    padding: 1.5rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;
    border: 0;

    &:placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }

    > svg {
      margin-left: 1.6rem;
    }

  }

`;