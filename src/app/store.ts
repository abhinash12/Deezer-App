import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import artistReducer from '../features/deezer/deezerSlice';

export const store = configureStore({
  reducer: {
    dzResults: artistReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
