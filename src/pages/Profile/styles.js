import styled from 'styled-components';

export const Container = styled.div `
  width: 100%;

  > header {
    width: 100%;
    height: 9rem;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};

    display: flex;
    align-items: center;
    
    padding: 4rem 9rem;
  }
`;

export const Form = styled.form`
  max-width: 21.25rem;
  margin: 30px auto 0;
  

  > div:nth-of-type(3) { /* Seleciona o segundo componente Input */
    margin-bottom: 1.5rem;
  }

  > button { 
    height: 3.5rem;
    margin-top: 1.5rem;
  }
`;

export const Avatar = styled.div `
  position: relative;
  margin: -8.5rem auto 3.2rem;

  width: 11.625rem;
  height: 11.625rem;

  > img {
    width: 11.625rem;
    height: 11.625rem;
    border-radius: 50%;
  }

  > label {
    width: 3rem;
    height: 3rem;

    background-color: ${({ theme }) => theme.COLORS.ROSE};
    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    bottom: 0.2rem;
    right: 0.4rem;

    cursor: pointer;

    input {
      display: none;
    }

    svg {
      width: 1.25rem;
      height: 1.25rem;
    }

  }

`;