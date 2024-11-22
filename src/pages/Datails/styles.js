import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  
  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas: 
  "header"
  "content";

  > main {
    display: flex;
    grid-area: content;
    overflow-y: scroll;
    padding: 24px 0;
  }
 

`;

export const Links = styled.ul`
  list-style: none;

  > li {
    margin-top: 12px;

    a {
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`;

export const Content = styled.div`
  max-width: 70rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  

  > button {
    max-width: 13rem;
    height: 3rem;

    font-size: 1rem;
  }

  
`;

