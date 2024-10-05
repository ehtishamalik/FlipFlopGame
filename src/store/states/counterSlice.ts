import { createSlice } from '@reduxjs/toolkit';

interface CounterState {
  running: boolean;
  seconds: number;
}

const initialState: CounterState = {
  running: false,
  seconds: 0,
};

export const CounterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    startCounter: (state) => {
      state.running = true;
    },

    stopCounter: (state) => {
      state.running = false;
    },

    resetCounter: (state) => {
      state.running = false;
      state.seconds = 0;
    },

    incrementCounter: (state) => {
      state.seconds = state.running ? state.seconds + 1 : state.seconds;
    },
  },
});

export default CounterSlice.reducer;
