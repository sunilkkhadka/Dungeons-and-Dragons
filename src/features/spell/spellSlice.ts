/* eslint-disable no-param-reassign */
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import config from '../../utils/env';
import { InitialSpellState } from '../../types/spell';
import InitialSpellDetail from '../../types/spell.data';

const initialState: InitialSpellState = {
  count: 0,
  results: [],
  spellInfo: InitialSpellDetail,
};

export const fetchAllSpells = createAsyncThunk<InitialSpellState, void>(
  'Spells/fetchSpells',
  async (): Promise<InitialSpellState> => {
    const response = await fetch(config.BASE_URL);
    const data: InitialSpellState = await response.json();
    return data;
  }
);

export const fetchSpellByIndex = createAsyncThunk(
  'Spells/fetchSpellByIndex',
  async (index: string) => {
    const response = await fetch(config.BASE_URL + index);
    const data = await response.json();
    return data;
  }
);

export const spellsSlice = createSlice({
  name: 'Spells',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchAllSpells.fulfilled,
      (state, action: PayloadAction<InitialSpellState>) => {
        state.count = action.payload.count;
        state.results = action.payload.results;
      }
    );
    builder.addCase(fetchSpellByIndex.fulfilled, (state, action) => {
      state.spellInfo = action.payload;
    });
  },
});

export default spellsSlice.reducer;
