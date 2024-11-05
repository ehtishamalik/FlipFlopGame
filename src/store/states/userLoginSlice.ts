import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserLogin {
  active: boolean;
}

const initialState: UserLogin = {
  active: false,
};

export const UserLoginSlice = createSlice({
  name: 'userLogin',
  initialState,
  reducers: {
    setUserLogin: (state, { payload }: PayloadAction<boolean>) => {
      state.active = payload;
    },
  },
});

export default UserLoginSlice.reducer;
