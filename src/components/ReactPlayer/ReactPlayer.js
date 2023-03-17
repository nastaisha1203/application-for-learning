import { PlayerWrapper, StyledPlayer } from './ReactPlayer.styled';

export const Player = ({ link }) => {
  return (
    <>
      {link && (
        <PlayerWrapper>
          <StyledPlayer url={link} width="30%" height="30%" controls />
        </PlayerWrapper>
      )}
    </>
  );
};
