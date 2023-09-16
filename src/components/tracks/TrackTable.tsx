import styled from '@emotion/styled';
import { FC } from 'react';
import { TrackRow, TrackRowSort } from './TrackRow';
import { TrackSkeleton } from '../../components/skeletons/TrackSkeleton';
import { musicPlayerAPI } from '../../services/musicPlayerService';

export const TrackTable: FC = () => {
  const { data: tracks, isLoading, isError } = musicPlayerAPI.useGetAllTracksQuery();

  const loading = isLoading && [...new Array(20)].map((_, i) => <TrackSkeleton key={i} />);
  const errorMessage = isError && <p>Ошибка загрузки</p>;
  const content = tracks && tracks.map((track) => <TrackRow key={track.id} {...track} />);

  return (
    <Wrapper>
      <TrackRowSort />
      {loading}
      {errorMessage}
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
