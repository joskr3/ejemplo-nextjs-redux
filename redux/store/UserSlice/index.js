import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user-slice",
    initialState: {
        user: {
            name: "",
            email: "",
            password: "",
        },
    },
    reducers: {
        isLogIn (state, action) {
            state.user = action.payload;
        },
        isLogOut (state) {
            state.user = {
                name: "",
                email: "",
                password: "",
            };
        }
        
    }
})

export const actions = userSlice.actions;
