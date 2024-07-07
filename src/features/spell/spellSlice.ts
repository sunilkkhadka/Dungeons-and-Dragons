import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import config from '../../utils/env';
import { InitialSpellState } from '../../types/spell';

const initialState: InitialSpellState = {
  count: 0,
  results: [],
};

export const fetchAllSpells = createAsyncThunk<InitialSpellState, void>(
  'Spells/fetchSpells',
  async (): Promise<InitialSpellState> => {
    const response = await fetch(config.BASE_URL);
    const data: InitialSpellState = await response.json();
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
        // eslint-disable-next-line no-param-reassign
        state.count = action.payload.count;
        // eslint-disable-next-line no-param-reassign
        state.results = action.payload.results;
      }
    );
  },
});

export default spellsSlice.reducer;
