// Import the createSlice function from the Redux Toolkit library
import { createSlice } from '@reduxjs/toolkit';

// Create a Redux slice for managing a counter
export const counterSlice = createSlice({
  name: 'counter', // Name of the slice
  initialState: { value: 0 }, // Initial state containing a value of 0
  reducers: {
    increment: (state) => {
      // Reducer for incrementing the counter value
      state.value += 1; // Increment the value by 1
    },
    decrement: (state) => {
      // Reducer for decrementing the counter value
      state.value -= 1; // Decrement the value by 1
    },
  },
});

// Export the 'increment' and 'decrement' actions from the counter slice
export const { increment, decrement } = counterSlice.actions;

// Export the counter reducer, which handles state updates
export default counterSlice.reducer;
