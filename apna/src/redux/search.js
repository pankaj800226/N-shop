import { createSlice } from '@reduxjs/toolkit'

export const searchSlice = createSlice({
    name: "search",
    initialState: {
        search: '',
    },
    reducers: {
        search: (state, action) => {
            state.search = action.payload
        }
    }
})
export const { search } = searchSlice.actions
export default searchSlice.reducer