import { configureStore } from '@reduxjs/toolkit'
import stateReducer from './State'

export const store = configureStore({
  reducer: {
    productSlice : stateReducer
  },
})