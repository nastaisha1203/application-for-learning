import Card from 'components/Card/Card';
import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { fetchCourseId } from 'services/api';
import { Loader } from 'components/Loader/Loader';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { Text } from 'components/Layout/Layout.styled';
import BackLink from 'components/BackLink/BackLink';

const CourseDetails = () => {
  const { courseId } = useParams();
  const [course, setCourse] = useState(null);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  const backLinkHref = location.state?.from ?? '/courses';

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const result = await fetchCourseId(courseId);
        setCourse(result);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCourse();
  }, [courseId]);

  return (
    <div>
      <BackLink to={backLinkHref}>Go back</BackLink>
      {isLoading && <Loader />}
      {error && <p>Something went wrong. Try again.</p>}
      <ToastContainer position="top-right" theme="dark" />
      {course && <Card course={course} />}
    </div>
  );
};

export default CourseDetails;
