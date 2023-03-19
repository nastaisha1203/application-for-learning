import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Box = styled.main`
  /* padding: 0 16px; */
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
  margin-bottom: 50px;
`;
export const Item = styled.li`
  width: 450px;
  background-color: rgb(132 104 75);
  border-radius: 10px;
  padding: 15px;
  &:hover {
    transform: scale(1.03);
    cursor: pointer;
  }
`;

export const Card = styled(Link)`
  text-decoration: none;
  color: #fff;
`;
export const Detail = styled.div`
  display: flex;
  gap: 30px;
  margin-bottom: 10px;
`;
export const Title = styled.p`
  text-align: center;
  font-weight: 500;
  font-size: 20px;
  margin-bottom: 10px;
`;
export const Text = styled.p`
  font-weight: 500;
  color: black;
`;
export const Span = styled.span`
  font-weight: 400;
  color: black;
`;
// export const Skill = styled.span`
//   display: inline-block;
//   background-color: #a9a6b833;
//   padding: 3px 6px;
//   border-radius: 6px;
//   &:not(:last-child) {
//     margin-bottom: 8px;
//     margin-right: 8px;
//   }
// `;
export const Image = styled.img`
  height: 200px;
  object-fit: cover;
  border-radius: 5px;
  margin-bottom: 15px;
`;
