import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux'
import counterReducer from './slices/counterSlice';
import sessionReducer from './slices/sessionSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    session : sessionReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch
