import axios from 'axios';

axios.defaults.baseURL = 'https://api.wisey.app/api/v1';
const TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJiYmRkN2I4Mi1iMjlkLTRmZWMtYjMwNi1hODkwMjA2N2I3ZWEiLCJwbGF0Zm9ybSI6InN1YnNjcmlwdGlvbnMiLCJpYXQiOjE2Nzg5NjA2MDIsImV4cCI6MTY3OTg2MDYwMn0.7vIcICgoyaVctCacG0nOVqZzRfDJ19BIqeoNnJL62z8';
const options = {
  headers: { Authorization: `Bearer ${TOKEN}` },
};
export const fetchCourses = async () => {
  const { data } = await axios.get('core/preview-courses', options);
  const result = data.courses.map(
    ({ id, title, lessonsCount, previewImageLink, rating, meta }) => ({
      id,
      title,
      lessonsCount,
      previewImageLink,
      rating,
      meta,
    })
  );
  return result;
};

export const fetchCourseId = async courseId => {
  const { data } = await axios.get(`core/preview-courses/${courseId}`, options);
  const { id, title, description, meta, lessons } = data;
  return { id, title, description, meta, lessons };
};
