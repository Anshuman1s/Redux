import { configureStore } from '@reduxjs/toolkit'
import CounterReducer from './Reducers/CounterSlice'
export default configureStore({
  reducer: {
    counter:CounterReducer,
  }
});
