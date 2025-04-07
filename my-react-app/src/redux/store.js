import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter'  // This import all the default exports from the counter.js

export const store = configureStore({
  reducer: {
    counter: counterReducer, 
},
})