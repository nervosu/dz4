import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: { name: '', email: '' },
  reducers: {
    addUser: (state, action) => {
      return action.payload;
    },
  },
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;
