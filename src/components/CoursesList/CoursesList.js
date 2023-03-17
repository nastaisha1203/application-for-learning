import {
  Box,
  Card,
  Detail,
  Image,
  Item,
  List,
  Span,
  Text,
  Title,
} from './CoursesList.styled';
import { useLocation } from 'react-router-dom';

const CoursesList = ({ courses }) => {
  const location = useLocation();
  return (
    <Box>
      <List>
        {courses.map(
          ({ id, title, lessonsCount, previewImageLink, rating, meta }) => (
            <Item key={id}>
              <Card to={`${id}`} state={{ from: location }}>
                <Image
                  src={
                    previewImageLink === null
                      ? 'https://via.placeholder.com/200x300'
                      : `${previewImageLink}/cover.webp`
                  }
                  alt={meta.slug}
                />
                <Title>{title}</Title>
                <Detail>
                  <Text>Lessons: {lessonsCount}</Text>
                  <Text>Rating: {rating}</Text>
                </Detail>
                {meta.skills && (
                  <Text>
                    Skils: <Span>{meta.skills.join(', ')}</Span>
                  </Text>
                )}
              </Card>
            </Item>
          )
        )}
      </List>
    </Box>
  );
};
export default CoursesList;
