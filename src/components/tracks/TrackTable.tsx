import styled from '@emotion/styled';
import { FC } from 'react';
import { TrackRow, TrackRowSort } from './TrackRow';
import { TrackSkeleton } from '../../components/skeletons/TrackSkeleton';
import { ITrack } from '../../interfaces/interfaces';
import { isUndefined } from '@bunt/is';
import { RootState } from '../../store/store';
import { useSelector } from 'react-redux';
import { selectFilteredTracks } from '../../store/reducers/trackSlice';

type Props = {
  tracks: ITrack[] | undefined;
  isLoading: boolean;
  isError: boolean;
};

export const TrackTable: FC<Props> = ({ tracks, isLoading, isError }) => {
  const filteredTracks = useSelector((state: RootState) => selectFilteredTracks(state)(tracks));

  const loading = isLoading && [...new Array(20)].map((_, i) => <TrackSkeleton key={i} />);
  const errorMessage = isError || (isUndefined(tracks) && <p>Ошибка загрузки</p>);
  const content =
    filteredTracks && filteredTracks.map((track) => <TrackRow key={track.id} {...track} />);

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
