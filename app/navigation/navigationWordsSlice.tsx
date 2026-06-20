// features/counter/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const navigationWordsSlice = createSlice({
  name: 'navigationWords',
  // initialState: { value: ['word1','word2','word3'] as string[] },
  initialState: { value: ['Three','Word','Index'] as string[] },
  reducers: {
    setNavigationWords: (state, action) => {
      // state.value = action.payload.word[action.payload.position];
      // console.log(action.payload)
      state.value = action.payload;
    }
  },
});

export const { setNavigationWords } = navigationWordsSlice.actions;
export default navigationWordsSlice.reducer;