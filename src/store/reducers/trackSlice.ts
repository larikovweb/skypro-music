import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ISelectOption } from '../../interfaces/interfaces';

interface TrackState {
  selectedTrackId: number | null;
  selectedArtists: ISelectOption[];
  selectedYears: ISelectOption[];
  selectedGenres: ISelectOption[];
}

const initialState: TrackState = {
  selectedTrackId: null,
  selectedArtists: [],
  selectedYears: [],
  selectedGenres: [],
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
  },
});

export const { setSelectedTrackId, setSelectedArtists, setSelectedYears, setSelectedGenres } =
  trackSlice.actions;

export default trackSlice.reducer;
