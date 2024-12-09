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
    height: 55rem;
    display: flex;
    grid-area: content;
    padding: 2.5rem 8rem;
    
    overflow-y: auto; /* Garante que o scroll apareça quando necessário */
    scrollbar-width: thin; /* Controla a espessura do scroll */
    scrollbar-color: ${({ theme }) => theme.COLORS.ROSE} transparent; /* Controla as cores do scrollbar */
    
    /* Inicialmente o scrollbar fica invisível */
    ::-webkit-scrollbar {
      width: 8px;
      height: 8px;
      opacity: 0; /* Torna o scrollbar invisível inicialmente */
      transition: opacity 0.3s ease; /* Transição suave ao aparecer */
    }

    /* Estilo do thumb (parte rolável do scrollbar) */
    ::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.COLORS.ROSE};
      border-radius: 4px;
      opacity: 0; /* Inicialmente invisível */
      transition: opacity 0.3s ease; /* Transição suave */
    }

    ::-webkit-scrollbar-button {
      display: none; 
    }

    /* Estilo do track (trilha do scrollbar) */
    ::-webkit-scrollbar-track {
      background: transparent;
    }

    /* Quando o usuário começa a rolar ou ao passar o mouse, o scroll fica visível */
    &:hover::-webkit-scrollbar,
    &:hover::-webkit-scrollbar-thumb {
      opacity: 1; /* Torna o scrollbar visível durante o hover ou rolagem */
    }

    /* Para o Firefox */
    scrollbar-width: thin;
    scrollbar-color: ${({ theme }) => theme.COLORS.ROSE} transparent;
  }
`;

export const Content = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  
  > h1 {
    font-size: 2.25rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  > button {    
    align-self: flex-start;
    margin-bottom: 1.5rem;    
  }

  > div {
    display: flex;
    gap: 1.2rem;
    align-items: center;
    margin-bottom: 2.5rem;

    > div.stars {
      display: flex;
      gap: 0.6rem;
      align-items: center;
      color: ${({ theme }) => theme.COLORS.ROSE};

      font-size: 1.5rem;
    }
  }

  > div.image-profile {
    display: flex;
    gap: .5rem;
    
    > img {
      width: 1.5rem;
      height: 1.5rem;
      border-radius: 50%;
      border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};
      display: flex;
      align-items: right;
    }

    > a, p {
      font-size: 1.3rem;
      font-weight: 400;
      color: ${({ theme }) => theme.COLORS.WHITE};
      text-decoration: none;
    }

    > .clock-icon {
      font-size: 1.5rem;
      color: ${({ theme }) => theme.COLORS.ROSE};
    }
  }

  > div.text-container {
    display: flex;
    flex-direction: column;
    
    > p {
      font-size: 1.3rem;
      font-weight: 400;
      line-height: normal;
      color: ${({ theme }) => theme.COLORS.WHITE};
      text-align: justify;
    }
  }
`;
