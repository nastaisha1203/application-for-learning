import ReactPlayer from 'react-player';

export const Player = ({ link }) => {
  return (
    <>{link && <ReactPlayer url={link} width="40%" height="40%" controls />}</>
  );
};
