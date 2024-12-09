import styled from 'styled-components';

export const Container = styled.textarea`
  width: 100%;
  height: 17.125rem;

  font-size: 1rem;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500 }; 
  color: ${({ theme }) => theme.COLORS.GRAY_300};

  border: none;
  resize: none;

  margin-top: 2.5rem;
  border-radius: 1rem;
  padding: 1.5rem;

  
  color: ${({ theme }) => theme.COLORS.WHITE};
  border: 0;

  &:placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }

  
`