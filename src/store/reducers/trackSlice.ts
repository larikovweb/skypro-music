import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TrackState {
  selectedTrackId: number | null;
}

const initialState: TrackState = {
  selectedTrackId: null,
};

const trackSlice = createSlice({
  name: 'track',
  initialState,
  reducers: {
    setSelectedTrackId: (state, action: PayloadAction<number>) => {
      state.selectedTrackId = action.payload;
    },
  },
});

export const { setSelectedTrackId } = trackSlice.actions;

export default trackSlice.reducer;
