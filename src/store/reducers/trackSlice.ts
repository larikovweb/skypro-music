import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ISelectOption } from '../../interfaces/interfaces';

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

export default trackSlice.reducer;
