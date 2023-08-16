import { createSlice } from "@reduxjs/toolkit";

export const bookingSlice = createSlice({
    name: 'booking',
    initialState: {
        bookings: [], //ID, USER_ID, TYPE_ID, FROM, TO, DIPARTURE, RETURN, BOOKING_STATUS
        booking_counter: 0,
    },
    reducers: {
        CREATE_BOOKING: (state, action) => {
            state.booking_counter = state.booking_counter + 1;
            let object = {};
            object['trip_id'] = action.payload.id;
            object['id'] = state.booking_counter;
            Object.assign(object, action.payload);
            state.bookings.push(object);
        },
        CANCEL_BOOKING: (state, action) => {
            const index = state.bookings.findIndex((item)=>item.id == action.payload);
            state.bookings.splice(index, 1);
        }
    }
})

export const  { CREATE_BOOKING, CANCEL_BOOKING } = bookingSlice.actions;
export default bookingSlice.reducer;