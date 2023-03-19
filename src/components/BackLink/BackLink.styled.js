import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  display: flex;
  border-bottom: solid 1px black;
  margin-bottom: 10px;
  background-color: rgb(153, 128, 98, 0.5);
  align-items: center;
  gap: 4px;
  margin-bottom: px;
  padding: 8px 0;
  color: black;
  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;
  :hover {
    color: rgb(155 30 30);
  }
`;
