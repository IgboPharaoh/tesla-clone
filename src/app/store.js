import { configureStore } from '@reduxjs/toolkit';
import carReducer from '../features/counter/car/carSlice'

export const store = configureStore({
  reducer: {
    car : carReducer
  },
});
