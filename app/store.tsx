// app/store.js
import { configureStore } from '@reduxjs/toolkit';
import navigationWordsSlice from './navigation/navigationWordsSlice';

const store = configureStore({
  reducer: {
    navigationWords: navigationWordsSlice,
  },
});
export default store;