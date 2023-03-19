import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  justify-content: center;
  gap: 15px;
`;

export const Item = styled.li``;

export const Button = styled.button`
  padding: 12px;
  min-width: 38px;
  height: 38px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  border: none;
  transition: background-color 0.25s ease-in;
  &:hover,
  &:focus {
    background-color: #ff6b08;
    color: #ffffff;
    border-radius: 5px;
  }
`;
