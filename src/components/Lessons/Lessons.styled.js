import styled from 'styled-components';

export const Title = styled.h3`
  text-align: center;
  font-size: 30px;
  margin-bottom: 20px;
`;
export const Link = styled.div`
  width: 400px;
  display: inline-flex;
  align-items: center;
  gap: 9px;
  padding: 7px;
  margin-bottom: 15px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  &:hover {
    transform: scale(1.03);
    cursor: pointer;
  }
`;
export const Image = styled.img`
  width: 70px;
  display: inline;
`;
