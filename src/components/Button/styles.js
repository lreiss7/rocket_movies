import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  
  width: 100%;
  height: 56px;

  background-color: ${({ theme }) => theme.COLORS.ROSE};
  color: ${({ theme }) => theme.COLORS.BLACK};
  border: 0;
  border-radius: 6.3px;
  font-weight: 400;
  cursor: pointer;

  span {
    display: flex; 
    align-items: center; 
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:hover {
    background-color: ${({ theme }) => theme.COLORS.ROSE_100}; 
    transition: transform 0.2s, background-color 0.2s, color 0.2s;
  }
`;