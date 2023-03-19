import { Navigate, Route, Routes } from 'react-router-dom';
import Courses from 'pages/Courses';
import CourseDetails from 'pages/CourseDetails';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:courseId" element={<CourseDetails />} />
        <Route path="*" element={<Navigate to="/courses" />} />
      </Routes>
    </div>
  );
};

export default App;
