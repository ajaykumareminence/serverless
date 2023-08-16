import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        users: [
            {
                id: 1,
                name: 'admin',
                email: 'admin@mail.com',
                password: 'Test@123',
                role: 'admin'
            }
        ],
        userCounter: 1,
        current_user: null
    },
    reducers: {
        CREATE_USER: (state, action) => {
            state.userCounter = state.userCounter + 1;
            action.payload['id'] = state.userCounter;
            action.payload['role'] = 'user';
            state.users.push(action.payload)
        },
        LOGIN_USER: (state, action) => {
            state.current_user = action.payload
        },
        LOGOUT_USER: (state) => {
            state.current_user = null
        }
    }
})
export const { CREATE_USER, LOGIN_USER, LOGOUT_USER } = userSlice.actions;
export default userSlice.reducer;