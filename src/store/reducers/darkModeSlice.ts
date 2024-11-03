import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface Props {
  state: string
}

const initialState: Props = {
  state: 'World',
}

export const darkMode_reducer = createSlice({
  name: 'name',
  initialState,
  reducers: {
    setState: (state, action: PayloadAction<string>) => {
      state.state = action.payload
    },
  },
})

export const { setState } = darkMode_reducer.actions

export default darkMode_reducer.reducer
