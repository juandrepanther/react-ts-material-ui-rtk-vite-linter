import { configureStore } from '@reduxjs/toolkit'
import modal_reducer from './reducers/modal-slice'

export const store = configureStore({
  reducer: {
    modal_reducer: modal_reducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
