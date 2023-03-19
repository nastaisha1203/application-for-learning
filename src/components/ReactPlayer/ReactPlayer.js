import ReactPlayer from 'react-player';

export const Player = ({ link, lessonId }) => {
  const storeVideoProgress = position => {
    const progressData = JSON.parse(localStorage.getItem('progress')) || {};

    progressData[lessonId] = position;
    localStorage.setItem('progress', JSON.stringify(progressData));
  };

  return (
    <>
      {link && (
        <ReactPlayer
          url={link}
          width="40%"
          height="40%"
          controls
          onProgress={({ playedSeconds }) => storeVideoProgress(playedSeconds)}
        />
      )}
    </>
  );
};
