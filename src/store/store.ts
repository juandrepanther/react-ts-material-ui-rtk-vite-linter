import { configureStore } from '@reduxjs/toolkit'
import modal_reducer from './reducers/modal-slice'
import mode_reducer from './reducers/mode-slice'

export const store = configureStore({
  reducer: {
    modal_reducer: modal_reducer,
    mode_reducer: mode_reducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
