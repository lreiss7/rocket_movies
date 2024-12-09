import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  width: 100%;
  max-width: 12rem;
  height: 3.5rem;
  
  background-color: ${({ theme, isNew }) => 
    isNew ? "transparent" : theme.COLORS.BACKGROUND_500};
  border: ${({ theme, isNew }) => 
    isNew ? `1px dashed ${theme.COLORS.GRAY_300}` : "none"};
  

  border-radius: 1rem;
  padding: 1rem;

  > button {  
    display: flex;
    align-items: center;
    justify-content: center;

    border: none;
    background: none;
    color: ${({ theme }) => theme.COLORS.ROSE};
    cursor: pointer;
    padding: 0;
  }

  > input {
    flex: 1; 
    min-width: 6rem; 
    max-width: 100%; 
    font-size: 1rem;
    border: none;
    
    background: transparent;
    color: ${({ theme }) => theme.COLORS.WHITE};
    

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }

  }

`