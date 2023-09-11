import styled from '@emotion/styled';
import { FC, useEffect, useState } from 'react';
import { TrackRow, TrackRowSort } from './TrackRow';
import { ITrack } from '../../interfaces/interfaces';
import { TrackSkeleton } from '../../components/skeletons/TrackSkeleton';

type Props = {
  data: ITrack[];
};

export const TrackTable: FC<Props> = ({ data }) => {
  const [tracks, setTracks] = useState<ITrack[]>([]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setTracks(data);
    }, 5000);

    return () => {
      clearTimeout(timeout);
    };
  });

  const loading =
    tracks.length === 0 && [...new Array(20)].map((_, i) => <TrackSkeleton key={i} />);

  const content =
    tracks.length > 0 && tracks.map((track) => <TrackRow key={track.id} {...track} />);

  return (
    <Wrapper>
      <TrackRowSort />
      {loading}
      {content}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 3.2rem;
  display: grid;
  gap: 0.75rem;
  padding: 0.68rem;
`;
