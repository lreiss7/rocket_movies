import styled from 'styled-components';

export const Container = styled.header`
  grid-area: header;
  
  width: 100%;
  height: 105px;
  
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed; 
  top: 0;
  left: 0;
  z-index: 10;
  
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  padding: 0 8rem;
  
`;

export const Profile = styled.div`
  width: 100%;
    
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4rem; 
  
  
  >h1 {
    font-size: 1.5rem;
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.ROSE};
    margin-right: 1.4rem;
    text-align: right;
  }

  > input {
    width: 100%;
    padding: 1.19rem 1.5rem;
    border: none;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 1.2rem;
    margin-right: 1.2rem;
    transition: background-color 0.3s ease;
  }

  > aside {
    display: flex;
    align-items: center;
    gap: 0.5625rem;
    
    height: 4.25rem;
    flex-shrink: 0;
    

    > img {
      width: 4.6rem;
      height: 4.6rem;
      border-radius: 50%;
      border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};
    }

    > div.user-profile {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      line-height: 2.0rem;
    
      color: ${({ theme }) => theme.COLORS.WHITE};

      strong {
        font-size: 1.3rem;
        color: ${({ theme }) => theme.COLORS.WHITE};
        text-align: right;
      }
  
      button { 
        font-size: 1rem;
        > svg {
          display: none;
        }
      }
    };

  };


  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

`;

