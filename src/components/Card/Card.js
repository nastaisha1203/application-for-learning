import { Lessons } from 'components/Lessons/Lessons';
import { useState } from 'react';
import { Player } from 'components/ReactPlayer/ReactPlayer';
import React from 'react';
import ReactPlayer from 'react-player';
import {
  Box,
  CardCourse,
  Section,
  Text,
  Title,
  TitleLessons,
  TitleVideo,
} from './Card.styled';
import { toast } from 'react-toastify';

const Card = ({ course }) => {
  const [isVideo, setIsVideo] = useState('');
  const [isTitle, setIsTitle] = useState('');

  const selectVideo = (link, status, title) => {
    if (!link) {
      return toast.warning('Video not found!');
    }
    setIsVideo(link);
    if (status === 'locked') {
      return toast.warning('Video is blocked!');
    }
    setIsTitle(title);
  };

  const { title, description, meta, lessons } = course;
  return (
    <Box>
      <Title>{title}</Title>
      <CardCourse>
        {meta.courseVideoPreview && (
          <ReactPlayer
            url={meta.courseVideoPreview.link}
            width="30%"
            height="30%"
            controls
            preload="auto"
          />
        )}
        <Text>{description}</Text>
      </CardCourse>
      <TitleLessons>Lessons</TitleLessons>
      {isVideo && <TitleVideo>Selected video: {isTitle}</TitleVideo>}
      <Section>
        <Lessons lessons={lessons} onSelect={selectVideo} />
        <Player link={isVideo} />
      </Section>
    </Box>
  );
};

export default Card;
