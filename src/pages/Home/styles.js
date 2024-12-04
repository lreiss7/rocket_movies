import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas: 
    "header"
    "content";
`;

export const Content = styled.div`
  grid-area: content;
  padding: 4rem 8rem;;

  > header {
    display: flex;
    align-items: center;    
    justify-content: space-between;

    > h1 {
      font-size: 2rem;
      font-style: normal;
      font-weight: 400;
    }

    > button {     
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      padding: 1rem 2rem;

      max-width: 12rem; /* Tamanho máximo do botão */
      height: 3rem; /* Tamanho máximo do botão*/
      white-space: nowrap; /* Impede quebra de linha */
      overflow: hidden; /* Oculta o excesso de texto */

      font-size: 1rem;      
      font-feature-settings: 'liga' off;
      line-height: normal;

      svg {
        vertical-align: middle;
        margin-top: -1px; /* Ajuste fino, se necessário */
      }       
      
    }

  }
`;


