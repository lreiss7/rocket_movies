import styled from 'styled-components';

export const Container = styled.section`
  margin: 2.5rem 0 1.5rem;

  >h2 {
    margin-bottom: 1.5rem;

    color: ${({ theme }) => theme.COLORS.GRAY_300}; 
    font-size: 1.25rem;
    font-weight: 400;
  }
`