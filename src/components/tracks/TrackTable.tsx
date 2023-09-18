import styled from '@emotion/styled';
import { FC } from 'react';
import { TrackRow, TrackRowSort } from './TrackRow';
import { TrackSkeleton } from '../../components/skeletons/TrackSkeleton';
import { ITrack } from '../../interfaces/interfaces';
import { isUndefined } from '@bunt/is';
import { RootState } from '../../store/store';
import { useSelector } from 'react-redux';

type Props = {
  tracks: ITrack[] | undefined;
  isLoading: boolean;
  isError: boolean;
};

export const TrackTable: FC<Props> = ({ tracks, isLoading, isError }) => {
  const selectedArtists = useSelector((state: RootState) => state.track.selectedArtists);
  const selectedYears = useSelector((state: RootState) => state.track.selectedYears);
  const selectedGenres = useSelector((state: RootState) => state.track.selectedGenres);

  const filteredTracks = tracks?.filter((track) => {
    const artistMatch =
      selectedArtists.length === 0 ||
      selectedArtists.some(
        (artist) => artist.value === track.author.split(' ').join('').toLowerCase(),
      );
    const yearMatch =
      selectedYears.length === 0 ||
      selectedYears.some((year) => year.value === new Date(track.release_date).getFullYear());
    const genreMatch =
      selectedGenres.length === 0 ||
      selectedGenres.some((genre) => genre.value === track.genre.split(' ').join('').toLowerCase());
    return artistMatch && yearMatch && genreMatch;
  });

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
