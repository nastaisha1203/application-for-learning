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
  const [lessonId, setLessonId] = useState('');

  const selectVideo = (id, link, status, title) => {
    if (!link) {
      return toast.warning('Video not found!');
    }
    setIsVideo(link);
    if (status === 'locked') {
      return toast.warning('Video is blocked!');
    }
    setIsTitle(title);
    setLessonId(id);
  };

  const storeVideoProgress = position => {
    const progressData =
      JSON.parse(localStorage.getItem('progressVideo')) || {};

    progressData[course.id] = position;
    localStorage.setItem('progressVideo', JSON.stringify(progressData));
  };

  const { title, description, meta, lessons } = course;
  return (
    <Box>
      <CardCourse>
        {meta.courseVideoPreview && (
          <ReactPlayer
            url={meta.courseVideoPreview.link}
            width="30%"
            height="30%"
            controls
            preload="auto"
            onProgress={({ playedSeconds }) =>
              storeVideoProgress(playedSeconds)
            }
          />
        )}
        <div>
          <Title>{title}</Title>
          <Text>{description}</Text>
        </div>
      </CardCourse>
      <TitleLessons>Lessons</TitleLessons>
      {isVideo && <TitleVideo>Selected video: {isTitle}</TitleVideo>}
      <Section>
        <Lessons lessons={lessons} onSelect={selectVideo} />
        <Player link={isVideo} lessonId={lessonId} />
      </Section>
    </Box>
  );
};

export default Card;
