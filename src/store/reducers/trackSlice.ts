import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ISelectOption, ITrack } from '../../interfaces/interfaces';
import { RootState } from '../store';

interface TrackState {
  selectedTrackId: number | null;
  selectedArtists: ISelectOption[];
  selectedYears: ISelectOption[];
  selectedGenres: ISelectOption[];
  searchQuery: string;
}

const initialState: TrackState = {
  selectedTrackId: null,
  selectedArtists: [],
  selectedYears: [],
  selectedGenres: [],
  searchQuery: '',
};

const trackSlice = createSlice({
  name: 'track',
  initialState,
  reducers: {
    setSelectedTrackId: (state, action: PayloadAction<number>) => {
      state.selectedTrackId = action.payload;
    },
    setSelectedArtists: (state, action: PayloadAction<ISelectOption[]>) => {
      state.selectedArtists = action.payload;
    },
    setSelectedYears: (state, action: PayloadAction<ISelectOption[]>) => {
      state.selectedYears = action.payload;
    },
    setSelectedGenres: (state, action: PayloadAction<ISelectOption[]>) => {
      state.selectedGenres = action.payload;
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
  },
});

export const {
  setSelectedTrackId,
  setSelectedArtists,
  setSelectedYears,
  setSelectedGenres,
  setSearchQuery,
} = trackSlice.actions;

const selectTrackState = (state: RootState) => state.track;

export const selectFilteredTracks = createSelector(
  selectTrackState,
  ({ selectedArtists, selectedYears, selectedGenres, searchQuery }: TrackState) =>
    (tracks?: ITrack[]) => {
      return tracks
        ?.filter((track) => {
          const artistMatch =
            selectedArtists.length === 0 ||
            selectedArtists.some(
              (artist) => artist.value === track.author.split(' ').join('').toLowerCase(),
            );
          const genreMatch =
            selectedGenres.length === 0 ||
            selectedGenres.some(
              (genre) => genre.value === track.genre.split(' ').join('').toLowerCase(),
            );
          const titleMatch = track.name.toLowerCase().includes(searchQuery.toLowerCase());
          const artistSearchMatch = track.author.toLowerCase().includes(searchQuery.toLowerCase());

          return artistMatch && genreMatch && (titleMatch || artistSearchMatch);
        })
        .toSorted((a, b) => {
          if (selectedYears[0] && selectedYears[0].value === 'new') {
            return new Date(b.release_date).getFullYear() - new Date(a.release_date).getFullYear();
          } else if (selectedYears[0] && selectedYears[0].value === 'old') {
            return new Date(a.release_date).getFullYear() - new Date(b.release_date).getFullYear();
          }
          return 0;
        });
    },
);

export default trackSlice.reducer;
