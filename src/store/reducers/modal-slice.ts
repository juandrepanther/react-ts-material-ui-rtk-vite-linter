import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface Props {
  isOpen: boolean
}

const initialState: Props = {
  isOpen: false,
}

export const modal_reducer = createSlice({
  name: 'modal_reducer',
  initialState,
  reducers: {
    setModalState: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload
    },
  },
})

export const { setModalState } = modal_reducer.actions

export default modal_reducer.reducer
