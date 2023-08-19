import { FC } from 'react';
import { IconNext, IconPlay, IconRepeat, IconShuffle } from '../../../icons';
import { TrackImg } from '../../../components/track/TrackImg';
import { BtnLike } from '../../../components/btn/BtnLike';
import styled from '@emotion/styled';

export const Player: FC = () => {
  return (
    <Wrapper>
      <Prev>
        <IconNext />
      </Prev>
      <Play>
        <IconPlay />
      </Play>
      <Next>
        <IconNext />
      </Next>
      <Repeat>
        <IconRepeat />
      </Repeat>
      <Shuffle>
        <IconShuffle />
      </Shuffle>
      <TrackImg src="" alt="" />
      <TrackName>
        <b>I’m fire</b>
        <span>Ali Bakgor</span>
      </TrackName>
      <BtnLike />
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
  border-top: 0.3125rem solid #2e2e2e;
  padding: 0.72rem 2.25rem 0.62rem;
  background: #181818;
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
const Repeat = styled.div`
  cursor: pointer;
  margin-right: 2.16rem;
  svg {
    width: 1.125rem;
    height: 0.75rem;
    fill: #696969;
    stroke: #696969;
  }
`;
const Shuffle = styled.div`
  cursor: pointer;
  margin-right: 2.03rem;
  svg {
    width: 1.1875rem;
    height: 0.75rem;
    fill: #696969;
    stroke: #696969;
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
