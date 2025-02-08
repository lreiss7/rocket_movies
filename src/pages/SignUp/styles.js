import styled from 'styled-components';
import backgroundImg from '../../assets/backgroundImg.png';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
  
`;

export const Form = styled.form`
  max-width: 90rem;
  padding: 10rem;

  display: flex;
  flex-direction: column;
  justify-content: center;

  text-align: center;

  > h1 {
    font-size: 3rem;
    font-weight: 700;
    text-align: left;

    color: ${({ theme }) => theme.COLORS.ROSE}; 
  }

  > p {
    font-size: 0.875rem;
    text-align: left;

    margin-bottom: 3rem;
  }

  > h2 {
    font-size: 1.5rem;
    font-weight: 500;

    text-align: left;

    margin-bottom: 3rem;
  }
  
  > button {
    height: 3.5rem;
    
    font-size: 1rem;
    margin-top: 1.5rem;
  }

  > a {
    margin-top: 2.65rem;
   
    font-size: 1rem;
    color: ${({ theme }) => theme.COLORS.ROSE}; 
  }

  
`;

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
`;
