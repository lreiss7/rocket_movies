import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 3.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  padding: 1.5rem;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500}; 
  color: ${({ theme }) => theme.COLORS.GRAY_300};

  margin-bottom: 0.5rem;
  border-radius: 1rem;

  > input {
    width: 100%;
  
    font-size: 1rem;

    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;
    border: 0;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }

  > svg {
    width: 1.25rem;
    height: 1.125rem;
    flex-shrink: 0;
  }
`;
