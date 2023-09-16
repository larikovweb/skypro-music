import { createSlice } from '@reduxjs/toolkit';
import { ICity } from '../../interfaces/interfaces';
import { dataCities } from '../../data/dataCities';

interface CitiesState {
  cities: ICity[];
  selectedCity: ICity;
}

const initialState: CitiesState = {
  cities: dataCities,
  selectedCity: dataCities[0],
};

const citiesSlice = createSlice({
  name: 'cities',
  initialState,
  reducers: {
    setSelectedCity: (state, { payload }) => {
      state.selectedCity = payload;
    },
  },
});

const { actions, reducer } = citiesSlice;

export default reducer;

export const { setSelectedCity } = actions;
