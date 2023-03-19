import { Button, Item, List } from './Pagination.styled';

export const Pagination = ({ perPage, total, paginate }) => {
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(total / perPage); i++) {
    pageNumber.push(i);
  }

  return (
    <div>
      <List>
        {pageNumber.map(number => (
          <Item key={number}>
            <Button type="button" onClick={() => paginate(number)}>
              {number}
            </Button>
          </Item>
        ))}
      </List>
    </div>
  );
};
