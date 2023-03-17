import { Lessons } from 'components/Lessons/Lessons';
import { useState } from 'react';
import { Player } from 'components/ReactPlayer/ReactPlayer';
import React from 'react';
import ReactPlayer from 'react-player';
import { Box, CardCourse, Text, Title } from './Card.styled';
import { toast } from 'react-toastify';

const Card = ({ course }) => {
  const [isVideo, setIsVideo] = useState('');

  const selectVideo = (link, status) => {
    setIsVideo(link);
    if (status === 'locked') {
      return toast.warning('Video is blocked!');
    }
  };

  const { title, description, meta, lessons } = course;
  return (
    <Box>
      <Title>{title}</Title>
      <CardCourse>
        <ReactPlayer
          url={meta.courseVideoPreview.link}
          width="30%"
          height="30%"
          controls
          preload="auto"
        />
        <Text>{description}</Text>
      </CardCourse>
      <Lessons lessons={lessons} onSelect={selectVideo} />
      <Player link={isVideo} />
    </Box>
  );
};

export default Card;
