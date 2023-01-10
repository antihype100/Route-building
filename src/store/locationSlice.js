import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    A: [],
    B: []
}

export const locationSlice = createSlice({
    name: 'location',
    initialState,
    reducers: {
        setLocation: (state, payload) => {
            state.A = [payload.payload[0], payload.payload[1]]
            state.B = [payload.payload[2], payload.payload[3]]
        }
    },
})

// Action creators are generated for each case reducer function
export const { setLocation } = locationSlice.actions

export default locationSlice.reducer