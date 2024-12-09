import styled from 'styled-components';

export const Container = styled.span`
  display: flex;
  align-items: center;
  height: 3.5rem;

  font-size: 1rem;
  padding: 1rem;
  border-radius: .5rem;
  margin-right: .5rem;
  color: ${({ theme }) => theme.COLORS.WHITE};
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  
`;