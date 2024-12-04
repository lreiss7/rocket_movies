import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};

  border: none;
  border-radius: 10px;

  padding: 22px;
  margin-top: 2.5rem;

  > h1 {
    flex: 1;
    font-size: 1.5rem;
    font-weight: 700;
    text-align: left;
    color: ${({ theme }) => theme.COLORS.WHITE};    
  }

  > div {
    display: flex;
    align-items: left;    
    gap: 0.38rem;

    margin-top: 0.5rem;

    color: ${({ theme }) => theme.COLORS.ROSE};   
  }

  > p {
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5rem;
    text-align: left;

    margin-top: 1rem;

    display: -webkit-box;
    -webkit-line-clamp: 2; 
    -webkit-box-orient: vertical;

    text-overflow: ellipsis;
    overflow: hidden;

    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }

  > footer {
    width: 100%;
    display: flex;
    margin-top: 24px;
    
    
  }

`