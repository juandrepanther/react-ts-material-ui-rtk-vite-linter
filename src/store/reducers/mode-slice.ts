import { createSlice } from '@reduxjs/toolkit'
import { PaletteMode } from '@mui/material'
import type { PayloadAction } from '@reduxjs/toolkit'

interface Props {
  mode: PaletteMode
}

const initialState: Props = {
  mode: 'light',
}

export const mode_reducer = createSlice({
  name: 'mode_reducer',
  initialState,
  reducers: {
    setMode: (state, action: PayloadAction<Props>) => {
      state.mode = action.payload.mode
    },
  },
})

export const { setMode } = mode_reducer.actions

export default mode_reducer.reducer
