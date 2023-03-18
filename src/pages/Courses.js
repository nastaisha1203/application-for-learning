import CoursesList from 'components/CoursesList/CoursesList';
import { useEffect, useState } from 'react';
import { fetchCourses } from 'services/api';
import { Error, Title } from './Courses.styled';
import { Loader } from 'components/Loader/Loader';
const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
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
  return (
    <>
      <Title>List of courses</Title>
      {isLoading && <Loader />}
      {error && <Error>Something went wrong. Try again.</Error>}
      {courses.length > 0 && <CoursesList courses={courses} />}
    </>
  );
};

export default Courses;
