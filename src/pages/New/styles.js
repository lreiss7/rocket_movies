import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas: 
  "header"
  "form";

  > main {
    height: 55rem;
    display: flex;
    grid-area: form;
    padding: 2.5rem 8rem;

    overflow: auto;
  }

`;

export const Form = styled.form`
  width: 100%;
  
  display: flex;
  flex-direction: column;

  > header {    
    > button {
      font-size: 1rem;
      font-weight: 400;
      align-self: flex-start;  
    }

    > h1 {
      font-size: 2.5rem;
      font-weight: 500;
      line-height: normal;

      margin-top: 1.5rem;
    }      
  }  
`;

export const MovieDetails = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr; 
  gap: 2.5rem; 
  margin-top: 2.5rem;
`;

export const NoteWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  background-color: ${({ theme }) => theme.COLORS.BLACK_100};

  border-radius: 1rem;
  padding: 1rem;
  
`;


export const Footer = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2.5rem;

  > Button { 
    height: 3.5rem;

    font-size: 1rem;
    
  }

  > Button:first-child {
    color: ${({ theme }) => theme.COLORS.ROSE};
    background: ${({ theme }) => theme.COLORS.BLACK_100};
    
    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    &:hover {
      background-color: ${({ theme }) => theme.COLORS.BLACK_200}; 
      transition: transform 0.2s, background-color 0.2s, color 0.2s;
    }
  }
`;