import { configureStore } from '@reduxjs/toolkit';

import spellReducer from '../features/spell/spellSlice';

const store = configureStore({
  reducer: {
    spell: spellReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
