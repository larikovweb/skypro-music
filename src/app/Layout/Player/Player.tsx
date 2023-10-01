import { FC, useEffect, useRef, useState } from 'react';
import { IconNext, IconPause, IconPlay, IconRepeat, IconShuffle } from '../../../icons';
import { TrackImg } from '../../../components/tracks/TrackImg';
import { BtnLike } from '../../../components/btn/BtnLike';
import styled from '@emotion/styled';
import { PlayerSkeleton } from '../../../components/skeletons/PlayerSkeleton';
import { musicPlayerAPI } from '../../../services/musicPlayerService';
import { $primaryColor } from '../../../styled/variables';
import { RootState } from '../../../store/store';
import { useSelector } from 'react-redux';
import { selectFilteredTracks } from '../../../store/reducers/trackSlice';
import { isUndefined } from '@bunt/is';
import { formatTime } from '../../../fn';

export const Player: FC<{ activeTrackId: number }> = ({ activeTrackId }) => {
  const [trackId, setTrackId] = useState(activeTrackId);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const progressRef = useRef<HTMLDivElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isShuffle, setIsShuffle] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isRepeat, setIsRepeat] = useState(false);

  const { data: tracks, isLoading, isError } = musicPlayerAPI.useGetAllTracksQuery();
  const filteredTracks = useSelector((state: RootState) => selectFilteredTracks(state)(tracks));

  const { data: track } = musicPlayerAPI.useGetTrackByIdQuery(trackId);
  const totalTracks = isUndefined(filteredTracks) ? 0 : filteredTracks.length;

  useEffect(() => {
    setTrackId(activeTrackId);
  }, [activeTrackId]);

  useEffect(() => {
    setIsPlaying(true);

    if (audioRef.current) {
      audioRef.current.addEventListener('timeupdate', handleTimeUpdate);
    }
    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener('timeupdate', handleTimeUpdate);
      }
    };
  }, [audioRef, track]);

  const loading = isLoading && <PlayerSkeleton />;
  const errorMessage = isError && <p>Ошибка загрузки</p>;
  const content = track && (
    <>
      <TrackImg src="" alt="" />
      <TrackName>
        <b>{track.name}</b>
        <span>{track.author}</span>
      </TrackName>
      <BtnLike id={track.id} />
    </>
  );

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const currentTime = audioRef.current.currentTime;
      const duration = audioRef.current.duration;
      const progress = (currentTime / duration) * 100;
      setProgress(progress);
      setCurrentTime(currentTime);
      if (currentTime >= duration) {
        handleNextTrack();
      }
    }
  };

  const handleRepeatToggle = () => {
    setIsRepeat(!isRepeat);
    if (!isRepeat && audioRef.current) {
      audioRef.current.loop = true;
    } else if (audioRef.current) {
      audioRef.current.loop = false;
    }
  };

  const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const volume = Number(event.target.value);
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  };

  const handleSeek = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (progressRef.current) {
      const progressBar = progressRef.current;
      const { left, width } = progressBar.getBoundingClientRect();
      const clickX = event.clientX - left;
      const progressPercentage = (clickX / width) * 100;

      if (audioRef.current) {
        const duration = audioRef.current.duration;
        const seekTime = (duration * progressPercentage) / 100;
        audioRef.current.currentTime = seekTime;
      }
    }
  };

  const handlePrevTrack = () => {
    if (!isUndefined(filteredTracks)) {
      const currentIndex = filteredTracks.findIndex((track) => track.id === trackId);
      const prevIndex = (currentIndex - 1 + totalTracks) % totalTracks;
      const prevTrack = filteredTracks[prevIndex];
      setTrackId(prevTrack.id);
    }
  };

  const handleNextTrack = () => {
    if (!isUndefined(filteredTracks)) {
      let nextIndex;

      if (isShuffle) {
        nextIndex = Math.floor(Math.random() * totalTracks);
      } else {
        const currentIndex = filteredTracks.findIndex((track) => track.id === trackId);
        nextIndex = (currentIndex + 1) % totalTracks;
      }

      const nextTrack = filteredTracks[nextIndex];
      setTrackId(nextTrack.id);
    }
  };

  return (
    <Wrapper>
      <Progress ref={progressRef} onClick={handleSeek}>
        <ActiveProgress style={{ width: `${progress}%` }} />
      </Progress>
      <Prev onClick={handlePrevTrack}>
        <IconNext />
      </Prev>
      <Play onClick={handlePlayPause}>{isPlaying ? <IconPause /> : <IconPlay />}</Play>
      <Next onClick={handleNextTrack}>
        <IconNext />
      </Next>
      <Repeat $active={isRepeat} onClick={handleRepeatToggle}>
        <IconRepeat />
      </Repeat>
      <Shuffle onClick={() => setIsShuffle(!isShuffle)} $active={isShuffle}>
        <IconShuffle />
      </Shuffle>
      {loading}
      {errorMessage}
      {content}
      {track && <audio ref={audioRef} src={track.track_file} controls={false} autoPlay={true} />}
      <VolumeControl type="range" min="0" max="1" step="0.1" onChange={handleVolumeChange} />
      {track && (
        <Duration>
          <span>{formatTime(currentTime)}</span>
          <span> / </span>
          <span>{formatTime(track?.duration_in_seconds)}</span>
        </Duration>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 0.72rem 2.25rem 0.62rem;
  background: #181818;
`;

const Progress = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 0.3125rem;
  width: 100%;
  background-color: #2e2e2e;
  transform: translateY(-100%);
`;

const ActiveProgress = styled.div`
  height: 0.3125rem;
  background: ${$primaryColor};
  transition: width 0.3s linear;
`;

const Prev = styled.div`
  cursor: pointer;
  margin-right: 2.06rem;
  svg {
    width: 0.9375rem;
    height: 0.875rem;
    fill: #fff;
    stroke: #fff;
    transform: scale(-1, 1);
  }
`;
const Play = styled.div`
  cursor: pointer;
  margin-right: 2.06rem;
  svg {
    width: 1.375rem;
    height: 1.25rem;
    fill: #fff;
    stroke: #fff;
  }
`;
const Next = styled.div`
  cursor: pointer;
  margin-right: 2.37rem;
  svg {
    width: 0.9375rem;
    height: 0.875rem;
    fill: #fff;
    stroke: #fff;
  }
`;
const Repeat = styled.div<{ $active: boolean }>`
  cursor: pointer;
  margin-right: 2.16rem;
  svg {
    width: 1.125rem;
    height: 0.75rem;
    fill: ${({ $active }) => ($active ? '#fff' : '#696969')};
    stroke: ${({ $active }) => ($active ? '#fff' : '#696969')};
  }
`;
const Shuffle = styled.div<{ $active?: boolean }>`
  cursor: pointer;
  margin-right: 2.03rem;
  svg {
    width: 1.1875rem;
    height: 0.75rem;
    fill: ${({ $active }) => ($active ? '#fff' : '#696969')};
    stroke: ${({ $active }) => ($active ? '#fff' : '#696969')};
  }
`;

const TrackName = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  margin-left: 0.75rem;
  margin-right: 1.4rem;
  b {
    font-variant-numeric: lining-nums proportional-nums;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.125rem;
    letter-spacing: 0.001rem;
    margin-bottom: 0.25rem;
  }
  span {
    font-variant-numeric: lining-nums proportional-nums;
    font-size: 0.8125rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5rem;
  }
`;

const VolumeControl = styled.input`
  margin-left: 1rem;
  width: 6rem;
  margin-left: auto;
`;

const Duration = styled.div`
  position: absolute;
  top: 0;
  right: 1rem;
  transform: translateY(-140%);
  display: flex;
  align-items: center;
  color: #b1b1b1;
  text-align: right;
  font-variant-numeric: lining-nums proportional-nums;
  font-family: 'StratosSkyeng', sans-serif;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.125rem; /* 112.5% */
  letter-spacing: 0.001rem;
  > *:not(:last-child) {
    margin-right: 0.25rem;
  }
`;
