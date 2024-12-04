import styled from 'styled-components';

export const Container = styled.span`
  font-size: 0.75rem;
  padding: .5rem 1.4rem;
  border-radius: .5rem;
  margin-right: .5rem;
  color: ${({ theme }) => theme.COLORS.WHITE};
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
`;