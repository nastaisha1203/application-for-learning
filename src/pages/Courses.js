import CoursesList from 'components/CoursesList/CoursesList';
import { useEffect, useState } from 'react';
import { fetchCourses } from 'services/api';
import { Error, Title, Box } from './Courses.styled';
import { Loader } from 'components/Loader/Loader';
import { Pagination } from 'components/Pagination/Pagination';
const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(10);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const results = await fetchCourses();
        setCourses(results);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchApi();
  }, []);

  const lastIndex = currentPage * perPage;
  const firstIndex = lastIndex - perPage;
  const currentCourses = courses.slice(firstIndex, lastIndex);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <Box>
      <Title>List of courses</Title>
      {isLoading && <Loader />}
      {error && <Error>Something went wrong. Try again.</Error>}
      <CoursesList courses={currentCourses} />
      <Pagination
        perPage={perPage}
        total={courses.length}
        paginate={paginate}
      />
    </Box>
  );
};

export default Courses;
