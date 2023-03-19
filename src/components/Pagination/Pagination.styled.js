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
  border-radius: 5px;
  &:hover,
  &:focus {
    background-color: #ff6b08;
    color: #ffffff;
    border-radius: 5px;
  }
`;

// &:hover,
//   &:focus {
//     background-color: #ff6b01;
//   }
