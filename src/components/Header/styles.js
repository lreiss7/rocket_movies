import styled from 'styled-components';

export const Container = styled.header`
  grid-area: header;

  height: 105px;
  width: 100%;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 8rem;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  

  > img {
    width: 4.6rem;
    height: 4.6rem;
    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};
  }

  > div {
    display: flex;
    flex-direction: column;

    margin-right: 1.6rem;
    line-height: 2.0rem;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
    
    strong {
      font-size: 1.8rem;
      color: ${({ theme }) => theme.COLORS.WHITE};
      text-align: right;
    }

    span {
      font-size: 1.4rem;
      color: ${({ theme }) => theme.COLORS.GRAY_500};
      text-align: right;
    }

  }
`;

