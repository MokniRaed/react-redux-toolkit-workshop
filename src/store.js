import { configureStore } from '@reduxjs/toolkit'
import CounterSlice from './Redux/Counter/CounterSlice'
import PizzaSlice from './Redux/Pizza/PizzaSlice'

export const store = configureStore({
  reducer: {
    counter:CounterSlice,
    pizza:PizzaSlice
  },
})