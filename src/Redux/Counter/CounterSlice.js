import { createSlice } from '@reduxjs/toolkit'


export const counterSlice = createSlice({
  name: 'counter',
  initialState:{value:0},
  reducers: {
    inrement:(state)=>{
        state.value +=1
    },
    decrement:(state)=>{
        state.value-= 1
    }
  }
    
})

export const {inrement,decrement } = counterSlice.actions

export default counterSlice.reducer