import { Image, Link, Title } from './Lessons.styled';
import { TfiLock } from 'react-icons/tfi';

export const Lessons = ({ lessons, onSelect }) => {
  return (
    <>
      <Title>Lessons</Title>
      <ul>
        {lessons &&
          lessons.map(
            ({ id, title, link, status, order, previewImageLink }) => (
              <li key={id}>
                <Link onClick={() => onSelect(link, status)}>
                  <Image
                    src={`${previewImageLink}/lesson-${order}.webp`}
                    alt="poster"
                  ></Image>
                  <p>{title}</p>
                  {status === 'locked' && <TfiLock />}
                </Link>
              </li>
            )
          )}
      </ul>
    </>
  );
};
