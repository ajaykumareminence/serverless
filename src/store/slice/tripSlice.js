import { createSlice } from "@reduxjs/toolkit";

export const tripSlice = createSlice({
    name: 'trip',
    initialState: {
        trips: [], 
        trip_counter: 0,
        locations: []
    },
    reducers: {
        CREATE_TRIP: (state, action) => {
            state.trip_counter = state.trip_counter + 1;
            let object = { id: state.trip_counter };
            Object.assign(object, action.payload);
            state.trips.push(object);
        },
        ADD_LOCATION: (state, action) => {
            state.locations.push(action.payload)
        }
    }
})

export const  { CREATE_TRIP , ADD_LOCATION } = tripSlice.actions;
export default tripSlice.reducer;